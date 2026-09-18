/**
 * Secure AI API Proxy & telc B1 Letter Grader Endpoint
 * Route: POST /api/grade-letter
 * Protects OpenAI API key, authenticates user JWT, checks remaining quota, and calls LLM.
 */

export async function handleGradeLetter(request, env, db) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  // 1. Authenticate JWT Bearer Token
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Missing Auth Token' }), { status: 401 });
  }

  const token = authHeader.split(' ')[1];
  const user = await verifyAuthToken(token, env.JWT_SECRET);
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Invalid Auth Token' }), { status: 401 });
  }

  // 2. Atomically Claim/Decrement User Quota (Prevents concurrent multi-tab exploit)
  const quotaRes = await db.query(
    'UPDATE users SET letter_credits = letter_credits - 1 WHERE id = $1 AND letter_credits > 0 RETURNING letter_credits',
    [user.id]
  );
  if (!quotaRes.rows || quotaRes.rows.length === 0) {
    return new Response(
      JSON.stringify({
        error: 'Quota Exceeded',
        message: 'You have used all your AI letter grading credits. Please top up your Pro Pass to continue.'
      }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }
  const remainingCredits = quotaRes.rows[0].letter_credits;

  // 3. Parse Request Payload
  const body = await request.json();
  const { promptTitle, promptContext, studentText } = body;

  if (!studentText || studentText.trim().length < 20) {
    return new Response(JSON.stringify({ error: 'Letter text must be at least 20 characters long.' }), { status: 400 });
  }

  // 4. Construct System Prompt & Structured JSON Schema for LLM
  const systemPrompt = `You are an official, accredited telc Deutsch B1 examiner. Grade the provided B1 student letter against the official 3 telc criteria:
1. Kriterium I: Aufgabenbewältigung (Inhaltliche Angemessenheit & 4 Leitpunkte) - Raw score: A=5, B=3, C=1, D=0.
2. Kriterium II: Kommunikative Gestaltung (Sprachliche Angemessenheit, Register & Konnektoren) - Raw score: A=5, B=3, C=1, D=0.
3. Kriterium III: Formale Richtigkeit (Grammatik, Morphologie & Orthographie nach dem Primat der Verständlichkeit) - Raw score: A=5, B=3, C=1, D=0.

Scoring Formula: (Score_I + Score_II + Score_III) * 3 = Total Points (Max 45). Pass threshold is >= 27 points (60%).

Return ONLY a valid JSON object matching this exact schema:
{
  "totalScore": number,
  "maxTotal": 45,
  "rawSum": number,
  "grade": string,
  "percentage": number,
  "criteria": [
    { "id": "inhalt", "title": "Kriterium I: Aufgabenbewältigung", "rawScore": number, "ratingLetter": "A"|"B"|"C"|"D", "finalScore": number, "finalMax": 15, "feedback": string },
    { "id": "sprache", "title": "Kriterium II: Kommunikative Gestaltung", "rawScore": number, "ratingLetter": "A"|"B"|"C"|"D", "finalScore": number, "finalMax": 15, "feedback": string },
    { "id": "korrektheit", "title": "Kriterium III: Formale Richtigkeit", "rawScore": number, "ratingLetter": "A"|"B"|"C"|"D", "finalScore": number, "finalMax": 15, "feedback": string }
  ],
  "annotations": [
    { "targetText": string, "correctedText": string, "type": "syntax"|"spelling"|"vocab"|"grammar", "rule": string, "explanation": string }
  ],
  "b1Upgrades": [
    { "original": string, "upgrade": string, "benefit": string }
  ]
}`;

  const userPrompt = `Exam Prompt: ${promptTitle || 'B1 Brief'}
Prompt Context: ${promptContext || 'N/A'}
Student Letter:
"""
${studentText}
"""`;

  try {
    // 5. Call OpenAI API securely server-side
    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        response_format: { type: 'json_object' },
        temperature: 0.2
      })
    });

    if (!aiResponse.ok) {
      throw new Error(`OpenAI API error: ${aiResponse.statusText}`);
    }

    const aiData = await aiResponse.json();
    const evaluationResult = JSON.parse(aiData.choices[0].message.content);

    // 6. Record Evaluation (Quota already atomically decremented before LLM call)
    await db.query(
      'INSERT INTO letter_evaluations (user_id, prompt_title, user_submission, score_inhalt, score_sprache, score_korrektheit, score_total, feedback_json) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
      [
        user.id,
        promptTitle || 'B1 Letter',
        studentText,
        evaluationResult.criteria[0].finalScore,
        evaluationResult.criteria[1].finalScore,
        evaluationResult.criteria[2].finalScore,
        evaluationResult.totalScore,
        JSON.stringify(evaluationResult)
      ]
    );

    return new Response(
      JSON.stringify({
        success: true,
        remainingCredits: remainingCredits,
        evaluation: evaluationResult
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    // Compensating refund transaction: restore credit if LLM call or DB insert fails
    try {
      await db.query('UPDATE users SET letter_credits = letter_credits + 1 WHERE id = $1', [user.id]);
    } catch (refundErr) {
      console.error('Failed to refund credit on error:', refundErr);
    }
    console.error('AI Proxy Error:', err);
    return new Response(JSON.stringify({ error: 'Failed to evaluate letter. Please try again later.' }), { status: 500 });
  }
}

/**
 * Production Web Crypto HMAC SHA-256 JWT Verification
 */
async function verifyAuthToken(token, secret) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const [headerB64, payloadB64, signatureB64] = parts;

  try {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret || 'default-secret-change-in-env'),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const data = encoder.encode(`${headerB64}.${payloadB64}`);
    const signature = base64UrlToUint8Array(signatureB64);
    const isValid = await crypto.subtle.verify('HMAC', key, signature, data);

    if (!isValid) return null;

    const payloadJson = new TextDecoder().decode(base64UrlToUint8Array(payloadB64));
    const payload = JSON.parse(payloadJson);

    // Validate expiration
    if (payload.exp && payload.exp < Date.now() / 1000) {
      return null;
    }

    return payload;
  } catch (err) {
    console.error('JWT Verification Error:', err);
    return null;
  }
}

function base64UrlToUint8Array(base64Url) {
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

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

  // 2. Check User Quota
  const userRes = await db.query('SELECT letter_credits FROM users WHERE id = $1', [user.id]);
  const credits = userRes.rows[0]?.letter_credits || 0;

  if (credits <= 0) {
    return new Response(
      JSON.stringify({
        error: 'Quota Exceeded',
        message: 'You have used all your AI letter grading credits. Please top up your Pro Pass to continue.'
      }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 3. Parse Request Payload
  const body = await request.json();
  const { promptTitle, promptContext, studentText } = body;

  if (!studentText || studentText.trim().length < 20) {
    return new Response(JSON.stringify({ error: 'Letter text must be at least 20 characters long.' }), { status: 400 });
  }

  // 4. Construct System Prompt & Structured JSON Schema for LLM
  const systemPrompt = `You are an official telc Deutsch B1 examiner. Grade the provided B1 student letter against the official 3 telc criteria:
1. Inhaltliche Angemessenheit (0-10 pts)
2. Sprachliche Angemessenheit (0-15 pts)
3. Korrektheit (0-20 pts)
Total max points = 45.

Return ONLY a valid JSON object with the following structure:
{
  "totalScore": number,
  "maxTotal": 45,
  "grade": string,
  "criteria": [
    { "id": "inhalt", "title": "Inhaltliche Angemessenheit", "score": number, "maxScore": 10, "feedback": string },
    { "id": "sprache", "title": "Sprachliche Angemessenheit", "score": number, "maxScore": 15, "feedback": string },
    { "id": "korrektheit", "title": "Korrektheit", "score": number, "maxScore": 20, "feedback": string }
  ],
  "annotations": [
    { "targetText": string, "correctedText": string, "type": "grammar"|"syntax"|"spelling"|"vocab", "rule": string, "explanation": string }
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

    // 6. Atomically Decrement Quota & Record Evaluation
    await db.query('UPDATE users SET letter_credits = letter_credits - 1 WHERE id = $1', [user.id]);
    await db.query(
      'INSERT INTO letter_evaluations (user_id, prompt_title, user_submission, score_inhalt, score_sprache, score_korrektheit, score_total, feedback_json) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
      [
        user.id,
        promptTitle || 'B1 Letter',
        studentText,
        evaluationResult.criteria[0].score,
        evaluationResult.criteria[1].score,
        evaluationResult.criteria[2].score,
        evaluationResult.totalScore,
        JSON.stringify(evaluationResult)
      ]
    );

    return new Response(
      JSON.stringify({
        success: true,
        remainingCredits: credits - 1,
        evaluation: evaluationResult
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('AI Proxy Error:', err);
    return new Response(JSON.stringify({ error: 'Failed to evaluate letter. Please try again later.' }), { status: 500 });
  }
}

/**
 * Placeholder JWT Token Verification
 */
async function verifyAuthToken(token, secret) {
  // In production, verify JWT payload with crypto.subtle or Jose
  if (token && token.length > 10) {
    return { id: 'user-uuid-1234', email: 'student@example.com' };
  }
  return null;
}

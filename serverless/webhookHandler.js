/**
 * Payment Webhook Handler for Paddle / Lemon Squeezy (Cloudflare Workers / Supabase Edge Functions)
 * Zero-touch for free tier users. Idempotently grants AI letter grading credits upon payment.
 */

export async function handlePaymentWebhook(request, env, db) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get('x-signature') || request.headers.get('paddle-signature');

  // 1. Verify Webhook HMAC Signature
  const isValidSignature = await verifySignature(rawBody, signature, env.WEBHOOK_SECRET);
  if (!isValidSignature) {
    return new Response(JSON.stringify({ error: 'Invalid HMAC signature' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const payload = JSON.parse(rawBody);
  const eventType = payload.event_type || payload.meta?.event_name;

  // 2. Filter for Successful Payment Events
  if (eventType !== 'order_created' && eventType !== 'payment_succeeded') {
    return new Response(JSON.stringify({ message: 'Ignored non-payment event' }), { status: 200 });
  }

  const data = payload.data || payload;
  const customerEmail = data.customer_email || data.user_email || data.attributes?.user_email;
  const transactionId = data.id || data.order_id || data.attributes?.order_number;
  const planId = data.variant_name || data.plan_id || 'standard_29';
  const amountCents = data.total || data.amount || 2900;

  if (!customerEmail || !transactionId) {
    return new Response(JSON.stringify({ error: 'Missing customer email or transaction ID' }), { status: 400 });
  }

  // 3. Check for Idempotency (Prevent double credit allocation)
  const existingTx = await db.query('SELECT id FROM purchases WHERE transaction_id = $1', [transactionId]);
  if (existingTx.rows.length > 0) {
    return new Response(JSON.stringify({ message: 'Transaction already processed' }), { status: 200 });
  }

  // 4. Determine Credits by Plan Tier
  let creditsToGrant = 30; // Default Standard Pass
  if (planId.includes('citizenship') || amountCents === 3900) {
    creditsToGrant = 40;
  } else if (planId.includes('extended') || amountCents === 4900) {
    creditsToGrant = 100;
  }

  // 5. Database Transaction: Upsert User & Grant Quota
  try {
    let userRes = await db.query('SELECT id, letter_credits FROM users WHERE email = $1', [customerEmail]);
    let userId;

    if (userRes.rows.length === 0) {
      const newUser = await db.query(
        'INSERT INTO users (email, is_pro, letter_credits) VALUES ($1, TRUE, $2) RETURNING id',
        [customerEmail, creditsToGrant]
      );
      userId = newUser.rows[0].id;
    } else {
      userId = userRes.rows[0].id;
      await db.query(
        'UPDATE users SET is_pro = TRUE, letter_credits = letter_credits + $1, updated_at = NOW() WHERE id = $2',
        [creditsToGrant, userId]
      );
    }

    // Record Audit Purchase
    await db.query(
      'INSERT INTO purchases (user_id, provider, transaction_id, plan_id, amount_cents) VALUES ($1, $2, $3, $4, $5)',
      [userId, 'paddle', transactionId, planId, amountCents]
    );

    // Track YTD Revenue for German Kleinunternehmerregelung (§ 19 UStG €22,000 threshold)
    const currentYear = new Date().getFullYear();
    const yearStartDate = new Date(currentYear, 0, 1).toISOString();
    const revCheck = await db.query(
      'SELECT SUM(amount_cents) as total_cents FROM purchases WHERE created_at >= $1',
      [yearStartDate]
    );
    const ytdCents = parseInt(revCheck.rows[0]?.total_cents || 0, 10);
    const ytdEuros = ytdCents / 100;

    if (ytdEuros >= 18000) {
      console.warn(
        `[TAX COMPLIANCE ALERT] YTD Revenue has reached €${ytdEuros.toFixed(2)}. Approaching the § 19 UStG €22,000 Kleinunternehmer threshold!`
      );
    }

    return new Response(JSON.stringify({
      success: true,
      user_id: userId,
      credits_added: creditsToGrant,
      ytd_revenue_eur: ytdEuros
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Webhook Database Error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

/**
 * Webhook HMAC Signature Verification Helper
 */
async function verifySignature(payload, signature, secret) {
  if (!signature || !secret) return false;
  try {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    const signatureBytes = hexToBytes(signature);
    return await crypto.subtle.verify('HMAC', key, signatureBytes, encoder.encode(payload));
  } catch (e) {
    return false;
  }
}

function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

-- DeutschLernen Serverless Database Schema (Supabase PostgreSQL / Cloudflare D1)

-- 1. Users & Quota Table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    is_pro BOOLEAN DEFAULT FALSE,
    letter_credits INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fast user lookup by email
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- 2. Purchases & Webhook Audit Trail (Idempotent Payment Handling)
CREATE TABLE IF NOT EXISTS purchases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    provider VARCHAR(50) NOT NULL, -- 'paddle' or 'lemonsqueezy'
    transaction_id VARCHAR(255) UNIQUE NOT NULL,
    plan_id VARCHAR(100) NOT NULL, -- 'standard_29', 'citizenship_39', 'extended_49'
    amount_cents INT NOT NULL,
    currency VARCHAR(10) DEFAULT 'EUR',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for checking duplicate transaction webhooks
CREATE INDEX IF NOT EXISTS idx_purchases_tx_id ON purchases(transaction_id);

-- 3. Pro AI Letter Evaluations History
CREATE TABLE IF NOT EXISTS letter_evaluations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    prompt_title TEXT NOT NULL,
    user_submission TEXT NOT NULL,
    score_inhalt INT NOT NULL,
    score_sprache INT NOT NULL,
    score_korrektheit INT NOT NULL,
    score_total INT NOT NULL,
    feedback_json JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fetching user evaluation history
CREATE INDEX IF NOT EXISTS idx_evaluations_user_id ON letter_evaluations(user_id);

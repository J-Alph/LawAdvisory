# Louisiana Sales Tax Guide

AI-powered Louisiana sales & use tax research tool — statutes, exemptions, revenue rulings, and liability analysis.

## Features
- **Tax Analysis** — Ask any Louisiana sales tax question; get a structured verdict (Taxable / Exempt / Conditional) with citations
- **Browse Law** — Full text of key statutes (La. R.S. 47:301 et seq.) and 2020–2024 LDR revenue rulings
- **Parish Rates** — All 64 parishes with state + local + combined rates
- **Question History** — Last 10 questions stored locally in the browser

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add your Anthropic API key
```bash
cp .env.example .env.local
# Edit .env.local and add your key:
# ANTHROPIC_API_KEY=sk-ant-...
```

### 3. Run locally
```bash
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel

1. Push this project to a GitHub repo
2. Import the repo in Vercel (vercel.com/new)
3. In Vercel Project Settings → Environment Variables, add:
   - `GEMINI_API_KEY` = your Google AI Studio API key (free at aistudio.google.com)
4. Deploy

The API key is used **server-side only** via the `/api/analyze` route — it is never exposed to the browser. This is why you were seeing 400/404 errors before: calling the Anthropic API directly from the browser exposes your key and violates CORS policy.

## Architecture

```
/app
  page.tsx              ← Full UI (React client component)
  layout.tsx            ← Root layout
  globals.css           ← Styles
  /api
    /analyze
      route.ts          ← Server-side API route (Next.js Edge Runtime)
                           Calls Anthropic API with your key safely
/data
  statutes.json         ← Embedded Louisiana sales tax law
                           R.S. 47:301, 302, 305, 305.x, 306, 309, 340
                           + 10 LDR Revenue Rulings (2020–2024)
                           + All 64 parish rates
```

## Updating the Law

To add new statutes or rulings, edit `/data/statutes.json`. The API route automatically includes all entries in the Claude system prompt.

## Disclaimer

This tool is for informational and research purposes only. It does not constitute legal or tax advice. Consult a licensed Louisiana CPA or tax attorney for advice specific to your situation.

# Docent — Scope Document

> Working name. "A docent is a guide who answers visitors' questions." Change it freely — nothing depends on it yet.

**What:** An embeddable AI support agent. A customer connects their docs (website crawl, PDFs, pasted text), gets a drop-in `<script>` chat widget for their own site, and a dashboard showing what visitors asked — especially the questions the AI *couldn't* answer.

**Who for:** Small SaaS companies and agencies with documentation but no support team.

**Why this one:** It exercises every capability marsdevelopers.com claims, with nothing bolted on artificially. And it self-demonstrates — we embed it on the Mars Developers site itself, answering questions about your services, so a prospect reading the AI pitch can use your AI product on that same page.

---

## 1. The money question

**Constraint:** time available, budget approximately zero. Must not require a paid API key to operate.

### Why we are not training a model

| Approach | Cost | Does it solve our problem? |
|---|---|---|
| Train from scratch | Millions | No |
| Fine-tune an open model | $50–500+ per run, needs a labelled dataset | **No** — teaches tone/format, not facts. Still hallucinates. Must re-run on every doc change. |
| **RAG (retrieval)** | **$0 with the stack below** | **Yes** — this is the technique built for exactly this |

Fine-tuning is the wrong tool. RAG stores the docs, retrieves the relevant chunks per question, and puts them in the prompt. Doc changes are a re-index of one page, not a retraining run.

### The $0 stack

| Layer | Choice | Cost |
|---|---|---|
| Embeddings | `@xenova/transformers` (`all-MiniLM-L6-v2`, 384-dim) running **in Node, locally** | $0 — no API, no GPU |
| Vector store | Postgres + `pgvector` on **Neon free tier** | $0 |
| LLM inference | **Groq free tier** (Llama 3.x) primary, **Google Gemini free tier** as fallback | $0 within rate limits |
| Local dev LLM | **Ollama** | $0 |
| Framework | Next.js + TypeScript + Tailwind | $0 |
| Hosting | See caveat 2 below | $0–20/mo |

**The key move:** embeddings are the high-volume call — every chunk of every document, thousands per customer. That is the part we make *truly* free by running the model locally in Node with no API at all. LLM calls only happen when a human actually asks a question, which is low volume and fits comfortably inside free tiers.

### Honest caveats

1. **Free LLM tiers have rate limits and no SLA.** Fine for a demo and early users. Not fine at scale — but at scale there is revenue to pay for it. Build with a provider-swappable interface from day one so this is a config change, not a rewrite.
2. **Vercel's Hobby plan prohibits commercial use.** The moment this earns money we need Vercel Pro (~$20/mo) or a host without that restriction (Cloudflare, Render, Fly.io). Decide before launch, not after.
3. **Some free tiers train on submitted data.** Customers are uploading *their* documents. We must check each provider's current policy and either disclose it plainly or route paid customers to a no-training endpoint. Non-negotiable for trust.
4. **Free tiers change without notice.** Verify current limits before relying on any number here.

### On "operates independently and makes revenue"

Straight answer: it will not be passive income. A SaaS needs marketing, support, and iteration regardless of how good the code is.

The realistic path, in order of likelihood:
1. **Agency leads.** A working AI product with your name on it is the strongest proof you can show a prospect. This is already the portfolio's job — the product just does it better than a screenshot.
2. **Self-serve subscriptions.** Real, but slow, and needs distribution you don't have yet.

Plan for (1), architect so (2) is possible.

---

## 2. Architecture

```
Customer's site
  └── widget.js  ──POST──►  /api/public/chat  (CORS, origin allowlist, rate limit)
                                  │
                                  ├─► embed question (local model)
                                  ├─► pgvector similarity search, top-K chunks
                                  ├─► build grounded prompt
                                  └─► LLM provider (Groq → Gemini fallback), stream back

Dashboard (Next.js, authed)
  └── sources, playground, install snippet, insights, settings, billing

Indexing worker
  └── fetch → extract text → chunk → embed → upsert
```

**Provider abstraction:** one `LLMProvider` interface with `chat()` and `embed()`. Groq, Gemini, and Ollama are implementations. Swapping providers must never touch application code.

---

## 3. Data model

```
Organization   id, name, plan, createdAt
User           id, email, orgId, role
Workspace      id, orgId, name, publicKey, allowedOrigins[], widgetSettings
Source         id, workspaceId, type(url|sitemap|pdf|text), location, status, lastIndexedAt
Document       id, sourceId, title, url, contentHash
Chunk          id, documentId, workspaceId, content, embedding vector(384), metadata
Conversation   id, workspaceId, visitorId, startedAt
Message        id, conversationId, role, content, citations, wasAnswered, latencyMs
UsageEvent     id, orgId, kind, count, periodMonth
```

`contentHash` lets re-indexing skip unchanged pages — meaningful savings on crawl-heavy sources.
`wasAnswered` is the flag the entire Insights feature is built on.

---

## 4. Feature scope

### v0 — proves the hard part
- Ingest one source type (URL crawl), chunk, embed, store
- Retrieve + answer with inline citations
- Bare playground UI
- Single hardcoded workspace, no auth
- **Exit criteria:** ask 20 real questions against real docs and get grounded, cited, non-hallucinated answers. If retrieval quality is bad here, nothing built on top of it matters.

### v1 — the shippable MVP
- Auth + multi-tenant orgs/workspaces
- Sources: URL crawl, sitemap, PDF upload, pasted text
- Embeddable widget + public API with origin allowlist and rate limiting
- Insights dashboard: questions asked, **unanswered questions**, top-cited docs, volume trend
- Widget appearance settings
- Usage metering + free-tier caps
- Seeded public demo workspace, no signup required

### v2 — later
- Stripe billing and plan enforcement
- Integrations: Notion, GitHub docs, Zendesk
- Slack alert on unanswered questions
- Human handoff / email capture
- Multi-language

---

## 5. Screens

Public landing · Sign in/up · Workspace list · Sources (add + index status) · Playground · Install snippet · Insights · Settings · Billing · The widget itself (separate minimal bundle, must stay small)

---

## 6. Build order

0. This document
1. Ingest → chunk → embed → store (script, one workspace)
2. Retrieve → answer with citations (streaming API route)
3. Playground UI
4. Widget + public API + CORS/origin allowlist + rate limiting
5. Auth + multi-tenancy
6. Insights dashboard
7. Usage metering + caps
8. Billing
9. Deploy, CI, observability
10. Embed on marsdevelopers.com; add to `data/portfolio.ts` as a real project with a live link

---

## 7. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| **Prompt injection via ingested docs** — a crawled page can contain "ignore your instructions and…". We ingest arbitrary third-party content, so this is a live attack surface, not a hypothetical. | **High** | Treat retrieved chunks as untrusted data, never instructions. Structural separation in the prompt, output constraints, and test with a deliberately poisoned document. |
| Loading a ~90MB embedding model in a serverless function — cold starts, memory limits | **High** | Most likely forces indexing onto a separate long-running worker (Render/Fly free tier). Validate in v0 before building around it. |
| Hallucinated answers destroy trust in a support tool | High | Ground strictly in retrieved chunks; require citations; make "I don't know" a first-class answer — it's also what feeds the Insights feature. |
| Crawling third-party sites | Medium | Respect `robots.txt`, rate-limit, identify the bot, only crawl domains the customer has verified they own. |
| Free-tier limits hit during a demo | Medium | Cache common demo answers; hard cap anonymous usage; provider fallback chain. |
| Vercel Hobby commercial-use restriction | Medium | Choose the host before launch (caveat 2). |

---

## 8. Open decisions

1. **Product name** — "Docent" is a placeholder.
2. **Free tier shape** — how many workspaces / questions per month before payment?
3. **Public demo** — signup-free against a seeded corpus (better conversion, higher abuse risk), or email-gated?
4. **Host** — resolve the Vercel Hobby question before v1 ships.

---

## 9. Coverage of marsdevelopers.com claims

| Claim (source) | Where it shows up |
|---|---|
| Multi-tenant architecture (`services2`, `services4`) | Org → Workspace isolation, row-level scoping on every query |
| Billing (`services2`, `services4`) | Stripe, usage-metered (v2) |
| Authentication (`services2`) | NextAuth, org membership + roles |
| Dashboards (`services2`, `serviceCards3`) | Insights analytics |
| LLM chat (`services2`, `services4`) | The widget |
| **RAG search** (`services2`, `services4`, `expertise`, `serviceCards3`) | The core mechanism |
| AI workflows / automation (`services4`) | Scheduled re-indexing, unanswered-question alerts |
| REST APIs + third-party integrations (`services2`, `services4`) | Public chat/ingest API; Notion/GitHub/Zendesk connectors |
| Data pipelines (`services2`) | Crawl → extract → chunk → embed → upsert |
| Cloud, CI/CD, observability (`services2`, `expertise`) | Neon, CI, latency + failure tracking |
| Next.js / TS / PostgreSQL / Neon (throughout) | The whole stack |

# IGNOVA Consulting & Academy website

The public IGNOVA site is built with Next.js App Router, React, Tailwind CSS 4, and TypeScript.

## Run locally

Install dependencies with pnpm, then start the development server:

```bash
pnpm install
pnpm dev
```

Open the URL printed in the terminal (normally `http://localhost:3000`). Use `Ctrl+C` to stop the server.

## Contact form setup

The contact form sends submissions through Resend. Copy `.env.example` to `.env.local`, then set:

- `RESEND_API_KEY` to an API key from your Resend account.
- `IGNOVA_FORM_FROM` to a sender address on a domain verified in Resend.
- `CONTACT_TO` to the inbox that should receive inquiries. It defaults to `contact@ignovaconsulting.com` when omitted.

Restart the dev server after changing environment variables. Never commit `.env.local` or expose the API key in browser code. Until the sender and API key are configured, the form reports that it is unavailable and provides the public email address as a fallback.

## Project checks

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## Main routes

- `/` — Home
- `/about` — About IGNOVA
- `/services` — Capability overview
- `/services/triage` — IGNOVA Triage
- `/services/edge` — IGNOVA Edge
- `/services/project-execution` — Project Execution
- `/approach` — Delivery approach
- `/contact` — Contact form

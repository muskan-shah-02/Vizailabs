# DokyDoc — Marketing Website

The public marketing site for **DokyDoc**, an AI-powered document analysis platform built by Vizai Labs. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Forms | React Hook Form + Zod |
| Email | Resend |
| Fonts | Geist (Vercel) |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in the values. See [Environment Variables](#environment-variables) below.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Optional | API key from [resend.com](https://resend.com). If omitted, contact form submissions are logged to the console instead of emailed. |

Without `RESEND_API_KEY`, the contact form still works — submissions just won't be emailed to `hello@vizailabs.com`.

## Project Structure

```
app/                  # Next.js App Router pages and API routes
  api/contact/        # Contact form endpoint (Zod validation + Resend)
  about, blog,        # Static marketing pages
  features, pricing,
  docs, use-cases/
components/
  layout/             # Navbar, Footer, MobileMenu
  sections/           # Page sections (Hero, PricingCards, etc.)
  ui/                 # Reusable primitives (Button, Badge, etc.)
lib/
  utils.ts            # cn() helper and formatNumber
  resend.ts           # Resend client initialisation
content/
  blog/               # Blog post content
```

## Theme

Design tokens live in `app/globals.css` under `@theme inline`. Tailwind v4 exposes them as utilities automatically:

```
--color-accent      → bg-accent, text-accent, border-accent
--color-primary     → bg-primary, text-primary
--color-bg-dark     → bg-bg-dark
--color-bg-mid      → bg-bg-mid
--color-text-muted  → text-text-muted
--color-success     → text-success, bg-success
```

Prefer these utilities over hardcoded hex values in new code.

## Scripts

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

## Deployment

The site deploys to Vercel. Set `RESEND_API_KEY` in your Vercel project environment variables to enable contact form emails in production.

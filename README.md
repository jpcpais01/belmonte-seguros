# Belmonte Seguros — Website

Marketing website for **Belmonte Seguros — Seguros e Benefícios**, an independent
insurance mediation firm in Lisbon (Parque das Nações). Built to feel calm,
trustworthy and human — *acima de tudo, as pessoas*.

All visible content is in **European Portuguese (pt-PT)**.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-based design tokens)
- **shadcn/ui-style** primitives on **Radix UI** (accordion, label, slot)
- **Framer Motion** for tasteful scroll-reveal and micro-interactions
- **lucide-react** icons + custom inline social icons
- **react-hook-form** + **zod** for the validated contact form
- Fonts via `next/font`: **Fraunces** (serif display) + **Inter** (body)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (also type-checks)
npm run start      # serve the production build
npm run lint
```

## Project structure

```
app/
  layout.tsx                 # fonts + SEO metadata
  page.tsx                   # landing page (composes all sections) + JSON-LD
  globals.css                # design system: tokens, palette, textures, utilities
  actions.ts                 # contact-form server action (email placeholder)
  opengraph-image.tsx        # dynamic 1200×630 social share image
  icon.svg                   # favicon
  sitemap.ts / robots.ts
  politica-de-privacidade/   # legal placeholder page
  informacao-legal/          # legal placeholder page
components/
  sections/                  # Header, Hero, TrustBar, Services, Solutions,
                             # About, Values, Process, Testimonials, BlogTeaser,
                             # Faq, Cta, Contact, Footer, ContactForm
  ui/                        # Button, Accordion, Input, Textarea, Label
  motion/reveal.tsx          # scroll-reveal wrapper (respects reduced motion)
  brand/                     # Logo + social icons
  legal/legal-shell.tsx      # chrome for legal pages
content/                     # ALL Portuguese copy + company data (edit here)
lib/                         # cn() helper, icon map, contact zod schema
```

## Editing content

All copy and company data live in **`/content`** as typed files — no code changes needed:

- `site.ts` — company name, tagline, **phone, email, addresses, hours, ASF
  number, social links, navigation**
- `partners.ts` — partner insurer logos (images in `public/empresas`)
- `services.ts` — the insurance lines (Vida, Saúde, Automóvel, Casa, …)
- `solutions.ts` — Particulares & Famílias vs Empresas
- `values.ts` — values, process steps, the "Sobre Nós" story, timeline & team
- `testimonials.ts`, `faq.ts`, `posts.ts`

## ⚠️ Before going live

1. **ASF registration number** — replace the placeholder in
   `content/site.ts` (`asf`). Displaying the real ASF mediator number is a
   **legal requirement** for insurance mediators in Portugal.
2. **Partner insurers** — logos live in `public/empresas` and are listed in
   `content/partners.ts`; add or remove to match the real partners.
3. **Testimonials** — replace the placeholder quotes in `testimonials.ts`.
4. **Legal pages** — `politica-de-privacidade` and `informacao-legal` contain
   placeholder text; have the final wording reviewed by a professional.
5. **Facebook URL** — set the real page URL in `site.social.facebook`.
6. **Production URL** — update `siteUrl` in `app/layout.tsx` and the base URLs
   in `app/sitemap.ts` / `app/robots.ts` / `app/page.tsx` to the final domain.

## Contact form / email

The form is fully validated (client + server). Out of the box it logs
submissions to the server console and shows the user a success message, so
**nothing breaks without configuration**.

To actually receive emails:

1. `npm install resend`
2. Create an account at [resend.com](https://resend.com) and verify your domain.
3. Add environment variables (see `.env.example`):
   `RESEND_API_KEY` and `CONTACT_TO_EMAIL`.
4. Uncomment the delivery block in [`app/actions.ts`](app/actions.ts).

## Deploying to Vercel

1. Push this repo to GitHub/GitLab.
2. Import it in [Vercel](https://vercel.com/new) — it auto-detects Next.js, no
   config needed.
3. (Optional) add the email env vars under **Project → Settings → Environment
   Variables**.
4. Deploy. ✅

## Accessibility & performance notes

- Mobile-first, responsive across all breakpoints.
- Respects `prefers-reduced-motion` (animations disable automatically).
- Semantic HTML, focus-visible states, AA-minded contrast, alt/aria labels.
- All pages are statically prerendered; the OG image is generated at build time.

# R.I.N. B.V. — website (Next.js)

Koeriers- en spoedtransport. Next.js 16, App Router en TypeScript. Live op <https://www.rinlogistiek.nl>.

## Starten

```bash
npm install
npm run dev
```

De ontwikkelserver draait op <http://localhost:3000>; `.claude/launch.json` start hem op poort 3100.

## Bouwen / deployen

```bash
npm run build
npm run start
```

Vercel bouwt automatisch bij elke push naar `main`. Er is geen aparte publish-map nodig.

## Omgevingsvariabelen

Zet deze in Vercel bij **Project Settings → Environment Variables**, en lokaal in `.env.local` (zie `.env.example`).

| Variabele | Nodig | Waarvoor |
| --- | --- | --- |
| `RESEND_API_KEY` | ja | Versturen van de formuliermail via Resend. Hoort nooit in GitHub of frontend-code. |
| `RESEND_TO_EMAIL` | nee | Inbox die aanvragen ontvangt. Standaard het adres uit `lib/site.ts` (`info@rinlogistiek.nl`). |
| `RESEND_FROM_EMAIL` | nee | Afzender op een in Resend geverifieerd domein, bijvoorbeeld `R.I.N. B.V. <noreply@rinlogistiek.nl>`. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | nee | Publieke sleutel van Cloudflare Turnstile (spambeveiliging). |
| `TURNSTILE_SECRET_KEY` | nee | Geheime sleutel van Turnstile; hiermee controleert de server de check. |
| `NEXT_PUBLIC_SITE_URL` | nee | Alleen nodig bij een ander domein. Standaard `https://www.rinlogistiek.nl`. |

### Spambeveiliging op het formulier

Het formulier is op vier manieren beveiligd:

1. **Cloudflare Turnstile** — de bezoeker ziet een vinkje, geen puzzels. Maak gratis een widget aan op
   <https://dash.cloudflare.com> → Turnstile, kies domein `rinlogistiek.nl`, en zet de twee sleutels in Vercel.
   Ontbreken de sleutels, dan blijft het formulier werken en vervalt alleen de captcha.
2. **Honeypot** — een verborgen veld dat alleen bots invullen.
3. **Tijdcontrole** — een inzending binnen 2,5 seconde na het openen wordt geweigerd.
4. **Snelheidslimiet** — maximaal 5 aanvragen per IP-adres per 10 minuten.

## Structuur

- `app/` — één route per pagina: `/`, `/diensten`, `/diensten/[dienst]`, `/over-ons`, `/contact`, `/voorwaarden`, `/privacy`
- `app/api/send-quote/route.ts` — verwerkt het formulier, controleert de captcha en mailt via Resend
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` — SEO en deelafbeelding
- `lib/site.ts` — alle teksten, diensten, FAQ, privacytekst en bedrijfsgegevens op één plek
- `lib/seo.ts` — canonical-URL's, OpenGraph en structured data (LocalBusiness, Service, FAQ, breadcrumbs)
- `components/` — header, footer, formulieren, FAQ, Turnstile, foto-component
- `app/globals.css` — resets, hover-states, scroll-reveal, responsive breakpoints
- `public/photos/` — alle foto's als WebP; herkomst en licenties staan in `FOTO-CREDITS.md`

## Foto's vervangen

Zet een nieuwe foto met dezelfde bestandsnaam in `public/photos/` (WebP, ca. 1600 px breed, onder 300 kB).
Ontbreekt een bestand, dan toont de site een nette placeholder met omschrijving in plaats van een gebroken afbeelding.

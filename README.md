# R.I.N. B.V. — website (Next.js)

Koeriers- en spoedtransport. Next.js 14, App Router, statische export.

## Starten

\`\`\`bash
npm install
npm run dev      # http://localhost:3000
\`\`\`

## Bouwen / deployen

\`\`\`bash
npm run build    # schrijft ./out
\`\`\`

Netlify: repo koppelen (netlify.toml staat er al in: build \`npm run build\`, publish \`out\`),
of de map \`out\` handmatig op app.netlify.com/drop slepen.

### Formuliermails via Resend

De formulieren gebruiken de Netlify Function \`netlify/functions/send-quote.ts\`. Stel in Netlify bij **Site configuration → Environment variables** deze variabelen in:

- \`RESEND_API_KEY\`: een nieuwe Resend API-key (de sleutel hoort nooit in GitHub of frontend-code).
- \`RESEND_TO_EMAIL\`: het inboxadres dat aanvragen ontvangt, standaard \`info@rinlogistiek.nl\`.
- \`RESEND_FROM_EMAIL\`: een afzender op een in Resend geverifieerd domein, bijvoorbeeld \`R.I.N. B.V. <info@rinlogistiek.nl>\`.

Lokaal testen kan met Netlify Dev nadat de variabelen in \`.env.local\` staan: \`npx netlify dev\`.

## Structuur

- \`app/\` — één route per pagina: \`/\`, \`/diensten\`, \`/diensten/[slug]\`, \`/over-ons\`, \`/contact\`, \`/voorwaarden\`
- \`lib/site.ts\` — alle teksten, diensten, routes, FAQ en bedrijfsgegevens op één plek
- \`components/\` — header, footer, formulieren, FAQ, foto-placeholder
- \`app/globals.css\` — resets, hover-states, scroll-reveal, responsive breakpoints
- \`public/photos/\` — hier je eigen foto's neerzetten (zie onder)

## Nog te doen voor livegang

1. **Contactgegevens** in \`lib/site.ts\` (\`company\`): telefoon, e-mail, adres, KvK, BTW. Telefoon, adres en registratienummers zijn nog als placeholder gemarkeerd.
2. **Foto's**: de demo gebruikt neutrale logistieke beelden uit \`public/photos/\`. Vervang ze desgewenst door eigen foto's met dezelfde bestandsnamen.
3. **Formulieren**: aanvragen worden via de Resend-Netlify Function naar het ingestelde inboxadres gestuurd. Test na het invullen van de Resend-variabelen altijd een echte aanvraag.
4. **Logo**: \`public/rin-logo.png\` is uit de aangeleverde JPG gehaald. Een originele PNG/SVG is scherper.

# Hindsfeet Accounting — Marketing Website

A frontend-only Next.js + Tailwind CSS website for Hindsfeet Accounting, a technology brand of Hindsfeet Investments Liberia Limited.

## Requirements
- Node.js 20.9 or newer
- npm

## Start locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Configure before publishing
1. Open `.env.local`.
2. Set `NEXT_PUBLIC_DEMO_FORM_URL` to the Google Form URL you create. The “Book a demo” buttons open this form in a new tab.
4. Review subscription plan feature allocations in `app/page.tsx`. Prices are set to Essential $200/month, Plus $350/month and Complete $500/month.
4. Confirm the exact LRA tax rules and legal wording before advertising tax calculations as compliant.

## Frontend-only behavior
- Demo booking opens your Google Form.
- There is no enquiry form on the website. All demo-request buttons open the configured Google Form in a new tab.
- No database, authentication, payment gateway, or backend is included.

## Product screenshots
The screenshots supplied for this project are included in `public/images`. They have been lightly sharpened and contrast-adjusted for web presentation; the actual interface content has not been altered. The supplied Hindsfeet company logo is used in the site header and footer.

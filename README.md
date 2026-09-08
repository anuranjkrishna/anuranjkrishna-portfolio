# Anuranjkrishna K — Portfolio

A single-page portfolio site. No build step, no framework — just `index.html`, so it deploys anywhere in minutes.

## Files
- `index.html` — scrolling one-page version (API/endpoint theme)
- `dashboard.html` — alternative sidebar admin-panel style version (darker, click-through sections instead of scrolling)
- `images/` — profile photo + project screenshots (used by both versions)
- `Anuranjkrishna_K_Resume.pdf` — linked from the "Download resume" button

Pick whichever version you like better and rename it `index.html` before deploying (or just deploy the one you want as the homepage).

## 1. Turn on the contact form (Formspree, free)
The contact form needs a real endpoint to send emails to your inbox.

1. Go to https://formspree.io and sign up (free tier is enough).
2. Create a new form — it gives you a URL like `https://formspree.io/f/abc1234`.
3. Open `index.html`, find this line (inside the `<form>` tag):
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your real form ID.
5. Formspree will ask you to confirm your email the first time someone submits — just approve it once.

Without this step the form will show a "something went wrong" message when someone submits it.

## 2. Deploy to Netlify (free)
**Easiest way — drag and drop:**
1. Go to https://app.netlify.com/drop
2. Drag the whole `portfolio` folder (with both files inside) onto the page.
3. Netlify gives you a live URL immediately (you can rename it in Site settings → Change site name).

**Alternative — GitHub + Netlify:**
1. Push this folder to a new GitHub repo.
2. In Netlify: "Add new site" → "Import an existing project" → pick the repo.
3. Leave build command empty and publish directory as `/` (root) — no build step needed.

## 3. Point your custom domain / links (optional)
- Update the GitHub/live-demo links inside `index.html` if any project URLs change.
- If you add a LinkedIn profile URL, add it next to the GitHub link in the hero section's `.contact-links` block.

## Editing later
Everything — text, colors, sections — lives in `index.html`. Colors are set once at the top of the `<style>` block under `:root`, so changing the accent color, for example, only needs one edit.

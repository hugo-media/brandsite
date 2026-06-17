# Hugo Media Group Brandsite

Static personal brand website for Hugo Media Group.

## Concept

Hugo is the personal brand. Hugo Media Group is the media platform. Services are branches of the platform.

## Project structure

- `index.html` - static page markup, SEO tags, Open Graph tags, and content.
- `style.css` - premium mobile-first black / white / gray visual system.
- `script.js` - editable link configuration and tiny no-link fallback helper.
- `hugo-hero.jpg` - main hero photo and social preview image.
- `vercel.json` - Vercel static hosting hints.

## Edit links

All service and social links live in one place: `HUGO_LINKS` at the top of `script.js`.

Use full URLs, for example:

```js
const HUGO_LINKS = {
  contact: "https://t.me/username",
  instagram: "https://instagram.com/username"
};
```

Leave a value empty while the link is not ready.

## Vercel

This site is static HTML, CSS, and JS only. No build step is required.

Recommended Vercel settings:

- Framework Preset: Other
- Build Command: empty
- Output Directory: `.`

If the production domain changes, update the canonical URL and Open Graph image URL in `index.html`.

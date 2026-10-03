# Shahrukh Malik — Portfolio

Single-page portfolio built with React, Vite and Tailwind CSS.

## Structure

```
├── index.html            # Vite entry (SEO / meta)
├── vite.config.js
├── docs/                 # Source CV (.docx) and project notes
├── public/               # Static assets served as-is
│   ├── images/           # Portrait and project screenshots
│   ├── _redirects        # Netlify redirects for legacy URLs
│   ├── favicon.svg
│   └── SHAHrukh CV Comprehensive.pdf
└── src/
    ├── main.jsx          # React bootstrap
    ├── App.jsx           # Page layout and sections
    ├── data/             # Content: site, projects, experience, skills
    └── styles/index.css  # Design tokens and styles
```

## Scripts

- `npm install`
- `npm run dev` — http://127.0.0.1:3000
- `npm run build`
- `npm run preview`

## Updating content

Edit the files in `src/data/` — no component changes needed. Replace the CV by overwriting the PDF in `public/`.

The contact form opens a prefilled email in the visitor's mail app; it does not store messages.

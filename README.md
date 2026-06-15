# Apm Curry — Indian & Nepali Restaurant, Kawasaki

A premium, cinematic single-page website for **Apm Curry**, an Indian & Nepali
restaurant in Kawasaki, Japan.

**Design direction:** Warm luxury × Japanese minimalism × editorial restaurant
storytelling. English-first copy with Japanese typographic accents.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-based `@theme` design tokens)
- **Motion** (Framer Motion) for all cinematic reveals & parallax
- **lucide-react** for icons (brand glyphs are custom SVGs)
- Fonts: **Cormorant Garamond** (display serif) + **Inter** (UI/body)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content

All copy, menu items, hours and imagery live in typed data files — edit these,
not the components:

| File | What it controls |
| --- | --- |
| `src/data/restaurant.ts` | Name, contact, address, hours, social, nav links |
| `src/data/menu.ts` | Signature dishes + all menu categories & prices (¥) |
| `src/data/story.ts` | About-section storytelling blocks |
| `src/data/gallery.ts` | Gallery images & captions |

Design tokens (colors, fonts, easing) live in `src/app/globals.css` under
`@theme`.

## Structure

```
src/
  app/                 layout (fonts, SEO), page composition, globals.css
  components/
    motion/            Reveal, RevealText, Stagger primitives
    ui/                Button, SectionHeading, Logo, SpiceMeter, ScrollProgress…
    sections/          Navbar, Hero, About, Marquee, Menu, Gallery, Visit, Footer
  data/                all editable content
```

## Notes

- Placeholder photography is served from Unsplash (allow-listed in
  `next.config.ts`). Swap `src/data/*` image URLs — or drop files in
  `public/images` — to use real photos.
- Motion respects `prefers-reduced-motion`.
- `RevealText` headings reveal on scroll; pass `trigger="mount"` for
  above-the-fold copy (see `Hero`).

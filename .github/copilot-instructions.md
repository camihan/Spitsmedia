# AI Coding Agent Instructions - Spitsmedia

## Project Overview
Spitsmedia is a Norwegian design portfolio website showcasing design services: UX/UI, graphic design, illustration, and frontend development. This is a static HTML/CSS/JavaScript site with a portfolio structure, not a full-stack application.

## Architecture & File Organization

### CSS Architecture (Stylesheet Composition)
The project uses a cascade approach with `screen.css` as the single entry point:
- **`css/screen.css`** – Master stylesheet that imports all others via `@import`
- **`css/normalize.css`** – Browser reset layer
- **`css/reset.css`** – Additional resets
- **`css/main.css`** – Core component styles (~1000 lines, base elements, typography, layouts)
- **`css/responsive.css`** – Media query breakpoints (mobile-first: 320px, 640px, etc.)
- **`css/fonts.css`** – Google Fonts imports (Source Sans Pro, Changa One, Open Sans)
- **`css/ie.css`** – IE-specific patches

**Key pattern**: Do NOT link individual CSS files in HTML; only reference `css/screen.css`.

### HTML Structure
- **Portfolio pages**: `index.html`, `arbeid.html` (work), project-specific files (`friele.html`, `fjord1.html`, etc.)
- **Service pages**: `design.html`, `ux.html`, `frontend.html`, `grafikk_illustrasjon.html`
- **Meta pages**: `kontakt.html`, `styleguide.html`, `designsystem.html`
- **Navigation**: All pages share a common header with logo, main nav (Hjem/Arbeid/Kontakt), plus selected state indicator

### JavaScript Setup
- **Framework**: jQuery 1.7.1 (loaded from CDN)
- **Main file**: `js/main.js` (127 lines, custom components)
- **Utilities**: `scroll.js`, `scrollTop.js`, `domReady.js`
- **Plugins**: SlimScroll (custom scroll bar) embedded in main.js, Chart.js, Pace.js
- **Pattern**: jQuery document ready pattern; sidebar toggle, smooth scroll handling

### Assets
- **Images**: `img/` folder with portfolio images, animations (GIFs), backgrounds
- **Videos**: `video/` folder (referenced but mostly empty in current structure)
- **Fonts**: CSS-loaded from Google Fonts, no local web font files

## Common Development Patterns

### Page Styling
1. Main header with `.main-header` class (video background capable)
2. Content wrapped in `#wrapper-animation` div
3. Main sections use `.full-size_background`, `.wrapper-home clearfix`
4. Articles use `.work.thumb` or `.attention` classes
5. Responsive grid: floated divs with clearfix pattern (not CSS Grid/Flexbox)

### Navigation & Links
- Internal links use relative paths: `href="index.html"`, `href="friele.html"`
- Selected nav item marked with `.selected` class on `<a>` tag
- Anchor links to sections: `href="#tjenester-starts"`
- Portfolio items link to dedicated HTML pages or lightbox images

### Responsive Design
- Mobile-first media queries in `responsive.css`
- Breakpoints: 320px (mobile), 640px (tablet), 960px+ (desktop)
- Use `@media screen and (min-width: Xpx)` pattern
- Key responsive utilities: `.illustration-image` visibility toggles, margin adjustments (5%, 10%)

### Analytics & External Services
- Google Analytics integrated (gtag.js, UA-121635529-1)
- No build tools; direct script includes
- External CDN dependencies: jQuery, Google Fonts, Google Analytics

## Critical Conventions

1. **Language**: All content is Norwegian (no). Page titles, descriptions, navigation, alt text are in Norwegian.
2. **Class naming**: Kebab-case (`.main-header`, `.full-size_background`, `.wrapper-home`)
3. **File paths**: Relative paths throughout; assume all pages are in root directory
4. **Image handling**: Use `loading="lazy"` on images; all images in `img/` folder
5. **No build process**: Changes to CSS require refreshing the single `screen.css` import point
6. **jQuery version**: Old jQuery 1.7.1; use vanilla JS or jQuery patterns compatible with that version

## When Editing

### Adding Pages
1. Create new `.html` file in root directory
2. Copy header/nav from existing page, ensure `.selected` class on correct nav item
3. Link stylesheet: `<link href="css/screen.css" rel="stylesheet"/>`
4. Add to portfolio navigation if needed

### Modifying Styles
1. Edit appropriate CSS file based on scope (main.css for base, responsive.css for media queries)
2. Changes are live when screen.css imports are correct
3. Maintain responsive approach: mobile-first in main.css, then enhance with media queries

### Adding JavaScript
1. Keep utilities in `js/main.js` or create new file in `js/` directory
2. Always wrap in jQuery ready: `$(function() { ... })`
3. Test with old jQuery (1.7.1); avoid modern JS syntax

## Key Files Reference
- [index.html](../index.html) – Homepage template
- [css/main.css](../css/main.css) – Core styling (1000+ lines)
- [css/responsive.css](../css/responsive.css) – Breakpoint definitions
- [js/main.js](../js/main.js) – jQuery utilities & event handlers

# Gigabuilder — Implementation Specification

**Date:** 2026-02-18
**Status:** Ready for Implementation
**Stack:** Next.js 15 · React 19 · Tailwind v3 · TypeScript · Vercel

---

## 1. What This Is

Gigabuilder is the **official Gigaverse community app directory** — a single-page website that lists ecosystem apps built by community members. It is maintained by the Gigaverse team, serves all audiences equally (existing players, new players, external builders), and is designed to grow as the ecosystem grows.

It is **not** a game tool, not a dashboard, and not a CMS. It is a polished, minimal showcase.

---

## 2. Scope

### In Scope (v1)
- Single-page app directory with card grid
- App detail modal (desktop full modal, mobile bottom sheet)
- Static data source (JSON file in codebase)
- Gigaverse design system visual identity
- Minimal header (logo + one-line description + external links)
- Footer with disclaimer

### Out of Scope (v1)
- Admin panel / CMS
- Search and filtering
- Builder profile pages
- Auth for public users
- Community app submissions
- Any database (Supabase or otherwise)

---

## 3. Data Model

App data lives in `src/data/apps.json`. No database. To update: edit the file, push, Vercel redeploys.

```typescript
// src/types/app.ts
interface GigaApp {
  slug: string;             // URL-safe identifier, e.g. "fireball"
  name: string;             // "Fireball"
  subtitle: string;         // "Gigaverse Autobattler"
  description: string;      // Full paragraph description
  builders: Builder[];
  keyFeatures: string[];    // Bullet list of features
  tags: AppTag[];           // Predefined set (see below)
  status: "active" | "deprecated";
  launchUrl: string;        // External link
  screenshots: string[];    // Supabase Storage URLs
}

interface Builder {
  name: string;             // "Yanik"
  handle: string;           // "@yanik_ai"
  twitterUrl: string;       // "https://x.com/yanik_ai"
}

type AppTag =
  | "Metagame"
  | "Analytics"
  | "Trading"
  | "Automation"
  | "Tools";
```

### Initial Data (4 apps from xlsx)

| App | Tags | Status |
|-----|------|--------|
| Fireball | Metagame, Automation | active |
| Giga Noob | Analytics | active |
| Juiced.sh | Trading, Tools | active |
| Teraverse | Automation | active |

---

## 4. Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home — full app directory |

That's it. One page.

---

## 5. Page Layout

### 5.1 Header (top of page)

```
┌──────────────────────────────────────────────────────────┐
│  [Logo/Wordmark]   Community-built tools for Gigaverse.  │
│                    [gigaverse.io] [X] [Discord]          │
└──────────────────────────────────────────────────────────┘
```

- Logo left-aligned
- One-line description text (center or inline)
- Three icon/text links: main website, X (Twitter), Discord
- Minimal, no navigation menu
- Sticky or static — static (no need to stick given single-page)

### 5.2 App Grid

```
┌───────────┐  ┌───────────┐  ┌───────────┐
│  AppCard  │  │  AppCard  │  │  AppCard  │
└───────────┘  └───────────┘  └───────────┘
┌───────────┐
│  AppCard  │
└───────────┘
```

- Responsive grid: 3 cols desktop, 2 cols tablet, 1 col mobile
- All cards equal weight, no featured/spotlight
- Cards are clickable → opens modal

### 5.3 AppCard

```
┌─────────────────────────────┐
│  [Screenshot/Placeholder]   │  Aspect ratio 16:9 or square thumbnail
│                             │
│  App Name                   │  lg, bold
│  Subtitle                   │  sm, muted
│                             │
│  [Tag] [Tag]                │  Pill badges
│                             │
│  Feature 1                  │  2-3 key features max on card
│  Feature 2                  │
└─────────────────────────────┘
```

- Uses Gigaverse design system: `#0a1628` bg, `#00d4ff` cyan accents, pixel-art borders
- Hover: cyan border glow (`0 0 12px rgba(0, 212, 255, 0.6)`) + `translateY(-2px)`
- Transition: 150ms ease

### 5.4 Footer

```
┌──────────────────────────────────────────────────────────┐
│  © 2026 Gigaverse. Community apps are independently      │
│  built and maintained by their respective creators.      │
│  Gigaverse is not responsible for third-party apps.      │
└──────────────────────────────────────────────────────────┘
```

- Minimal, centered or left-aligned
- Disclaimer text (legal distancing from community apps)

---

## 6. App Detail Modal

### Desktop Modal

Full-screen overlay with centered modal card:

```
┌─────────────────────────────────────────────────────┐
│ [×]                                                 │
│                                                     │
│  [Screenshot carousel or single image]              │
│                                                     │
│  App Name                          [Tag] [Tag]      │
│  Subtitle                                           │
│                                                     │
│  Description paragraph                              │
│                                                     │
│  Key Features:                                      │
│  • Feature 1                                        │
│  • Feature 2                                        │
│  • Feature 3                                        │
│                                                     │
│  Built by: @builder1  @builder2  (→ Twitter)        │
│                                                     │
│                   [Launch App →]                    │
└─────────────────────────────────────────────────────┘
```

- Backdrop: `rgba(0,0,0,0.8)` overlay
- Modal bg: `#162942` with `#1e3a5f` border
- Close: X button top-right + click backdrop to dismiss + Escape key
- Launch button: PixelButton style (cyan), opens `launchUrl` in new tab

### Mobile Bottom Sheet

Slides up from bottom (not a centered modal):

```
┌─────────────────────────────────┐
│  ─────  (drag handle)           │
│                                 │
│  App Name          [Tag]        │
│  Subtitle                       │
│                                 │
│  Description (truncated/scroll) │
│                                 │
│  Builders: @handle1 @handle2    │
│                                 │
│  [          Launch App →      ] │
└─────────────────────────────────┘
```

- No screenshot carousel on mobile (simplicity)
- Swipe down or tap scrim to close
- CTA button: full-width, prominent

---

## 7. Design System

Inherit directly from `gigaui` DESIGN.md. Key values:

```css
/* Colors */
--color-bg-primary: #0a1628;
--color-bg-secondary: #162942;
--color-border-default: #1e3a5f;
--color-border-active: #00d4ff;
--color-text-primary: #ffffff;
--color-text-secondary: #8b9bb4;
--color-text-accent: #00d4ff;

/* Typography */
--font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
--font-size-sm: 12px;
--font-size-base: 14px;
--font-size-lg: 16px;
--font-size-xl: 20px;

/* Effects */
--hover-glow: 0 0 12px rgba(0, 212, 255, 0.6);
--shadow-card: 0 1px 2px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2);
```

Tag pill colors:

| Tag | Border | Background |
|-----|--------|------------|
| Metagame | `#a78bfa` | `rgba(167,139,250,0.1)` |
| Analytics | `#4ade80` | `rgba(74,222,128,0.1)` |
| Trading | `#fbbf24` | `rgba(251,191,36,0.1)` |
| Automation | `#f472b6` | `rgba(244,114,182,0.1)` |
| Tools | `#00d4ff` | `rgba(0,212,255,0.1)` |

---

## 8. File Structure

```
gigabuilder/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Design system CSS variables
│   ├── components/
│   │   ├── Header.tsx          # Logo + description + external links
│   │   ├── AppGrid.tsx         # Responsive grid wrapper
│   │   ├── AppCard.tsx         # Individual app card
│   │   ├── AppModal.tsx        # Desktop modal
│   │   ├── AppBottomSheet.tsx  # Mobile bottom sheet
│   │   └── Footer.tsx          # Disclaimer footer
│   ├── data/
│   │   └── apps.json           # Static app data (source of truth)
│   └── types/
│       └── app.ts              # GigaApp, Builder, AppTag types
├── public/
│   └── logo.svg (or .png)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 9. Technical Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Data storage | `apps.json` | No new apps expected soon; zero infra overhead |
| Admin panel | None (v1) | Removed — team edits JSON directly |
| Auth | None | Public directory, no protected routes |
| Database | None | JSON file is sufficient |
| Rendering | Static (Next.js SSG) | Data is static; optimal for Vercel edge |
| Modal | Custom component | No extra lib dependency needed |
| Image storage | Supabase Storage URLs in JSON | Screenshots hosted externally, no upload UI needed |
| Deployment | Vercel | Consistent with all Giga* apps |

---

## 10. Component Behavior Details

### AppCard

- Clicking anywhere on the card → opens modal
- No separate "Launch" button on the card itself (modal has it)
- Shows: name, subtitle, first 2-3 key features, tags
- Screenshot thumbnail if available; placeholder if not (consistent dark placeholder with Gigaverse logo watermark)

### AppModal (desktop)

- Keyboard: Escape to close
- Trap focus within modal while open
- `aria-modal="true"`, `role="dialog"`
- Screenshot: if multiple screenshots exist, simple prev/next arrows; if one, no carousel chrome
- Backdrop click closes modal
- Launch button opens `launchUrl` in `_blank` with `rel="noopener noreferrer"`

### AppBottomSheet (mobile, <768px)

- Triggered same way as modal (card tap)
- CSS: `position: fixed; bottom: 0; width: 100%; border-radius: 16px 16px 0 0`
- Animation: `translateY(100%)` → `translateY(0)` on open
- Swipe-down gesture to close (touch event handler)
- No screenshots on mobile sheet
- Shows: name, subtitle, description (scrollable), builders, launch CTA

### Header External Links

- `gigaverse.io` (or the actual main site domain — to be confirmed)
- X/Twitter: `https://x.com/gigaverse` (or actual handle — confirm before shipping)
- Discord: invite link (confirm URL before shipping)

---

## 11. Open Questions (Confirm Before Building)

1. **Main site URL** — gigaverse.io
2. **Twitter/X handle** — @playgigaverse
3. **Discord invite URL** — discord.gg/glhfers
4. **Logo asset** — https://pbs.twimg.com/profile_images/2009579346139455488/vGDF-Z6B_400x400.png
5. **Screenshots** — added to /images with app names
6. **Footer disclaimer text** — Disclaimer: Gigaverse Hub is a community platform showcasing apps, tools, and content created by independent Gigaverse builders and creators. Please note, these are third-party initiatives and operate outside of our direct control. We do not endorse, audit, or guarantee their safety, reliability, or security. Please “DYOR” & exercise your own judgement & any necessary caution when engaging with 3rd party content.
7. **Domain** — builder.gigaversehub.com

---

## 12. Implementation Order

1. `apps.json` — seed with all 4 apps + full data
2. `globals.css` — design system variables from gigaui
3. `Header` component
4. `AppCard` component
5. `AppGrid` responsive layout
6. `AppModal` (desktop)
7. `AppBottomSheet` (mobile)
8. `Footer`
9. Wire everything in `page.tsx`
10. Responsive QA pass
11. Vercel deploy

**Estimated complexity:** Low-medium. This is a well-scoped, visually polished single-page app with no backend.

---

*Document Version: 1.0*
*Last Updated: 2026-02-18*
*Status: Ready for Implementation (pending Open Questions resolution)*

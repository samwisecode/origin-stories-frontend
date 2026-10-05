# Origin Stories — Frontend

[![Built with Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)

Frontend for **Origin Stories** — a media platform showcasing African entrepreneur stories. The site promotes live theatre events and shares inspiring entrepreneurial journeys from across the continent.

## Tech Stack

- **Framework**: Nuxt 4.1.2 + TypeScript
- **UI**: Nuxt UI 4.0.0 (Tailwind CSS + component library)
- **Package manager**: pnpm (v10.17.1)
- **Fonts**: Poppins via `@nuxt/fonts`
- **Icons**: Lucide + Simple Icons (@iconify-json)
- **Animations**: motion-v
- **Email**: Resend (contact form)
- **Analytics**: Google Analytics via nuxt-gtag
- **Validation**: zod

## Quick Start

```bash
pnpm install
pnpm dev
```

Development server runs on `http://localhost:3000`.

## Scripts

```bash
pnpm dev         # Development server
pnpm build       # Production build
pnpm preview     # Preview production build
pnpm lint        # ESLint
pnpm typecheck   # vue-tsc type checking
```

## Project Structure

```
app/
├── app.vue              # Root component with SEO meta, UApp layout
├── app.config.ts        # Nuxt UI theme (colors, button defaults)
├── pages/               # index, about, team, partners, policy, terms
├── components/          # SiteHeader, SpeakerProfile, JoinCommunity, etc.
├── assets/css/          # Tailwind theme + typography
├── types/               # TypeScript definitions
server/api/
└── emails/              # Resend email handlers
```

## Design System

TED-inspired dramatic typography, high contrast:

- **Colors**: black/white primary, gold/orange accents (`#c59640`)
- **Typography**: Poppins with custom scale (`.display-xl`, `.display-lg`, `.text-hero`, `.text-lead`)
- **Spacing**: dramatic section spacing (`.section-massive`, `.section-large`)
- **Buttons**: sharp geometric styles, uppercase text (`btn-primary`, `btn-menu`)

Custom CSS variables live in `app/assets/css/main.css`.

## Server API

Contact form emails via `server/api/emails/sendAdminEmail.ts` (Resend). Requires:

| Variable         | Purpose                   |
| ---------------- | ------------------------- |
| `RESEND_API_KEY` | Resend API key            |
| `ADMIN_EMAIL`    | Destination for enquiries |

## Configuration

- `nuxt.config.ts` — modules, route rules, Google Analytics (gtag, ID `G-BX04VF3EPE`)
- `app.config.ts` — Nuxt UI theme: primary color, button variants

## Content Patterns

Speaker data is defined directly in page components as arrays (see `app/pages/index.vue`). Each speaker object: `name`, `profilePicUrl`, `title`, `company`, `bio`, optional `linkedInUrl`.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

## Project Overview

Origin Stories is a Nuxt 4 application built with Nuxt UI that showcases African entrepreneur stories. The site promotes live theatre events and serves as a media platform for inspiring entrepreneurial journeys from across Africa.

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Development server (runs on http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Preview production build locally
pnpm preview

# Linting
pnpm lint

# Type checking
pnpm typecheck
```

## Architecture

### Tech Stack
- **Framework**: Nuxt 4.1.2 with TypeScript
- **UI Library**: Nuxt UI 4.0.0 (provides Tailwind CSS and component library)
- **Package Manager**: pnpm (v10.17.1)
- **Fonts**: Poppins (loaded via @nuxt/fonts from Google Fonts)
- **Icons**: Lucide and Simple Icons via @iconify-json
- **Email**: Resend for contact form submissions

### Directory Structure

```
app/
├── app.vue              # Root component with SEO meta and UApp layout wrapper
├── app.config.ts        # App-level UI configuration (colors, button defaults)
├── pages/               # File-based routing (index, about, team, partners, etc.)
├── components/          # Vue components (auto-imported)
├── assets/css/          # Custom Tailwind theme and typography
├── types/               # TypeScript type definitions
server/api/              # Nitro server routes (email handlers)
```

### Design System

The site uses a **TED-inspired dramatic typography system** with high contrast:

- **Colors**: Black/white primary with gold/orange accents (`#c59640`)
- **Typography**: Poppins font with custom scale (`.display-xl`, `.display-lg`, `.text-hero`, `.text-lead`)
- **Spacing**: Dramatic section spacing (`.section-massive`, `.section-large`)
- **Buttons**: Sharp, geometric styles with uppercase text (`btn-primary`, `btn-menu`)

Custom CSS variables are defined in `app/assets/css/main.css` for fonts and colors.

### Key Components

- **SiteHeader**: Navigation with logo and social links
- **SpeakerProfile**: Reusable speaker card with photo, name, title, company, bio
- **JoinCommunity**: Final CTA section with multiple action buttons

### Server API

Contact form emails are handled via `server/api/emails/sendAdminEmail.ts` using Resend. Requires:
- `SAM_RESEND_API_KEY` - Resend API key
- `ADMIN_EMAIL` - Destination email for enquiries

### Configuration

- **nuxt.config.ts**: Module configuration, route rules, Google Analytics (gtag)
- **app.config.ts**: Nuxt UI theme customization (primary color, button variants)
- Google Analytics ID: `G-BX04VF3EPE`

### Content Patterns

Speaker data is defined directly in page components as arrays (see `app/pages/index.vue`). Each speaker object includes: name, profilePicUrl, title, company, bio, and optionally linkedInUrl.

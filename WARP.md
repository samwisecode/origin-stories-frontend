# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **Nuxt 4** application built with **Nuxt UI** as the design system foundation. The project follows the "Origin Stories Frontend" branding but is currently based on the Nuxt UI starter template structure.

## Technology Stack

- **Framework**: Nuxt 4.1.2
- **UI Library**: Nuxt UI 4.0.0 (with Tailwind CSS)
- **Language**: TypeScript
- **Package Manager**: pnpm (v10.17.1)
- **Typography**: Inter font family (100-900 weights)
- **Styling**: TED-inspired design system with dramatic typography
- **Color Palette**: High-contrast black/white with orange accents
- **Icons**: Lucide icons via @iconify-json/lucide
- **Image Optimization**: @nuxt/image
- **Linting**: ESLint with @nuxt/eslint

## Development Commands

### Package Management

```bash
pnpm install          # Install dependencies
```

### Development Server

```bash
pnpm dev              # Start development server on http://localhost:3000
```

### Build & Production

```bash
pnpm build            # Build for production
pnpm preview          # Preview production build locally
```

### Code Quality

```bash
pnpm lint             # Run ESLint
pnpm typecheck        # Run TypeScript type checking
```

## Architecture & File Structure

### Directory Structure

- `app/` - Main application directory (Nuxt 4 structure)
  - `app.vue` - Root application component with UApp layout
  - `app.config.ts` - App configuration (UI colors: primary=green, neutral=slate)
  - `pages/` - File-based routing
  - `components/` - Vue components (AppLogo.vue, TemplateMenu.vue)
  - `assets/css/` - Stylesheets with custom Tailwind theme

### Key Architectural Patterns

**Layout System**: Uses Nuxt UI's layout components (`UApp`, `UHeader`, `UMain`, `UFooter`) for consistent structure across the application.

**Component Architecture**:

- `UApp` wrapper provides the main application shell
- `UHeader` contains navigation with logo and template menu on the left, color mode toggle and GitHub link on the right
- Template menu is a dropdown showing different Nuxt UI template options
- Custom `AppLogo` component renders SVG logo with CSS custom properties for theming

**Design System**:

- TED-inspired dramatic typography with ultra-bold headlines
- High-contrast black/white layout with strategic orange and African-style sunset accents
- Massive section spacing for visual impact (`section-massive`, `section-large`)
- Custom typography scale: `.display-xl`, `.display-lg`, `.display-md`, `.text-hero`, `.text-lead`
- Sharp, geometric button styles with uppercase text and bold borders

**SEO & Meta Management**:

- Centralized SEO configuration in `app.vue` using `useSeoMeta` composable
- Includes Open Graph and Twitter card metadata
- Viewport and favicon configuration handled at root level

## UI Component System

This project uses **Nuxt UI** components extensively:

- Layout: `UApp`, `UHeader`, `UMain`, `UFooter`, `USeparator`
- Navigation: `UButton`, `UDropdownMenu`, `UColorModeButton`
- Content: `UPageHero`, `UPageSection`, `UPageCTA`
- All components are auto-imported (no explicit imports needed)

## Configuration Files

### Nuxt Configuration (`nuxt.config.ts`)

- Modules: `@nuxt/eslint`, `@nuxt/ui`, `@nuxt/image`, `@nuxt/fonts`
- Route rules: Homepage prerendered (`'/'`: `{ prerender: true }`)
- ESLint config: `commaDangle: 'never'`, `braceStyle: '1tbs'`
- Custom CSS: `~/assets/css/main.css`

### TypeScript Configuration

- Uses Nuxt's auto-generated TypeScript configurations
- References separate configs for app, server, shared, and node environments

## Development Tips

### Component Development

- All Nuxt UI components are auto-imported - no need to import them explicitly
- Use the established color palette (black primary, slate neutral)
- Follow the existing component patterns (TemplateMenu) for consistency

### Styling Guidelines

- Leverage existing Tailwind classes and the custom green color palette
- Use CSS custom properties for dynamic theming (`var(--ui-primary)`)
- Maintain the established design system consistency

### Performance Considerations

- Homepage is prerendered for optimal loading
- Images should use the `@nuxt/image` module for optimization
- Leverage Nuxt's auto-imports and tree-shaking capabilities

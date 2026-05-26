# React Portfolio - Comprehensive Codebase Documentation

**Generated:** 2026-04-25
**Last Updated:** 2026-04-25
**Project Owner:** Yash Gulati
**Framework:** Next.js 14.0.4 with React 18

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Directory Structure](#directory-structure)
4. [Key Files & Configuration](#key-files--configuration)
5. [Component Architecture](#component-architecture)
6. [Routing & Pages](#routing--pages)
7. [Styling System](#styling-system)
8. [Assets & Media](#assets--media)
9. [Build & Deployment](#build--deployment)
10. [Features & Functionality](#features--functionality)
11. [Recent Updates](#recent-updates)
12. [File Statistics](#file-statistics)

---

## Project Overview

This is a **modern portfolio website** showcasing Yash Gulati's work as a web developer and computer science student. The site features:
- **Homepage**: Hero section with animations and featured sections
- **About Page**: Dedicated page for personal background, education, and skills
- **Work Portfolio**: 6 major projects showcase
- **Client Testimonials**: Auto-rotating reviews
- **Responsive Design**: Optimized for all devices

**Project Statistics:**
- Total Size: 308MB
- Source Code: 310KB+
- Assets: 5.6MB
- JavaScript Files: 33+
- CSS Files: 22+
- Current Branch: main

**Contact Information:**
- Email: i.yashgulati@gmail.com
- Fiverr: yash2007
- Location: Indonesia
- Education: Currently enrolled in Computer Science program

---

## Technology Stack

### Core Technologies
- **Framework:** Next.js 14.0.4
- **UI Library:** React 18
- **Language:** JavaScript (no TypeScript)
- **Styling:** CSS Modules
- **Build Tool:** Next.js built-in
- **Additional:** jQuery 3.7.1

### Dependencies
```json
{
  "next": "14.0.4",
  "react": "^18",
  "react-dom": "^18",
  "jquery": "^3.7.1"
}
```

### Configuration
- **Path Aliases:** `src` directory as base URL (jsconfig.json)
- **Font Loading:** Google Fonts via Next.js optimization
  - Primary: Poppins (9 weights: 100-900)
  - Secondary: Space Mono (monospace, 2 weights)

---

## Directory Structure

```
React-Portfolio/
├── .git/                          # Git repository metadata
├── .gitignore                     # Git ignore rules
├── jsconfig.json                  # JavaScript path alias config
├── next.config.js                 # Next.js configuration
├── package.json                   # Project dependencies & scripts
├── package-lock.json              # Locked dependency versions
├── README.md                      # Project documentation
│
├── public/                        # Static assets (5.6MB)
│   └── img/
│       ├── logo/
│       │   └── logo.png           # Portfolio logo
│       ├── mockup-bg/             # Project mockup backgrounds (6 files)
│       │   ├── cosmo.jpg
│       │   ├── jambox.jpg
│       │   ├── octavo.jpg
│       │   ├── taeger.jpg
│       │   ├── tc.jpg
│       │   └── tpc.jpg
│       ├── shapes/                # Decorative SVG shape assets (8 files)
│       │   ├── Shape014.png
│       │   ├── Shape028.png
│       │   ├── Shape035.png
│       │   ├── Shape041.png
│       │   ├── Shape053.png
│       │   ├── Shape064.png
│       │   ├── Shape087.png
│       │   └── Shape107.png
│       └── workImg/               # Project work section images (6 files)
│           ├── cosmonatsWorkSection.jpg
│           ├── jamboxWorkSection.jpg
│           ├── opWorkSection.jpg
│           ├── taWorkSection.jpg
│           ├── tcWorkSection.jpg
│           └── tpcWorkSection.jpg
│
└── src/                           # Source code (308KB)
    └── app/                       # Next.js App Router directory
        ├── layout.js              # Root layout component
        ├── page.js                # Homepage (/)
        ├── page.module.css        # Homepage styles
        ├── globals.css            # Global styles & CSS variables
        ├── favicon.ico            # Favicon asset
        │
        ├── components/            # Reusable components (7 total)
        │   ├── nav/               # Navigation component
        │   │   ├── nav.js         # [CLIENT] Nav with hamburger menu
        │   │   └── nav.module.css
        │   ├── home/              # Hero section
        │   │   ├── index.js
        │   │   └── index.module.css
        │   ├── about/             # About section
        │   │   ├── about.js       # [CLIENT] About with refs
        │   │   └── about.module.css
        │   ├── work/              # Work showcase
        │   │   ├── work.js
        │   │   └── work.module.css
        │   ├── contact/           # Contact CTA
        │   │   ├── contact.js
        │   │   └── contact.module.css
        │   ├── testimonials/      # Client testimonials
        │   │   ├── testimonials.js # [CLIENT] Auto-rotating carousel
        │   │   └── testimonials.module.css
        │   └── footer/            # Footer component
        │       ├── footer.js
        │       └── footer.module.css
        │
        └── work/                  # Work section routes
            ├── layout.js          # Work layout
            ├── page.js            # Work listing (/work)
            ├── page.module.css
            ├── globals.css
            │
            └── projects/          # Individual project pages (6 projects)
                ├── globals.css
                ├── projects.module.css
                │
                ├── jambox-games/
                │   ├── layout.js
                │   ├── page.js    # [CLIENT] Animated project page
                │   ├── jamboxSection.js
                │   └── jambox.module.css
                │
                ├── cosmonats/
                │   ├── layout.js
                │   ├── page.js    # [CLIENT]
                │   ├── cosmonatsSection.js
                │   └── cosmonats.module.css
                │
                ├── taeger-art/
                │   ├── layout.js
                │   ├── page.js    # [CLIENT]
                │   ├── taSection.js
                │   └── ta.module.css
                │
                ├── tiger-princess-club/
                │   ├── layout.js
                │   ├── page.js    # [CLIENT]
                │   ├── tpcSection.js
                │   └── tpc.module.css
                │
                ├── terminal-charging/
                │   ├── layout.js
                │   ├── page.js    # [CLIENT]
                │   ├── tcSection.js
                │   └── tc.module.css
                │
                └── octavo-press/
                    ├── layout.js
                    ├── page.js    # [CLIENT]
                    ├── opSection.js
                    └── op.module.css
```

---

## Key Files & Configuration

### Configuration Files

| File | Location | Purpose |
|------|----------|---------|
| `package.json` | `/` | Dependencies & NPM scripts |
| `next.config.js` | `/` | Next.js configuration (empty - using defaults) |
| `jsconfig.json` | `/` | Sets `src` as base path for imports |
| `.gitignore` | `/` | Excludes node_modules, .next, .env files |
| `README.md` | `/` | Standard Next.js documentation |

### Core Entry Points

| File | Path | Purpose |
|------|------|---------|
| **Root Layout** | `/src/app/layout.js` | Wraps entire app, sets Inter font, HTML metadata |
| **Homepage** | `/src/app/page.js` | Landing page composing all main sections |
| **Global Styles** | `/src/app/globals.css` | CSS variables, dark mode, base styling |
| **Work Layout** | `/src/app/work/layout.js` | Consistent metadata for work pages |
| **Work Listing** | `/src/app/work/page.js` | All project showcase sections |

### Absolute File Paths Reference

**Configuration:**
- `/Users/yashgulati/React-Portfolio/package.json`
- `/Users/yashgulati/React-Portfolio/next.config.js`
- `/Users/yashgulati/React-Portfolio/jsconfig.json`

**Core App Files:**
- `/Users/yashgulati/React-Portfolio/src/app/layout.js`
- `/Users/yashgulati/React-Portfolio/src/app/page.js`
- `/Users/yashgulati/React-Portfolio/src/app/globals.css`

**Components:**
- `/Users/yashgulati/React-Portfolio/src/app/components/nav/nav.js`
- `/Users/yashgulati/React-Portfolio/src/app/components/home/index.js`
- `/Users/yashgulati/React-Portfolio/src/app/components/about/about.js`
- `/Users/yashgulati/React-Portfolio/src/app/components/work/work.js`
- `/Users/yashgulati/React-Portfolio/src/app/components/testimonials/testimonials.js`
- `/Users/yashgulati/React-Portfolio/src/app/components/contact/contact.js`
- `/Users/yashgulati/React-Portfolio/src/app/components/footer/footer.js`

**Project Pages (6 total):**
- `/Users/yashgulati/React-Portfolio/src/app/work/projects/jambox-games/page.js`
- `/Users/yashgulati/React-Portfolio/src/app/work/projects/cosmonats/page.js`
- `/Users/yashgulati/React-Portfolio/src/app/work/projects/taeger-art/page.js`
- `/Users/yashgulati/React-Portfolio/src/app/work/projects/tiger-princess-club/page.js`
- `/Users/yashgulati/React-Portfolio/src/app/work/projects/terminal-charging/page.js`
- `/Users/yashgulati/React-Portfolio/src/app/work/projects/octavo-press/page.js`

---

## Component Architecture

### Component Hierarchy

#### Homepage (`/`) Structure
```
RootLayout (layout.js)
└── Home (page.js)
    ├── Navbar (nav.js) [CLIENT]
    ├── Hero (home/index.js)
    ├── About (about.js) [CLIENT]
    ├── Work (work.js)
    ├── Testimonials (testimonials.js) [CLIENT]
    ├── Contact (contact.js)
    └── Footer (footer.js)
```

#### Work Pages Structure
```
WorkLayout (work/layout.js)
├── Work Listing (work/page.js)
│   ├── Navbar
│   ├── JamboxSection
│   ├── CosmonatsSection
│   ├── TaegerSection
│   ├── TPCSection
│   ├── TCSection
│   ├── OctavoSection
│   └── Footer
│
└── Individual Project Page ([project]/page.js) [CLIENT]
    ├── Navbar
    ├── Context Section (header)
    ├── Summary Section (brief + info cards)
    ├── Viewport Section (image)
    ├── Problem & Solution Section
    ├── More Projects Table
    └── Footer
```

### Client vs Server Components

**Client Components** (marked with `"use client"`):
- `nav.js` - Requires interactivity (hamburger menu toggle)
- `about.js` - Uses refs for height comparison
- `testimonials.js` - State management for carousel rotation
- All project `page.js` files - Animation effects with refs and useEffect

**Server Components**:
- Homepage sections (home, work, contact, footer)
- Layout files
- Section components used in work listing

### Component Details

| Component | Type | File | Purpose |
|-----------|------|------|---------|
| **Navigation** | Client | `components/nav/nav.js` | Responsive nav with hamburger menu |
| **Hero** | Server | `components/home/index.js` | Landing section with intro text & shapes |
| **About** | Client | `components/about/about.js` | Professional background section |
| **Work** | Server | `components/work/work.js` | Featured projects showcase (3 cards) |
| **Testimonials** | Client | `components/testimonials/testimonials.js` | Auto-rotating client reviews (7s interval) |
| **Contact** | Server | `components/contact/contact.js` | CTA with email/Fiverr links |
| **Footer** | Server | `components/footer/footer.js` | Copyright footer |

---

## Routing & Pages

### Next.js App Router Structure

| Route | File Path | Type | Page Title |
|-------|-----------|------|------------|
| `/` | `app/page.js` | Homepage | "Home \| Yash Gulati" |
| `/about` | `app/about/page.js` | About Page | "About \| Yash Gulati" |
| `/work` | `app/work/page.js` | Work Listing | "Work \| Yash Gulati" |
| `/work/projects/jambox-games` | `app/work/projects/jambox-games/page.js` | Project Detail | "Jambox Games \| Yash Gulati" |
| `/work/projects/cosmonats` | `app/work/projects/cosmonats/page.js` | Project Detail | "Cosmonats \| Yash Gulati" |
| `/work/projects/taeger-art` | `app/work/projects/taeger-art/page.js` | Project Detail | "Taeger.art \| Yash Gulati" |
| `/work/projects/tiger-princess-club` | `app/work/projects/tiger-princess-club/page.js` | Project Detail | "Tiger Princess Club \| Yash Gulati" |
| `/work/projects/terminal-charging` | `app/work/projects/terminal-charging/page.js` | Project Detail | "Terminal Charging \| Yash Gulati" |
| `/work/projects/octavo-press` | `app/work/projects/octavo-press/page.js` | Project Detail | "Octavo Press \| Yash Gulati" |

### Featured Projects

1. **Jambox Games** (2023)
   - Game Publisher/Platform
   - Role: UI Design & Development
   - URL: jambox.games

2. **Cosmonats** (2023)
   - NFT Game
   - Role: UI Design & Development
   - URL: cosmonats.com

3. **Taeger.art** (2023)
   - Artist Portfolio
   - Role: Full Development

4. **Tiger Princess Club** (2022)
   - NFT Club
   - Role: Full Development

5. **Terminal Charging** (2022)
   - EV Startup
   - Role: Full Development

6. **Octavo Press** (2023)
   - Book Publishing
   - Role: Full Development

---

## Styling System

### CSS Module Architecture
- **Pattern:** CSS Modules with `.module.css` extension
- **Scope:** Component-level scoped styles
- **Benefits:** No global namespace pollution, maintainable component styling

### Global Styles

Located in `globals.css` files:
- `/src/app/globals.css` - Base resets, CSS variables, dark mode
- `/src/app/work/globals.css` - Work section specific
- `/src/app/work/projects/globals.css` - Project pages specific

### CSS Custom Properties

```css
:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --navbg: black;
  --footerbg: black;
  /* Color schemes for light/dark modes */
}
```

### Font Strategy

**Primary Font:** Poppins
- Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
- Use: Body text, headings, UI elements

**Secondary Font:** Space Mono
- Weights: 400, 700
- Use: Monospace/code elements

**Loading:** Next.js `next/font/google` for optimization

### Responsive Design

- **Mobile Breakpoint:** 768px
- **Approach:** Mobile-first with media queries
- **Layout:** CSS Grid & Flexbox
- **Transitions:** CSS animations for smooth interactions

### Styling Features
- Hamburger menu animation (transform/rotate)
- Auto-rotating testimonials carousel
- Decorative dotted backgrounds
- Floating shape elements
- Fade-in animations on project pages
- Responsive image handling

---

## Assets & Media

### Asset Organization

**Total Assets:** 23 files (5.6MB)

#### Logo
- `/public/img/logo/logo.png`

#### Decorative Shapes (8 files)
- `/public/img/shapes/Shape014.png`
- `/public/img/shapes/Shape028.png`
- `/public/img/shapes/Shape035.png`
- `/public/img/shapes/Shape041.png`
- `/public/img/shapes/Shape053.png`
- `/public/img/shapes/Shape064.png`
- `/public/img/shapes/Shape087.png`
- `/public/img/shapes/Shape107.png`

#### Project Mockups (6 files)
- `/public/img/mockup-bg/cosmo.jpg`
- `/public/img/mockup-bg/jambox.jpg`
- `/public/img/mockup-bg/octavo.jpg`
- `/public/img/mockup-bg/taeger.jpg`
- `/public/img/mockup-bg/tc.jpg`
- `/public/img/mockup-bg/tpc.jpg`

#### Work Section Images (6 files)
- `/public/img/workImg/cosmonatsWorkSection.jpg`
- `/public/img/workImg/jamboxWorkSection.jpg`
- `/public/img/workImg/opWorkSection.jpg`
- `/public/img/workImg/taWorkSection.jpg`
- `/public/img/workImg/tcWorkSection.jpg`
- `/public/img/workImg/tpcWorkSection.jpg`

---

## Build & Deployment

### NPM Scripts

```json
{
  "dev": "next dev",        // Start development server (localhost:3000)
  "build": "next build",    // Create production build
  "start": "next start",    // Start production server
  "lint": "next lint"       // Run ESLint
}
```

### Build Configuration

- **Next.js Config:** Empty (using defaults)
- **Image Optimization:** Next.js defaults
- **Static Generation:** Enabled for all pages
- **Deployment Target:** Vercel (recommended in README)

### Deployment Readiness
- Optimized for Vercel deployment
- Static optimization possible
- No API routes or server-side dependencies
- Self-contained asset structure

---

## Features & Functionality

### Interactive Features

#### 1. Responsive Navigation
- **File:** `components/nav/nav.js`
- **Feature:** Hamburger menu toggle
- **Implementation:** State-based animation with staggered line transforms
- **Breakpoint:** 768px mobile-first

#### 2. Auto-Rotating Testimonials
- **File:** `components/testimonials/testimonials.js`
- **Feature:** 7-second auto-rotation carousel
- **Testimonials:** 2 featured client reviews
- **Implementation:** useState + useEffect interval

#### 3. Project Page Animations
- **Files:** All project `page.js` files
- **Feature:** Fade-in animation on mount
- **Implementation:** Refs-based class additions with useEffect

#### 4. Decorative Elements
- Dotted background patterns
- Floating shape images
- Responsive positioning
- Dynamic layouts

### Backend & API

**Status:** NO BACKEND/API

This is a **purely static portfolio website** with:
- No API routes (`/app/api/` doesn't exist)
- No server-side functionality
- No database integration
- Static content only

**External Links:**
- Fiverr profile: yash2007
- Email: i.yashgulati@gmail.com
- Project URLs: jambox.games, cosmonats.com, etc.

### Accessibility & Best Practices
- Semantic HTML structure
- Alt text for images
- Responsive mobile-first design
- Optimized font loading
- Component-based architecture

---

## File Statistics

### Project Breakdown

| Category | Count | Size |
|----------|-------|------|
| **JavaScript Files** | 30 | ~100KB |
| **CSS Files** | 20 | ~50KB |
| **Image Assets** | 23 | ~5.5MB |
| **Configuration Files** | 5 | ~1KB |
| **Total Files** | 78 | **~308MB** |

### Code Organization

- **Components:** 7 main components (14 files with CSS)
- **Pages:** 8 total (homepage + work listing + 6 projects)
- **Layouts:** 8 layout files
- **Assets:** 23 image files organized by type

---

## Development Notes

### Current Git Status
- **Branch:** main
- **Untracked Files:** `src/app/tempCodeRunnerFile.js`
- **Recent Commits:**
  - e7eefb8 Changed Favicon
  - ee0add8 Added titles to pages
  - c48e649 Fixed Images
  - bda5a65 Added more projects table to each work page

### Code Quality Observations
- Mix of `className` and `class` attributes (inconsistent)
- Some console.log statements in production code
- jQuery imported but not actively used
- Temporary file present: `tempCodeRunnerFile.js`

### Recommended Improvements
1. Standardize on `className` (React convention)
2. Remove development console.log statements
3. Remove unused jQuery dependency
4. Delete temporary files
5. Add TypeScript for type safety
6. Implement ESLint configuration
7. Add image alt text consistently

---

## Recent Updates

### April 25, 2026 - Major Enhancements

#### 1. **New About Page Created** (`/about`)
- **Location**: `/src/app/about/`
- **Features**:
  - Dedicated hero section with gradient text animation
  - Personal background and story section
  - Education section highlighting current university enrollment
  - Skills & expertise showcase with card grid
  - CTA section with contact buttons
  - Fully responsive design
  - Scroll-triggered animations using Intersection Observer
  - Floating shape animations throughout the page

#### 2. **Navigation Updated**
- Added "About" link to navbar between "Home" and "Work"
- Updated navbar in `/src/app/components/nav/nav.js`
- Navigation now includes: Home | About | Work

#### 3. **Animation Improvements**
- **Removed**: Moving background animation on homepage (dotted pattern now static)
- **Enhanced**: Blurred shape animations now have floating effects throughout all pages
- **Added**: Scroll-reveal animations on About page sections
- **Maintained**: Gradient text animation, entrance animations, and other effects

#### 4. **Homepage Fixes**
- Fixed all `class` to `className` for React compliance
- Removed invalid `<body>` tags from page components
- Fixed HTML structure issues
- Added smooth scrolling globally

#### 5. **File Structure Updates**
```
New files added:
├── src/app/about/
│   ├── layout.js          # About page layout with metadata
│   ├── page.js            # About page component with animations
│   └── page.module.css    # About page styles with animations
```

#### 6. **Styling Enhancements**
- Glassmorphism effects on About page cards
- Backdrop blur on navigation
- Improved button hover animations
- Enhanced responsive breakpoints
- Mobile-optimized text sizing

---

## Summary

This is a **modern, performance-optimized portfolio website** featuring:

- Next.js 14 for server-side rendering and static generation
- React 18 for interactive UI components
- CSS Modules for scoped, maintainable styling
- Strategic use of client components for interactive features
- Responsive mobile-first design
- Asset-rich presentation with 23 optimized images
- Multi-page structure with dedicated About page and 6 featured projects
- Clean component-based architecture following React best practices
- Scroll-triggered animations for enhanced user experience
- Educational background and professional experience showcase

The codebase is well-organized with clear separation of concerns between layout, components, and styling. All pages are statically generated for maximum performance, with minimal interactivity implemented only where necessary using client components.

**Key Pages:**
- **Home** (`/`): Landing page with hero, about section, work preview, testimonials, and contact
- **About** (`/about`): Personal background, education, and skills
- **Work** (`/work`): Full portfolio showcase with all 6 projects
- **Project Details**: Individual pages for each project

---

**Documentation Generated:** 2026-04-25
**Last Updated:** 2026-04-25
**Maintained By:** Claude Code

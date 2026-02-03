# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Project Europa is a cyberpunk/sci-fi themed portfolio website for a freelance web development and cloud infrastructure business. It is being migrated from a static HTML/CSS/JS site to Next.js.

## Architecture

Next.js 16 App Router with TypeScript and Tailwind CSS v4:

- **Pages**: `app/` directory using App Router conventions (`page.tsx` per route)
- **Routes**: `/` (home), `/about`, `/skill`, `/portfolio`, `/contact`, `/contact/success`
- **Components**: `components/` directory with shared UI components
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` + custom theme in `app/globals.css`
- **Fonts**: Google Fonts loaded in `app/layout.tsx` via `next/font`

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run Biome check (lint + format)
- `npm run lint:fix` — Run Biome check with auto-fix
- `npm run format` — Run Biome format with auto-fix

## Key Patterns

- **Client Components**: Components with interactivity (Navbar, StarField, etc.) use `"use client"` directive
- **CyberCard**: Reusable card component (`components/ui/CyberCard.tsx`) with cyberpunk frame styling (corner decorations, pulsing lines, glow effects). Used across all pages.
- **SectionTitle**: Shared section heading component with English title and Japanese subtitle
- **Theme Colors**: Defined as CSS custom properties in `globals.css` — `cyber-black`, `cyber-blue` (#26dafd), `cyber-light`, `cyber-header`, `cyber-content`, `cyber-error`
- **Animations**: Custom Tailwind keyframes defined in `globals.css` — typing, blink, scanline, frame-appear, text-appear, line-appear, rotate
- **Bilingual**: Japanese primary content with English subtitles/labels
- **Responsive**: Mobile-first with Tailwind breakpoints; mobile hamburger menu in Navbar

## External Dependencies

- Google Fonts: Titillium Web, Rajdhani, Electrolize, Share Tech Mono
- tw-animate-css for animation utilities (Tailwind v4 compatible)

## Legacy

The original static HTML/CSS/JS site can be referenced from Git history prior to the Next.js migration.

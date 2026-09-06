# 1Fi Marketplace

A fully implemented **1Fi Marketplace** section built inside the existing Shop experience, as part of the 1Fi SDE Intern Assignment.

## Overview

This project adds a **1Fi Marketplace** tab to the Shop page, alongside the existing (unimplemented) Top Brands and Nearby Stores tabs. The Marketplace lets users browse products, view details, select a variant and an EMI plan, and proceed — all backed by a mock async data layer rather than hardcoded UI data.

## Features

- Product listing with live search (by name or category)
- Product details with image, description, and variant selection (price updates dynamically)
- EMI plan selection with a clear single-select state, including a disabled/unavailable plan example
- "Proceed with EMI" CTA that reflects the current selection and is disabled until a plan is chosen
- A confirmation screen summarizing the selected product, variant, and EMI plan
- Loading, error (with retry), and empty states throughout
- Responsive layout verified at mobile, tablet, and desktop widths
- Static bottom navigation bar for visual/shell consistency with the reference app

## Tech Stack

- React + TypeScript
- Vite
- React Router (client-side routing)
- Plain CSS with a shared design-token file (no UI framework, to closely match 1Fi's existing visual language)

## Project Structure

\`\`\`
src/
  components/
    common/       → generic reusable UI (Tabs, SearchBar, PrimaryButton, BottomNav, Loading/Error/Empty states)
    marketplace/  → feature-specific UI (ProductCard, VariantSelector, EmiPlanCard)
  pages/
    Shop/         → Shop page with the 3 tabs
    ProductDetails/ → product detail + EMI selection + confirmation
  services/       → productService.ts, emiService.ts — simulated async API layer
  data/           → mock product and EMI plan datasets
  types/          → Product, ProductVariant, EmiPlan TypeScript types
  hooks/          → useProducts, useProductDetails — data-fetching + loading/error state
  styles/         → tokens.css — shared design tokens (colors, spacing, radius, shadows)
\`\`\`

Product and EMI data are never imported directly into UI components. Components call hooks (`useProducts`, `useProductDetails`), which call the service layer, which currently reads from mock data but could be swapped for a real API without changing any component code.

## Running Locally

\`\`\`bash
npm install
npm run dev
\`\`\`

Then open the printed local URL (typically `http://localhost:5173`).

To verify a production build:

\`\`\`bash
npm run build
\`\`\`

## Mock API

`services/productService.ts` and `services/emiService.ts` simulate real API calls: they return Promises with an artificial delay, and expose a `FAILURE_RATE` constant that can be temporarily set above `0` to test the error/retry UI.

## User Flow

\`\`\`
Shop
 └─ 1Fi Marketplace tab
      └─ Product Listing (search + cards)
           └─ Product Details
                └─ Variant Selector
                └─ EMI Plan Selector
                └─ Proceed CTA → Confirmation summary
\`\`\`

## Design Consistency

Visual design (colors, typography, spacing, card radius, shadows) was derived from reference screenshots of the existing 1Fi Shop page and encoded as CSS variables in `styles/tokens.css`, rather than hardcoded per-component. The Marketplace's product cards intentionally follow the same layout pattern as the existing "Nearby Stores" list cards for visual consistency. A static bottom navigation bar was also added purely for visual/shell completeness, matching every reference screenshot, though it was not explicitly required by the brief.

## Future Improvements

- Persist selected EMI plan / cart state across sessions
- Replace mock service layer with a real backend API
- Add automated component tests
- Add pagination or infinite scroll for larger product catalogs
- Support multiple variant dimensions per product (e.g., color AND size simultaneously)
- Wire up the bottom nav to real routes if other sections are ever built
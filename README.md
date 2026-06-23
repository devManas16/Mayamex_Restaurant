# Capri By Mayamex Website

This is a responsive, mobile-first one-page restaurant website for **Capri By Mayamex**, an Italian Steakhouse & Seafood restaurant.

## Features
- **Modern Design**: Warm Italian palette (deep red, cream, gold) and elegant typography.
- **Responsive Layout**: Mobile-first approach with sticky CTAs for small screens.
- **Sections**:
  - Hero with tagline and rating badge.
  - Popular Dishes grid with star ratings.
  - Hours & Location with embedded Google Map.
  - Minimalist footer.
- **AI Chat Widget**: 
  - Answers questions about specific menu items (Bread, Shrimp Scampi, Lasagna, Caesar Salad).
  - Provides quick action buttons for reservations and online ordering.
  - Features typing animations and conversation logging.

## Tech Stack
- Vanilla JavaScript
- CSS3 (Custom properties, Flexbox, Grid)
- Vite (Dev server and build tool)
- Google Fonts (Playfair Display & Inter)

## Getting Started

### Prerequisites
- Node.js installed

### Installation
1. Clone or download the repository.
2. Navigate to the project directory:
   ```bash
   cd capri-site
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
To run the development server:
```bash
npx vite
```

### Production Preview
To build and preview the production site:
```bash
npx vite build
npx vite preview --port 3000
```

## Deployment
This site can be deployed to any static hosting provider (GitHub Pages, Netlify, Vercel). To build for production:
```bash
npm run build
```
The output will be in the `dist/` directory.

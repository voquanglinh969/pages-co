# Pages & Co.

A book store UI built with React + Vite, styled with pure CSS, and powered by mock data plus small JavaScript utilities for cart and UI feedback.

## Tech Stack

- React + Vite
- React Router
- Pure CSS
- Flexbox / CSS Grid
- JavaScript interactions
- Mock data

## Project Structure

- `src/pages` contains the main screens:
  - `HomePage` for the landing page
  - `BooksPage` for the catalog view
  - `BookDetailPage` for the product detail view
  - `CheckoutPage` for the cart and checkout flow
- `src/components` contains reusable UI pieces:
  - `Shared` for common building blocks like `BookCard`, `Breadcrumb`, `CatalogFilter`, and `TopicCard`
  - `HomePage` for homepage-specific sections
  - `Checkout` for checkout UI pieces
  - `NavBar` and `Footer` for global layout parts
- `src/data` stores static JSON data used as the app source of truth:
  - `api-data/books.json`
  - `api-data/topics.json`
  - `navbar-data/navbar.json`
- `src/scripts` holds plain JavaScript helpers for interaction:
  - `cart.js` for localStorage cart persistence
  - `ui-feedback.js` for toast/loading feedback
  - `home-hero.js` and `login-modal.js` for page-specific behavior
- `src/styles` is split by responsibility:
  - global base and variables
  - page styles
  - component-specific styles

## Data Flow

1. Product listing and detail pages read from `books.json`.
2. Clicking a product navigates to `/books/:slug`.
3. `Add to bag` stores the selected book in `localStorage`.
4. The navbar bag badge reads the cart count from `localStorage`.
5. The checkout page reads the cart, allows quantity changes, and clears the cart after successful checkout.

## How To Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build

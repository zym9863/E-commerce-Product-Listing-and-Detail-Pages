[English Version](/README_EN.md) | [中文文档](/README.md)

# E-commerce Product Listing & Detail Pages

This project is an e-commerce product listing and detail page application built with [Next.js](https://nextjs.org). It features product lists, product details, a shopping cart, and a modern responsive UI.

## Main Features
- Product List: Browse all products with name, price, discount, rating, etc.
- Product Detail: View detailed information for each product, including description, images, price, stock, and features.
- Shopping Cart: Add/remove products, adjust quantity, calculate total price, and clear the cart.
- Global navigation bar and footer for a great user experience.

## Directory Structure
```
src/
  app/                // Next.js routes and pages
    page.tsx          // Home page (welcome)
    layout.tsx        // Global layout
    products/         // Product-related pages
      [id]/page.tsx   // Product detail page (dynamic route)
  components/         // Reusable components
    ProductCard.tsx   // Product card component
    CartDrawer.tsx    // Shopping cart drawer component
    AddToCartButton.tsx // Add to cart button
    Navbar.tsx        // Navigation bar
    Footer.tsx        // Footer
  context/            // Global state management
    CartContext.tsx   // Shopping cart context
  lib/                // Business logic and data
    data/products.ts  // Product data and data operations
```

## Getting Started
1. Install dependencies:
```bash
npm install
```
2. Start the development server:
```bash
npm run dev
```
3. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Tech Stack
- Next.js 13+
- React 18
- TypeScript
- Tailwind CSS

## Highlights
- All pages and components support dark mode
- Local product data for easy secondary development
- Clear code structure, easy to extend

## Use Cases
- E-commerce prototype development
- Advanced Next.js/React learning
- Component-based development practice

---
For customization or feature extension, start from `src/components` and `src/lib/data/products.ts`.

Feedback and contributions are welcome!

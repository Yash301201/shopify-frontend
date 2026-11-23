# Shopify E-Commerce Web Application

A React-based e-commerce application featuring product browsing, product details, a wishlist, authentication pages, and product management routes. The frontend is deployed on Vercel and connects to a separate JSON Server backend hosted on Render.

**[🌐 View Live Demo](https://shopify-frontend-snowy.vercel.app/)** · **[Backend Repository](https://github.com/Yash301201/shopifybackend)**

## Project Overview

This project demonstrates a React frontend with client-side routing, Redux Toolkit state management, and API integration using Axios. It includes product listings, individual product details, a wishlist with a visible item count, and routes for registering, logging in, adding products, and editing products.

## Features

- **Product catalog:** Browse available products and open product details.
- **Wishlist:** Add and remove products through Redux state management.
- **User pages:** Registration, login, and logout flows.
- **Product management:** Protected routes for adding and editing products.
- **Backend integration:** Axios requests to a JSON Server API deployed on Render.
- **Responsive frontend:** Built with React and CSS.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React, JavaScript, HTML, CSS |
| Build tool | Vite |
| Routing | React Router |
| State management | Redux Toolkit, React Redux |
| HTTP client | Axios |
| Backend | JSON Server (separate repository) |
| Deployment | Vercel (frontend), Render (backend) |

## Live Demo & Source

- **Live website:** https://shopify-frontend-snowy.vercel.app/
- **Frontend repository:** https://github.com/Yash301201/shopify-frontend
- **Backend repository:** https://github.com/Yash301201/shopifybackend

## Run Locally

```bash
git clone https://github.com/Yash301201/shopify-frontend.git
cd shopify-frontend
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

The Axios client in `src/services/api.js` points to the hosted backend. If you are running your own backend, update that base URL.

## Main Application Structure

```text
src/
├── app/          # Redux store
├── components/   # Navbar and product cards
├── features/     # Wishlist Redux slice
├── pages/        # Page components
├── routes/       # React Router and protected routes
└── services/     # Axios API client
```

## Deployment Notes

The frontend is hosted on Vercel, and the API is hosted separately on Render. JSON Server is suitable for learning and demonstrations; file-based changes on ephemeral hosting may not persist after restarts or redeployments.

---

**Developed by S. Yashaswi** · [Live Demo](https://shopify-frontend-snowy.vercel.app/)

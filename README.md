# PhoneHerau

PhoneHerau is a modern React + Vite web app that helps users discover the best smartphone options based on their budget. Users can enter a budget in NPR or choose from quick budget ranges to see curated recommendations, including a top pick, featured phones, and hidden gems.

## Features

- Budget-based phone recommendations
- Quick selection for common price ranges
- Detailed phone cards with pricing and reasons to buy
- Responsive UI built with Tailwind CSS
- Route-based results pages for each budget range

## Tech Stack

- React
- React Router DOM
- Vite
- Tailwind CSS
- ESLint

## Project Structure

- src/App.jsx: Main app routing
- src/components/Homepage.jsx: Landing page and budget input
- src/components/ResultsPage.jsx: Budget-based phone results view
- src/data/phone.js: Phone recommendation data by price range

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal (usually http://localhost:5173).

## Available Scripts

- npm run dev: Start the Vite development server
- npm run build: Build the project for production
- npm run preview: Preview the production build locally
- npm run lint: Run ESLint checks

## Supported Budget Ranges

The app currently supports these budget ranges:

- 20k - 30k
- 30k - 40k
- 40k - 50k
- 50k - 70k
- 70k - 100k+

## Notes

Phone recommendations and details are stored in src/data/phone.js, making it easy to update product information or add new phone categories in the future.

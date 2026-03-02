# Michael Martin Pagaran – Portfolio

This is a modern, responsive portfolio website built with [Next.js](https://nextjs.org), [Tailwind CSS v4](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com). It features a business-driven design with glassmorphism, dark mode support, and interactive components.

## Features

- **Next.js 15 App Router** for fast, statically-rendered pages
- **Tailwind CSS v4** styling with custom design tokens (Gold, Navy, Teal)
- **shadcn/ui** components for accessible, reusable UI elements
- **Dark Mode** toggle with system preference detection (`next-themes`)
- **Responsive Layout** optimized for mobile, tablet, and desktop
- **Lucide Icons** for clean, consistent vector graphics

## Tech Stack

- Framework: Next.js 15
- Styling: Tailwind CSS v4
- Components: shadcn/ui (Radix UI)
- Icons: Lucide React
- Theme: next-themes
- Language: TypeScript

## Local Development Setup

To run this project on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.17 or higher) installed on your system.

### 1. Install Dependencies
Navigate to the project directory and install the required packages:

```bash
npm install
```

### 2. Run the Development Server
Start the Next.js local development server:

```bash
npm run dev
```

### 3. View the Application
Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

The application supports hot-reloading, so any changes you make to the code will automatically reflect in the browser.

## Project Structure

- `src/app/` - Next.js App Router pages and global CSS
- `src/components/` - Reusable UI components
  - `home/` - Sections specific to the home page (Hero, Skills, Experience, etc.)
  - `ui/` - shadcn base components
- `src/data/` - Centralized content data (portfolio contents, case studies, etc.)
- `public/` - Static assets (images, icons)

## Production Build

To build the project for production, run:

```bash
npm run build
```

To test the production build locally:

```bash
npm run start
```

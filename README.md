# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🎨 **Modern Professional Design**: Sleek Slate/Indigo/Violet palette with glassmorphism effects.
- 🌓 **Dark/Light Mode**: Fully themeable UI with smooth transitions and deep dark mode.
- 📬 **Interactive Contact Form**: Built-in validation and success feedback.
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop.
- ⚡ **High Performance**: Built with Next.js 14+ (App Router) and optimized assets.
- � **Freelance Integration**: Direct links to Upwork and Fiverr profiles.
- 💻 **Type Safety**: Full TypeScript support.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects section
│   ├── ProjectCard.tsx # Individual project card
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer component
│   ├── ThemeToggle.tsx # Theme switcher
│   └── ThemeProvider.tsx # Theme context provider
└── ...
```

## Customization

Update the following files to customize your portfolio:

- `components/Hero.tsx` - Update your bio and skills
- `components/Projects.tsx` - Add your projects
- `components/About.tsx` - Update your bio and certificates
- `components/Contact.tsx` - Update contact information

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)


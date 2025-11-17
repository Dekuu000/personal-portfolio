# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern blue/purple gradient design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Smooth scroll navigation
- 🚀 Built with Next.js 14+ (App Router)
- 💻 TypeScript for type safety

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


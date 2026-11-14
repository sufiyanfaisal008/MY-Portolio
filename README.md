# Sufiyan Faisal — Portfolio

React.js + Vite portfolio with client-side routing (no page refresh), dark/light theme, and animations.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build
```

## 📁 Project Structure

```
sufiyan-react-portfolio/
├── index.html                  ← Vite entry point
├── vite.config.js              ← Vite config
├── package.json
├── .gitignore
├── src/
│   ├── main.jsx                ← ReactDOM root + HashRouter
│   ├── App.jsx                 ← Routes + Theme toggle
│   ├── assets/
│   │   └── photo.jpg           ← Your profile photo
│   ├── styles/
│   │   └── index.css           ← All styles + design tokens
│   └── components/
│       ├── Navbar.jsx          ← Sticky nav + mobile menu
│       ├── Home.jsx            ← Hero + typing animation
│       ├── About.jsx           ← About + stats
│       ├── Skills.jsx          ← Tech skills grid
│       ├── Experience.jsx      ← Timeline
│       ├── Projects.jsx        ← Project cards
│       ├── Contact.jsx         ← Social links + phone
│       ├── Footer.jsx          ← Footer
│       └── icons.jsx           ← All SVG icons
└── README.md
```

## 🛠️ Tech Stack

- **React 18** + **Vite 5**
- **React Router DOM v6** (HashRouter — works on GitHub Pages)
- **CSS Custom Properties** (design tokens)
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono

## 🌐 Deploy on GitHub Pages

```bash
# 1. Build
npm run build

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Add to package.json scripts:
#    "deploy": "gh-pages -d dist"

# 4. Deploy
npm run deploy
```

## ▲ Deploy on Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Framework: **Vite** — click Deploy

## 👤 Developer

**Sufiyan Faisal** — Full-Stack Web Developer  
GitHub: https://github.com/sufiyanfaisal008  
LinkedIn: https://www.linkedin.com/in/sufiyan-faisal-949836293/

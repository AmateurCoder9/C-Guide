# C++ Academy

A modern, premium SaaS-style educational website for learning C++ programming. Built with React + Tailwind CSS.

## Features

- **7 Structured Chapters** — From Introduction to Advanced C++ concepts
- **100+ Code Examples** — Every topic includes runnable code with expected output
- **No Login Required** — Fully open, free access
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Premium UI** — Clean, minimal design with smooth animations

## Tech Stack

- **React** (via Vite)
- **Tailwind CSS v4**
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ChapterCard.jsx
│   ├── ChapterViewer.jsx
│   ├── CodeBlock.jsx
│   ├── Accordion.jsx
│   ├── Features.jsx
│   ├── Stats.jsx
│   ├── ProductPreview.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   └── ScrollReveal.jsx
├── data/             # Chapter content
│   ├── chapters.js   # Index file
│   ├── chapter1.js   # Introduction to C++
│   ├── chapter2.js   # Data Types, Variables & Operators
│   ├── chapter3.js   # Control Flow Statements
│   ├── chapter4.js   # Functions
│   ├── chapter5.js   # Arrays & Strings
│   ├── chapter6.js   # Object-Oriented Programming
│   └── chapter7.js   # Advanced C++ Concepts
├── App.jsx           # Main application
├── main.jsx          # Entry point
└── index.css         # Global styles & Tailwind theme
```

## Chapters

1. **Introduction to C++** — Program structure, I/O, comments, preprocessor directives
2. **Data Types, Variables & Operators** — Types, constants, arithmetic, relational, logical operators
3. **Control Flow Statements** — if-else, switch, for, while, do-while, break, continue
4. **Functions** — Declaration, pass by value/reference, overloading, recursion
5. **Arrays & Strings** — 1D/2D arrays, C-strings, std::string
6. **Object-Oriented Programming** — Classes, constructors, inheritance, polymorphism
7. **Advanced C++** — Pointers, file handling, exceptions, templates, STL

## License

Free and open for everyone.

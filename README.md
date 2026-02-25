# iPhone 15 Pro — Apple Website Clone

A pixel-faithful clone of the Apple iPhone 15 Pro product page, built with React, Three.js and GSAP.

## Features

- **Hero section** — Full-screen video that adapts to mobile/desktop viewport
- **Highlights carousel** — Autoplay video carousel with custom progress indicators and play/pause controls
- **3D iPhone viewer** — Interactive Three.js model with color and size selector (6.1" / 6.7"), animated transitions between sizes using GSAP
- **GSAP animations** — Scroll-triggered reveals, smooth section transitions and timeline-based effects throughout

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + TypeScript | UI framework |
| Vite | Build tool & dev server |
| Three.js + React Three Fiber | 3D rendering |
| @react-three/drei | Three.js helpers (View, OrbitControls, useGLTF…) |
| GSAP + @gsap/react | Animations and scroll triggers |
| Tailwind CSS | Styling |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Top navigation bar
│   ├── Hero.tsx            # Hero section with video
│   ├── Highlights.tsx      # Video carousel section
│   ├── VideoCarousel.tsx   # Carousel logic and progress bar
│   ├── Model.tsx           # 3D phone section (size/color selector)
│   ├── ModelView.tsx       # Three.js View wrapper per phone size
│   ├── IPhone.tsx          # GLTF model loader with dynamic colors
│   └── Lights.tsx          # Three.js lighting setup
├── constants/              # Nav links, model data, video slide data
├── utils/                  # Asset imports and GSAP animation helpers
└── index.css               # Global styles and Tailwind utilities
public/
├── assets/                 # Images and videos
└── models/scene.glb        # iPhone 15 Pro 3D model
```

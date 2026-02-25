# iPhone 15 Pro — Clon del sitio de Apple

**URL:**
[https://starbucks-copy.joshuacandia.dev](https://starbucks-copy.joshuacandia.dev)

Clon fiel al pixel del sitio de producto del iPhone 15 Pro de Apple, desarrollado con React, Three.js y GSAP.

---

## Funcionalidades

* **Sección Hero**
  Video en pantalla completa que se adapta automáticamente a viewport mobile y desktop.

* **Carrusel de destacados**
  Carrusel de videos con autoplay, indicadores de progreso personalizados y controles de play/pausa.

* **Visor 3D del iPhone**
  Modelo interactivo en Three.js con selector de color y tamaño (6.1" / 6.7"), incluyendo transiciones animadas entre tamaños utilizando GSAP.

* **Animaciones con GSAP**
  Animaciones activadas por scroll, transiciones suaves entre secciones y efectos basados en timelines a lo largo del sitio.

---

## Stack Tecnológico

| Herramienta                  | Propósito                                                     |
| ---------------------------- | ------------------------------------------------------------- |
| React 18 + TypeScript        | Framework de UI                                               |
| Vite                         | Build tool y servidor de desarrollo                           |
| Three.js + React Three Fiber | Renderizado 3D                                                |
| @react-three/drei            | Utilidades para Three.js (View, OrbitControls, useGLTF, etc.) |
| GSAP + @gsap/react           | Animaciones y triggers por scroll                             |
| Tailwind CSS                 | Estilado                                                      |

---

## Cómo ejecutarlo

```bash
# Instalar dependencias
npm install

# Iniciar entorno de desarrollo
npm run dev

# Generar build de producción
npm run build
```

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.tsx          # Barra de navegación superior
│   ├── Hero.tsx            # Sección principal con video
│   ├── Highlights.tsx      # Sección de carrusel de videos
│   ├── VideoCarousel.tsx   # Lógica del carrusel y barra de progreso
│   ├── Model.tsx           # Sección 3D con selector de tamaño/color
│   ├── ModelView.tsx       # Wrapper de Three.js por tamaño
│   ├── IPhone.tsx          # Loader del modelo GLTF con colores dinámicos
│   └── Lights.tsx          # Configuración de iluminación Three.js
├── constants/              # Links de navegación, datos del modelo y slides
├── utils/                  # Helpers de assets y animaciones GSAP
└── index.css               # Estilos globales y utilidades de Tailwind

public/
├── assets/                 # Imágenes y videos
└── models/scene.glb        # Modelo 3D del iPhone 15 Pro
```

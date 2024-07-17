/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Agregar una clase personalizada para deshabilitar el zoom en imágenes
      extend: {
        noZoom: {
          touchAction: 'manipulation',
          userSelect: 'none',
          msContentZooming: 'none',
          msTouchAction: 'manipulation',
          webkitUserDrag: 'none',
          webkitUserSelect: 'none',
          webkitTouchCallout: 'none',
          pointerEvents: 'none',
        },
      },
    },
  },
  plugins: [],
}


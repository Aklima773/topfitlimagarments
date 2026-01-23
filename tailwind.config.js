/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      limetheme: {
        "primary": "#bced5a",
        "secondary": "#f8fdee",
        "accent": "#232527",
        "neutral": "#07cc00",
        "base-100": "#ffffff",
        "info": "#6b6b6e",
        "success": "#36d399",
        "warning": "#fbbd23",
        "error": "#f87280",
        
       
      }
    }]
  },
}

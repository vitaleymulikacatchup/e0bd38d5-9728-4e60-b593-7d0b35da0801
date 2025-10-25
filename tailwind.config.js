/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cloudflare-orange': '#f48120',
        'cloudflare-dark': '#1a1a2e',
        'cloudflare-navy': '#16213e',
        'cloudflare-blue': '#0051c3',
        'cloudflare-light-blue': '#4285f4',
        'cloudflare-gray': '#6b7280',
        'cloudflare-light-gray': '#f3f4f6',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #f48120 0%, #ff6b35 100%)',
        'gradient-blue': 'linear-gradient(135deg, #0051c3 0%, #4285f4 100%)',
      },
    },
  },
  plugins: [],
}
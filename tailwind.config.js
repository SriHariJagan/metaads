/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'meta-navy': {
          DEFAULT: '#000E41',
          50: '#EEF1FB',
          100: '#DDE3F8',
          200: '#BCC7EF',
          300: '#93A3E2',
          400: '#6579D1',
          500: '#3D51BD',
          600: '#28389B',
          700: '#18277A',
          800: '#0C1A5E',
          900: '#04124B',
          950: '#000520',
        },
        'meta-blue': { DEFAULT: '#0066FF', 400: '#3385FF', 600: '#0052CC' },
        'meta-cyan': { DEFAULT: '#00B8FF', 400: '#33C6FF', 600: '#0094CC' },
        'meta-violet': { DEFAULT: '#4F00FF', 400: '#7A33FF', 600: '#4000CC' },
        'meta-purple': { DEFAULT: '#7200FF', 600: '#5B00CC' },
        'meta-magenta': { DEFAULT: '#D600FF', 400: '#E133FF', 600: '#AB00CC' },
        'meta-pink': { DEFAULT: '#FF0066', 400: '#FF3385', 600: '#CC0052' },
        'meta-red': { DEFAULT: '#FF1744', 600: '#CC1236' },
        'meta-orange': { DEFAULT: '#FF6A00', 400: '#FF8833', 600: '#CC5500' },
        'meta-amber': { DEFAULT: '#FFB000', 400: '#FFC333', 600: '#CC8D00' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px rgba(0, 14, 65, 0.10)',
        card: '0 1px 2px rgba(0,14,65,0.05), 0 6px 24px rgba(0,14,65,0.07)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
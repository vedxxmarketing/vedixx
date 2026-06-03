import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  // These color utilities are built dynamically at runtime (e.g. `bg-${color}-500/20`)
  // in the service pages, so Tailwind can't see them statically. Safelist keeps them.
  safelist: [
    {
      pattern: /(bg|text|border)-(red|blue|green|purple|yellow|amber|cyan|indigo|pink|orange)-(400|500)(\/\d+)?/,
    },
  ],
  theme: {
    extend: {
      colors: {
        vedixx: {
          // Night Indigo palette (dark)
          bg: '#0D1230', // Deep navy
          card: '#181E45', // Lighter navy for cards
          text: '#EEF1FA', // Off-white (palette lightest)
          muted: '#9AA3D0', // Periwinkle-grey
          accent: '#EEF1FA', // Lightest tint for strong contrast
          primary: '#6675C6', // Balanced periwinkle-indigo accent
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

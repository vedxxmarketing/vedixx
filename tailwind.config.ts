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
          bg: '#0a0a0a', // Rich Black
          card: '#161616', // Dark Grey for cards
          text: '#f3f3f3', // Off-White
          muted: '#a1a1aa', // Muted Grey
          accent: '#ffffff', // White for strong contrast
          primary: '#3b82f6', // Subtle blue for tech feel
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

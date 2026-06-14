import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        vedixx: {
          // "Ember Noir" — cinematic near-black with a single ember accent
          bg: '#08080A', // Near-black base
          bgDeep: '#050506', // Deepest black for vignette / footers
          card: '#121214', // Raised glass surface
          cardHi: '#1A1A1E', // Hover / elevated surface
          line: '#26262B', // Hairline borders
          text: '#F4F2EF', // Warm off-white
          muted: '#8B8884', // Warm grey for body copy
          accent: '#F4F2EF', // Lightest tint for max contrast
          // Ember accent ramp
          primary: '#FF5A1F', // Signature ember orange
          ember: '#FF5A1F',
          emberSoft: '#FF8A4C', // Lighter flame
          emberDeep: '#D63A00', // Hot core / deep coal
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        ember: '0 0 60px -10px rgba(255,90,31,0.45)',
        'ember-sm': '0 0 30px -8px rgba(255,90,31,0.35)',
        glass: '0 20px 60px -20px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        'ember-radial':
          'radial-gradient(circle at 50% 100%, rgba(255,90,31,0.55), rgba(214,58,0,0.25) 35%, transparent 70%)',
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'ember-pulse': 'emberPulse 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'gradient-pan': 'gradientPan 8s ease infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        emberPulse: {
          '0%, 100%': { opacity: '0.85', transform: 'translateX(-50%) scale(1)' },
          '50%': { opacity: '1', transform: 'translateX(-50%) scale(1.06)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

import { SVGProps } from 'react';

export const VedixxLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" {...props}>
    <defs>
      <linearGradient id="vedixx-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Abstract V Shape */}
    <path
      d="M20 20 L50 85 L80 20 L65 20 L50 55 L35 20 Z"
      fill="white"
      className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    />

    {/* Accent Element */}
    <circle cx="50" cy="85" r="4" fill="url(#vedixx-gradient)" className="animate-pulse-slow" />
    <path
      d="M50 85 L90 20"
      stroke="url(#vedixx-gradient)"
      strokeWidth="2"
      strokeOpacity="0.5"
    />
  </svg>
);

/**
 * Vedixx logo — inline SVG mark (white + ember blades) paired with the wordmark.
 * Vector, transparent, theme-colored, and ~2KB vs the old 283KB PNG.
 * Sized by height: set a height on the wrapper (e.g. `h-8`) and it scales.
 */
const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${className}`}>
      {/* V mark */}
      <svg
        viewBox="0 0 50 64"
        className="h-full w-auto shrink-0"
        fill="none"
        role="img"
        aria-label="Vedixx"
      >
        {/* Ember blade (right arm) */}
        <polygon points="29,6 45,6 43.5,50" fill="#FF5A1F" />
        {/* White blade (left arm), crossing in front at the base */}
        <polygon points="5,6 20,6 42,58 27,58" fill="#F4F2EF" />
      </svg>

      {/* Wordmark */}
      <span className="font-heading font-light leading-none tracking-[0.28em] text-vedixx-text text-[0.95rem] sm:text-lg lg:text-xl pr-[0.28em]">
        VEDIXX
      </span>
    </span>
  );
};

export default Logo;

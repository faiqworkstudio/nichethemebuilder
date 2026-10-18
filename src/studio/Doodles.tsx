/** Hand-drawn style strokes used sparingly on the showcase. Decorative only. */

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 12" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M2 8c9-6 15 4 24-1s14-6 23 0 15 4 24-1 14-5 23 0 13 3 22-1"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 70" fill="none" aria-hidden="true" focusable="false">
      <path d="M6 6c18 4 40 14 50 30 6 9 8 17 8 26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M54 52l10 11 9-13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

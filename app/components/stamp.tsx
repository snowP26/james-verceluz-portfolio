import { useId } from "react";

type StampProps = {
  /** Arced along the top: the status word. */
  top: string;
  /** Large in the middle: usually the year. */
  middle: string;
  /** Arced along the bottom: the place. */
  bottom: string;
  /** Spoken label when the stamp carries a fact the text beside it does not. */
  label?: string;
  className?: string;
};

/**
 * A dealer's ink stamp, pressed slightly askew, the ink soaked unevenly into
 * the paper. Hidden from screen readers unless it is the only place a fact is
 * stated, in which case `label` speaks it.
 */
export function Stamp({ top, middle, bottom, label, className = "" }: StampProps) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 100 100"
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
      className={`shrink-0 -rotate-[9deg] opacity-85 ${className}`}
    >
      <defs>
        <path id={`${id}-top`} d="M 16 50 A 34 34 0 0 1 84 50" />
        <path id={`${id}-bottom`} d="M 13 50 A 37 37 0 0 0 87 50" />
        {/* Rough edges, then patchy coverage: ink absorbed by paper, not drawn. */}
        <filter id={`${id}-ink`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="grain" />
          <feDisplacementMap in="SourceGraphic" in2="grain" scale="1.8" result="rough" />
          <feTurbulence type="fractalNoise" baseFrequency="0.22" numOctaves="2" seed="3" result="patch" />
          <feColorMatrix in="patch" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.6 1.55" result="coverage" />
          <feComposite in="rough" in2="coverage" operator="in" />
        </filter>
      </defs>
      <g filter={`url(#${id}-ink)`}>
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <g
          fill="currentColor"
          // var() only resolves in CSS, not in an SVG presentation attribute.
          style={{
            fontFamily: "var(--font-spectral-sc), Georgia, serif",
            fontVariantNumeric: "lining-nums",
          }}
          fontWeight="600"
          letterSpacing="1.6"
        >
          <text fontSize="10.5" textAnchor="middle">
            <textPath href={`#${id}-top`} startOffset="50%">
              {top.toLowerCase()}
            </textPath>
          </text>
          <text fontSize="21" textAnchor="middle" x="50" y="58" letterSpacing="0.5">
            {middle}
          </text>
          <text fontSize="10.5" textAnchor="middle">
            <textPath href={`#${id}-bottom`} startOffset="50%">
              {bottom.toLowerCase()}
            </textPath>
          </text>
        </g>
      </g>
    </svg>
  );
}

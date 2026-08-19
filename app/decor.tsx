// Decorative elements for Marina's site, drawn from her own visual language:
// tree of life, botanical sprigs, a lotus ornament, thin wave lines, plus a
// small lotus emblem for the logo. All inline SVG, inheriting currentColor.

type SvgProps = React.SVGProps<SVGSVGElement>;

// A single lanceolate leaf: base cusp at the origin (0,0), tip at (0,-16).
// Placing the origin on the stem guarantees the leaf stays attached.
const LEAF = "M0 0 C-4.5 -3.5 -5.5 -10 0 -16 C5.5 -10 4.5 -3.5 0 0Z";

// Lotus — the recurring flower motif in Marina's materials. Used as the logo
// mark and as a small ornament above titles.
export const Lotus = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 64 42" fill="none" className={className} aria-hidden {...props}>
    <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
      <path d="M32 39 C28 27 28 13 32 5 C36 13 36 27 32 39Z" />
      <path d="M32 39 C22 31 16 19 17 9 C26 13 31 25 32 37" />
      <path d="M32 39 C42 31 48 19 47 9 C38 13 33 25 32 37" />
      <path d="M32 39 C20 35 9 28 4 18 C15 16 27 24 32 37" />
      <path d="M32 39 C44 35 55 28 60 18 C49 16 37 24 32 37" />
    </g>
  </svg>
);

// Logo emblem — a compact lotus resting on a still-water line.
export const Emblem = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden {...props}>
    <g stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
      <path d="M24 32 C21 24 21 15 24 9 C27 15 27 24 24 32Z" />
      <path d="M24 32 C17 26 12 18 13 11 C19 14 23 22 24 30" />
      <path d="M24 32 C31 26 36 18 35 11 C29 14 25 22 24 30" />
      <path d="M8 37 C14 34 34 34 40 37" opacity="0.6" />
    </g>
  </svg>
);

// Soft concentric circles — sound vibrations rippling outward, stronger toward
// the centre. Marina's "мягкие круги как звуковые вибрации".
export const SoundCircles = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden {...props}>
    {[94, 76, 58, 40, 22].map((r, i) => (
      <circle
        key={r}
        cx="100"
        cy="100"
        r={r}
        stroke="currentColor"
        strokeWidth="1.4"
        opacity={0.28 + i * 0.14}
      />
    ))}
  </svg>
);

// Botanical sprig — a gently curved branch with alternating leaves.
// The stem is the cubic M42,176 C30,120 64,80 72,12; every leaf origin below
// is an exact point sampled along that curve, so leaves join the stem cleanly.
export const Sprig = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 80 180" fill="none" className={className} aria-hidden {...props}>
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M42 176 C30 120 64 80 72 12" strokeWidth="1.4" />
      <g strokeWidth="1.1">
        <path transform="translate(40 144) rotate(-52)" d={LEAF} />
        <path transform="translate(43 121) rotate(52)" d={LEAF} />
        <path transform="translate(50 99) rotate(-48)" d={LEAF} />
        <path transform="translate(57 75) rotate(50)" d={LEAF} />
        <path transform="translate(65 50) rotate(-44)" d={LEAF} />
        <path transform="translate(69 32) rotate(40) scale(0.85)" d={LEAF} />
      </g>
    </g>
  </svg>
);

// Horizontal ornament: two hairlines flanking a small upright leaf pair.
export const LeafDivider = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 140 20" fill="none" className={className} aria-hidden {...props}>
    <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 10h50" />
      <path d="M84 10h50" />
      <path transform="translate(66 15) rotate(-18) scale(0.7)" d={LEAF} />
      <path transform="translate(74 15) rotate(18) scale(0.7)" d={LEAF} />
    </g>
  </svg>
);

// WhatsApp glyph (speech bubble + handset) for contact / reserve buttons.
export const WhatsAppGlyph = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden {...props}>
    <path d="M12 2a10 10 0 00-8.5 15.28L2 22l4.86-1.48A10 10 0 1012 2zm0 18.13a8.1 8.1 0 01-4.13-1.13l-.3-.18-3.02.94.96-2.94-.2-.3A8.13 8.13 0 1112 20.13z" />
    <path d="M17.4 14.38c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.19.28-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.28-.02-.43.13-.58.13-.13.29-.33.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 .98-1 2.38 0 1.4 1.02 2.76 1.16 2.95.15.19 2.01 3.06 4.86 4.29.68.29 1.21.47 1.62.6.68.21 1.3.18 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
  </svg>
);

// Thin flowing wave lines.
export const Waves = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 240 40" fill="none" className={className} aria-hidden {...props}>
    {[0, 9, 18].map((dy) => (
      <path
        key={dy}
        d={`M0 ${12 + dy}c30-14 60-14 90 0s60 14 90 0 60-14 90 0`}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity={0.6 - dy * 0.02}
      />
    ))}
  </svg>
);

// ── Candle line (Toast to Moments) ────────────────────────────────────────
// The four things every candle carries (crystal, aroma, intention, ritual),
// plus a lit candle used as the section mark.

// Lit candle in a glass, matching the TTM product shape.
export const CandleGlyph = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 32 44" fill="none" className={className} aria-hidden {...props}>
    <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4c3.2 3.3 4.6 5.6 4.6 7.7a4.6 4.6 0 11-9.2 0C11.4 9.6 12.8 7.3 16 4Z" />
      <path d="M16 17v3.4" />
      <path d="M8.5 20.4h15l-1.2 18a2.4 2.4 0 01-2.4 2.2h-7.8a2.4 2.4 0 01-2.4-2.2Z" />
      <path d="M9.1 29.6h13.8" opacity="0.55" />
    </g>
  </svg>
);

// Faceted crystal.
export const CrystalGlyph = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
    <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
      <path d="M16 3 6 13l10 16 10-16Z" />
      <path d="M6 13h20" />
      <path d="M16 3v26" opacity="0.5" />
    </g>
  </svg>
);

// A sprig of two leaves: the aroma mark.
export const AromaGlyph = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
    <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 29V12" />
      <path transform="translate(16 18) rotate(-32)" d={LEAF} />
      <path transform="translate(16 24) rotate(32)" d={LEAF} />
    </g>
  </svg>
);

// Open heart: the intention mark.
export const IntentionGlyph = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
    <path
      d="M16 27S4 20 4 12.4A6.4 6.4 0 0116 9a6.4 6.4 0 0112 3.4C28 20 16 27 16 27Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

// Four-point sparkle: the small-ritual mark.
export const RitualGlyph = ({ className, ...props }: SvgProps) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
    <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4c1.4 7 3.6 9.2 10.6 10.6C19.6 16 17.4 18.2 16 25.2 14.6 18.2 12.4 16 5.4 14.6 12.4 13.2 14.6 11 16 4Z" />
      <path d="M25.5 22.5c.5 2.4 1.2 3.1 3.6 3.6-2.4.5-3.1 1.2-3.6 3.6-.5-2.4-1.2-3.1-3.6-3.6 2.4-.5 3.1-1.2 3.6-3.6Z" opacity="0.6" />
    </g>
  </svg>
);

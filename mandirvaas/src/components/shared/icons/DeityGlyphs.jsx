// Original line-art glyphs, one per deity/entity name. Kept as inline SVG
// (not photos) so the repo has no external image dependencies and nothing
// to break if a CDN goes down. Palette pulls from the design tokens.

const stroke = 'currentColor'

export function ShivaGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      {/* Trishul (trident) */}
      <path d="M24 6v30" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M24 6c-4 0-7 4-6 9M24 6c4 0 7 4 6 9" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M18 15c1 3 4 5 6 5s5-2 6-5" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="38" r="4" stroke={stroke} strokeWidth="2" fill="none" />
    </svg>
  )
}

export function VishnuGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      {/* Sudarshana chakra */}
      <circle cx="24" cy="24" r="14" stroke={stroke} strokeWidth="2" fill="none" />
      <circle cx="24" cy="24" r="4" stroke={stroke} strokeWidth="2" fill="none" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4
        const x1 = 24 + Math.cos(angle) * 14
        const y1 = 24 + Math.sin(angle) * 14
        const x2 = 24 + Math.cos(angle) * 19
        const y2 = 24 + Math.sin(angle) * 19
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      })}
    </svg>
  )
}

export function MuruganGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      {/* Vel (spear) */}
      <path d="M24 8l6 6-6 6-6-6 6-6z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path d="M24 20v18" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 38l4 4 4-4" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function DeviGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      {/* Lotus */}
      <path
        d="M24 34c-9-2-9-12-9-12s7 1 9 8c2-7 9-8 9-8s0 10-9 12z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M24 22c-4-4-4-10-4-10s6 1 8 6c1-5 8-6 8-6s0 6-4 10" stroke={stroke} strokeWidth="1.6" fill="none" />
      <line x1="24" y1="34" x2="24" y2="40" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function GaneshaGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      {/* Modak (sweet, Ganesha's emblem) */}
      <path
        d="M24 12c8 0 12 8 8 16-3 6-13 6-16 0-4-8 0-16 8-16z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M24 12c1-3 3-4 5-4" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export const deityGlyphs = {
  shiva: ShivaGlyph,
  vishnu: VishnuGlyph,
  murugan: MuruganGlyph,
  devi: DeviGlyph,
  ganesha: GaneshaGlyph,
}

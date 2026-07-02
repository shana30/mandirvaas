// Original flat-design deity illustrations. Each is a simplified, respectful
// iconographic figure (not a reproduction of any specific temple idol or
// existing artwork) built from the attributes each deity is traditionally
// recognized by, rendered in the site's own palette.

const skin = '#e8b96a'      // --mv-gold-light
const robe = '#6b1420'      // --mv-maroon
const robeDark = '#4a0d16'  // --mv-maroon-dark
const accent = '#e1592c'    // --mv-vermilion
const gold = '#c9862b'      // --mv-gold
const cream = '#fbf3e3'     // --mv-stone

export function ShivaFigure(props) {
  return (
    <svg viewBox="0 0 120 160" {...props}>
      {/* jata (matted hair) with crescent moon */}
      <path d="M60 18c-16 0-26 12-24 26 2-6 8-10 24-10s22 4 24 10c2-14-8-26-24-26z" fill={robeDark} />
      <path d="M44 24c-4-6-2-12 3-14-1 5 1 9 4 11-3 1-5 2-7 3z" fill={cream} />
      {/* crescent */}
      <path d="M70 16a6 6 0 100 10 5 5 0 010-10z" fill={cream} />
      {/* face */}
      <circle cx="60" cy="44" r="18" fill={skin} />
      {/* third eye */}
      <ellipse cx="60" cy="36" rx="3" ry="1.6" fill={robeDark} />
      <circle cx="52" cy="44" r="2" fill={robeDark} />
      <circle cx="68" cy="44" r="2" fill={robeDark} />
      {/* body / robe */}
      <path d="M32 100c0-24 12-38 28-38s28 14 28 38v34H32v-34z" fill={robe} />
      <path d="M32 100c0-24 12-38 28-38 4 0 8 1 11 3-8 4-14 16-14 35v34H32v-34z" fill={robeDark} opacity="0.4" />
      {/* trishul */}
      <line x1="94" y1="30" x2="94" y2="120" stroke={gold} strokeWidth="3" strokeLinecap="round" />
      <path d="M94 30c-6 0-10 5-9 12M94 30c6 0 10 5 9 12" stroke={gold} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M87 40c2 4 5 6 7 6s5-2 7-6" stroke={gold} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* beads */}
      <circle cx="60" cy="70" r="3" fill={cream} />
      <circle cx="52" cy="76" r="3" fill={cream} />
      <circle cx="68" cy="76" r="3" fill={cream} />
    </svg>
  )
}

export function VishnuFigure(props) {
  return (
    <svg viewBox="0 0 120 160" {...props}>
      {/* kirita mukuta (crown) */}
      <path d="M42 30l6-16 6 10 6-14 6 14 6-10 6 16z" fill={gold} />
      <circle cx="60" cy="30" r="4" fill={accent} />
      {/* face */}
      <circle cx="60" cy="46" r="18" fill={skin} />
      <circle cx="53" cy="46" r="2" fill={robeDark} />
      <circle cx="67" cy="46" r="2" fill={robeDark} />
      {/* body */}
      <path d="M32 102c0-24 12-38 28-38s28 14 28 38v32H32v-32z" fill={robe} />
      <path d="M46 76c0 10 6 18 14 18s14-8 14-18" stroke={gold} strokeWidth="2" fill="none" />
      {/* chakra left */}
      <circle cx="20" cy="78" r="12" fill="none" stroke={gold} strokeWidth="2.5" />
      <circle cx="20" cy="78" r="3" fill={gold} />
      {/* conch right */}
      <path d="M92 66c8 2 12 10 8 20-3 8-11 12-16 8 6-2 9-8 8-14-1-6-4-10 0-14z" fill={cream} stroke={gold} strokeWidth="1.5" />
    </svg>
  )
}

export function MuruganFigure(props) {
  return (
    <svg viewBox="0 0 120 160" {...props}>
      {/* peacock feather crown */}
      <path d="M60 12c3 8 3 16 0 22-3-6-3-14 0-22z" fill={accent} />
      <path d="M46 16c6 6 8 14 6 22-6-4-10-12-6-22z" fill={gold} />
      <path d="M74 16c-6 6-8 14-6 22 6-4 10-12 6-22z" fill={gold} />
      {/* face */}
      <circle cx="60" cy="46" r="17" fill={skin} />
      <circle cx="53" cy="46" r="2" fill={robeDark} />
      <circle cx="67" cy="46" r="2" fill={robeDark} />
      {/* body */}
      <path d="M34 100c0-22 11-36 26-36s26 14 26 36v34H34v-34z" fill={robe} />
      {/* vel (spear) diagonal */}
      <line x1="20" y1="118" x2="96" y2="30" stroke={gold} strokeWidth="3" strokeLinecap="round" />
      <path d="M96 30l7 5-3 8-9-3z" fill={gold} />
      {/* peacock accent */}
      <circle cx="94" cy="110" r="10" fill={cream} stroke={gold} strokeWidth="1.5" />
      <path d="M94 100c-3 4-3 10 0 14M94 100c3 4 3 10 0 14" stroke={accent} strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export function DeviFigure(props) {
  return (
    <svg viewBox="0 0 120 160" {...props}>
      {/* crown */}
      <path d="M42 26c6-8 12-10 18-10s12 2 18 10c-6-2-12-3-18-3s-12 1-18 3z" fill={gold} />
      <circle cx="60" cy="18" r="4" fill={accent} />
      {/* face */}
      <circle cx="60" cy="44" r="18" fill={skin} />
      <circle cx="53" cy="44" r="2" fill={robeDark} />
      <circle cx="67" cy="44" r="2" fill={robeDark} />
      <path d="M56 50c2 2 6 2 8 0" stroke={robeDark} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* body / saree drape */}
      <path d="M30 100c0-24 13-38 30-38s30 14 30 38v32H30v-32z" fill={robe} />
      <path d="M60 62c-10 6-14 20-10 40" stroke={gold} strokeWidth="2" fill="none" />
      {/* lotus in hand */}
      <path d="M18 96c-4-6-2-12 4-14-1 5 1 9 4 11-3 1-6 2-8 3z" fill={cream} stroke={gold} strokeWidth="1.2" />
      <path d="M102 96c4-6 2-12-4-14 1 5-1 9-4 11 3 1 6 2 8 3z" fill={cream} stroke={gold} strokeWidth="1.2" />
    </svg>
  )
}

export function GaneshaFigure(props) {
  return (
    <svg viewBox="0 0 120 160" {...props}>
      {/* crown */}
      <path d="M44 22c4-6 10-8 16-8s12 2 16 8c-5-2-11-3-16-3s-11 1-16 3z" fill={gold} />
      {/* ears */}
      <ellipse cx="34" cy="48" rx="14" ry="17" fill={skin} />
      <ellipse cx="86" cy="48" rx="14" ry="17" fill={skin} />
      <ellipse cx="34" cy="48" rx="8" ry="11" fill={robe} opacity="0.25" />
      <ellipse cx="86" cy="48" rx="8" ry="11" fill={robe} opacity="0.25" />
      {/* head */}
      <ellipse cx="60" cy="48" rx="20" ry="18" fill={skin} />
      <circle cx="52" cy="44" r="2.2" fill={robeDark} />
      <circle cx="68" cy="44" r="2.2" fill={robeDark} />
      {/* trunk */}
      <path
        d="M60 58c-2 6-8 8-8 16 0 6 4 9 8 8"
        stroke={skin}
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
      {/* tusk */}
      <path d="M64 58l4 6" stroke={cream} strokeWidth="3" strokeLinecap="round" />
      {/* body */}
      <path d="M30 100c0-16 14-24 30-24s30 8 30 24v34H30v-34z" fill={robe} />
      <circle cx="60" cy="108" r="9" fill={gold} />
      {/* modak */}
      <path d="M92 92c6 0 9 6 6 12-2 4-9 4-11 0-3-6 0-12 5-12z" fill={cream} stroke={gold} strokeWidth="1.4" />
    </svg>
  )
}

export const deityFigures = {
  shiva: ShivaFigure,
  vishnu: VishnuFigure,
  murugan: MuruganFigure,
  devi: DeviFigure,
  ganesha: GaneshaFigure,
}

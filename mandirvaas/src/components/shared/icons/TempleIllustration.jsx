// Original stepped-gopuram silhouette illustration, tinted per temple so
// each card reads as distinct even though every temple shares one base shape
// (real gopurams do vary in height/tiers, which this mirrors).

export default function TempleIllustration({ tiers = 5, tint = 'var(--mv-gold)' }) {
  const width = 160
  const baseWidth = 120
  const stepHeight = 14
  const bars = Array.from({ length: tiers }).map((_, i) => {
    const w = baseWidth - i * (baseWidth / (tiers + 1))
    const y = 70 - (i + 1) * stepHeight
    return { x: (width - w) / 2, y, w, h: stepHeight - 2 }
  })

  return (
    <svg viewBox="0 0 160 90" preserveAspectRatio="xMidYMax meet" style={{ width: '100%', height: '100%' }}>
      <rect x="0" y="0" width="160" height="90" fill="var(--mv-maroon)" />
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={tint} opacity={0.55 + i * 0.08} rx="1.5" />
      ))}
      {/* base / entrance */}
      <rect x="30" y="70" width="100" height="18" fill={tint} opacity="0.9" rx="2" />
      <rect x="70" y="76" width="20" height="12" fill="var(--mv-maroon)" />
      {/* finial */}
      <circle cx="80" cy={bars[bars.length - 1].y - 6} r="3" fill={tint} />
    </svg>
  )
}

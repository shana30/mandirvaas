export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div style={{ padding: '48px 0 32px' }}>
      {eyebrow && <p className="mv-eyebrow">{eyebrow}</p>}
      <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', margin: '10px 0 12px' }}>{title}</h1>
      {description && (
        <p style={{ maxWidth: 640, fontSize: '1.05rem', color: 'var(--mv-basalt)' }}>
          {description}
        </p>
      )}
    </div>
  )
}

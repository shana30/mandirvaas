// Original line-art icons, one per named shop product.

const stroke = 'var(--mv-maroon)'

export function IdolIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <circle cx="24" cy="14" r="6" stroke={stroke} strokeWidth="2" fill="none" />
      <path d="M14 38c0-9 4-16 10-16s10 7 10 16" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
      <line x1="10" y1="38" x2="38" y2="38" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function PrasadamIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <rect x="10" y="18" width="28" height="20" rx="2" stroke={stroke} strokeWidth="2" fill="none" />
      <path d="M10 18l14-8 14 8" stroke={stroke} strokeWidth="2" fill="none" strokeLinejoin="round" />
      <line x1="24" y1="18" x2="24" y2="38" stroke={stroke} strokeWidth="1.6" />
    </svg>
  )
}

export function VastraIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path d="M14 12l10 4 10-4 4 8-6 3v21H16V23l-6-3z" stroke={stroke} strokeWidth="2" fill="none" strokeLinejoin="round" />
    </svg>
  )
}

export function MalaIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <circle cx="24" cy="24" r="15" stroke={stroke} strokeWidth="1.6" fill="none" strokeDasharray="2 4" />
      <circle cx="24" cy="9" r="3" stroke={stroke} strokeWidth="2" fill="none" />
    </svg>
  )
}

export const productIcons = {
  'prod-1': IdolIcon,
  'prod-2': PrasadamIcon,
  'prod-3': VastraIcon,
  'prod-4': MalaIcon,
}

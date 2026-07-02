import PageHeader from '../../components/shared/PageHeader.jsx'
import GopuramDivider from '../../components/shared/GopuramDivider.jsx'
import { productIcons } from '../../components/shared/icons/ProductIcons.jsx'
import { shopProducts } from '../../data/mockData.js'
import './Shop.css'

export default function Shop() {
  return (
    <div className="mv-page">
      <PageHeader
        eyebrow="Core Logistics · Dhanush"
        title="Shop"
        description="Pooja items, prasadam, and temple-sourced goods, delivered. Wire this grid up to the cart/checkout service once it's ready."
      />

      <div className="mv-shop-grid">
        {shopProducts.map((p) => {
          const Icon = productIcons[p.id]
          return (
          <article key={p.id} className="mv-card mv-shop-card">
            <div className="mv-shop-card-image">
              {Icon && <Icon width="40" height="40" />}
            </div>
            <div style={{ padding: 16 }}>
              <p className="mv-eyebrow">{p.category}</p>
              <h3 style={{ fontSize: '1rem', margin: '4px 0 10px' }}>{p.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="mv-mono" style={{ fontWeight: 500 }}>₹{p.price.toLocaleString('en-IN')}</span>
                <button className="mv-btn mv-btn-outline" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
          )
        })}
      </div>

      <GopuramDivider />
    </div>
  )
}

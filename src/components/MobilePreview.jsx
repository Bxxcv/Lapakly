import { MessageCircle, ShoppingBag } from 'lucide-react';
import { demoProducts, demoStore, formatCurrency } from '../data/demo.js';

export function MobilePreview({ store = demoStore, products = demoProducts }) {
  return (
    <div className="phone-preview" aria-label="Preview toko mobile">
      <div className="phone-preview__bar">
        <span />
        <span />
      </div>
      <div className="phone-store">
        <div className="phone-store__hero">
          <div className="phone-store__avatar"><ShoppingBag size={22} /></div>
          <h3>{store.name}</h3>
          <p>{store.headline}</p>
          <button type="button"><MessageCircle size={15} /> Chat toko</button>
        </div>
        <div className="phone-store__products">
          {products.slice(0, 3).map((product) => (
            <div className="phone-product" key={product.id}>
              <img src={product.image} alt="" />
              <div>
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

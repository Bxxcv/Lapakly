import { Link, useParams } from 'react-router-dom';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { demoProducts, demoStore, formatCurrency } from '../data/demo.js';

export default function Storefront() {
  const { slug } = useParams();
  const store = { ...demoStore, slug };

  return (
    <main className="public-store">
      <section className="public-store__hero">
        <div className="public-store__avatar"><ShoppingBag size={28} /></div>
        <h1>{store.name}</h1>
        <p>{store.headline}</p>
        <a className="btn btn--dark" href={`https://wa.me/${store.whatsapp}`}><MessageCircle size={17} /> Chat toko</a>
      </section>
      <section className="public-products">
        {demoProducts.map((product) => (
          <article className="public-product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <span>{product.category}</span>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <footer>
                <strong>{formatCurrency(product.price)}</strong>
                <Link className="btn btn--primary btn--small" to={`/checkout/${store.slug}/${product.id}`}>Order</Link>
              </footer>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

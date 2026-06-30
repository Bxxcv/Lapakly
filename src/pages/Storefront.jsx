import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ShoppingBag, Star } from 'lucide-react';
import { demoProducts, demoStore, formatCurrency } from '../data/demo.js';

export default function Storefront() {
  const { slug } = useParams();
  const store = { ...demoStore, slug };

  return (
    <main className="shop-page">
      <header className="shop-topbar">
        <Link to="/" className="shop-back"><ArrowLeft size={17} /> Lapakly</Link>
        <a className="shop-chat" href={`https://wa.me/${store.whatsapp}`}><MessageCircle size={17} /> Chat</a>
      </header>

      <section className="shop-hero">
        <img
          className="shop-cover"
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=80"
          alt=""
        />
        <div className="shop-profile">
          <div className="shop-avatar"><ShoppingBag size={26} /></div>
          <div>
            <span className="shop-badge"><Star size={14} /> Toko demo</span>
            <h1>{store.name}</h1>
            <p>{store.headline}</p>
          </div>
        </div>
      </section>

      <section className="shop-products">
        <div className="shop-section-head">
          <span>Katalog</span>
          <h2>Produk siap order</h2>
        </div>
        {demoProducts.map((product) => (
          <article className="shop-product" key={product.id}>
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

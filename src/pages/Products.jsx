import { useState } from 'react';
import { Plus } from 'lucide-react';
import { AppShell } from '../layouts/AppShell.jsx';
import { demoProducts, formatCurrency } from '../data/demo.js';
import { StatusBadge } from '../components/StatusBadge.jsx';
import { ImageUploader } from '../components/ImageUploader.jsx';

export default function Products() {
  const [products] = useState(demoProducts);

  return (
    <AppShell
      title="Produk"
      subtitle="Kelola katalog. Nanti upload gambar disambungkan ke Firebase Storage."
      action={<button className="btn btn--primary btn--small"><Plus size={16} /> Tambah produk</button>}
    >
      <div className="upload-strip">
        <ImageUploader folder="lapakly/products" />
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <span>{product.category}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <footer>
                <strong>{formatCurrency(product.price)}</strong>
                <StatusBadge status={product.status} />
              </footer>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}

import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { demoProducts, formatCurrency } from '../data/demo.js';
import { ImageUploader } from '../components/ImageUploader.jsx';

export default function Checkout() {
  const { slug, productId } = useParams();
  const product = useMemo(() => demoProducts.find((item) => item.id === productId) || demoProducts[0], [productId]);
  const [qty, setQty] = useState(1);
  const [sent, setSent] = useState(false);
  const total = product.price * qty;

  return (
    <main className="checkout-page">
      <Link className="back-link" to={`/u/${slug}`}><ArrowLeft size={17} /> Kembali ke toko</Link>
      <section className="checkout-card">
        <div>
          <span className="panel-kicker">Checkout manual</span>
          <h1>{product.name}</h1>
          <p>Isi data pembeli. Di versi production, bukti bayar akan masuk Storage dan order tersimpan ke Firestore.</p>
          <div className="checkout-note">
            <ShieldCheck size={18} />
            <span>Upload bukti akan memakai Cloudinary, lalu URL-nya disimpan ke Firestore.</span>
          </div>
        </div>
        <form className="checkout-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label>Nama pembeli<input required placeholder="Nama lengkap" /></label>
          <label>Nomor WhatsApp<input required placeholder="628..." /></label>
          <label>Jumlah<input type="number" min="1" value={qty} onChange={(e) => setQty(Number(e.target.value))} /></label>
          <ImageUploader folder="lapakly/payment-proofs" />
          <div className="checkout-total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
          {sent && <p className="form-success">Order demo tersimpan. Seller akan melihatnya di Order Inbox.</p>}
          <button className="btn btn--primary">Kirim order</button>
        </form>
      </section>
    </main>
  );
}

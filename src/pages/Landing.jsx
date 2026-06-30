import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, CheckCircle2, LayoutDashboard, MessageCircle, PackageCheck, ReceiptText, Store, Users } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo.jsx';

const features = [
  ['Toko siap share', 'Link toko, profil, katalog, dan tombol chat dalam satu halaman.', Store],
  ['Order inbox', 'Pesanan masuk rapi, lengkap dengan status dan kontak pembeli.', ReceiptText],
  ['Upload gambar', 'Foto produk, banner, QRIS, dan bukti bayar lewat Cloudinary.', PackageCheck],
  ['Data pelanggan', 'Nomor WA dan riwayat pembelian tidak tercecer di chat.', Users]
];

const storeTypes = [
  {
    title: 'Kedai kopi',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80',
    note: 'Menu, QRIS, pickup, preorder.'
  },
  {
    title: 'Fashion lokal',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    note: 'Katalog varian, stok, chat WA.'
  },
  {
    title: 'Jasa harian',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
    note: 'Booking, brief, invoice manual.'
  }
];

export default function Landing() {
  return (
    <div className="home-page">
      <header className="home-header">
        <Link to="/" className="home-header__brand"><BrandLogo /></Link>
        <nav className="home-nav">
          <a href="#fitur">Fitur</a>
          <a href="#contoh">Contoh toko</a>
          <a href="#harga">Harga</a>
        </nav>
        <Link className="home-header__cta" to="/register">Mulai gratis</Link>
      </header>

      <main>
        <section className="home-hero">
          <div className="home-hero__copy">
            <span className="home-label">SaaS toko-link untuk UMKM</span>
            <h1>Jualan dari satu link, tapi rasanya seperti punya toko sendiri.</h1>
            <p>
              Lapakly dibuat untuk seller kecil yang butuh katalog rapi, order manual,
              QRIS, dan data pelanggan tanpa sistem yang bikin pusing.
            </p>
            <div className="home-actions">
              <Link className="btn btn--primary" to="/register">Bikin toko <ArrowRight size={18} /></Link>
              <Link className="btn btn--ghost" to="/u/kopi-sore">Lihat toko demo</Link>
            </div>
            <div className="home-checks">
              <span><CheckCircle2 size={17} /> Tanpa coding</span>
              <span><CheckCircle2 size={17} /> QRIS manual</span>
              <span><CheckCircle2 size={17} /> Upload Cloudinary</span>
            </div>
          </div>
          <div className="home-hero__visual">
            <img
              className="home-photo-main"
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1100&q=80"
              alt=""
            />
            <div className="home-dashboard-card">
              <div>
                <span>Order hari ini</span>
                <strong>14</strong>
              </div>
              <div>
                <span>Produk dilihat</span>
                <strong>128</strong>
              </div>
              <div>
                <span>Status toko</span>
                <strong>Aktif</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="home-section home-strip">
          <div><strong>4 menit</strong><span>setup toko demo</span></div>
          <div><strong>1 link</strong><span>profil, katalog, order</span></div>
          <div><strong>0 kartu</strong><span>tanpa Firebase Storage</span></div>
        </section>

        <section className="home-section" id="fitur">
          <div className="home-section__head">
            <span>Fitur inti</span>
            <h2>Yang dipakai seller tiap hari.</h2>
          </div>
          <div className="home-feature-grid">
            {features.map(([title, description, Icon]) => (
              <article className="home-feature" key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section" id="contoh">
          <div className="home-section__head">
            <span>Contoh toko</span>
            <h2>Mulai dari jenis usaha yang jelas.</h2>
          </div>
          <div className="home-store-grid">
            {storeTypes.map((item) => (
              <article className="home-store-card" key={item.title}>
                <img src={item.image} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section home-workflow">
          <div>
            <span className="home-label">Cara kerjanya</span>
            <h2>Dashboard-nya dibuat buat kerja, bukan pajangan.</h2>
            <p>Seller tambah produk, publish link, terima order, lalu follow-up pembeli lewat WhatsApp.</p>
          </div>
          <div className="home-workflow__list">
            <div><LayoutDashboard size={20} /><span>Setup profil toko</span></div>
            <div><PackageCheck size={20} /><span>Tambah produk dan foto</span></div>
            <div><MessageCircle size={20} /><span>Terima order dan chat pembeli</span></div>
            <div><BarChart3 size={20} /><span>Lihat performa toko</span></div>
          </div>
        </section>

        <section className="home-section home-pricing" id="harga">
          <div>
            <span className="home-label">Harga awal</span>
            <h2>Mulai gratis, upgrade kalau toko mulai ramai.</h2>
          </div>
          <div className="home-price-card">
            <span>Free</span>
            <strong>Rp0</strong>
            <p>5 produk, link toko, order manual.</p>
            <Link className="btn btn--primary" to="/register">Coba dulu</Link>
          </div>
          <div className="home-price-card home-price-card--dark">
            <span>Pro</span>
            <strong>Rp49rb/bln</strong>
            <p>Produk lebih banyak, analytics, customer list, export order.</p>
            <Link className="btn btn--dark" to="/register">Siapkan Pro</Link>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div>
          <BrandLogo />
          <p>Satu tempat buat bikin toko kecil terlihat siap jualan.</p>
        </div>
        <div>
          <strong>Produk</strong>
          <a href="#fitur">Fitur</a>
          <a href="#contoh">Contoh toko</a>
          <a href="#harga">Harga</a>
        </div>
        <div>
          <strong>Untuk seller</strong>
          <span>Makanan</span>
          <span>Fashion</span>
          <span>Jasa</span>
        </div>
        <div>
          <strong>Kontak</strong>
          <span>WhatsApp admin</span>
          <span>Instagram</span>
          <span>Bantuan akun</span>
        </div>
      </footer>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, BellRing, CheckCircle2, LayoutDashboard, MessageSquareText, MousePointerClick, PackageCheck, Sparkles, Store, Users, WalletCards } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo.jsx';
import { MobilePreview } from '../components/MobilePreview.jsx';

const features = [
  ['Live preview', 'Edit toko sambil lihat tampilan HP secara langsung.', LayoutDashboard],
  ['Order inbox', 'Pesanan masuk seperti inbox, cepat dibaca dan diproses.', BellRing],
  ['Customer list', 'Simpan pelanggan, nomor WA, dan riwayat pembelian.', Users],
  ['Template usaha', 'Mode makanan, fashion, jasa, dan produk digital.', Store]
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
    <div className="landing-page">
      <header className="site-header">
        <Link to="/" className="site-header__brand"><BrandLogo /></Link>
        <nav>
          <a href="#fitur">Fitur</a>
          <a href="#alur">Alur</a>
          <a href="#harga">Harga</a>
        </nav>
        <Link className="btn btn--dark" to="/register">Mulai gratis</Link>
      </header>

      <main>
        <section className="hero section">
          <div className="hero__copy">
            <span className="eyebrow"><Sparkles size={16} /> Dibuat buat seller kecil yang serius jualan</span>
            <h1>Toko kecil, kelihatan siap jualan.</h1>
            <p>
              Lapakly bantu lu bikin halaman jualan, katalog, order, dan data pelanggan dalam satu dashboard yang rapi.
              Bukan cuma link bio, tapi ruang kerja jualan harian.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/register">Bikin toko <ArrowRight size={18} /></Link>
              <Link className="btn btn--ghost" to="/u/kopi-sore">Lihat demo</Link>
            </div>
            <div className="hero__checks">
              <span><CheckCircle2 size={17} /> Tanpa coding</span>
              <span><CheckCircle2 size={17} /> Bisa QRIS manual</span>
              <span><CheckCircle2 size={17} /> Dashboard realtime</span>
            </div>
            <div className="hero-proof">
              <div><strong>4 menit</strong><span>setup toko demo</span></div>
              <div><strong>1 link</strong><span>katalog + order</span></div>
              <div><strong>0 ribet</strong><span>buat seller awam</span></div>
            </div>
          </div>
          <div className="hero__visual">
            <MobilePreview />
            <img
              className="hero-photo hero-photo--one"
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=600&q=80"
              alt=""
            />
            <img
              className="hero-photo hero-photo--two"
              src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=600&q=80"
              alt=""
            />
            <div className="floating-note floating-note--top">
              <MessageSquareText size={18} />
              <span>Order baru masuk</span>
            </div>
            <div className="floating-note floating-note--bottom">
              <strong>82%</strong>
              <span>Store health</span>
            </div>
          </div>
        </section>

        <section className="section store-type-section">
          <div className="section-title">
            <span>Template nyata</span>
            <h2>Mulai dari jenis usaha, bukan halaman kosong.</h2>
          </div>
          <div className="store-type-grid">
            {storeTypes.map((item) => (
              <article className="store-type-card" key={item.title}>
                <img src={item.image} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section feature-grid" id="fitur">
          <div className="section-title">
            <span>Yang beda</span>
            <h2>Lebih dari katalog biasa.</h2>
          </div>
          <div className="cards-grid">
            {features.map(([title, description, Icon]) => (
              <article className="feature-card" key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section ops-section">
          <div className="ops-copy">
            <span className="eyebrow">Workspace seller</span>
            <h2>Order, produk, dan pelanggan kebaca dalam satu layar.</h2>
            <p>Seller kecil gak butuh sistem yang kelihatan mewah tapi bikin bingung. Lapakly dibuat padat, cepat, dan jelas.</p>
          </div>
          <div className="ops-board">
            <div><MousePointerClick size={20} /><strong>Produk dilihat</strong><span>128 klik</span></div>
            <div><PackageCheck size={20} /><strong>Order diproses</strong><span>14 hari ini</span></div>
            <div><WalletCards size={20} /><strong>QRIS manual</strong><span>bukti tersimpan</span></div>
          </div>
        </section>

        <section className="section flow-section" id="alur">
          <div className="section-title">
            <span>Alur kerja</span>
            <h2>Dari setup sampai order, jalannya pendek.</h2>
          </div>
          <div className="flow-list">
            {['Pilih tipe toko', 'Isi profil dan produk', 'Publish link jualan', 'Proses order dari dashboard'].map((item, index) => (
              <div className="flow-item" key={item}>
                <strong>{index + 1}</strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section pricing" id="harga">
          <div>
            <span className="eyebrow">MVP pricing</span>
            <h2>Mulai gratis, upgrade kalau toko mulai ramai.</h2>
          </div>
          <div className="price-card">
            <span>Free</span>
            <strong>Rp0</strong>
            <p>5 produk, link toko, order manual, dan preview mobile.</p>
            <Link className="btn btn--primary" to="/register">Coba dulu</Link>
          </div>
          <div className="price-card price-card--highlight">
            <span>Pro</span>
            <strong>Rp49rb/bln</strong>
            <p>Produk lebih banyak, analytics, customer list, template premium, export order.</p>
            <Link className="btn btn--dark" to="/register">Siapkan Pro</Link>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <BrandLogo />
        <p>Satu tempat buat jualan lebih rapi.</p>
      </footer>
    </div>
  );
}

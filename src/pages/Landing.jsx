import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
  MessageCircle,
  PackageCheck,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Star,
  Users
} from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo.jsx';

const features = [
  ['Katalog produk', 'Produk, harga, kategori, dan foto tampil rapi dalam satu link.', ShoppingBag],
  ['Order manual', 'Pembeli isi data, pilih produk, upload bukti bayar, seller cek dari dashboard.', PackageCheck],
  ['Chat WhatsApp', 'Tombol chat tetap dekat supaya seller cepat follow-up pembeli.', MessageCircle],
  ['Customer list', 'Nomor pelanggan dan riwayat order tidak hilang di tumpukan chat.', Users],
  ['QRIS manual', 'Cocok buat seller kecil yang belum butuh payment gateway otomatis.', CreditCard],
  ['Dashboard aman', 'Role, plan, dan data order dipisah dari tampilan frontend.', ShieldCheck]
];

const testimonials = [
  ['Raka', 'Seller kopi literan', 'Link toko jadi lebih enak dibagikan. Pembeli gak perlu tanya menu satu-satu.'],
  ['Nisa', 'Thrift shop', 'Katalognya lebih rapi daripada cuma taruh semua produk di story.'],
  ['Dimas', 'Jasa desain', 'Order masuk lebih jelas karena pembeli isi data dari awal.']
];

const plans = [
  ['Free', 'Rp0', 'Untuk mulai jualan', ['5 produk', 'Link toko publik', 'Order manual', 'Chat WhatsApp']],
  ['Pro', 'Rp49rb', 'Untuk toko yang mulai ramai', ['Produk lebih banyak', 'Upload gambar Cloudinary', 'Customer list', 'Export order']]
];

export default function Landing() {
  return (
    <div className="linkstyle-page">
      <header className="linkstyle-nav">
        <Link to="/" className="linkstyle-nav__brand"><BrandLogo /></Link>
        <nav>
          <a href="#tentang">Tentang</a>
          <a href="#fitur">Fitur</a>
          <a href="#testimoni">Testimoni</a>
          <a href="#harga">Harga</a>
        </nav>
        <Link className="linkstyle-nav__button" to="/register">Daftar</Link>
      </header>

      <main>
        <section className="linkstyle-hero">
          <div className="linkstyle-hero__copy">
            <span className="linkstyle-pill">Untuk UMKM, seller kecil, dan jualan harian</span>
            <h1>Satu link untuk toko kecil yang siap jualan.</h1>
            <p>
              Bikin halaman toko, katalog produk, checkout manual, dan chat pembeli
              dalam satu tempat yang gampang dipakai.
            </p>
            <div className="linkstyle-actions">
              <Link to="/u/kopi-sore">Lihat Demo</Link>
              <Link to="/register">Daftar Sekarang <ArrowRight size={17} /></Link>
            </div>
          </div>

          <div className="linkstyle-phone-wrap" aria-label="Preview toko">
            <div className="linkstyle-phone">
              <div className="phone-dot" />
              <div className="phone-logo"><ShoppingBag size={22} /></div>
              <h3>Toko Saya</h3>
              <p>Katalog & Kontak</p>
              <button>Beli di Shopee</button>
              <button>Chat Admin WA</button>
              <span>Promo hari ini</span>
            </div>
          </div>
          <div className="linkstyle-wave" />
        </section>

        <section className="linkstyle-about" id="tentang">
          <div className="about-visual">
            <div className="about-card">
              <BarChart3 size={44} />
              <strong>Statistik naik</strong>
            </div>
          </div>
          <div className="about-copy">
            <span>Tentang Lapakly</span>
            <h2>Platform ringkas untuk seller yang mau terlihat profesional.</h2>
            <p>
              Lapakly membantu seller kecil mengubah link bio biasa menjadi halaman toko
              yang lebih jelas: ada produk, tombol order, chat WA, dan data pelanggan.
            </p>
            <div className="about-stats">
              <div><strong>99%</strong><span>mobile friendly</span></div>
              <div><strong>10+</strong><span>fitur inti</span></div>
            </div>
            <a href="#fitur">Lihat fitur kami</a>
          </div>
        </section>

        <section className="linkstyle-section" id="fitur">
          <div className="linkstyle-section__head">
            <span>Fitur</span>
            <h2>Yang dibutuhkan seller, bukan fitur pajangan.</h2>
          </div>
          <div className="linkstyle-feature-grid">
            {features.map(([title, text, Icon]) => (
              <article key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="linkstyle-section linkstyle-testimonials" id="testimoni">
          <div className="linkstyle-section__head">
            <span>Apa kata mereka</span>
            <h2>Dipakai untuk jualan yang sederhana tapi serius.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map(([name, role, text]) => (
              <article key={name}>
                <Quote size={24} />
                <p>{text}</p>
                <div>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="linkstyle-section" id="harga">
          <div className="linkstyle-section__head">
            <span>Harga</span>
            <h2>Mulai gratis, upgrade kalau toko mulai ramai.</h2>
          </div>
          <div className="price-grid">
            {plans.map(([name, price, note, items]) => (
              <article className={name === 'Pro' ? 'price-box price-box--pro' : 'price-box'} key={name}>
                <span>{name}</span>
                <h3>{price}<small>/bulan</small></h3>
                <p>{note}</p>
                <ul>
                  {items.map((item) => <li key={item}><CheckCircle2 size={16} /> {item}</li>)}
                </ul>
                <Link to="/register">{name === 'Pro' ? 'Pilih Pro' : 'Mulai Gratis'}</Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="linkstyle-footer">
        <div className="footer-wave" />
        <div className="footer-content">
          <div>
            <BrandLogo />
            <p>Platform satu link untuk bikin toko kecil terlihat lebih rapi dan siap jualan.</p>
            <div className="footer-social">
              <span>IG</span><span>WA</span><span>X</span><span>FB</span>
            </div>
          </div>
          <div>
            <strong>Quick Link</strong>
            <a href="#tentang">Tentang Kami</a>
            <a href="#fitur">Fitur</a>
            <a href="#harga">Harga</a>
            <a href="#testimoni">Testimoni</a>
          </div>
          <div>
            <strong>Untuk Seller</strong>
            <span>Makanan & minuman</span>
            <span>Fashion</span>
            <span>Jasa</span>
            <span>Produk digital</span>
          </div>
          <div>
            <strong>Newsletter</strong>
            <p>Dapatkan update fitur dan promo menarik langsung ke email Anda.</p>
            <form>
              <input placeholder="Email Anda..." />
              <button type="button">Daftar</button>
            </form>
          </div>
        </div>
        <small>© 2026 Lapakly. Hak cipta dilindungi.</small>
      </footer>
    </div>
  );
}

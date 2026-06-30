import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/BrandLogo.jsx';

export default function NotFound() {
  return (
    <main className="not-found">
      <BrandLogo />
      <h1>Halaman tidak ketemu.</h1>
      <p>Link-nya mungkin berubah atau belum dipublish.</p>
      <Link className="btn btn--primary" to="/">Balik ke beranda</Link>
    </main>
  );
}

import { useNavigate } from 'react-router-dom';
import { AppShell } from '../layouts/AppShell.jsx';

const types = ['Makanan & minuman', 'Fashion', 'Jasa', 'Produk digital'];

export default function Onboarding() {
  const navigate = useNavigate();
  return (
    <AppShell title="Setup toko" subtitle="Pilih tipe usaha dulu, biar dashboard dan template lebih nyambung.">
      <div className="setup-grid">
        {types.map((type) => (
          <button className="setup-card" key={type} onClick={() => navigate('/dashboard')}>
            <strong>{type}</strong>
            <span>Template, contoh produk, dan copy toko akan disesuaikan.</span>
          </button>
        ))}
      </div>
    </AppShell>
  );
}

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthFrame } from './Login.jsx';
import { useAuth } from '../hooks/useAuth.jsx';

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      await register(form);
      navigate('/onboarding');
    } catch (err) {
      setError(err.message || 'Daftar gagal. Coba lagi sebentar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthFrame title="Bikin akun seller" note="Mulai dari toko kecil dulu. Nanti bisa upgrade kalau butuh fitur lebih.">
      <form className="auth-form" onSubmit={submit}>
        <label>Nama<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
        <label>Email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></label>
        <label>Password<input type="password" minLength="8" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required /></label>
        {error && <p className="form-error">{error}</p>}
        <button className="btn btn--primary" disabled={loading}>{loading ? 'Membuat akun...' : 'Daftar'}</button>
        <span>Sudah punya akun? <Link to="/login">Masuk</Link></span>
      </form>
    </AuthFrame>
  );
}

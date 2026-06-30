import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrandLogo } from '../components/BrandLogo.jsx';
import { useAuth } from '../hooks/useAuth.jsx';

export default function Login() {
  const navigate = useNavigate();
  const { login, isDemoMode } = useAuth();
  const [form, setForm] = useState({ email: 'demo@lapakly.local', password: 'password123' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Login gagal. Cek email dan password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthFrame title="Masuk ke dashboard" note={isDemoMode ? 'Demo mode aktif karena env Firebase belum diisi.' : 'Gunakan akun seller lu.'}>
      <form className="auth-form" onSubmit={submit}>
        <label>Email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></label>
        <label>Password<input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required /></label>
        {error && <p className="form-error">{error}</p>}
        <button className="btn btn--primary" disabled={loading}>{loading ? 'Memeriksa...' : 'Masuk'}</button>
        <Link to="/forgot-password">Lupa password?</Link>
        <span>Belum punya akun? <Link to="/register">Daftar</Link></span>
      </form>
    </AuthFrame>
  );
}

export function AuthFrame({ title, note, children }) {
  return (
    <main className="auth-page">
      <Link to="/" className="auth-page__brand"><BrandLogo /></Link>
      <section className="auth-card">
        <h1>{title}</h1>
        <p>{note}</p>
        {children}
      </section>
    </main>
  );
}

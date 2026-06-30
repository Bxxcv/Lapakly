import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthFrame } from './Login.jsx';
import { useAuth } from '../hooks/useAuth.jsx';

export default function ForgotPassword() {
  const { resetPassword, isDemoMode } = useAuth();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    await resetPassword(email);
    setMessage(isDemoMode ? 'Demo mode: email reset tidak dikirim.' : 'Link reset password sudah dikirim kalau email terdaftar.');
  };

  return (
    <AuthFrame title="Reset password" note="Masukkan email akun seller. Jangan bikin user mentok di halaman login.">
      <form className="auth-form" onSubmit={submit}>
        <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
        {message && <p className="form-success">{message}</p>}
        <button className="btn btn--primary">Kirim link reset</button>
        <Link to="/login">Kembali login</Link>
      </form>
    </AuthFrame>
  );
}

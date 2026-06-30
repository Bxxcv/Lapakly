import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BarChart3, Boxes, ClipboardList, Home, LogOut, ShieldCheck, Store } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo.jsx';
import { useAuth } from '../hooks/useAuth.jsx';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  { to: '/products', label: 'Produk', icon: Boxes },
  { to: '/orders', label: 'Order', icon: ClipboardList },
  { to: '/u/kopi-sore', label: 'Preview', icon: Store },
  { to: '/admin', label: 'Admin', icon: ShieldCheck }
];

export function AppShell({ title, subtitle, children, action }) {
  const { logout, profile, isDemoMode } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link className="sidebar__brand" to="/dashboard"><BrandLogo /></Link>
        <nav className="sidebar__nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.to} to={item.to}>
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
        <div className="sidebar__foot">
          {isDemoMode && <span className="demo-pill">Demo mode</span>}
          <button type="button" onClick={handleLogout}>
            <LogOut size={17} />
            Keluar
          </button>
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <Link className="topbar__home" to="/"><Home size={18} /></Link>
          <div>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <div className="topbar__right">
            {action}
            <div className="avatar">{(profile?.name || 'L').charAt(0)}</div>
          </div>
        </header>
        <div className="workspace__content">{children}</div>
      </main>
    </div>
  );
}

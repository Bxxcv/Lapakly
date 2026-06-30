import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Plus, TrendingUp, Users } from 'lucide-react';
import { MobilePreview } from '../components/MobilePreview.jsx';
import { StatusBadge } from '../components/StatusBadge.jsx';
import { AppShell } from '../layouts/AppShell.jsx';
import { demoOrders, demoProducts, demoStore, formatCurrency } from '../data/demo.js';

export default function Dashboard() {
  const revenue = demoOrders.reduce((sum, order) => sum + order.total, 0);

  return (
    <AppShell
      title="Dashboard"
      subtitle="Ringkasan toko, order, dan hal yang perlu diberesin hari ini."
      action={<Link className="btn btn--primary btn--small" to="/products"><Plus size={16} /> Produk</Link>}
    >
      <div className="dashboard-grid">
        <section className="metric-row">
          <Metric title="Omset demo" value={formatCurrency(revenue)} icon={<TrendingUp />} />
          <Metric title="Order aktif" value="2" icon={<MessageCircle />} />
          <Metric title="Pelanggan" value="38" icon={<Users />} />
        </section>

        <section className="panel store-health">
          <div>
            <span className="panel-kicker">Store health</span>
            <h2>{demoStore.score}% siap jualan</h2>
            <p>Profil sudah cukup rapi. Tinggal tambahkan foto QRIS asli dan 2 produk unggulan.</p>
          </div>
          <div className="health-ring"><span>{demoStore.score}</span></div>
        </section>

        <section className="panel order-inbox">
          <div className="panel-head">
            <div>
              <span className="panel-kicker">Order inbox</span>
              <h2>Pesanan terbaru</h2>
            </div>
            <Link to="/orders">Lihat semua <ArrowUpRight size={15} /></Link>
          </div>
          <div className="order-list">
            {demoOrders.map((order) => (
              <article className="order-row" key={order.id}>
                <div>
                  <strong>{order.buyerName}</strong>
                  <span>{order.productName} x{order.quantity}</span>
                </div>
                <StatusBadge status={order.status} />
                <b>{formatCurrency(order.total)}</b>
              </article>
            ))}
          </div>
        </section>

        <section className="panel preview-panel">
          <div className="panel-head">
            <div>
              <span className="panel-kicker">Live preview</span>
              <h2>Tampilan toko</h2>
            </div>
          </div>
          <MobilePreview store={demoStore} products={demoProducts} />
        </section>
      </div>
    </AppShell>
  );
}

function Metric({ title, value, icon }) {
  return (
    <article className="metric-card">
      <span>{icon}</span>
      <p>{title}</p>
      <strong>{value}</strong>
    </article>
  );
}

import { AppShell } from '../layouts/AppShell.jsx';

const rows = [
  ['Seller aktif', '128', 'Naik 12% bulan ini'],
  ['Request Pro', '9', 'Butuh dicek manual'],
  ['Order bulan ini', '2.418', 'Realtime dari seller'],
  ['Laporan abuse', '0', 'Aman']
];

export default function Admin() {
  return (
    <AppShell title="Admin master" subtitle="Panel owner untuk pantau seller, premium, template, dan status platform.">
      <div className="admin-grid">
        {rows.map(([label, value, note]) => (
          <article className="metric-card metric-card--admin" key={label}>
            <p>{label}</p>
            <strong>{value}</strong>
            <span>{note}</span>
          </article>
        ))}
      </div>
      <section className="panel">
        <div className="panel-head">
          <div>
            <span className="panel-kicker">Kontrol platform</span>
            <h2>Hal yang harus server-side</h2>
          </div>
        </div>
        <div className="security-list">
          <span>Role admin tidak boleh dari frontend.</span>
          <span>Plan seller tidak boleh diedit user biasa.</span>
          <span>Storage bukti bayar harus dibatasi path dan ukuran.</span>
          <span>Query admin wajib pagination.</span>
        </div>
      </section>
      <section className="panel admin-visual">
        <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80" alt="" />
        <div>
          <span className="panel-kicker">Operator view</span>
          <h2>Admin cukup lihat yang perlu ditindak.</h2>
          <p>Request premium, laporan seller, dan status platform dibuat ringkas supaya gak jadi panel yang ramai tanpa arah.</p>
        </div>
      </section>
    </AppShell>
  );
}

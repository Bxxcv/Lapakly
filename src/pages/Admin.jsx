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
    </AppShell>
  );
}

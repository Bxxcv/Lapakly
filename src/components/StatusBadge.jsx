export function StatusBadge({ status }) {
  const labels = {
    waiting_payment_review: 'Cek pembayaran',
    processing: 'Diproses',
    done: 'Selesai',
    active: 'Aktif',
    draft: 'Draft'
  };

  return <span className={`status-badge status-badge--${status}`}>{labels[status] || status}</span>;
}

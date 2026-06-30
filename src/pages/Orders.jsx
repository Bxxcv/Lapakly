import { AppShell } from '../layouts/AppShell.jsx';
import { demoOrders, formatCurrency } from '../data/demo.js';
import { StatusBadge } from '../components/StatusBadge.jsx';

export default function Orders() {
  return (
    <AppShell title="Order inbox" subtitle="Pesanan dibuat seperti antrian kerja, bukan tabel yang bikin pusing.">
      <div className="orders-board">
        {demoOrders.map((order) => (
          <article className="order-ticket" key={order.id}>
            <header>
              <div>
                <strong>{order.id}</strong>
                <span>{order.createdAtText}</span>
              </div>
              <StatusBadge status={order.status} />
            </header>
            <h3>{order.productName}</h3>
            <p>{order.buyerName} - {order.buyerPhone}</p>
            <footer>
              <span>Qty {order.quantity}</span>
              <b>{formatCurrency(order.total)}</b>
            </footer>
            <div className="ticket-actions">
              <button>Chat WA</button>
              <button>Ubah status</button>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}

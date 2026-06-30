import { ShoppingBag } from 'lucide-react';

export function BrandLogo({ compact = false }) {
  return (
    <div className="brand-logo" aria-label="Lapakly">
      <span className="brand-logo__mark">
        <ShoppingBag size={compact ? 18 : 22} strokeWidth={2.4} />
      </span>
      {!compact && <span className="brand-logo__text">Lapakly</span>}
    </div>
  );
}

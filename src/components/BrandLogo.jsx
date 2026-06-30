export function BrandLogo({ compact = false }) {
  return (
    <div className="brand-logo" aria-label="Lapakly">
      <span className="brand-logo__mark">
        <span>L</span>
      </span>
      {!compact && <span className="brand-logo__text">Lapakly</span>}
    </div>
  );
}

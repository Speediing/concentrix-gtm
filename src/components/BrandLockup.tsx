export function BrandLockup({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
  invert?: boolean;
}) {
  return (
    <div className={`brand-lockup brand-lockup-${size}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://www.concentrix.com/wp-content/uploads/2024/02/concentrix_logo.webp"
        alt="Concentrix"
        className="brand-wordmark"
        width="804"
        height="124"
      />
      <span className="brand-times" aria-hidden>
        ×
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/spacexai.svg" alt="SpaceXAI" className="brand-sxai" />
    </div>
  );
}

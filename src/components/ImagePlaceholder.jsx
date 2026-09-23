export default function ImagePlaceholder({ icon: Icon, label, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-800 via-brand-700 to-mint-500 text-white ${className}`}
    >
      <Icon className="h-10 w-10 opacity-90" strokeWidth={1.5} />
      {label && (
        <span className="max-w-[14rem] text-center text-xs font-medium uppercase tracking-wide text-white/80">
          {label}
        </span>
      )}
    </div>
  );
}

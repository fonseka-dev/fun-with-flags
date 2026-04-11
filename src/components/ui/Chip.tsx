type ChipProps = {
  label: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
};

export function Chip({ label, icon, active = false, onClick }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-3 rounded-full font-bold text-sm
        transition-bounce
        ${
          active
            ? "bg-secondary-container text-on-secondary-container"
            : "text-on-surface-variant hover:bg-surface-container-low"
        }
      `}
    >
      {icon && (
        <span className="material-symbols-outlined text-lg">{icon}</span>
      )}
      {label}
    </button>
  );
}

interface ProjectStatusBadgeProps {
  status: "building" | "planned" | "live";
  expected?: string; // e.g. "March 29"
}

const config = {
  building: {
    emoji: "🔨",
    label: "Building",
    className: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  },
  planned: {
    emoji: "📋",
    label: "Planned",
    className: "bg-slate-500/15 text-slate-400 border-slate-500/30",
  },
  live: {
    emoji: "✅",
    label: "Live",
    className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  },
};

export function ProjectStatusBadge({ status, expected }: ProjectStatusBadgeProps) {
  const { emoji, label, className } = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${className}`}
    >
      <span>{emoji}</span>
      <span>{label}{expected ? ` · Expected ${expected}` : ""}</span>
    </span>
  );
}

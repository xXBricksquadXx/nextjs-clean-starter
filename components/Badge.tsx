import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ label: string; className?: string }>;

export const Badge = ({ label, children, className = "" }: Props) => (
  <span
    className={[
      "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium",
      "border-slate-300 bg-white text-slate-700",
      className,
    ].join(" ")}
    aria-label={label}
    title={label}
  >
    <span aria-hidden className="select-none">{children}</span>
    <span>{label}</span>
  </span>
);

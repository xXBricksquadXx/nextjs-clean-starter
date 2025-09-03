type Props = { className?: string };

export const MemePanel = ({ className = "" }: Props) => (
  <div
    className={[
      "rounded-2xl border bg-gradient-to-br from-slate-50 to-white p-4 text-left shadow-sm",
      className,
    ].join(" ")}
  >
    <div className="flex items-start gap-3">
      {/* headset/support icon */}
      <svg aria-hidden className="mt-0.5 h-6 w-6 text-slate-600" viewBox="0 0 24 24">
        <path
          d="M12 3a7 7 0 0 0-7 7v4a3 3 0 0 0 3 3h1v-6H6v-1a6 6 0 1 1 12 0v1h-3v6h1a3 3 0 0 0 3-3v-4a7 7 0 0 0-7-7Z"
          fill="currentColor"
        />
        <rect x="10" y="17" width="4" height="3" rx="1" fill="currentColor" />
      </svg>

      <div className="flex-1">
        <div className="text-sm font-semibold">IT trenches log</div>
        <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs leading-relaxed text-slate-100">
{`# pager at 1:07 AM
$ git push origin main
$ npx vercel deploy --prod

✔ build: passed
✔ deploy: live
> ticket: resolved (customer can finally see the dashboard)`}
        </pre>
      </div>
    </div>
  </div>
);

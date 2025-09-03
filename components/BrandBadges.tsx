import { Badge } from "./Badge";

export const BrandBadges = ({ className = "" }: { className?: string }) => (
  <div className={["flex flex-wrap justify-center gap-2", className].join(" ")}>
    <Badge label="Airbnb ESLint"><span className="font-mono text-xs">ES</span></Badge>
    <Badge label="Prettier"><span className="font-mono text-sm">{`{}`}</span></Badge>
    <Badge label="Vercel"><span className="text-sm font-bold">▲</span></Badge>
  </div>
);

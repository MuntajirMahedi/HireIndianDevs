import { Check } from "lucide-react";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  tags?: string[];
  reverse?: boolean;
}

export const SplitSection = ({ eyebrow, title, description, bullets, tags, reverse }: Props) => (
  <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
    <div className={reverse ? "lg:order-2" : ""}>
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{eyebrow}</div>
      <h3 className="mt-3 text-display-md text-ink">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      {tags && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-md border border-border bg-secondary px-3 py-1 text-xs font-medium text-ink">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
    <ul className={`space-y-3 rounded-lg border border-border bg-card p-6 md:p-8 ${reverse ? "lg:order-1" : ""}`}>
      {bullets.map((b) => (
        <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-ink md:text-base">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

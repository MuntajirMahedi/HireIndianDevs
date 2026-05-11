import { Check, Sparkles, ArrowRight } from "lucide-react";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  tags?: string[];
  reverse?: boolean;
  label?: string;
  accent?: string;
}

export const SplitSection = ({ eyebrow, title, description, bullets, tags, reverse, label, accent = "text-accent" }: Props) => (
  <div className="group grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
    <div className={`${reverse ? "lg:order-2" : ""} relative`}>
      {/* Decorative side glow */}
      <div className={`absolute -left-10 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/5 blur-[80px] transition-opacity group-hover:opacity-100 opacity-0`} />
      
      <div className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${accent}`}>
        <span className={`h-px w-6 ${accent.replace('text', 'bg')}`} />
        {eyebrow}
      </div>
      
      <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink leading-[1.15]">
        {title}
      </h3>
      
      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        {description}
      </p>

      {tags && (
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-xl border border-border bg-secondary/50 px-3.5 py-1.5 text-[11px] font-bold text-ink transition-all hover:border-accent/30 hover:text-accent">
              {t}
            </span>
          ))}
        </div>
      )}

      {label && (
        <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest">
          <Sparkles className="h-4 w-4" />
          {label}
        </div>
      )}
    </div>

    <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
      {/* Glassmorphic card for bullets */}
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/40 p-8 backdrop-blur-sm shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1 group-hover:border-accent/20">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/[0.03] blur-3xl" />
        
        <ul className="space-y-5 relative z-10">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-4 text-sm font-medium leading-relaxed text-ink/80 md:text-[15px]">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Check className="h-3 w-3" />
              </div>
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Ready to Scale</span>
          <ArrowRight className="h-4 w-4 text-accent opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
        </div>
      </div>
    </div>
  </div>
);

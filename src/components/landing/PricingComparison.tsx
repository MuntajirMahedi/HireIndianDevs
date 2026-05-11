import { Check, Sparkles, X, ArrowRight, ShieldCheck, Zap, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";

const cols = [
  { 
    region: "United States", 
    rate: "80-150", 
    per: "per hour", 
    note: "High overhead & long hiring cycles", 
    highlight: false,
    pros: false,
    items: ["Long hiring cycles (4-8 weeks)", "High payroll & office overhead", "Strict long-term commitments", "High hourly rates ($80+)"]
  },
  { 
    region: "United Kingdom", 
    rate: "70-120", 
    per: "per hour", 
    note: "Expensive talent acquisition", 
    highlight: false,
    pros: false,
    items: ["Expensive benefits & taxes", "Limited local talent pool", "Higher retention costs", "Premium agency margins"]
  },
  { 
    region: "Our Team - India", 
    rate: "25", 
    per: "starting per hour", 
    note: "Elite talent with cost advantage", 
    highlight: true,
    label: "Most Cost Efficient",
    pros: true,
    items: ["Fast onboarding (24-72 hours)", "Save up to 70% in budget", "Scale team up/down instantly", "Direct access to senior devs"]
  },
];

export const PricingComparison = () => (
  <section id="pricing-comparison" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative background glows */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.02]">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-[100px]" />
    </div>

    <ScrollReveal className="container-tight relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          The $25/hr Advantage
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          Build faster and scale smarter with <span className="text-accent italic">better economics</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Maximize your engineering output without overstretching your budget. Access top-tier talent at a fraction of the cost of US or UK markets.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {cols.map((c, i) => (
          <div
            key={i}
            className={`group relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
              c.highlight
                ? "border-accent bg-card shadow-2xl shadow-accent/10 ring-1 ring-accent"
                : "border-border bg-card/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            }`}
          >
            {c.highlight && (
              <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-accent/20">
                <Sparkles className="h-3 w-3" /> {c.label}
              </div>
            )}

            <div className="mb-8">
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">
                {c.region}
              </div>
              <div className="flex items-baseline gap-1">
                {c.rate !== "Custom" && <span className={`text-xl font-bold ${c.highlight ? 'text-accent' : 'text-ink/60'}`}>$</span>}
                <span className={`text-5xl font-black tracking-tight ${c.highlight ? 'text-accent' : 'text-ink'}`}>{c.rate}</span>
                <span className="text-sm font-bold text-muted-foreground ml-1">/hr</span>
              </div>
              <p className="mt-3 text-xs font-semibold text-muted-foreground leading-relaxed">
                {c.note}
              </p>
            </div>

            <div className="flex-grow">
              <div className="h-px w-full bg-border/50 mb-8" />
              <ul className="space-y-4">
                {c.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium">
                    {c.pros ? (
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                    ) : (
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-600">
                        <X className="h-2.5 w-2.5" />
                      </div>
                    )}
                    <span className={c.highlight ? 'text-ink' : 'text-muted-foreground'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {c.highlight && (
              <div className="mt-10 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {["NDA Protected", "Agile Flow", "Dedicated Support", "100% IP"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-accent/5 border border-accent/10 text-[9px] font-bold text-accent uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full rounded-2xl py-6 font-bold bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20">
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    Hire Developers Starting at $25/hr
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Comparison Metrics Footer */}
      <div className="mt-16 pt-12 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Globe, label: "500+ Projects", sub: "Global Trust" },
            { icon: Zap, label: "Save up to 70%", sub: "Better Economics" },
            { icon: ShieldCheck, label: "Enterprise Ready", sub: "Security Standards" },
            { icon: Heart, label: "98% Satisfaction", sub: "Client Confidence" },
          ].map((metric, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/5 text-accent">
                <metric.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-black text-ink">{metric.label}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{metric.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

import { Clock, Layers, Sparkles, Users, Check, ArrowRight, ShieldCheck, Zap, Globe, Heart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";

const models = [
  {
    icon: Clock,
    name: "Hourly Developers",
    price: "25",
    per: "per hour",
    description: "Best for ongoing maintenance, iterative updates, and evolving project requirements.",
    features: ["Pay only for actual work done", "Adjust scope on the fly", "Scale hours up or down", "Detailed weekly reporting"],
    label: "Best for Startups",
    cta: "Hire Developers",
    tags: ["Agile Workflow", "NDA Protected"]
  },
  {
    icon: Users,
    name: "Dedicated Resources",
    price: "25",
    per: "per hour",
    description: "Developers work exclusively on your product as a seamless extension of your team.",
    features: ["Full control over priorities", "Deep product understanding", "Full-time or part-time availability", "Daily standups & reporting"],
    label: "Most Popular",
    highlight: true,
    cta: "Book Consultation",
    tags: ["Dedicated Support", "Fast Onboarding"]
  },
  {
    icon: Layers,
    name: "Fixed-Price Projects",
    price: "Custom",
    per: "per project",
    description: "Ideal for clearly defined scopes like MVPs, landing pages, and system upgrades.",
    features: ["Clear estimate upfront", "Defined delivery milestones", "Milestone-based payments", "Risk-free delivery"],
    label: "Enterprise Ready",
    cta: "Get Estimate",
    tags: ["Guaranteed Delivery", "Scale Ready"]
  },
];

export const PricingModels = () => (
  <section id="pricing" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Background Decorative Glows */}
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-[500px] pointer-events-none opacity-[0.03]">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[120px]" />
    </div>

    <ScrollReveal className="container-tight relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Transparent Pricing
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          Flexible models for <span className="text-accent italic">every business scale</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Choose a pricing structure that fits your budget and project scope. No hidden fees, no complex contracts—just pure engineering talent.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {models.map((m) => (
          <div
            key={m.name}
            className={`group relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
              m.highlight 
                ? "border-accent bg-card shadow-2xl shadow-accent/10 ring-1 ring-accent" 
                : "border-border bg-card/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            }`}
          >
            {m.highlight && (
              <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-accent/20">
                <Sparkles className="h-3 w-3" /> {m.label}
              </div>
            )}
            
            {!m.highlight && (
              <div className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-0.5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground border border-border">
                {m.label}
              </div>
            )}

            <div className="mb-8 flex items-center justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${m.highlight ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-accent/5 text-accent'}`}>
                <m.icon className="h-6 w-6" />
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-baseline gap-1">
                  {m.price !== "Custom" && <span className="text-sm font-bold text-ink/60">$</span>}
                  <span className={`text-4xl font-black tracking-tight text-ink ${m.highlight ? 'text-accent' : ''}`}>{m.price}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{m.per}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-ink mb-3">{m.name}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground mb-8">
              {m.description}
            </p>

            <ul className="mb-8 space-y-4">
              {m.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-medium text-ink/80">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-6">
              <div className="flex flex-wrap gap-2">
                {m.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-secondary border border-border text-[9px] font-bold text-muted-foreground/70 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button asChild className={`w-full rounded-2xl py-6 font-bold shadow-lg transition-all ${m.highlight ? 'bg-accent text-white hover:bg-accent/90 shadow-accent/20' : 'bg-ink text-white hover:bg-ink/90 shadow-ink/10'}`}>
                <a href="#contact" className="flex items-center justify-center gap-2">
                  {m.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Footer */}
      <div className="mt-16 pt-12 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Globe, label: "500+ Projects", sub: "Delivered Globally" },
            { icon: Zap, label: "24-72h", sub: "Fast Onboarding" },
            { icon: Heart, label: "98% CSAT", sub: "Client Satisfaction" },
            { icon: ShieldCheck, label: "100% IP", sub: "Ownership Rights" },
          ].map((trust, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/5 text-accent">
                <trust.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-black text-ink">{trust.label}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{trust.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

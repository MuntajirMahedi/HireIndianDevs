import { Clock, Layers, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const models = [
  {
    icon: Clock,
    name: "Hourly Developers",
    price: "$25",
    per: "/ hour",
    description: "Ideal for evolving requirements, maintenance, iterative product work, and ongoing updates.",
    features: ["Pay only for actual work done", "Adjust scope as needs change", "Scale hours up or down", "Weekly or monthly reporting"],
  },
  {
    icon: Users,
    name: "Dedicated Resources",
    price: "$25",
    per: "/ hour",
    description: "Developers work exclusively on your product as an extension of your in-house team.",
    features: ["Full control over priorities", "Consistent output and faster progress", "Deep product understanding over time", "Full-time or part-time availability"],
    highlight: true,
  },
  {
    icon: Layers,
    name: "Fixed-Price Projects",
    price: "Custom",
    per: "/ project",
    description: "Best for clearly defined scopes such as websites, MVPs, modules, and system upgrades.",
    features: ["Clear estimate upfront", "Defined timelines and milestones", "Milestone-based payments", "Calculated from the $25/hour base rate"],
  },
];

export const PricingModels = () => (
  <section className="section-y border-b border-border bg-secondary/30">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="Transparent Pricing Models"
        title="Flexible hiring without hidden costs or surprises."
        description="Choose hourly developers, dedicated resources, or fixed-scope delivery. Every model is built for budget control, clear reporting, and predictable collaboration."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {models.map((m) => (
          <div
            key={m.name}
            className={`relative flex flex-col rounded-xl border p-8 ${
              m.highlight ? "border-ink bg-card ring-1 ring-ink" : "border-border bg-card"
            }`}
          >
            {m.highlight && (
              <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-primary-foreground">
                <Sparkles className="h-3 w-3" /> Most popular
              </div>
            )}
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary">
              <m.icon className="h-5 w-5 text-ink" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink">{m.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-ink">{m.price}</span>
              <span className="text-sm text-muted-foreground">{m.per}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              {m.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

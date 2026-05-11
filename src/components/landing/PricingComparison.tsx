import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const cols = [
  { region: "United States", rate: "$80-$150", per: "per hour", note: "Typical senior developer market range", highlight: false },
  { region: "United Kingdom", rate: "$70-$120", per: "per hour", note: "Typical senior developer market range", highlight: false },
  { region: "India - Our team", rate: "From $25", per: "per hour", note: "Flexible starting rate for experienced engineers", highlight: true },
];

const features = [
  "Mid to senior product engineers",
  "Daily updates and sprint cadence",
  "100% IP ownership",
  "NDA and secure delivery",
  "Flexible hourly or dedicated hiring",
];

export const PricingComparison = () => (
  <section id="pricing" className="section-y border-b border-border bg-background">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="The $25 Per Hour Advantage"
        title="Build faster, scale smarter, and keep more budget for growth."
        description="One of the biggest reasons companies hire Indian developers is the cost advantage without sacrificing quality. Our flexible pricing starts at $25/hour and scales with project complexity, team size, and engagement model."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {cols.map((c) => (
          <div
            key={c.region}
            className={`relative rounded-xl border p-8 transition-transform ${
              c.highlight
                ? "border-ink bg-primary text-primary-foreground md:-translate-y-2 md:scale-[1.02]"
                : "border-border bg-card text-card-foreground"
            }`}
          >
            {c.highlight && (
              <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                <Sparkles className="h-3 w-3" /> Best value
              </div>
            )}
            <div className={`text-xs font-semibold uppercase tracking-[0.14em] ${c.highlight ? "text-accent" : "text-muted-foreground"}`}>
              {c.region}
            </div>
            <div className="mt-4 flex flex-wrap items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight md:text-5xl">{c.rate}</span>
              <span className={`text-sm ${c.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{c.per}</span>
            </div>
            <p className={`mt-2 text-sm ${c.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{c.note}</p>

            {c.highlight ? (
              <>
                <ul className="mt-8 space-y-3 text-sm">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="#contact">Hire developers starting at $25/hour</a>
                </Button>
              </>
            ) : (
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                <li>Long hiring cycles</li>
                <li>Higher payroll overhead</li>
                <li>Less flexibility for quick scaling</li>
              </ul>
            )}
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Build cost-effective remote teams with pricing that starts at <span className="font-semibold text-ink">$25/hour</span> and adapts to your delivery needs.
      </p>
    </ScrollReveal>
  </section>
);

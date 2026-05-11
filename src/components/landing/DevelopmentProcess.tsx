import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const process = [
  "Share your project requirements",
  "Get matched with suitable Indian developers",
  "Review profiles and interview candidates",
  "Choose hourly, dedicated, or fixed-scope engagement",
  "Start development with clear workflows and reporting",
  "Track progress through daily updates and project tools",
  "Launch, monitor, improve, and scale your product",
];

export const DevelopmentProcess = () => (
  <section id="process" className="section-y border-b border-border bg-background">
    <ScrollReveal className="container-tight">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="How It Works"
            title="A simple process to hire Indian developers and start building."
            description="We keep remote developer hiring structured and transparent. Most teams can begin within 24-72 hours depending on role fit, project complexity, and interviews."
          />
          <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact">
              Start the hiring process <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {process.map((step, index) => (
            <div key={step} className="bg-card p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 text-base font-semibold leading-snug text-ink">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

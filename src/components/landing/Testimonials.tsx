import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    quote: "The developers integrated quickly with our team and helped us launch faster than expected.",
    name: "SaaS Founder",
    detail: "MVP launch and post-launch scaling",
  },
  {
    quote: "Clear communication, strong technical execution, and transparent pricing from day one.",
    name: "Agency Director",
    detail: "Dedicated remote development team",
  },
  {
    quote: "A reliable development partner for scaling client projects without hiring in-house.",
    name: "Product Lead",
    detail: "Web, mobile, and backend delivery",
  },
];

export const Testimonials = () => (
  <section className="section-y border-b border-border bg-background">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="Client Confidence"
        title="Built for teams that need reliable delivery."
        description="Startups, agencies, and businesses choose us when they need dependable development support without inflated costs or hiring delays."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure key={item.name} className="rounded-lg border border-border bg-card p-6">
            <Quote className="h-6 w-6 text-accent" />
            <blockquote className="mt-5 text-base font-medium leading-relaxed text-ink">"{item.quote}"</blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <div className="text-sm font-semibold text-ink">{item.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{item.detail}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

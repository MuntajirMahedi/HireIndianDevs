import { Banknote, HeartPulse, GraduationCap, ShoppingBag } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const industries = [
  { icon: Banknote, name: "Fintech", body: "Secure payment gateways, real-time dashboards, fraud detection and complex banking integrations." },
  { icon: HeartPulse, name: "Healthcare", body: "Patient management, telemedicine platforms, scheduling and HIPAA-ready EHR integrations." },
  { icon: GraduationCap, name: "EdTech", body: "Scalable LMS, live class streaming, student progress tracking and interactive assessment tools." },
  { icon: ShoppingBag, name: "eCommerce", body: "High-performance online stores, inventory systems, secure checkout and logistics integrations." },
];

export const Industries = () => (
  <section className="section-y border-b border-border bg-secondary/30">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="Industry Specific"
        title="Solutions built for your industry."
        description="Every industry has unique compliance and performance needs. Our teams have delivered across highly-regulated sectors."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((i) => (
          <div key={i.name} className="rounded-lg border border-border bg-card p-6">
            <i.icon className="h-6 w-6 text-ink" />
            <h3 className="mt-5 text-lg font-semibold text-ink">{i.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

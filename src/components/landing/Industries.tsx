import { Banknote, Building2, GraduationCap, HeartPulse, PanelsTopLeft, ShoppingBag } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const industries = [
  { icon: Banknote, name: "Fintech", body: "Secure payment gateways, real-time dashboards, fraud detection, risk tools, and banking API integrations." },
  { icon: HeartPulse, name: "Healthcare", body: "Patient management, telemedicine, scheduling, secure records, and privacy-aware healthcare workflows." },
  { icon: GraduationCap, name: "EdTech", body: "Learning management systems, live classes, student progress tracking, assessments, and interactive content." },
  { icon: ShoppingBag, name: "eCommerce", body: "High-performance stores, product catalogs, inventory, checkout, order tracking, and logistics integrations." },
  { icon: PanelsTopLeft, name: "SaaS", body: "Subscription platforms, dashboards, analytics, user roles, integrations, billing flows, and admin systems." },
  { icon: Building2, name: "Enterprise", body: "CRM, ERP, internal tools, workflow automation, marketplace systems, and custom operational platforms." },
];

export const Industries = () => (
  <section id="industries" className="section-y border-b border-border bg-secondary/30">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="Industry Solutions"
        title="Software tailored to your industry's workflows and growth model."
        description="A fintech platform is not built like an eCommerce store, healthcare system, EdTech product, or enterprise SaaS platform. We adapt architecture, security, and UX to the real needs of your market."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

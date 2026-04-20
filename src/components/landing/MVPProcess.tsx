import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  { week: "Week 1–2", title: "Requirement analysis", body: "Define core product idea, prioritize features, and plan scalable architecture." },
  { week: "Week 3–5", title: "Core development", body: "Build the essential feature set first to identify most important functionality." },
  { week: "Week 6–8", title: "Testing & deployment", body: "Rigorous testing across devices, optimization, and production launch." },
];

export const MVPProcess = () => (
  <section id="process" className="section-y border-b border-border">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="30 to 60 Day MVP Launch"
        title="Build lean. Launch fast. Scale smart."
        description="Focused on building only what's necessary to go live and validate your idea, without wasting time or budget."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.week} className="bg-card p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Step {i + 1}</div>
            <div className="mt-2 text-sm font-medium text-muted-foreground">{s.week}</div>
            <h3 className="mt-3 text-xl font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  { week: "Week 1-2", title: "Requirement analysis", body: "Define the core product idea, prioritize user-value features, and plan a scalable foundation." },
  { week: "Week 3-5", title: "Core development", body: "Build the essential feature set with clean frontend, backend, database, and API implementation." },
  { week: "Week 6-8", title: "Testing and launch", body: "Run QA, optimize performance, deploy to production, and prepare the product for real users." },
];

export const MVPProcess = () => (
  <section id="mvp" className="section-y border-b border-border">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="MVP Development"
        title="Launch your MVP in 30 to 60 days."
        description="Validate your idea faster with lean, scalable, cost-effective product development. We build only what is necessary to go live while keeping the architecture ready for future growth."
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

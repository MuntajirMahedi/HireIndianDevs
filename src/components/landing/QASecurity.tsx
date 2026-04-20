import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const items = [
  { title: "NDA & Confidentiality", body: "Signed NDAs before kickoff. Secure file handling and restricted role-based access." },
  { title: "Structured Testing", body: "Unit, integration, and end-to-end testing across every release for reliability." },
  { title: "Automated QA", body: "Custom test scripts and continuous testing during development cycles." },
  { title: "GDPR Compliance", body: "Secure data storage, encryption, and compliance-ready architecture patterns." },
  { title: "Code Reviews", body: "Peer code reviews, standardized practices, and performance checks pre-deploy." },
  { title: "Secure Development", body: "Safe API integrations and protection against common OWASP vulnerabilities." },
];

export const QASecurity = () => (
  <section className="section-y border-b border-border">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="QA & Security"
        title="Enterprise-level testing standards."
        description="Quality and security are built into the development process, not added later. Every release is verified."
      />
      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="bg-card p-6">
            <h3 className="text-base font-semibold text-ink">{i.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

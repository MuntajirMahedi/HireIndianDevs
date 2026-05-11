import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const items = [
  { title: "NDA and confidentiality", body: "Signed NDAs before kickoff, secure file handling, and restricted access based on project roles." },
  { title: "Structured testing", body: "Unit, integration, end-to-end, and regression testing are built into the development lifecycle." },
  { title: "Automated QA", body: "Automated scripts and continuous testing help catch bugs earlier and keep releases consistent." },
  { title: "GDPR-aware architecture", body: "Secure storage, encryption, consent-aware flows, and access controls for privacy-focused products." },
  { title: "Code reviews", body: "Peer review, standardized coding practices, performance checks, and maintainability standards before deployment." },
  { title: "Secure development", body: "Authentication, authorization, safe API integrations, patch management, and OWASP-aware engineering." },
  { title: "Post-launch support", body: "Monitoring, bug fixes, performance optimization, security updates, and continuous product improvements." },
  { title: "Ownership protection", body: "You retain complete ownership of source code, designs, assets, data, and product IP after delivery." },
];

export const QASecurity = () => (
  <section className="section-y border-b border-border">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="Security and Quality"
        title="Enterprise-level QA, security, and confidentiality standards."
        description="Quality and security are built into delivery from day one. At $25 per hour, you still get professional testing, secure development practices, and clear ownership protection."
      />
      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
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

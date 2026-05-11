const items = [
  "500+ Projects",
  "10+ Years Experience",
  "NDA Protected",
  "GDPR Ready",
  "Agile / Scrum",
  "24-72h Hiring",
  "100% Code Ownership",
];

export const TrustStrip = () => (
  <section className="border-b border-border bg-secondary/40">
    <div className="container-tight flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
      {items.map((i) => (
        <span key={i}>{i}</span>
      ))}
    </div>
  </section>
);

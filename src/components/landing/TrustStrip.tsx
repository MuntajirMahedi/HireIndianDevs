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
  <section className="overflow-hidden border-b border-border bg-secondary/40">
    <div className="relative py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/90 to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/90 to-transparent md:w-28" />

      <div className="marquee-ltr flex w-max items-center text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground hover:[animation-play-state:paused]">
        {[0, 1].map((group) => (
          <div key={group} aria-hidden={group === 1} className="flex shrink-0 items-center gap-x-10 px-5 md:gap-x-12 md:px-6">
            {items.map((item) => (
              <span key={`${group}-${item}`} className="shrink-0 whitespace-nowrap transition-opacity hover:opacity-80">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

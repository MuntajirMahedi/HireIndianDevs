interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, description, align = "left" }: Props) => {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-display-lg text-ink">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
};

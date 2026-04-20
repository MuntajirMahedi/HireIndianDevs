import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: Props) => (
  <div className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-ink/30">
    <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary">
      <Icon className="h-5 w-5 text-ink" />
    </div>
    <h3 className="text-lg font-semibold text-ink">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
  </div>
);

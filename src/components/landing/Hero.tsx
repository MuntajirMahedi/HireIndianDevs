import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const proofPoints = [
  "500+ projects delivered",
  "10+ years engineering",
  "100% IP ownership",
  "NDA-first delivery",
];

const stats = [
  { k: "From $25", v: "per hour" },
  { k: "24-72h", v: "to onboard" },
  { k: "500+", v: "projects shipped" },
  { k: "4.9", v: "client rating", icon: true },
];

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <div className="container-tight relative py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-5xl text-center">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-ink shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Senior engineers available within 24-72 hours
          </div>

          <h1 className="animate-fade-up [animation-delay:100ms] text-display-lg text-ink md:text-display-xl">
            Hire Indian Developers for High-Performance{" "}
            <span className="text-accent">Web, Mobile, AI, and SaaS Development</span> at $25 per Hour
          </h1>

          <p className="animate-fade-up [animation-delay:200ms] mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Build scalable products faster with experienced Indian developers who understand architecture,
            performance, communication, and long-term product growth.
          </p>

          <div className="animate-fade-up [animation-delay:300ms] mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90">
              <a href="#contact">
                Hire Developers at $25/hr <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-border px-6 text-base text-ink">
              <a href="#contact">Discuss your project</a>
            </Button>
          </div>

          <ul className="animate-fade-up [animation-delay:400ms] mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {proofPoints.map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:500ms] mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="bg-card px-4 py-6 text-center md:px-6">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                {s.k}
                {s.icon && <Star className="h-5 w-5 fill-accent text-accent" />}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

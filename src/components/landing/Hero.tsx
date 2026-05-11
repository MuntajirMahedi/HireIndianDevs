import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "./LeadForm";

const proofPoints = [
  "500+ projects delivered",
  "10+ years engineering",
  "100% IP ownership",
  "NDA-first delivery",
];

const stats = [
  { k: "$25/hr", v: "starting rate" },
  { k: "24-72h", v: "to onboard" },
  { k: "500+", v: "projects shipped" },
  { k: "4.9", v: "client rating", icon: true },
];

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <div className="container-tight relative py-20 md:py-24 lg:py-24 lg:pt-28">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:gap-12 xl:gap-16">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-[680px] lg:text-left">
            <div className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-ink shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Senior engineers available within 24-72 hours
            </div>

            <h1 className="animate-fade-up [animation-delay:100ms] text-[clamp(2.25rem,3.3vw+0.85rem,3.85rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink">
              Hire Indian Developers for High-Performance{" "}
              <span className="text-accent">Web, Mobile, AI, and SaaS Development</span> Starting at $25/Hour
            </h1>

            <p className="animate-fade-up [animation-delay:200ms] mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
              Build scalable products faster with experienced Indian developers who understand architecture,
              performance, communication, and long-term product growth.
            </p>

            <div className="animate-fade-up [animation-delay:300ms] mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="h-12 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90">
                <a href="#contact">
                  Build your team from $25/hr <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-border px-6 text-base text-ink">
                <a href="#contact">Discuss your project</a>
              </Button>
            </div>

            <ul className="animate-fade-up [animation-delay:400ms] mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-muted-foreground lg:justify-start">
              {proofPoints.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="animate-fade-up [animation-delay:500ms] mx-auto mt-10 grid w-full max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4 lg:mx-0">
              {stats.map((s) => (
                <div key={s.v} className="flex min-h-[92px] flex-col items-center justify-center bg-card px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold tracking-tight text-ink md:text-[1.7rem]">
                    {s.k}
                    {s.icon && <Star className="h-5 w-5 fill-accent text-accent" />}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:450ms] mx-auto w-full max-w-xl lg:mx-0 lg:pt-2">
            <div className="rounded-2xl border border-border/80 bg-card/85 p-2 shadow-2xl shadow-ink/10 backdrop-blur transition-transform duration-300 hover:-translate-y-0.5">
              <div className="rounded-xl border border-border bg-background/95 p-5 md:p-5 lg:p-6">
                <div className="mb-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Get matched faster</div>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-ink md:text-2xl">Get developer profiles</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Share your needs and we will shortlist suitable Indian developers for your project.
                  </p>
                </div>
                <LeadForm
                  compact
                  source="Hero form"
                  submitLabel="Get Developer Profiles"
                  className="border-0 bg-transparent p-0 shadow-none md:p-0"
                  trustText="NDA Protected - Response within 24-72 hours - No spam"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

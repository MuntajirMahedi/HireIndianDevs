import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServicePageProps {
  title: string;
  eyebrow: string;
  description: string;
  features: {
    title: string;
    description: string;
    items: string[];
  }[];
  techStack: string[];
  image: string;
}

export const ServicePageTemplate = ({
  title,
  eyebrow,
  description,
  features,
  techStack,
  image
}: ServicePageProps) => {
  return (
    <div className="relative min-h-screen bg-background">
      <Nav />

      <main className="pt-24 md:pt-32">
        {/* Service Hero */}
        <section className="section-y border-b border-border">
          <div className="container-tight">
            <ScrollReveal>
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                  <div className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent">
                    {eyebrow}
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
                    {title}
                  </h1>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button asChild size="lg" className="rounded-full bg-accent px-8 font-bold text-white hover:bg-accent/90">
                      <a href="#contact">Get a Quote</a>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 font-bold">
                      View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                  <img src={image} alt={title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="section-y border-b border-border bg-secondary/30">
          <div className="container-tight">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="h-full space-y-4 rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-xl">
                    <h3 className="text-xl font-bold text-ink">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 pt-2">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-ink/80">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section-y border-b border-border">
          <div className="container-tight text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight text-ink">Technology Stack</h2>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {techStack.map((tech) => (
                  <div key={tech} className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-ink shadow-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-y bg-ink text-white">
          <div className="container-tight text-center space-y-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold md:text-4xl">Ready to scale your {title.toLowerCase()}?</h2>
              <p className="mx-auto max-w-2xl text-white/70">
                Work with senior Indian developers at $25/hr. Start your project in as little as 24 hours.
              </p>
              <div className="flex justify-center pt-4">
                <Button asChild size="lg" className="rounded-full bg-white px-10 text-ink hover:bg-white/90">
                  <a href="#contact">Contact Us Today</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

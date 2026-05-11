import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";

export const FinalCTA = () => (
  <section className="bg-primary text-primary-foreground">
    <ScrollReveal className="container-tight py-20 text-center md:py-28">
      <h2 className="mx-auto max-w-3xl text-display-lg">
        Hire Indian Developers and <span className="text-accent">move your product forward</span>.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/70 md:text-lg">
        Whether you need one developer or a complete remote team, build, launch, scale, and support your product with
        experienced engineers at $25 per hour.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg" className="h-12 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90">
          <a href="#contact">
            Hire Developers Today <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          <a href="#pricing">View pricing models</a>
        </Button>
      </div>
    </ScrollReveal>
  </section>
);

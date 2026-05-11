import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";

export const FinalCTA = () => (
  <section className="relative overflow-hidden border-t border-border bg-background">
    {/* Decorative background elements */}
    <div className="absolute inset-0 z-0">
      <div className="absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute -right-[10%] bottom-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
    </div>

    <ScrollReveal className="container-tight relative z-10 py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-ink p-8 md:p-16 lg:p-20 shadow-2xl">
        {/* Subtle grid pattern inside CTA */}
        <div 
          aria-hidden
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground/90 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Ready to scale your engineering team?
          </div>
          
          <h2 className="text-display-md font-extrabold tracking-tight text-white md:text-display-lg">
            Hire Senior Indian Developers and <span className="text-accent italic">Accelerate Your Product Growth</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Join 500+ successful companies building, launching, and scaling their products with 
            expert Indian engineers. Flexible models starting at <span className="font-bold text-white">$25/hour</span>.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-13 min-w-[200px] bg-accent px-8 text-base font-bold text-white shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-accent/30 transition-all duration-300">
              <a href="#contact" className="flex items-center gap-2">
                Hire Developers Now <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 min-w-[200px] border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <a href="#pricing">Explore Pricing</a>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            <span className="flex items-center gap-2">24-72h Onboarding</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2">NDA Protected</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2">IP Ownership</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);


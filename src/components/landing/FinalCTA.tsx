import { ArrowRight, Sparkles, Clock, ShieldCheck, Lock, CheckCircle2, Zap, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";

const trustBadges = [
  { icon: Clock, label: "24-72h Onboarding" },
  { icon: ShieldCheck, label: "NDA Protected" },
  { icon: Lock, label: "100% IP Ownership" },
];

const metrics = [
  { label: "500+ Projects", icon: Zap },
  { label: "98% Satisfaction", icon: Heart },
  { label: "10+ Years Exp", icon: Globe },
];

export const FinalCTA = () => (
  <section id="get-started" className="relative overflow-hidden border-t border-border bg-background">
    {/* Dynamic Background Overlays */}
    <div className="absolute inset-0 z-0">
      <div className="absolute left-[-10%] top-0 h-[600px] w-[600px] rounded-full bg-accent/[0.03] blur-[120px]" />
      <div className="absolute right-[-10%] bottom-0 h-[600px] w-[600px] rounded-full bg-accent/[0.02] blur-[120px]" />
    </div>

    <ScrollReveal className="container-tight relative z-10 py-16 md:py-20">
      <div className="group relative overflow-hidden rounded-[3rem] border border-white/5 bg-ink p-8 md:p-14 lg:p-16 shadow-2xl">
        {/* Modern Mesh Gradient Effect */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -left-[10%] -top-[10%] h-[120%] w-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(67,56,202,0.15),transparent_50%)]" />
          <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_100%_0%,rgba(79,70,229,0.1),transparent_40%)]" />
        </div>

        {/* Subtle Noise/Texture Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-accent backdrop-blur-md border border-white/10 transition-all group-hover:border-accent/30">
            <Sparkles className="h-3.5 w-3.5" />
            Scale your engineering team today
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.05] mb-6">
            Hire senior Indian developers and <span className="text-accent italic">accelerate your roadmap</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            Join 500+ successful companies building, launching, and scaling their products with 
            top-tier engineering talent. Flexible models starting at <span className="font-black text-white">$25/hour</span>.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 min-w-[220px] rounded-2xl bg-accent px-8 text-base font-bold text-white shadow-xl shadow-accent/20 hover:bg-accent/90 hover:scale-[1.02] transition-all duration-300">
              <a href="#contact" className="flex items-center justify-center gap-2">
                Hire Developers Now <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 min-w-[220px] rounded-2xl border-white/10 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <a href="#pricing">Explore Pricing Plans</a>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
                <badge.icon className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            {metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <m.icon className="h-3.5 w-3.5 text-white" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500/50" />
          No hiring fees • No long-term contracts • Direct communication
        </div>
      </div>
    </ScrollReveal>
  </section>
);

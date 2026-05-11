import { 
  Award, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Users,
  Trophy,
  Heart
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";

const items = [
  {
    icon: Award,
    title: "Engineering Excellence",
    description: "Developers who understand product goals, clean architecture, and future scalability.",
    tag: "Senior Vetted",
    accent: "text-blue-500",
    bg: "bg-blue-500/5"
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Fluent English, structured reporting, and documentation for smooth global collaboration.",
    tag: "Global Support",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/5"
  },
  {
    icon: Zap,
    title: "Agile Ownership",
    description: "Daily progress visibility, sprint planning, and practical ownership from kickoff to launch.",
    tag: "Fast Delivery",
    accent: "text-amber-500",
    bg: "bg-amber-500/5"
  },
  {
    icon: ShieldCheck,
    title: "IP & Code Security",
    description: "100% code ownership, signed NDAs, and secure development standards for enterprise trust.",
    tag: "Enterprise Ready",
    accent: "text-purple-500",
    bg: "bg-purple-500/5"
  },
  {
    icon: Clock,
    title: "Timezone Flexibility",
    description: "Developers adjust to your hours (US, UK, EU) for real-time collaboration and standups.",
    tag: "Remote-First",
    accent: "text-rose-500",
    bg: "bg-rose-500/5"
  },
  {
    icon: TrendingUp,
    title: "Flexible Scaling",
    description: "Easily scale your team up or down based on your roadmap and project requirements.",
    tag: "Scale Ready",
    accent: "text-indigo-500",
    bg: "bg-indigo-500/5"
  },
];

const metrics = [
  { icon: Trophy, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "100+", label: "Expert Engineers" },
  { icon: Clock, value: "24-72h", label: "Fast Onboarding" },
  { icon: Heart, value: "98%", label: "CSAT Score" },
];

export const WhyChooseUs = () => (
  <section id="why-us" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative background glows */}
    <div className="absolute inset-0 z-0">
      <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-accent/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/[0.01] blur-[120px] pointer-events-none" />
    </div>

    <ScrollReveal className="container-tight relative z-10">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center mb-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
            Hire Indian developers who <span className="text-accent italic">take ownership</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
            Businesses choose us when they need reliable engineers who communicate clearly, integrate quickly, and build systems that support real business growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-ink text-white hover:bg-ink/90 rounded-full px-8 shadow-xl shadow-ink/10">
              <a href="#contact" className="flex items-center gap-2">
                Hire Developers <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border hover:bg-secondary/50">
              <a href="#contact">Book Free Consultation</a>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div>
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} ${item.accent} transition-all group-hover:scale-110 shadow-sm`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[17px] font-bold text-ink transition-colors group-hover:text-accent leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground/80">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                <span className="px-2 py-0.5 rounded-md bg-secondary border border-border text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                  {item.tag}
                </span>
                <CheckCircle2 className="h-3.5 w-3.5 text-accent/20 transition-colors group-hover:text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Metrics Footer */}
      <div className="mt-16 pt-12 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/5 text-accent">
                <m.icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-black text-ink">{m.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{m.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em]">
            <Sparkles className="h-3 w-3" />
            Trusted by Startups & Enterprises
            <Sparkles className="h-3 w-3" />
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-30 grayscale transition-all hover:opacity-70 hover:grayscale-0">
            <span className="text-[11px] font-black tracking-widest uppercase">NDA Protected</span>
            <span className="text-[11px] font-black tracking-widest uppercase">ISO Ready</span>
            <span className="text-[11px] font-black tracking-widest uppercase">GDPR Aware</span>
            <span className="text-[11px] font-black tracking-widest uppercase">Agile Certified</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

import { 
  ArrowRight, 
  FileText, 
  UserPlus, 
  Search, 
  Briefcase, 
  Terminal, 
  Activity, 
  Rocket, 
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";

const processSteps = [
  { 
    title: "Share Requirements", 
    description: "Tell us about your project scope, tech stack, and team needs.",
    icon: FileText,
    tag: "Start Here"
  },
  { 
    title: "Candidate Matching", 
    description: "We shortlist the top 1% of developers matched to your stack.",
    icon: UserPlus,
    tag: "Fast Track"
  },
  { 
    title: "Interviews & Assessment", 
    description: "Conduct technical interviews and choose your ideal developers.",
    icon: Search,
    tag: "Quality First"
  },
  { 
    title: "Engagement Model", 
    description: "Choose hourly, dedicated, or fixed-scope hiring models.",
    icon: Briefcase,
    tag: "Flexible"
  },
  { 
    title: "Onboarding & Setup", 
    description: "Quick setup of tools, communication channels, and workflows.",
    icon: Terminal,
    tag: "24-72h"
  },
  { 
    title: "Daily Development", 
    description: "Start building with transparent daily updates and reporting.",
    icon: Activity,
    tag: "Live Tracking"
  },
  { 
    title: "QA & Launch", 
    description: "Rigorous testing followed by production-ready deployment.",
    icon: Rocket,
    tag: "Production"
  },
  { 
    title: "Scaling & Support", 
    description: "Continuous monitoring, improvements, and team scaling.",
    icon: TrendingUp,
    tag: "Long-term"
  },
];

export const DevelopmentProcess = () => (
  <section id="process" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative Background Elements */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.02]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px]" />
    </div>

    <ScrollReveal className="container-tight relative z-10">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
            A simple process to <span className="text-accent italic">hire and build</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
            We've streamlined remote hiring to make it as structured and transparent as your in-house team. Scale your engineering capacity with confidence.
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              "24-72h developer onboarding",
              "100% IP & code ownership",
              "No hiring or termination fees",
              "Direct communication with devs"
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-ink/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                {benefit}
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="bg-ink text-white hover:bg-ink/90 rounded-full px-8 shadow-xl shadow-ink/10">
            <a href="#contact">
              Start the hiring process <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div className="absolute -right-2 top-4 -z-10 text-6xl font-black text-accent/[0.03] transition-all group-hover:text-accent/[0.07]">
                {String(index + 1).padStart(2, "0")}
              </div>
              
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/5 text-accent transition-all group-hover:bg-accent group-hover:text-white shadow-sm">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink transition-colors group-hover:text-accent leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                <span className="px-2 py-0.5 rounded-md bg-secondary border border-border text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                  {step.tag}
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-accent/20 group-hover:bg-accent group-hover:animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

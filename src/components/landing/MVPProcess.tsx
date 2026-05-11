import { Search, Code2, Rocket, ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  { 
    week: "Week 1-2", 
    title: "Requirement Analysis", 
    body: "Define the core product idea, prioritize high-impact features, and plan a scalable architecture.",
    icon: Search,
    tag: "Discovery Phase",
    stats: "Planning & Logic"
  },
  { 
    week: "Week 3-5", 
    title: "Core Development", 
    body: "Build the essential feature set with clean frontend, robust backend, and seamless API integration.",
    icon: Code2,
    tag: "Build Phase",
    stats: "Engineering & Dev"
  },
  { 
    week: "Week 6-8", 
    title: "Testing & Launch", 
    body: "Rigorous QA testing, performance optimization, and final deployment to production for real users.",
    icon: Rocket,
    tag: "Go-Live Phase",
    stats: "QA & Deployment"
  },
];

export const MVPProcess = () => (
  <section id="mvp" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Subtle background glow */}
    <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

    <ScrollReveal className="container-tight relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          MVP Development
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          Launch your product in <span className="text-accent italic">30 to 60 days</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Validate your idea faster with lean, scalable, cost-effective product development. We build only what is necessary to go live while keeping the architecture ready for growth.
        </p>
      </div>

      <div className="relative">
        {/* Connection line for Desktop */}
        <div className="absolute left-0 top-[60px] hidden h-0.5 w-full bg-border md:block">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-accent/20" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="group relative">
              {/* Step Circle Marker */}
              <div className="relative mb-8 hidden items-center justify-center md:flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-card text-xs font-black text-ink shadow-lg ring-1 ring-border group-hover:ring-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {i + 1}
                </div>
              </div>

              {/* Card */}
              <div className="relative rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1">
                {/* Mobile Step Badge */}
                <div className="mb-6 flex items-center justify-between md:hidden">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white text-xs font-bold">
                    0{i + 1}
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/5 border border-accent/10 text-[10px] font-bold text-accent">
                    <Clock className="h-3 w-3" />
                    {step.week}
                  </div>
                </div>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20 transition-all">
                  <step.icon className="h-7 w-7" />
                </div>

                <div className="mb-4 hidden md:flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/5 border border-accent/10 text-[10px] font-bold text-accent">
                    <Clock className="h-3 w-3" />
                    {step.week}
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{step.tag}</span>
                </div>

                <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground mb-6">
                  {step.body}
                </p>

                <div className="mt-auto border-t border-border/50 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-ink/70 flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-accent" />
                      {step.stats}
                    </span>
                    <ArrowRight className="h-4 w-4 text-accent opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                </div>
              </div>

              {/* Mobile Connector Line */}
              {i < steps.length - 1 && (
                <div className="mx-auto my-4 h-8 w-0.5 bg-border md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-12 border-t border-border/50">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            "Launch in 30–60 Days",
            "Lean & Scalable Code",
            "Agile Sprint Delivery",
            "Built for Future Growth"
          ].map((trust) => (
            <div key={trust} className="flex items-center gap-2 text-xs font-bold text-ink/70">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {trust}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-6">
        <div className="h-px w-24 bg-border/50" />
        <a 
          href="#contact" 
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3 text-sm font-bold text-white transition-all hover:bg-ink/90 shadow-xl shadow-ink/10"
        >
          Book Your MVP Strategy Call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </ScrollReveal>
  </section>
);

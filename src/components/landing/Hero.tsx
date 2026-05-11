import { ArrowRight, Check, Star, ShieldCheck, Lock, Clock, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "./LeadForm";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const trustBadges = [
  { icon: ShieldCheck, label: "NDA Protected" },
  { icon: Lock, label: "100% IP Ownership" },
  { icon: Clock, label: "24-72h Onboarding" },
  { icon: Zap, label: "Agile Delivery" },
];

const stats = [
  { k: "$25/hr", v: "Starting Rate", color: "text-blue-500", bg: "bg-blue-500/5" },
  { k: "24-72h", v: "Fast Onboarding", color: "text-emerald-500", bg: "bg-emerald-500/5" },
  { k: "500+", v: "Projects Shipped", color: "text-amber-500", bg: "bg-amber-500/5" },
  { k: "4.9/5", v: "Client Rating", icon: true, color: "text-purple-500", bg: "bg-purple-500/5" },
];

const technologies = [
  "React", "Next.js", "Node.js", "Python", "Laravel", "Flutter", "iOS", "Android", "AWS", "Docker", "AI/ML", "SaaS"
];

export const Hero = () => {
  const { handleNavClick } = useSmoothScroll();
  
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-24 top-24 h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />
        <div className="absolute -right-24 bottom-24 h-[500px] w-[500px] rounded-full bg-accent/[0.02] blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.15]" />
      </div>

      <div className="container-tight relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-ink shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Top-Rated Engineering Team in India
            </div>

            <h1 className="animate-fade-up [animation-delay:100ms] text-[clamp(2.5rem,4vw+1rem,4.5rem)] font-black leading-[1.02] tracking-tight text-ink">
              Build your vision with <span className="text-accent italic">elite Indian developers</span>
            </h1>

            <p className="animate-fade-up [animation-delay:200ms] mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
              Access the top 1% of engineering talent for Web, Mobile, AI, and SaaS products. Production-ready code starting at $25/hour.
            </p>

            <div className="animate-fade-up [animation-delay:300ms] mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="h-14 rounded-full bg-ink px-10 text-base font-bold text-white shadow-2xl shadow-ink/20 hover:bg-ink/90 transition-all hover:scale-[1.02]">
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="flex items-center gap-2">
                  Start Hiring Now <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-border bg-card/50 px-10 text-base font-bold text-ink backdrop-blur-sm hover:bg-secondary/80">
                <a href="#pricing" onClick={(e) => handleNavClick(e, "#pricing")}>View Pricing Models</a>
              </Button>
            </div>

            <div className="animate-fade-up [animation-delay:400ms] mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/5 text-accent">
                    <badge.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink/70 leading-tight">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:450ms] relative">
            {/* Background glow for form */}
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2.5rem] bg-accent/5 blur-3xl" />
            
            <div className="rounded-[2.5rem] border border-border bg-card/30 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-accent/10">
              <div className="rounded-[2rem] border border-border bg-background/80 p-8 shadow-inner">
                <div className="mb-8 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                    <Zap className="h-3 w-3" /> Get matched in 24h
                  </div>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-ink">Request Developer Profiles</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Get shortlisted candidate profiles within 24-72 hours.
                  </p>
                </div>
                <LeadForm
                  compact
                  source="Hero form"
                  submitLabel="Get Developer Profiles"
                  className="border-0 bg-transparent p-0 shadow-none"
                  trustText="100% Secure - NDA Protected - No Obligations"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="animate-fade-up [animation-delay:600ms] mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="group relative flex flex-col items-center justify-center rounded-3xl border border-border bg-card/40 p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${s.bg} ${s.color} transition-all group-hover:scale-110`}>
                  {s.icon ? <Star className="h-5 w-5 fill-current" /> : <Globe className="h-5 w-5" />}
                </div>
                <div className="text-3xl font-black tracking-tight text-ink">
                  {s.k}
                </div>
                <div className="mt-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Scrolling Strip */}
        <div className="animate-fade-up [animation-delay:700ms] mt-20 pt-10 border-t border-border/50">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
              <Code2 className="h-3 w-3" /> Built with Modern Technologies <Code2 className="h-3 w-3" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-30 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              {technologies.map((tech) => (
                <span key={tech} className="text-sm font-black uppercase tracking-widest text-ink hover:text-accent transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Code2 = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

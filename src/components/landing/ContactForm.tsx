import { LeadForm } from "./LeadForm";
import { CheckCircle2, ShieldCheck, Clock, Users, Trophy, Heart, ArrowRight, Zap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const benefits = [
  { icon: Zap, label: "Senior engineers starting at $25/hour" },
  { icon: ShieldCheck, label: "NDA protection guaranteed" },
  { icon: Users, label: "Interview developers before hiring" },
  { icon: CheckCircle2, label: "Flexible team scaling & replacement" },
  { icon: Clock, label: "Fast onboarding (24-72 hours)" },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "24-72h", label: "Hiring Time" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "CSAT Score" },
];

export const ContactForm = () => {
  return (
    <section id="contact" className="section-y border-b border-border bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.02] blur-[120px] pointer-events-none" />
      </div>

      <ScrollReveal className="container-tight relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Get Started
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
              Launch your project with <span className="text-accent italic">top-tier talent</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-10">
              Share your requirements and we will match you with the right developers based on technology, experience level, and project goals.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/5 text-accent">
                    <benefit.icon className="h-4 w-4" />
                  </div>
                  <span className="text-[13px] font-bold text-ink/80 leading-tight">{benefit.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-border/50">
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-ink mb-1">{stat.value}</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">NDA Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">GDPR Aware</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">IP Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Form Background Glow */}
            <div className="absolute inset-0 -z-10 bg-accent/5 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            
            <div className="rounded-[2.5rem] border border-border bg-card/30 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-accent/10">
              <div className="rounded-[2rem] border border-border bg-background/80 p-8 shadow-inner">
                <div className="mb-8 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                    <Zap className="h-3 w-3" /> Consultation Request
                  </div>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-ink">Send Project Brief</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Get shortlisted candidate profiles within 24-72 hours.
                  </p>
                </div>
                
                <LeadForm 
                  source="Contact section" 
                  className="border-0 bg-transparent p-0 shadow-none"
                  compact
                  trustText="Response within 24-72 hours • Free consultation"
                />
                
                <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 opacity-50">
                  {["NDA Protected", "No Spam Guarantee", "Fast Support"].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-ink">
                      <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

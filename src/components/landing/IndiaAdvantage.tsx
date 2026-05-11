import { 
  Clock, 
  FileCheck, 
  Globe, 
  Languages, 
  ShieldCheck, 
  Workflow, 
  ArrowRight,
  Sparkles,
  Trophy,
  CheckCircle2,
  Users
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const items = [
  { 
    icon: FileCheck, 
    title: "IT Act 2000 Protection", 
    description: "Digital transactions and IP rights are supported by India's mature legal framework.",
    tag: "Enterprise Ready"
  },
  { 
    icon: ShieldCheck, 
    title: "100% IP Ownership", 
    description: "All source code, designs, and product data belong to you with zero restrictions.",
    tag: "Secure Policy"
  },
  { 
    icon: Languages, 
    title: "English Proficiency", 
    description: "Clear verbal communication and structured reporting for efficient global collaboration.",
    tag: "Global Support"
  },
  { 
    icon: Clock, 
    title: "Time Zone Flexibility", 
    description: "Overlap with US, UK, and EU hours while maintaining 24/7 delivery cycles.",
    tag: "Remote-First"
  },
  { 
    icon: Users, 
    title: "Elite Talent Pool", 
    description: "Access specialized developers across AI, SaaS, Cloud, and Enterprise systems.",
    tag: "Scale Ready"
  },
  { 
    icon: Workflow, 
    title: "Agile Global Delivery", 
    description: "Teams familiar with Scrum, Jira, and modern remote-first engineering workflows.",
    tag: "Process Driven"
  },
];

const metrics = [
  { value: "500+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "24-72h", label: "Developer Onboarding" },
  { value: "Global", label: "Client Support" },
];

export const IndiaAdvantage = () => (
  <section id="india-advantage" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative background glows & globe pattern */}
    <div className="absolute inset-0 z-0 opacity-[0.03]">
      <div className="absolute right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-accent blur-[120px]" />
    </div>

    <ScrollReveal className="container-tight relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          The India Advantage
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          Access the world's most <span className="text-accent italic">mature talent ecosystem</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          When you hire Indian developers, you are tapping into a massive engineering workforce with strong technical education, global delivery experience, and cost efficiency.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/5 text-accent transition-all group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink transition-colors group-hover:text-accent leading-tight">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground/80">{item.description}</p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
              <span className="px-2 py-0.5 rounded-md bg-secondary border border-border text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                {item.tag}
              </span>
              <div className="flex items-center gap-1 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                <span className="text-[10px] font-bold text-accent uppercase">Learn More</span>
                <ArrowRight className="h-3 w-3 text-accent" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Metrics Footer */}
      <div className="mt-16 pt-12 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-ink mb-1">{m.value}</div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70">{m.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-30 grayscale transition-all hover:opacity-70 hover:grayscale-0">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">NDA Protected</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">GDPR Aware</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Agile Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">IP Guaranteed</span>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a 
          href="#contact" 
          className="group inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
        >
          Explore our global collaboration model <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </ScrollReveal>
  </section>
);

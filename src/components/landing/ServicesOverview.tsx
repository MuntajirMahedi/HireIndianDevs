import { 
  Brain, 
  Cloud, 
  Code2, 
  Smartphone, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Layout,
  Terminal,
  Cpu,
  Globe,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";

const majorServices = [
  {
    icon: Code2,
    title: "Full-Stack Web Engineering",
    description: "Production-grade React, Next.js, Node.js, Python, and Laravel apps built for high-performance and global scale.",
    tags: ["React", "Next.js", "Node.js", "Python", "Laravel"],
    label: "Scalable Architecture",
    accent: "text-blue-500",
    bg: "bg-blue-500/5",
    border: "group-hover:border-blue-500/30"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "High-performance iOS, Android, Flutter, and React Native apps with mobile-first emphasis and cross-platform synergy.",
    tags: ["iOS", "Android", "Flutter", "React Native"],
    label: "Mobile-First UX",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/5",
    border: "group-hover:border-emerald-500/30"
  },
  {
    icon: Cloud,
    title: "Cloud, DevOps & Architecture",
    description: "Enterprise AWS, Azure, and Docker infrastructure with automated CI/CD, Kubernetes, and 99.9% uptime monitoring.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    label: "Cloud Native",
    accent: "text-amber-500",
    bg: "bg-amber-500/5",
    border: "group-hover:border-amber-500/30"
  },
  {
    icon: Brain,
    title: "AI and Machine Learning",
    description: "Futuristic LLM integrations, GPT, Gemini, and RAG-based smart automation for predictive analytics and chatbots.",
    tags: ["GPT-4", "Gemini", "RAG", "Predictive AI"],
    label: "AI Powered",
    accent: "text-purple-500",
    bg: "bg-purple-500/5",
    border: "group-hover:border-purple-500/30"
  }
];

export const ServicesOverview = () => (
  <section id="services" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute inset-0 z-0">
      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />
      <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-accent/[0.02] blur-[120px]" />
    </div>

    <ScrollReveal className="container-tight relative z-10">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end mb-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Product Engineering
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
            Complete services for <span className="text-accent italic">high-growth teams</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
            We don't just build features; we build complete products. From scalable cloud architecture to intuitive mobile apps and AI-driven automation.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-sm shadow-sm transition-all hover:shadow-md">
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
            Every project is built with industry-standard frameworks, proper security protocols, and long-term maintainability in mind. We help you scale without technical debt.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <Button asChild className="bg-accent text-white hover:bg-accent/90 rounded-full px-8 h-12 shadow-lg shadow-accent/20">
              <a href="#contact" className="flex items-center gap-2">
                Explore All Services <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <div className="flex -space-x-3 overflow-hidden">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-accent/10 flex items-center justify-center text-[10px] font-bold text-accent">
                  {i}k+
                </div>
              ))}
              <div className="pl-5 text-xs font-bold text-ink uppercase tracking-widest">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {majorServices.map((service, i) => (
          <div 
            key={i} 
            className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1 ${service.border}`}
          >
            {/* Background Accent Glow */}
            <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${service.bg} blur-3xl opacity-0 transition-opacity group-hover:opacity-100`} />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg} ${service.accent} transition-all group-hover:scale-110 shadow-sm`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <span className={`px-3 py-1 rounded-full ${service.bg} ${service.accent} text-[10px] font-black uppercase tracking-[0.15em] border border-current/10`}>
                  {service.label}
                </span>
              </div>

              <h3 className="text-2xl font-black text-ink mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground/90 mb-8 max-w-md">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-secondary border border-border text-xs font-bold text-muted-foreground group-hover:border-accent/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-border/50 pt-6">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-ink/60 uppercase tracking-widest">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Enterprise
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-ink/60 uppercase tracking-widest">
                    <Zap className="h-3.5 w-3.5 text-amber-500" /> High Performance
                  </div>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-accent group-hover:underline">
                  Talk to Experts
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-12 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Layout, label: "500+ Projects", sub: "Successfully Delivered" },
            { icon: Terminal, label: "10+ Years", sub: "Engineering Depth" },
            { icon: Globe, label: "24/7 Support", sub: "Global Collaboration" },
            { icon: Star, label: "98% CSAT", sub: "Client Satisfaction" },
          ].map((metric, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/5 text-accent">
                <metric.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-black text-ink">{metric.label}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{metric.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

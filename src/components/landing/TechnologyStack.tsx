import { 
  Layout, 
  Server, 
  Smartphone, 
  Database, 
  Zap, 
  Cloud, 
  Users, 
  CheckCircle2,
  Code2,
  ArrowRight,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const stacks = [
  { 
    icon: Layout, 
    name: "Frontend", 
    tools: ["React.js", "Next.js", "Vue.js", "Tailwind", "TypeScript"],
    label: "Scalable UI",
    desc: "Interactive, high-performance user interfaces."
  },
  { 
    icon: Server, 
    name: "Backend", 
    tools: ["Node.js", "Python", "Laravel", "Go", "GraphQL"],
    label: "Enterprise Ready",
    desc: "Robust, secure server-side logic and APIs."
  },
  { 
    icon: Smartphone, 
    name: "Mobile", 
    tools: ["Flutter", "React Native", "Swift", "Kotlin", "Dart"],
    label: "Native Performance",
    desc: "Cross-platform and native mobile applications."
  },
  { 
    icon: Database, 
    name: "Databases", 
    tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elastic"],
    label: "Data Integrity",
    desc: "Optimized storage and real-time data processing."
  },
  { 
    icon: Zap, 
    name: "AI & ML", 
    tools: ["LLMs", "Gemini", "PyTorch", "LangChain", "Vector DBs"],
    label: "AI Ready",
    desc: "Smart automation and generative AI solutions."
  },
  { 
    icon: Cloud, 
    name: "Cloud & DevOps", 
    tools: ["AWS", "Azure", "Docker", "Terraform", "CI/CD"],
    label: "99.9% Uptime",
    desc: "Scalable infrastructure and automated deployment."
  },
  { 
    icon: Users, 
    name: "Collaboration", 
    tools: ["Jira", "Slack", "GitHub", "GitLab", "Figma"],
    label: "Agile Flow",
    desc: "Seamless communication and project tracking."
  },
  { 
    icon: CheckCircle2, 
    name: "Quality Assurance", 
    tools: ["Unit tests", "Cypress", "Code Review", "Monitoring"],
    label: "Bug-Free",
    desc: "Rigorous testing and continuous quality monitoring."
  },
];

export const TechnologyStack = () => (
  <section id="technologies" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative background glows */}
    <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />
    <div className="absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-accent/[0.02] blur-[100px] pointer-events-none" />

    <ScrollReveal className="container-tight relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Technology Stack
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          Modern tools for <span className="text-accent italic">high-performance products</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          We use industry-standard frameworks and cloud-native tools to build scalable, maintainable, and secure software built for global users.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stacks.map((stack, i) => (
          <div 
            key={i} 
            className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/5 text-accent transition-all group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20">
                <stack.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-accent">{stack.name}</h3>
                <span className="px-2 py-0.5 rounded-md bg-secondary border border-border text-[8px] font-bold text-muted-foreground uppercase tracking-widest">
                  {stack.label}
                </span>
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground/80">{stack.desc}</p>
              
              <div className="mt-5 flex flex-wrap gap-1.5">
                {stack.tools.map((tool) => (
                  <span key={tool} className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 text-[10px] font-bold text-ink transition-all group-hover:border-accent/20 group-hover:bg-accent/5 group-hover:text-accent">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4 opacity-0 -translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
              <span className="text-[10px] font-bold text-accent/60 uppercase tracking-widest flex items-center gap-1.5">
                <Code2 className="h-3 w-3" /> Industry Standard
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-accent" />
            </div>
          </div>
        ))}
      </div>

      {/* Trust Footer */}
      <div className="mt-16 pt-12 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, label: "Modern Scalable Architecture" },
            { icon: Cloud, label: "Cloud & AI Ready Solutions" },
            { icon: Cpu, label: "High-Performance Engineering" },
            { icon: CheckCircle2, label: "500+ Projects Delivered" },
          ].map((trust, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/5 text-accent">
                <trust.icon className="h-5 w-5" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink">{trust.label}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

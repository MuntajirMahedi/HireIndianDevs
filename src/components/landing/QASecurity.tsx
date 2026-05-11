import { 
  ShieldCheck, 
  Search, 
  Zap, 
  Lock, 
  Code2, 
  Terminal, 
  LifeBuoy, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Activity,
  Award
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const items = [
  { 
    icon: ShieldCheck,
    title: "NDA & Confidentiality", 
    body: "Signed NDAs before kickoff, secure file handling, and role-based access control.",
    tag: "Enterprise Ready"
  },
  { 
    icon: Search,
    title: "Structured Testing", 
    body: "Unit, integration, and E2E testing built directly into your development lifecycle.",
    tag: "QA Tested"
  },
  { 
    icon: Zap,
    title: "Automated QA", 
    body: "Continuous testing and automated scripts to catch regressions before they hit production.",
    tag: "CI/CD Ready"
  },
  { 
    icon: Lock,
    title: "Privacy-First Architecture", 
    body: "Secure storage, encryption at rest, and consent-aware flows for data protection.",
    tag: "GDPR Compliant"
  },
  { 
    icon: Code2,
    title: "Strict Code Reviews", 
    body: "Peer reviews and standardized practices to ensure performance and maintainability.",
    tag: "Secure Code"
  },
  { 
    icon: Terminal,
    title: "OWASP Development", 
    body: "Secure authentication, authorization, and protection against common vulnerabilities.",
    tag: "Security Hardened"
  },
  { 
    icon: LifeBuoy,
    title: "Continuous Monitoring", 
    body: "Post-launch support, security patches, and performance optimization around the clock.",
    tag: "24/7 Support"
  },
  { 
    icon: FileCheck,
    title: "Complete IP Ownership", 
    body: "You retain 100% ownership of source code, designs, data, and all product intellectual property.",
    tag: "NDA Protected"
  },
];

const metrics = [
  { icon: ShieldCheck, label: "100% NDA Protected", color: "text-emerald-600" },
  { icon: Activity, label: "Automated QA Pipelines", color: "text-blue-600" },
  { icon: Zap, label: "24/7 Security Monitoring", color: "text-amber-600" },
  { icon: Award, label: "500+ Secure Deployments", color: "text-purple-600" },
];

export const QASecurity = () => (
  <section className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative background glows */}
    <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />
    <div className="absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-accent/[0.02] blur-[100px] pointer-events-none" />

    <ScrollReveal className="container-tight relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Enterprise Trust
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          High-performance <span className="text-accent italic">security and quality</span> standards
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Quality and security are not optional. We implement professional testing, secure development practices, and clear ownership protection into every project delivery.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/5 text-accent transition-all group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-bold text-ink transition-colors group-hover:text-accent leading-tight">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground/80">{item.body}</p>
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

      {/* Enterprise Trust Footer */}
      <div className="mt-16 pt-12 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className={`mb-3 p-2 rounded-lg bg-current/5 ${m.color}`}>
                <m.icon className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-30 grayscale transition-all hover:opacity-70 hover:grayscale-0">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">ISO Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Secure CI/CD</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">NDA Protected</span>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a 
          href="#contact" 
          className="group inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
        >
          Review our security compliance roadmap <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </ScrollReveal>
  </section>
);

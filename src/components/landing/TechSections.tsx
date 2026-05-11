import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";
import { Code2, Zap, ShieldCheck, Database } from "lucide-react";

export const TechSections = () => (
  <section id="web-engineering" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative background glows */}
    <div className="absolute inset-0 z-0">
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/[0.03] blur-[120px] pointer-events-none" />
    </div>

    <ScrollReveal className="container-tight relative z-10 space-y-24 lg:space-y-32">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
          <span className="h-px w-8 bg-blue-500" />
          Web Engineering
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          Complex systems. <span className="text-blue-500 italic">Scalable architectures.</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          We handle everything from frontend performance to secure backend logic and high-volume database architecture. Build products that stay fast as you scale.
        </p>
      </div>

      <SplitSection
        eyebrow="Full-Stack Mastery"
        title="Applications built to perform in production."
        description="Our engineers understand system design, clean code, and the real-world tradeoffs that shape reliable products for global startups."
        tags={["React", "Next.js", "Node.js", "Python", "Laravel", "PostgreSQL"]}
        accent="text-blue-500"
        label="Production Ready"
        bullets={[
          "Architecture planning and modular system design",
          "Frontend, backend, and API integration",
          "Testing, optimization, and monitoring",
          "Future-ready code that reduces technical debt",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Frontend & UX"
        title="Fast, responsive, SEO-friendly interfaces."
        description="We build polished interfaces that load quickly, work across all devices, and support high user engagement with modern frameworks."
        tags={["React.js", "Next.js", "Vue.js", "Tailwind CSS", "SSR"]}
        accent="text-blue-500"
        label="Performance Optimized"
        bullets={[
          "Component-based architecture for scalability",
          "Responsive design for all screen sizes",
          "SEO-friendly server-side rendering (SSR)",
          "Lazy loading and code splitting for speed",
        ]}
      />

      <SplitSection
        eyebrow="Backend & Logic"
        title="Secure logic, APIs, and data architecture."
        description="Robust backend systems designed to handle complex workflows and high-traffic loads with security at the core."
        tags={["Node.js", "Python", "Go", "GraphQL", "Redis", "Auth"]}
        accent="text-blue-500"
        label="Enterprise Security"
        bullets={[
          "Secure REST and GraphQL API development",
          "Database architecture and query optimization",
          "Real-time features using WebSockets",
          "Advanced role-based access control (RBAC)",
        ]}
      />
    </ScrollReveal>

    {/* Section Trust Metrics */}
    <div className="container-tight mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-border/50">
        {[
          { icon: Code2, label: "500+ Projects", sub: "Web Delivered" },
          { icon: Zap, label: "99.9% Uptime", sub: "Backend Ready" },
          { icon: ShieldCheck, label: "ISO Ready", sub: "Security Standards" },
          { icon: Database, label: "Scalable DBs", sub: "Data Integrity" },
        ].map((m, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-3 p-2 rounded-xl bg-blue-500/5 text-blue-500">
              <m.icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-black text-ink">{m.label}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{m.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

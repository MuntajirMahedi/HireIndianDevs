import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";
import { Cloud, Zap, ShieldCheck, Activity } from "lucide-react";

export const ArchitectureSections = () => (
  <section id="cloud-infrastructure" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative background glows */}
    <div className="absolute inset-0 z-0">
      <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-amber-500/[0.03] blur-[120px] pointer-events-none" />
    </div>

    <ScrollReveal className="container-tight relative z-10 space-y-24 lg:space-y-32">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
          <span className="h-px w-8 bg-amber-500" />
          Cloud & Infrastructure
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          Scalable <span className="text-amber-500 italic">cloud-native architecture</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          We design and manage secure, resilient cloud systems that grow with your user base while maintaining 99.9% uptime and performance.
        </p>
      </div>

      <SplitSection
        eyebrow="Modern Infrastructure"
        title="Microservices & Serverless architecture."
        description="We build event-driven, decoupled systems that reduce infrastructure complexity and allow for independent scaling of core features."
        tags={["Docker", "Kubernetes", "AWS Lambda", "Terraform", "Serverless"]}
        accent="text-amber-500"
        label="Cloud Native"
        bullets={[
          "Microservices architecture for independent scaling",
          "Serverless event-driven systems to reduce overhead",
          "Automated Infrastructure as Code (IaC) with Terraform",
          "High-availability and multi-region deployment strategies",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="DevOps & CI/CD"
        title="Reliable releases and automated pipelines."
        description="Our DevOps engineers implement automated CI/CD pipelines and monitoring systems to ensure stable, frequent production updates."
        tags={["GitHub Actions", "Jenkins", "Prometheus", "Grafana", "ELK"]}
        accent="text-amber-500"
        label="Enterprise Ready"
        bullets={[
          "Automated CI/CD pipelines for zero-downtime releases",
          "Real-time monitoring and anomaly detection",
          "Log aggregation and performance bottleneck analysis",
          "Secure load balancing and disaster recovery planning",
        ]}
      />
    </ScrollReveal>

    {/* Section Trust Metrics */}
    <div className="container-tight mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-border/50">
        {[
          { icon: Cloud, label: "AWS / Azure / GCP", sub: "Cloud Certified" },
          { icon: Zap, label: "99.9% Uptime", sub: "Infrastructure SLA" },
          { icon: ShieldCheck, label: "Security First", sub: "WAF & VPC Ready" },
          { icon: Activity, label: "Live Monitoring", sub: "24/7 Observation" },
        ].map((m, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-3 p-2 rounded-xl bg-amber-500/5 text-amber-500">
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

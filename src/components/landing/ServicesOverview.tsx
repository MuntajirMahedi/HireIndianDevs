import { Brain, Cloud, Code2, Database, Gauge, ShieldCheck, Smartphone, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description: "Production-grade React, Next.js, Node.js, Python, and Laravel apps built for scale.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS, Android, Flutter, and React Native apps with strong UX and performance.",
  },
  {
    icon: Brain,
    title: "AI and Automation",
    description: "LLM integration, predictive analytics, and custom chatbots connected to real workflows.",
  },
  {
    icon: Cloud,
    title: "Cloud and DevOps",
    description: "AWS, Azure, and GCP infrastructure with CI/CD, monitoring, and auto-scaling.",
  },
  {
    icon: Database,
    title: "Backend and Databases",
    description: "Secure APIs, data models, queues, caching, and integrations designed for growth.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Indexing, lazy loading, CDN strategy, and bottleneck fixes before they become expensive.",
  },
  {
    icon: ShieldCheck,
    title: "QA and Security",
    description: "Code reviews, automated testing, secure authentication, and NDA-first delivery practices.",
  },
  {
    icon: Workflow,
    title: "MVP and Product Scaling",
    description: "Lean product planning, 30-60 day launch cycles, and post-launch iteration support.",
  },
];

export const ServicesOverview = () => (
  <section id="services" className="section-y border-b border-border">
    <ScrollReveal className="container-tight">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow="What We Build"
          title="Complete product engineering, not task-only development."
          description="Our app developers in India, full-stack engineers, backend specialists, AI engineers, and DevOps experts build software aligned with your product goals, business model, and growth roadmap."
        />
        <div className="rounded-lg border border-border bg-secondary/50 p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            We do not rely on shortcuts or generic low-code delivery. Every project is built with modern frameworks,
            proper architecture, secure development practices, and long-term scalability in mind.
          </p>
          <Button asChild className="mt-5 bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact">Explore development services</a>
          </Button>
        </div>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <FeatureCard key={s.title} {...s} />
        ))}
      </div>
    </ScrollReveal>
  </section>
);

import { Code2, Smartphone, Brain, Cloud } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  { icon: Code2, title: "Web Development", description: "Production-grade React, Node, Python and Laravel apps built for scale." },
  { icon: Smartphone, title: "Mobile Development", description: "Native iOS, Android and cross-platform apps with native-grade performance." },
  { icon: Brain, title: "AI Solutions", description: "LLM integration, predictive analytics, and custom chatbots wired into your product." },
  { icon: Cloud, title: "Cloud & DevOps", description: "AWS, Azure and GCP infrastructure with CI/CD, monitoring, and auto-scaling." },
];

export const ServicesOverview = () => (
  <section id="services" className="section-y border-b border-border">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="App Developers in India"
        title="Focused on real results."
        description="Whether you need a SaaS platform, eCommerce system, or a custom mobile app, we focus on delivering results that align with your business goals."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <FeatureCard key={s.title} {...s} />
        ))}
      </div>
    </ScrollReveal>
  </section>
);

import { Award, DollarSign, MessageSquare, Shield, TrendingUp, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";
import { ScrollReveal } from "./ScrollReveal";

const items = [
  {
    icon: Award,
    title: "Engineers who think beyond code",
    description: "Work with developers who understand product goals, architecture, performance, and future scale.",
  },
  {
    icon: MessageSquare,
    title: "Fluent English communication",
    description: "Clear written updates, structured reporting, documentation, and smooth collaboration with global teams.",
  },
  {
    icon: Zap,
    title: "Daily progress visibility",
    description: "Agile workflows, daily updates, sprint planning, and practical ownership from kickoff to launch.",
  },
  {
    icon: DollarSign,
    title: "Pricing starting at $25/hour",
    description: "Flexible development support with starting rates designed to help you scale without overspending.",
  },
  {
    icon: Shield,
    title: "Scalable, maintainable code",
    description: "Clean architecture, code reviews, QA processes, and production-ready delivery for long-term growth.",
  },
  {
    icon: TrendingUp,
    title: "Flexible hiring models",
    description: "Hire hourly developers, dedicated resources, or fixed-scope teams based on your project needs.",
  },
];

export const WhyChooseUs = () => (
  <section className="section-y border-b border-border">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Hire Indian developers who can take ownership."
        description="Businesses choose us when they need reliable engineers who communicate clearly, integrate quickly, and build systems that support real business growth."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <FeatureCard key={i.title} {...i} />
        ))}
      </div>
    </ScrollReveal>
  </section>
);

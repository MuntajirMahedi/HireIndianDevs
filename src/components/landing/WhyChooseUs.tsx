import { Award, Zap, DollarSign, MessageSquare, Shield, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";
import { ScrollReveal } from "./ScrollReveal";

const items = [
  { icon: Award, title: "Senior-level engineers", description: "Experienced developers who build systems that are stable, fast, and ready for scale." },
  { icon: MessageSquare, title: "Fluent English support", description: "Strong communication with clear documentation and seamless team integration." },
  { icon: Zap, title: "Daily updates", description: "Structured project workflows with daily progress reports and transparent cycles." },
  { icon: DollarSign, title: "Starting from $25/hour", description: "Senior-level quality at a fraction of the cost, making it easier to scale without overspending." },
  { icon: Shield, title: "Clean, scalable code", description: "Clean, maintainable, and production-ready code emphasizing long-term product growth." },
  { icon: TrendingUp, title: "Flexible hiring models", description: "Hourly, dedicated, or fixed-price models based on your specific project needs." },
];

export const WhyChooseUs = () => (
  <section className="section-y border-b border-border">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="Why Us"
        title="Quality, speed, and cost efficiency."
        description="We offer senior-level developers starting from $25 per hour, designed to help you build and scale without compromise."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <FeatureCard key={i.title} {...i} />
        ))}
      </div>
    </ScrollReveal>
  </section>
);

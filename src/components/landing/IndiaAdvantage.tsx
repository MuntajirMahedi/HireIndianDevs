import { Globe, Clock, Languages, FileCheck, ShieldCheck, Workflow } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";
import { ScrollReveal } from "./ScrollReveal";

const items = [
  { icon: FileCheck, title: "IT Act 2000 protection", description: "IP and data handling protected under one of the most mature digital legal frameworks." },
  { icon: ShieldCheck, title: "100% IP Ownership", description: "All source code, designs, and assets belong to you. No hidden licensing or restrictions." },
  { icon: Languages, title: "English communication", description: "Benefit from one of the largest fluent English-speaking technical workforces in the world." },
  { icon: Clock, title: "Time zone flexibility", description: "Overlap with US, UK, and European hours creating a near 24-hour development cycle." },
  { icon: Globe, title: "Large talent pool", description: "Access a massive pool of engineers across all major technologies and experience levels." },
  { icon: Workflow, title: "Global collaboration", description: "Expertise in Agile, Scrum, and global tools like Jira, Slack, and GitHub." },
];

export const IndiaAdvantage = () => (
  <section className="section-y border-b border-border bg-secondary/30">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="The India Advantage"
        title="Mature ecosystem. Reliable engineering."
        description="India has become a global hub because of its technical education and mature ecosystem. We offer reliability starting from $25 per hour."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <FeatureCard key={i.title} {...i} />
        ))}
      </div>
    </ScrollReveal>
  </section>
);

import { Clock, FileCheck, Globe, Languages, ShieldCheck, Workflow } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";
import { ScrollReveal } from "./ScrollReveal";

const items = [
  { icon: FileCheck, title: "IT Act 2000 protection", description: "Digital transactions, data handling, and IP rights are supported by India's mature legal framework." },
  { icon: ShieldCheck, title: "100% IP ownership", description: "All source code, designs, assets, and product data belong to you with no hidden restrictions." },
  { icon: Languages, title: "Strong English communication", description: "Clear written and verbal communication, structured reporting, and efficient global collaboration." },
  { icon: Clock, title: "Time zone flexibility", description: "Overlap with US, UK, and European hours while keeping work moving across extended cycles." },
  { icon: Globe, title: "Large specialist talent pool", description: "Access developers across web, mobile, cloud, AI, DevOps, SaaS, and enterprise systems." },
  { icon: Workflow, title: "Global delivery experience", description: "Teams familiar with Agile, Scrum, Jira, Slack, GitHub, documentation, and remote workflows." },
];

export const IndiaAdvantage = () => (
  <section className="section-y border-b border-border bg-secondary/30">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="The India Advantage"
        title="Access one of the world's most mature software talent ecosystems."
        description="When businesses hire Indian developers, they are not only reducing costs. They are tapping into a large engineering workforce with strong technical education, global delivery experience, and reliable communication."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <FeatureCard key={i.title} {...i} />
        ))}
      </div>
    </ScrollReveal>
  </section>
);

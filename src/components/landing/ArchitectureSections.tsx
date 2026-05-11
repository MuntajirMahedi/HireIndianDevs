import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";

export const ArchitectureSections = () => (
  <section className="section-y border-b border-border bg-secondary/30">
    <ScrollReveal className="container-tight space-y-20 lg:space-y-28">
      <SectionHeading
        eyebrow="Cloud, DevOps, and Architecture"
        title="Build systems that scale without slowing down."
        description="As products grow, performance issues, scaling challenges, deployment delays, and infrastructure costs can slow teams down. Our engineers design systems that support long-term growth."
      />

      <SplitSection
        eyebrow="Microservices"
        title="Independent services. Faster development cycles."
        description="Microservices divide applications into smaller services that can be developed, deployed, and scaled separately, making large SaaS and enterprise products easier to evolve."
        tags={["Node.js", "Python", "Docker", "Kubernetes", "APIs"]}
        bullets={[
          "Independent deployment of services",
          "Faster development cycles across teams",
          "Improved fault isolation per service",
          "Better scalability for high-traffic applications",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Serverless"
        title="Reduce infrastructure complexity and cost."
        description="Serverless architecture removes manual server management with event-driven systems on AWS Lambda, Azure Functions, and cloud-native services."
        tags={["AWS Lambda", "Azure Functions", "API Gateway", "Event-driven"]}
        bullets={[
          "Event-driven architecture design",
          "Automatic scaling based on real usage",
          "Reduced operational overhead",
          "Pay-as-you-use cost efficiency",
        ]}
      />

      <SplitSection
        eyebrow="DevOps and cloud"
        title="Reliable releases and stable infrastructure."
        description="Our developers manage CI/CD, cloud infrastructure, monitoring, logging, auto-scaling, and deployment pipelines across AWS, Azure, and Google Cloud."
        tags={["AWS", "Azure", "GCP", "Terraform", "CI/CD"]}
        bullets={[
          "CI/CD pipeline setup for automated deployments",
          "Infrastructure as code using Terraform",
          "Monitoring and logging for system performance",
          "Load balancing, backup, and disaster recovery planning",
        ]}
      />
    </ScrollReveal>
  </section>
);

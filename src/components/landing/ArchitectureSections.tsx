import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";

export const ArchitectureSections = () => (
  <section className="section-y border-b border-border bg-secondary/30">
    <ScrollReveal className="container-tight space-y-20 lg:space-y-28">
      <SectionHeading
        eyebrow="Specialized Architecture"
        title="Systems built for long-term growth."
        description="Our engineers design architectures that scale and adapt under real-world pressure — including microservices, serverless, and DevOps pipelines."
      />

      <SplitSection
        eyebrow="Microservices"
        title="Independent services. Faster cycles."
        description="Divide applications into smaller, independent services using containerization tools like Docker to improve flexibility and scalability."
        tags={["Node.js", "Python", "Docker", "Kubernetes", "gRPC"]}
        bullets={[
          "Independent deployment of services",
          "Faster development cycles and autonomy",
          "Improved fault isolation per service",
          "Scalability for high-traffic applications",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Serverless"
        title="Reduce complexity. Reduce cost."
        description="Remove manual server management with event-driven architectures on AWS Lambda or Azure Functions — auto-scaling based on usage."
        tags={["AWS Lambda", "Azure Functions", "API Gateway", "Event-driven"]}
        bullets={[
          "Event-driven architecture design",
          "Automatic scaling based on real-time usage",
          "Reduced operational and infra overhead",
          "Pay-as-you-use cost efficiency",
        ]}
      />

      <SplitSection
        eyebrow="DevOps & Cloud"
        title="Faster releases. Stable systems."
        description="Continuous integration and deployment pipelines using Terraform on AWS, Azure, and Google Cloud for reliable infrastructure."
        tags={["AWS", "Azure", "GCP", "Terraform", "CI/CD"]}
        bullets={[
          "CI/CD pipeline setup for automated deployments",
          "Infrastructure as code with Terraform",
          "Monitoring and logging for system performance",
          "Load balancing and auto-scaling configuration",
        ]}
      />
    </ScrollReveal>
  </section>
);

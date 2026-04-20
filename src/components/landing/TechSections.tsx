import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";

export const TechSections = () => (
  <section className="section-y border-b border-border bg-secondary/30">
    <ScrollReveal className="container-tight space-y-20 lg:space-y-28">
      <div>
        <SectionHeading
          eyebrow="Full-Stack Web Engineering"
          title="Complex systems. Scalable architectures."
          description="Access engineers who understand real-world engineering challenges and build production-ready applications using modern technologies like React, Node.js, Python, and Laravel."
        />
      </div>

      <SplitSection
        eyebrow="Full-stack"
        title="Production-ready applications."
        description="Starting from $25 per hour, you get access to developers who understand architecture, performance, and long-term product stability."
        tags={["React", "Node.js", "Python", "Laravel", "PostgreSQL"]}
        bullets={[
          "Architecture planning & modular system design",
          "Development and end-to-end integration",
          "Testing, optimization and secure deployment",
          "Monitoring and long-term product growth",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Frontend"
        title="Modern frameworks. Fast interfaces."
        description="Specialists in React.js, Next.js, and Vue.js building fast, responsive, and SEO-friendly user interfaces."
        tags={["React.js", "Next.js", "Vue.js", "Tailwind", "TanStack Query"]}
        bullets={[
          "Component-based architecture for scalability",
          "Responsive design for mobile and desktop",
          "Performance optimization using lazy loading",
          "SEO-friendly rendering with SSR techniques",
        ]}
      />

      <SplitSection
        eyebrow="Backend"
        title="Scalable systems. Secure APIs."
        description="Strong logic, secure APIs, and efficient data handling using Node.js, Python, and Laravel."
        tags={["Node.js", "Python", "Laravel", "PostgreSQL", "MongoDB", "Auth"]}
        bullets={[
          "Secure API development and integrations",
          "Scalable database architecture using SQL/NoSQL",
          "Real-time features using WebSockets",
          "Role-based authentication and access control",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Database & Performance"
        title="Indexing. Optimization. Caching."
        description="Engineers who understand database performance, indexing, and caching strategies to improve speed and efficiency."
        tags={["PostgreSQL", "MySQL", "MongoDB", "Redis", "CDN"]}
        bullets={[
          "Queries optimized for speed and indexing",
          "Data structures designed for massive scalability",
          "Handling high traffic without slowdowns",
          "Performance bottlenecks identified and resolved early",
        ]}
      />
    </ScrollReveal>
  </section>
);

import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";

export const TechSections = () => (
  <section className="section-y border-b border-border bg-secondary/30">
    <ScrollReveal className="container-tight space-y-20 lg:space-y-28">
      <SectionHeading
        eyebrow="Full-Stack Web Engineering"
        title="Complex systems. Scalable architectures. Production-ready delivery."
        description="When businesses hire Indian developers for full-stack engineering, they need more than basic development. Our engineers handle frontend, backend, databases, integrations, deployment, and long-term product stability."
      />

      <SplitSection
        eyebrow="End-to-end engineering"
        title="Applications built to perform in production."
        description="At $25 per hour, you get developers who understand system design, clean code, testing, deployment, monitoring, and the real-world tradeoffs that shape reliable products."
        tags={["React", "Next.js", "Node.js", "Python", "Laravel", "PostgreSQL"]}
        bullets={[
          "Architecture planning and modular system design",
          "Frontend, backend, database, and API integration",
          "Testing, optimization, deployment, and monitoring",
          "Future-ready code that reduces technical debt",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Frontend"
        title="Fast, responsive, SEO-friendly interfaces."
        description="Specialists in React.js, Next.js, and Vue.js build polished interfaces that load quickly, work across devices, and support better user engagement."
        tags={["React.js", "Next.js", "Vue.js", "Tailwind", "SSR"]}
        bullets={[
          "Component-based architecture for scalable interfaces",
          "Responsive design for mobile, tablet, and desktop",
          "SEO-friendly rendering with server-side techniques",
          "Performance optimization with lazy loading and code splitting",
        ]}
      />

      <SplitSection
        eyebrow="Backend"
        title="Secure logic, APIs, and data architecture."
        description="Our backend developers work with Node.js, Python, Laravel, PostgreSQL, MongoDB, MySQL, and Redis to support complex workflows and high-traffic products."
        tags={["Node.js", "Python", "Laravel", "GraphQL", "Redis", "Auth"]}
        bullets={[
          "Secure REST and GraphQL API development",
          "Scalable database architecture and query optimization",
          "Real-time features using WebSockets",
          "Role-based authentication and access control",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Database and performance"
        title="Indexing, caching, and bottleneck prevention."
        description="Strong applications depend on strong data handling. We optimize queries, structure data for scale, and improve load times with caching and CDN strategies."
        tags={["PostgreSQL", "MySQL", "MongoDB", "Redis", "CDN"]}
        bullets={[
          "Queries optimized for speed and indexing",
          "Data structures designed for long-term scalability",
          "Applications prepared for high traffic without slowdowns",
          "Performance issues identified early, before launch",
        ]}
      />
    </ScrollReveal>
  </section>
);

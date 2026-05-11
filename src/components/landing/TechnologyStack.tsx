import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const stacks = [
  ["Frontend", ["React.js", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"]],
  ["Backend", ["Node.js", "Python", "Laravel", "Express.js", "REST", "GraphQL"]],
  ["Mobile", ["Swift", "Kotlin", "Flutter", "React Native", "Dart", "Expo"]],
  ["Databases", ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Indexes", "Caching"]],
  ["AI", ["GPT", "Gemini", "RAG", "Vector DBs", "Python ML", "Automation"]],
  ["Cloud and DevOps", ["AWS", "Azure", "Google Cloud", "Docker", "Terraform", "CI/CD"]],
  ["Collaboration", ["Jira", "Trello", "Slack", "GitHub", "GitLab", "Figma"]],
  ["Quality", ["Unit tests", "E2E tests", "Code reviews", "Monitoring", "Logging", "QA workflows"]],
];

export const TechnologyStack = () => (
  <section id="technologies" className="section-y border-b border-border bg-background">
    <ScrollReveal className="container-tight">
      <SectionHeading
        eyebrow="Technology Stack"
        title="Modern tools for web, mobile, AI, and cloud development."
        description="We choose technology based on your product goals, scalability needs, budget, and roadmap, then build with proven frameworks that support clean development and maintainable code."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stacks.map(([name, tools]) => (
          <div key={name as string} className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-ink">{name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {(tools as string[]).map((tool) => (
                <span key={tool} className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-ink">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

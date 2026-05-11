import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  ["How quickly can I hire Indian developers?", "In most cases, you can hire Indian developers within 24 to 72 hours. We shortlist candidates based on your requirements and arrange interviews quickly."],
  ["What is the standard hourly rate?", "Pricing starts at $25/hour for many development roles, including web, mobile, and backend engineers. Final pricing depends on role seniority, project complexity, and engagement model."],
  ["Are your developers junior or senior level?", "We provide mid to senior-level developers with real project experience. Even with rates starting at $25/hour, the focus remains on quality and production-level engineering."],
  ["Can I interview developers before hiring?", "Yes, you can interview and assess developers before onboarding. This ensures you choose the right fit for your project."],
  ["Do you offer full-time dedicated developers?", "Yes, you can hire Indian developers on a full-time or part-time dedicated basis depending on your project needs."],
  ["Can developers work in my time zone?", "Yes, developers can adjust their schedules to overlap with US, UK, or other time zones for smooth collaboration."],
  ["What technologies do your developers specialize in?", "Our developers work with React, Node.js, Python, Laravel, Flutter, Kotlin, Swift, and cloud platforms like AWS and Azure."],
  ["Do you provide project managers?", "Yes, for larger projects or dedicated teams, we provide project managers to ensure smooth execution and communication."],
  ["How do you track work and progress?", "We use tools like Jira, Trello, and time-tracking systems. You receive regular updates and reports on progress."],
  ["How are payments handled?", "Payments are usually done weekly or monthly based on tracked hours. For fixed projects, payments are milestone-based."],
  ["Do you sign NDAs?", "Yes, every project includes a Non-Disclosure Agreement to protect your idea and data."],
  ["Who owns the code after development?", "You retain 100 percent ownership of the source code, designs, and all project assets."],
  ["Can I scale my team after starting?", "Yes, you can increase or reduce the number of developers based on your requirements at any time."],
  ["Do you provide maintenance after launch?", "Yes, you can continue to hire Indian developers for ongoing maintenance, updates, and feature improvements with flexible pricing starting at $25/hour."],
  ["How do you ensure code quality?", "We follow strict code review processes, automated testing, and structured QA workflows to maintain high standards."],
  ["Can you work with my existing development team?", "Yes, our developers can integrate with your in-house or external teams and follow your existing processes."],
  ["Do you follow Agile methodology?", "Yes, we use Agile and Scrum methodologies with regular sprints, standups, and progress tracking."],
  ["What industries do you have experience in?", "We have experience in fintech, healthcare, EdTech, eCommerce, SaaS, and custom enterprise solutions."],
  ["Do you handle deployments and DevOps?", "Yes, our developers can manage deployment, CI/CD pipelines, cloud infrastructure, and monitoring."],
  ["What if I am not satisfied with a developer?", "We can quickly replace the developer with another suitable candidate to ensure your project continues smoothly."],
  ["Do you offer fixed-price development?", "Yes, for projects with clearly defined requirements, we provide fixed pricing based on estimated scope, delivery milestones, and flexible starting-rate assumptions."],
  ["How do we communicate during the project?", "We use Slack, Zoom, email, and project management tools to maintain clear and consistent communication."],
  ["Can you handle large-scale applications?", "Yes, our developers have experience building scalable systems, SaaS platforms, and enterprise-level applications."],
  ["Is there a minimum hiring duration?", "No strict minimum. You can hire developers for short-term tasks or long-term projects."],
  ["Why hire from your platform?", "Because you get skilled engineers, transparent pricing starting at $25/hour, flexible hiring models, and scalable solutions built for growth."],
];

export const FAQ = () => (
  <section id="faq" className="section-y border-b border-border">
    <ScrollReveal className="container-tight grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <div>
        <SectionHeading eyebrow="FAQ" title="Answers, not sales pitches." description="Everything you need to know before bringing on a team." />
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map(([q, a], i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-medium text-ink hover:no-underline">{q}</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollReveal>
  </section>
);

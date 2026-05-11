import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "./ScrollReveal";
import { 
  MessageSquare, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Heart, 
  Globe,
  Sparkles,
  Trophy,
  Zap,
  Code2,
  FileCheck,
  CheckCircle2,
  Workflow,
  Layout,
  Briefcase,
  Layers,
  Star,
  Activity,
  Milestone
} from "lucide-react";

const faqCategories = [
  {
    title: "Hiring & Process",
    items: [
      ["How quickly can I hire Indian developers?", "In most cases, you can hire Indian developers within 24 to 72 hours. We shortlist candidates based on your requirements and arrange interviews quickly."],
      ["Can I interview developers before hiring?", "Yes, you can interview and assess developers before onboarding. This ensures you choose the right fit for your project."],
      ["How do you track work and progress?", "We use tools like Jira, Trello, and time-tracking systems. You receive regular updates and reports on progress."],
      ["Is there a minimum hiring duration?", "No strict minimum. You can hire developers for short-term tasks or long-term projects."],
      ["What if I am not satisfied with a developer?", "We can quickly replace the developer with another suitable candidate to ensure your project continues smoothly."],
    ]
  },
  {
    title: "Pricing & Payments",
    items: [
      ["What is the standard hourly rate?", "Pricing starts at $25/hour for many development roles, including web, mobile, and backend engineers. Final pricing depends on role seniority, project complexity, and engagement model."],
      ["How are payments handled?", "Payments are usually done weekly or monthly based on tracked hours. For fixed projects, payments are milestone-based."],
      ["Do you offer fixed-price development?", "Yes, for projects with clearly defined requirements, we provide fixed pricing based on estimated scope, delivery milestones, and flexible starting-rate assumptions."],
    ]
  },
  {
    title: "Team & Communication",
    items: [
      ["Are your developers junior or senior level?", "We provide mid to senior-level developers with real project experience. Even with rates starting at $25/hour, the focus remains on quality and production-level engineering."],
      ["Do you offer full-time dedicated developers?", "Yes, you can hire Indian developers on a full-time or part-time dedicated basis depending on your project needs."],
      ["Can developers work in my time zone?", "Yes, developers can adjust their schedules to overlap with US, UK, or other time zones for smooth collaboration."],
      ["What technologies do your developers specialize in?", "Our developers work with React, Node.js, Python, Laravel, Flutter, Kotlin, Swift, and cloud platforms like AWS and Azure."],
      ["Do you provide project managers?", "Yes, for larger projects or dedicated teams, we provide project managers to ensure smooth execution and communication."],
      ["How do we communicate during the project?", "We use Slack, Zoom, email, and project management tools to maintain clear and consistent communication."],
    ]
  },
  {
    title: "Security & NDA",
    items: [
      ["Do you sign NDAs?", "Yes, every project includes a Non-Disclosure Agreement to protect your idea and data."],
      ["Who owns the code after development?", "You retain 100 percent ownership of the source code, designs, and all project assets."],
      ["How do you ensure code quality?", "We follow strict code review processes, automated testing, and structured QA workflows to maintain high standards."],
    ]
  },
  {
    title: "Scaling & Support",
    items: [
      ["Can I scale my team after starting?", "Yes, you can increase or reduce the number of developers based on your requirements at any time."],
      ["Do you provide maintenance after launch?", "Yes, you can continue to hire Indian developers for ongoing maintenance, updates, and feature improvements with flexible pricing starting at $25/hour."],
      ["Can you work with my existing development team?", "Yes, our developers can integrate with your in-house or external teams and follow your existing processes."],
      ["Do you follow Agile methodology?", "Yes, we use Agile and Scrum methodologies with regular sprints, standups, and progress tracking."],
      ["What industries do you have experience in?", "We have experience in fintech, healthcare, EdTech, eCommerce, SaaS, and custom enterprise solutions."],
      ["Do you handle deployments and DevOps?", "Yes, our developers can manage deployment, CI/CD pipelines, cloud infrastructure, and monitoring."],
      ["Can you handle large-scale applications?", "Yes, our developers have experience building scalable systems, SaaS platforms, and enterprise-level applications."],
    ]
  }
];

const workflows = ["Discovery", "Planning", "Development", "QA Testing", "Deployment", "Support"];
const services = ["Web Development", "Mobile Apps", "SaaS Platforms", "AI Integrations", "DevOps & Cloud", "UI Engineering"];
const industries = ["FinTech", "Healthcare", "EdTech", "eCommerce", "SaaS", "Logistics"];
const techStack = ["React", "Next.js", "Node.js", "Python", "Laravel", "Flutter", "AWS", "Docker"];

export const FAQ = () => (
  <section id="faq" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Background Decorative Glows */}
    <div className="absolute -right-24 top-24 h-[600px] w-[600px] rounded-full bg-accent/[0.02] blur-[120px] pointer-events-none" />
    <div className="absolute -left-24 bottom-24 h-[600px] w-[600px] rounded-full bg-accent/[0.01] blur-[120px] pointer-events-none" />

    <ScrollReveal className="container-tight">
      <div className="grid gap-12 lg:grid-cols-[440px_1fr] lg:gap-16">
        
        {/* Maximum Content Sidebar */}
        <div className="lg:sticky lg:top-24 lg:h-fit space-y-5 pb-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-accent bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
              <Sparkles className="h-3 w-3" />
              Comprehensive Support
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink leading-[1.15]">
              Everything you <span className="text-accent italic">need to know</span>
            </h2>
          </div>

          <div className="space-y-4">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-card/40 p-3.5 backdrop-blur-sm">
                <p className="text-lg font-black text-ink">500+</p>
                <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Projects</p>
              </div>
              <div className="rounded-xl border border-border bg-card/40 p-3.5 backdrop-blur-sm">
                <p className="text-lg font-black text-ink">98%</p>
                <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Success Rate</p>
              </div>
            </div>

            {/* Development Workflow */}
            <div className="rounded-2xl border border-border bg-card/50 p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <Workflow className="h-4 w-4 text-accent" />
                <p className="text-[11px] font-bold text-ink uppercase tracking-widest">Development Workflow</p>
              </div>
              <div className="relative space-y-3.5 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border/60">
                {workflows.map((step) => (
                  <div key={step} className="relative flex items-center gap-3 pl-5">
                    <div className="absolute left-0 h-[15px] w-[15px] rounded-full border-2 border-background bg-accent shadow-sm" />
                    <span className="text-[12px] font-bold text-ink/80">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Services */}
            <div className="rounded-2xl border border-border bg-card/40 p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <Layout className="h-4 w-4 text-emerald-500" />
                <p className="text-[11px] font-bold text-ink uppercase tracking-widest">Core Services</p>
              </div>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                    <div className="h-1 w-1 rounded-full bg-emerald-500/50" />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Industries Served */}
            <div className="rounded-2xl border border-border bg-card/40 p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <Briefcase className="h-4 w-4 text-blue-500" />
                <p className="text-[11px] font-bold text-ink uppercase tracking-widest">Industries We Serve</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {industries.map((i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-blue-500/5 border border-blue-500/10 text-[10px] font-bold text-blue-600">
                    {i}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="rounded-2xl border border-border bg-card/40 p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <Code2 className="h-4 w-4 text-purple-500" />
                <p className="text-[11px] font-bold text-ink uppercase tracking-widest">Trusted Tech Stack</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-purple-500/5 border border-purple-500/10 text-[10px] font-bold text-purple-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Why Teams Prefer Us */}
            <div className="rounded-2xl border border-border bg-card/50 p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <Heart className="h-4 w-4 text-rose-500" />
                <p className="text-[11px] font-bold text-ink uppercase tracking-widest">Why Teams Prefer Us</p>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Fast onboarding in 24-72h",
                  "Transparent starting at $25/hr",
                  "Senior vetted engineers only",
                  "Full Agile transparency"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[12px] text-muted-foreground font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium CTA Panel */}
            <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-accent p-6 shadow-xl shadow-accent/20">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white mb-4">
                  <Star className="h-5 w-5 fill-white" />
                </div>
                <p className="text-lg font-bold text-white mb-2">Need a Dedicated Team?</p>
                <p className="text-[13px] text-white/80 mb-5 leading-relaxed">
                  Get a complete squad with PM, Tech Lead, and Developers within a week.
                </p>
                <a 
                  href="#contact" 
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-accent transition-all hover:bg-white/90 shadow-lg"
                >
                  Consult an Expert
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Groups */}
        <div className="space-y-12">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-accent/80 whitespace-nowrap">
                  {category.title}
                </h3>
                <div className="h-px w-full bg-border/50" />
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-2.5">
                {category.items.map(([q, a], i) => (
                  <AccordionItem 
                    key={i} 
                    value={`cat-${catIdx}-item-${i}`} 
                    className="group rounded-xl border border-border bg-card/30 transition-all duration-300 hover:border-accent/20 hover:bg-card/60 data-[state=open]:border-accent/30 data-[state=open]:bg-card shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  >
                    <AccordionTrigger className="px-5 py-4 text-left text-sm md:text-[15px] font-bold text-ink hover:no-underline transition-colors group-data-[state=open]:text-accent">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4 text-[13px] md:text-sm leading-relaxed text-muted-foreground border-t border-border/40 pt-3">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

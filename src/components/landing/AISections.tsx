import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";

export const AISections = () => (
  <section className="section-y border-b border-border">
    <ScrollReveal className="container-tight space-y-20 lg:space-y-28">
      <SectionHeading
        eyebrow="AI and Machine Learning"
        title="Practical AI capabilities with real business impact."
        description="Startups, agencies, and enterprises are integrating AI to automate workflows, improve decisions, personalize experiences, and reduce operational workload. We focus on implementation, not theory."
      />

      <SplitSection
        eyebrow="LLM integration"
        title="GPT, Gemini, and intelligent product features."
        description="Add AI capabilities to your platform through reliable model integrations, prompt design, data workflows, and performance tuning."
        tags={["OpenAI", "Gemini", "Vector DBs", "RAG", "Smart Search"]}
        bullets={[
          "AI chatbots for customer support and internal tools",
          "Content generation systems and workflow automation",
          "Smart search and recommendation engines",
          "Prompt optimization, API integration, and response tuning",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Custom AI chatbots"
        title="Conversation systems tailored to your workflows."
        description="We create AI chatbots for support, sales, lead qualification, internal productivity, and multilingual communication, integrated with your website, CRM, or mobile app."
        tags={["Support", "Sales", "CRM", "Multilingual", "Automation"]}
        bullets={[
          "Customer support automation",
          "Lead qualification and sales assistance",
          "Internal team productivity tools",
          "Natural conversations with fast response times",
        ]}
      />

      <SplitSection
        eyebrow="Predictive analytics"
        title="Turn product data into better decisions."
        description="Our developers build data pipelines and predictive models that help teams forecast behavior, identify trends, and improve operations."
        tags={["Python", "Pandas", "scikit-learn", "Data Pipelines"]}
        bullets={[
          "Forecast demand and user behavior",
          "Identify trends and patterns",
          "Optimize pricing and operations",
          "Improve customer targeting and reporting",
        ]}
      />
    </ScrollReveal>
  </section>
);

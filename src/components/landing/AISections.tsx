import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";

export const AISections = () => (
  <section className="section-y border-b border-border">
    <ScrollReveal className="container-tight space-y-20 lg:space-y-28">
      <SectionHeading
        eyebrow="AI & Machine Learning"
        title="Practical AI. Real business impact."
        description="Integrate AI into your products to automate processes and improve decision-making. We build real AI-powered features starting from $25 per hour."
      />

      <SplitSection
        eyebrow="LLM Integration"
        title="GPT and Gemini Integration."
        description="Add intelligent capabilities to your platform using models like GPT and Gemini for chatbots, content generation, and smart search."
        tags={["OpenAI", "Gemini", "Anthropic", "Vector DBs", "RAG"]}
        bullets={[
          "AI chatbots for advanced customer support",
          "Automated content generation systems",
          "Smart search and recommendation engines",
          "Prompt optimization and performance tuning",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="AI Chatbots"
        title="Custom AI-Powered Chatbots."
        description="Tailored chatbots integrated with your website, CRM, or mobile app focusing on natural conversations and fast response times."
        tags={["Support", "Sales", "CRM", "Multilingual"]}
        bullets={[
          "Customer support automation 24/7",
          "Lead qualification and sales assistance",
          "Internal team productivity tools",
          "Multilingual communication systems",
        ]}
      />

      <SplitSection
        eyebrow="Predictive Analytics"
        title="Data-Driven Predictive Models."
        description="Analyze data and make informed decisions using Python-based frameworks to process large datasets efficiently."
        tags={["Python", "Pandas", "scikit-learn", "Data Pipelines"]}
        bullets={[
          "Forecast demand and user behavior",
          "Identify critical trends and patterns",
          "Optimize pricing and operational workflows",
          "Turn raw data into actionable insights",
        ]}
      />
    </ScrollReveal>
  </section>
);

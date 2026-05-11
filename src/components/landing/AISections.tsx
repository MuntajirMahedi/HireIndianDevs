import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";
import { Brain, Zap, ShieldCheck, Cpu } from "lucide-react";

export const AISections = () => (
  <section id="ai-solutions" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative background glows */}
    <div className="absolute inset-0 z-0">
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/[0.04] blur-[120px] pointer-events-none" />
    </div>

    <ScrollReveal className="container-tight relative z-10 space-y-24 lg:space-y-32">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-500">
          <span className="h-px w-8 bg-purple-500" />
          AI & Machine Learning
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          Next-gen <span className="text-purple-500 italic">intelligent automation</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          We integrate practical AI capabilities—from LLMs to predictive models—into your existing workflows to drive efficiency and smarter decisions.
        </p>
      </div>

      <SplitSection
        eyebrow="Generative AI"
        title="GPT, Gemini & RAG-based architectures."
        description="We build intelligent applications that leverage large language models (LLMs) and vector databases for contextual, high-precision AI responses."
        tags={["OpenAI", "Gemini", "Pinecone", "LangChain", "Vector DB"]}
        accent="text-purple-500"
        label="AI Powered"
        bullets={[
          "Custom LLM integrations for specialized workflows",
          "Retrieval-Augmented Generation (RAG) for context",
          "Advanced prompt engineering and response tuning",
          "Semantic search and knowledge base automation",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Predictive Intelligence"
        title="Data-driven forecasting and automation."
        description="Our AI engineers build predictive models and automated agents that forecast trends and optimize complex business operations."
        tags={["Python", "PyTorch", "TensorFlow", "Scikit-learn"]}
        accent="text-purple-500"
        label="Innovative Solutions"
        bullets={[
          "User behavior forecasting and trend analysis",
          "Automated decision-making engines",
          "Large-scale data pipeline and ETL architecture",
          "Custom machine learning model training and tuning",
        ]}
      />
    </ScrollReveal>

    {/* Section Trust Metrics */}
    <div className="container-tight mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-border/50">
        {[
          { icon: Brain, label: "GPT / Gemini / RAG", sub: "LLM Specialists" },
          { icon: Zap, label: "Smart Automation", sub: "Workflow Ready" },
          { icon: ShieldCheck, label: "Private & Secure", sub: "Data Protection" },
          { icon: Cpu, label: "High Performance", sub: "Inference Optimized" },
        ].map((m, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-3 p-2 rounded-xl bg-purple-500/5 text-purple-500">
              <m.icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-black text-ink">{m.label}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{m.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

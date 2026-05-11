import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";
import { Smartphone, Zap, ShieldCheck, Heart } from "lucide-react";

export const MobileSections = () => (
  <section id="mobile-development" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative background glows */}
    <div className="absolute inset-0 z-0">
      <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none" />
    </div>

    <ScrollReveal className="container-tight relative z-10 space-y-24 lg:space-y-32">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">
          <span className="h-px w-8 bg-emerald-500" />
          Mobile Engineering
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          High-performance <span className="text-emerald-500 italic">native and hybrid apps</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          We build polished iOS, Android, Flutter, and React Native applications with a focus on speed, stability, and mobile-first user experiences.
        </p>
      </div>

      <SplitSection
        eyebrow="iOS & Android Native"
        title="Native development for peak performance."
        description="We build secure, polished apps using Swift and Kotlin, following platform standards to ensure the best possible user experience."
        tags={["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Core Data"]}
        accent="text-emerald-500"
        label="Native Performance"
        bullets={[
          "Swift and Kotlin architecture for long-term maintainability",
          "Smooth 60fps UI with responsive platform animations",
          "Secure authentication and biometric data handling",
          "App Store & Play Store deployment and compliance",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Cross-Platform"
        title="Launch on both platforms with one codebase."
        description="For teams seeking faster delivery and lower cost without sacrificing quality, we build high-performance Flutter and React Native apps."
        tags={["Flutter", "React Native", "Dart", "Expo", "API Sync"]}
        accent="text-emerald-500"
        label="Scalable Delivery"
        bullets={[
          "Unified codebase for faster time-to-market",
          "Native-like performance and platform-aware UI",
          "Advanced offline functionality and background syncing",
          "Cost-effective maintenance and update cycles",
        ]}
      />
    </ScrollReveal>

    {/* Section Trust Metrics */}
    <div className="container-tight mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-border/50">
        {[
          { icon: Smartphone, label: "iOS & Android", sub: "Native Experts" },
          { icon: Zap, label: "Cross-Platform", sub: "Flutter/RN" },
          { icon: ShieldCheck, label: "Secure Data", sub: "AES-256 Ready" },
          { icon: Heart, label: "98% CSAT", sub: "User Satisfaction" },
        ].map((m, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-3 p-2 rounded-xl bg-emerald-500/5 text-emerald-500">
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

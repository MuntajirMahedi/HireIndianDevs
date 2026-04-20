import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";

export const MobileSections = () => (
  <section className="section-y border-b border-border">
    <ScrollReveal className="container-tight space-y-20 lg:space-y-28">
      <SectionHeading
        eyebrow="Mobile App Ecosystems"
        title="High-performance. Product-first."
        description="Our mobile engineers in India build applications focused on performance, stability, and real-world scalability across iOS, Android, and cross-platform environments."
      />

      <SplitSection
        eyebrow="iOS · Swift"
        title="Native iOS Development."
        description="Engineers specializing in Swift following Apple’s development standards — optimized for performance, security, and seamless user experience."
        tags={["Swift", "SwiftUI", "Combine", "Core Data"]}
        bullets={[
          "Clean Swift architecture for maintainability",
          "Smooth UI with responsive animations",
          "Secure API integrations and data handling",
          "App Store deployment and compliance",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Android · Kotlin"
        title="Native Android Development."
        description="Building fast, efficient, and scalable Android applications using Kotlin, designed to handle a wide range of devices and performance conditions."
        tags={["Kotlin", "Jetpack Compose", "Coroutines", "Room"]}
        bullets={[
          "Optimized performance across multiple devices",
          "Efficient memory and battery usage",
          "Secure authentication and data management",
          "Integration with third-party services and APIs",
        ]}
      />

      <SplitSection
        eyebrow="Cross-platform"
        title="Flutter and React Native."
        description="Launch on both iOS and Android using a single codebase. Native-like performance and responsiveness matching native standards."
        tags={["Flutter", "React Native", "Dart", "Expo"]}
        bullets={[
          "Shared codebase for faster delivery",
          "Native-like performance and UI architecture",
          "Integration with backend systems and APIs",
          "Faster updates and maintenance cycles",
        ]}
      />
    </ScrollReveal>
  </section>
);

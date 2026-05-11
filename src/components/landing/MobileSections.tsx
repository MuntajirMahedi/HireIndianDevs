import { SectionHeading } from "./SectionHeading";
import { SplitSection } from "./SplitSection";
import { ScrollReveal } from "./ScrollReveal";

export const MobileSections = () => (
  <section className="section-y border-b border-border">
    <ScrollReveal className="container-tight space-y-20 lg:space-y-28">
      <SectionHeading
        eyebrow="Mobile App Development"
        title="Native and cross-platform apps designed for real usage."
        description="Our mobile engineers in India build iOS, Android, Flutter, and React Native applications with a product-first focus on speed, stability, UX, and long-term scalability."
      />

      <SplitSection
        eyebrow="iOS with Swift"
        title="Native iOS development that follows Apple standards."
        description="When you hire Indian developers for iOS development, you work with engineers who build secure, polished, high-performance apps for iPhone and iPad."
        tags={["Swift", "SwiftUI", "Combine", "Core Data", "App Store"]}
        bullets={[
          "Clean Swift architecture for maintainability",
          "Smooth UI with responsive animations",
          "Secure API integrations and data handling",
          "App Store deployment and compliance support",
        ]}
      />

      <SplitSection
        reverse
        eyebrow="Android with Kotlin"
        title="Reliable Android apps across devices and conditions."
        description="Android development requires careful performance handling across a wide range of devices. Our Kotlin developers build apps that stay fast and stable under real usage."
        tags={["Kotlin", "Jetpack Compose", "Coroutines", "Room", "Play Store"]}
        bullets={[
          "Optimized performance across multiple Android devices",
          "Efficient memory and battery usage",
          "Secure authentication and data management",
          "Integration with third-party services and APIs",
        ]}
      />

      <SplitSection
        eyebrow="Flutter and React Native"
        title="Launch on iOS and Android with one codebase."
        description="For teams that want faster delivery and lower cost, cross-platform development helps you launch faster while maintaining a consistent, native-like user experience."
        tags={["Flutter", "React Native", "Dart", "Expo", "API Integration"]}
        bullets={[
          "Shared codebase for faster delivery",
          "Native-like performance and UI architecture",
          "Offline functionality and data syncing",
          "Faster updates and maintenance cycles",
        ]}
      />
    </ScrollReveal>
  </section>
);

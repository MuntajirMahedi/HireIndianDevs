import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { PricingComparison } from "@/components/landing/PricingComparison";
import { ServicesOverview } from "@/components/landing/ServicesOverview";
import { TechSections } from "@/components/landing/TechSections";
import { TechnologyStack } from "@/components/landing/TechnologyStack";
import { MobileSections } from "@/components/landing/MobileSections";
import { ArchitectureSections } from "@/components/landing/ArchitectureSections";
import { AISections } from "@/components/landing/AISections";
import { PricingModels } from "@/components/landing/PricingModels";
import { MVPProcess } from "@/components/landing/MVPProcess";
import { DevelopmentProcess } from "@/components/landing/DevelopmentProcess";
import { IndiaAdvantage } from "@/components/landing/IndiaAdvantage";
import { QASecurity } from "@/components/landing/QASecurity";
import { Industries } from "@/components/landing/Industries";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { ContactForm } from "@/components/landing/ContactForm";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { MotionReveal } from "@/components/landing/MotionReveal.tsx";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Global grid background */}
      <div 
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      
      <div className="relative z-10">
        <Nav />
        <main>
          {/* Section 1: Hero - Fade + Upward reveal (as requested in flow) */}
          <MotionReveal preset="fadeUp" duration={1}>
            <Hero />
          </MotionReveal>

          {/* Section 2: TrustStrip - Right to Left slide */}
          <MotionReveal preset="slideInRight">
            <TrustStrip />
          </MotionReveal>

          {/* Section 3: WhyChooseUs - Left to Right slide */}
          <MotionReveal preset="slideInLeft">
            <WhyChooseUs />
          </MotionReveal>

          {/* Section 4: PricingComparison - Bottom to Top fade */}
          <MotionReveal preset="fadeUp">
            <PricingComparison />
          </MotionReveal>

          {/* Section 5: ServicesOverview - Right to Left slide */}
          <MotionReveal preset="slideInRight">
            <ServicesOverview />
          </MotionReveal>

          {/* Section 6: TechSections - Left to Right slide */}
          <MotionReveal preset="slideInLeft">
            <TechSections />
          </MotionReveal>

          {/* Section 7: MobileSections - Bottom to Top fade */}
          <MotionReveal preset="fadeUp">
            <MobileSections />
          </MotionReveal>

          {/* Section 8: ArchitectureSections - Right to Left slide */}
          <MotionReveal preset="slideInRight">
            <ArchitectureSections />
          </MotionReveal>

          {/* Section 9: AISections - Left to Right slide */}
          <MotionReveal preset="slideInLeft">
            <AISections />
          </MotionReveal>

          {/* Section 10: TechnologyStack - Bottom to Top fade */}
          <MotionReveal preset="fadeUp">
            <TechnologyStack />
          </MotionReveal>

          {/* Section 11: PricingModels - Right to Left slide */}
          <MotionReveal preset="slideInRight">
            <PricingModels />
          </MotionReveal>

          {/* Section 12: MVPProcess - Left to Right slide */}
          <MotionReveal preset="slideInLeft">
            <MVPProcess />
          </MotionReveal>

          {/* Section 13: DevelopmentProcess - Bottom to Top fade */}
          <MotionReveal preset="fadeUp">
            <DevelopmentProcess />
          </MotionReveal>

          {/* Section 14: IndiaAdvantage - Right to Left slide */}
          <MotionReveal preset="slideInRight">
            <IndiaAdvantage />
          </MotionReveal>

          {/* Section 15: QASecurity - Left to Right slide */}
          <MotionReveal preset="slideInLeft">
            <QASecurity />
          </MotionReveal>

          {/* Section 16: Industries - Bottom to Top fade */}
          <MotionReveal preset="fadeUp">
            <Industries />
          </MotionReveal>

          {/* Section 17: Testimonials - Right to Left slide */}
          <MotionReveal preset="slideInRight">
            <Testimonials />
          </MotionReveal>

          {/* Section 18: FAQ - Left to Right slide */}
          <MotionReveal preset="slideInLeft">
            <FAQ />
          </MotionReveal>

          {/* Section 19: ContactForm - Bottom to Top fade */}
          <MotionReveal preset="fadeUp">
            <ContactForm />
          </MotionReveal>

          {/* Section 20: FinalCTA - Smooth zoom/fade (scaleUp) */}
          <MotionReveal preset="scaleUp">
            <FinalCTA />
          </MotionReveal>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

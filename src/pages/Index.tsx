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
          <Hero />
          <TrustStrip />
          <WhyChooseUs />
          <PricingComparison />
          <ServicesOverview />
          <TechSections />
          <MobileSections />
          <ArchitectureSections />
          <AISections />
          <TechnologyStack />
          <PricingModels />
          <MVPProcess />
          <DevelopmentProcess />
          <IndiaAdvantage />
          <QASecurity />
          <Industries />
          <Testimonials />
          <FAQ />
          <ContactForm />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

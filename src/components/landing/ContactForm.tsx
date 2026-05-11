import { LeadForm } from "./LeadForm";
import { SectionHeading } from "./SectionHeading";

export const ContactForm = () => {
  return (
    <section id="contact" className="section-y border-b border-border bg-secondary/30">
      <div className="container-tight grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Get Started"
            title="Tell us about your project."
            description="Share your requirements and we will match you with the right developers based on technology, experience level, availability, and project goals."
          />
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li>Senior engineers starting at $25/hour</li>
            <li>NDA signed before sensitive disclosure</li>
            <li>Review profiles and interview candidates</li>
            <li>Start with one developer or a full remote team</li>
            <li>Replace or scale developers based on project needs</li>
          </ul>
        </div>

        <LeadForm source="Contact section" />
      </div>
    </section>
  );
};

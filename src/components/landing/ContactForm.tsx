import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "./SectionHeading";

export const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Request received", { description: "We'll match you with developers within 24 hours." });
    }, 600);
  };

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
            <li>Senior engineers at $25/hour</li>
            <li>NDA signed before sensitive disclosure</li>
            <li>Review profiles and interview candidates</li>
            <li>Start with one developer or a full remote team</li>
            <li>Replace or scale developers based on project needs</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-lg border border-border bg-card p-6 md:p-8">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Your full name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" type="email" required placeholder="you@company.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Company name (optional)" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="brief">Project brief</Label>
              <Textarea id="brief" required rows={5} placeholder="What are you building? Tech stack, timeline, team needs..." />
            </div>
            <Button type="submit" disabled={submitting} className="h-11 w-full bg-accent text-accent-foreground hover:bg-accent/90">
              {submitting ? "Sending..." : "Get developer profiles"}
            </Button>
            <p className="text-center text-xs text-muted-foreground">By submitting, you agree to our NDA-first process. No spam.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

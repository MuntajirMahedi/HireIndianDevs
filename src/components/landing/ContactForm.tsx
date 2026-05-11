import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getEmailErrorMessage, sendContactEmails } from "@/lib/emailService";
import { SectionHeading } from "./SectionHeading";

interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = (values: ContactFormValues) => {
  if (!values.name) return "Please enter your name.";
  if (!values.email) return "Please enter your work email.";
  if (!emailPattern.test(values.email)) return "Please enter a valid email address.";
  if (!values.message) return "Please share a short project brief.";
  return "";
};

export const ContactForm = () => {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const updateValue = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (formMessage) setFormMessage(null);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      message: values.message.trim(),
    };

    const validationMessage = validateForm(trimmedValues);
    if (validationMessage) {
      setFormMessage({ type: "error", text: validationMessage });
      toast.error("Please check the form", { description: validationMessage });
      return;
    }

    setSubmitting(true);
    setFormMessage(null);

    try {
      await sendContactEmails({
        ...trimmedValues,
        time: new Date().toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        }),
      });

      setValues(initialValues);
      setFormMessage({
        type: "success",
        text: "Request sent. We will match you with suitable developers and follow up shortly.",
      });
      toast.success("Request sent", { description: "A thank-you email is on its way to your inbox." });
    } catch (error) {
      const message = getEmailErrorMessage(error);
      setFormMessage({ type: "error", text: message });
      toast.error("Message not sent", { description: message });
    } finally {
      setSubmitting(false);
    }
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
            <li>Senior engineers starting at $25/hour</li>
            <li>NDA signed before sensitive disclosure</li>
            <li>Review profiles and interview candidates</li>
            <li>Start with one developer or a full remote team</li>
            <li>Replace or scale developers based on project needs</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-lg border border-border bg-card p-6 md:p-8">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
                value={values.name}
                onChange={(e) => updateValue("name", e.target.value)}
                placeholder="Your full name"
                autoComplete="name"
                disabled={submitting}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Work email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={values.email}
                onChange={(e) => updateValue("email", e.target.value)}
                placeholder="you@company.com"
                autoComplete="email"
                disabled={submitting}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                value={values.company}
                onChange={(e) => updateValue("company", e.target.value)}
                placeholder="Company name (optional)"
                autoComplete="organization"
                disabled={submitting}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Project brief</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                value={values.message}
                onChange={(e) => updateValue("message", e.target.value)}
                placeholder="What are you building? Tech stack, timeline, team needs..."
                disabled={submitting}
              />
            </div>

            {formMessage && (
              <div
                className={`rounded-md border px-4 py-3 text-sm leading-relaxed ${
                  formMessage.type === "success"
                    ? "border-accent/20 bg-accent/5 text-ink"
                    : "border-destructive/20 bg-destructive/5 text-destructive"
                }`}
                role={formMessage.type === "error" ? "alert" : "status"}
              >
                {formMessage.text}
              </div>
            )}

            <Button type="submit" disabled={submitting} className="h-11 w-full bg-accent text-accent-foreground hover:bg-accent/90">
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending request...
                </>
              ) : (
                "Get developer profiles"
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">By submitting, you agree to our NDA-first process. No spam.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

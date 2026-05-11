import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { getEmailErrorMessage, sendContactEmails } from "@/lib/emailService";

interface LeadFormProps {
  className?: string;
  compact?: boolean;
  source?: string;
  submitLabel?: string;
  trustText?: string;
}

interface LeadFormValues {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialValues: LeadFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = (values: LeadFormValues) => {
  if (!values.name) return "Please enter your name.";
  if (!values.email) return "Please enter your work email.";
  if (!emailPattern.test(values.email)) return "Please enter a valid email address.";
  if (!values.message) return "Please share a short project brief.";
  return "";
};

export const LeadForm = ({
  className,
  compact = false,
  source = "Landing contact form",
  submitLabel = "Get developer profiles",
  trustText = "By submitting, you agree to our NDA-first process. No spam.",
}: LeadFormProps) => {
  const formId = source.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const updateValue = (field: keyof LeadFormValues, value: string) => {
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
    <form onSubmit={onSubmit} noValidate className={cn("rounded-lg border border-border bg-card p-6 md:p-8", className)}>
      <div className={cn("grid", compact ? "gap-4" : "gap-5")}>
        <div className="grid gap-2">
          <Label htmlFor={`${formId}-name`}>Name</Label>
          <Input
            id={`${formId}-name`}
            name="name"
            required
            value={values.name}
            onChange={(e) => updateValue("name", e.target.value)}
            placeholder="Your full name"
            autoComplete="name"
            disabled={submitting}
            className={compact ? "h-10" : undefined}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${formId}-email`}>Work email</Label>
          <Input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => updateValue("email", e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
            disabled={submitting}
            className={compact ? "h-10" : undefined}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${formId}-company`}>Company</Label>
          <Input
            id={`${formId}-company`}
            name="company"
            value={values.company}
            onChange={(e) => updateValue("company", e.target.value)}
            placeholder="Company name (optional)"
            autoComplete="organization"
            disabled={submitting}
            className={compact ? "h-10" : undefined}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${formId}-message`}>Project brief</Label>
          <Textarea
            id={`${formId}-message`}
            name="message"
            required
            rows={compact ? 4 : 5}
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
            submitLabel
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground">{trustText}</p>
      </div>
    </form>
  );
};

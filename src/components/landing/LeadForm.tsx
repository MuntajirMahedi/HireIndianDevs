import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { getEmailErrorMessage, sendContactEmails } from "@/lib/emailService";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  "Web Development",
  "SaaS Development",
  "Enterprise Software",
  "eCommerce Development",
  "Mobile App Development",
  "UI/UX Design",
  "API Integration",
  "CRM/ERP Systems",
  "AI Solutions",
  "Custom Software Development",
  "Maintenance & Support",
  "Other",
];

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
  service: string;
  message: string;
}

const initialValues: LeadFormValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = (values: LeadFormValues) => {
  if (!values.name) return "Please enter your name.";
  if (!values.email) return "Please enter your work email.";
  if (!emailPattern.test(values.email)) return "Please enter a valid email address.";
  if (!values.service) return "Please select a service.";
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
      service: values.service,
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
      <div className={cn("grid", compact ? "gap-3.5" : "gap-5")}>
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
            className={compact ? "h-10 text-sm" : undefined}
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
            className={compact ? "h-10 text-sm" : undefined}
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
            className={compact ? "h-10 text-sm" : undefined}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${formId}-service`}>Service Required</Label>
          <Select
            value={values.service}
            onValueChange={(value) => updateValue("service", value)}
            disabled={submitting}
          >
            <SelectTrigger
              id={`${formId}-service`}
              className={cn(
                "w-full bg-background border-border",
                compact ? "h-10 text-sm" : "h-11",
                !values.service && "text-muted-foreground"
              )}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {services.map((service) => (
                <SelectItem key={service} value={service} className="focus:bg-accent focus:text-accent-foreground cursor-pointer">
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${formId}-message`}>Project brief</Label>
          <Textarea
            id={`${formId}-message`}
            name="message"
            required
            rows={compact ? 3 : 5}
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

        <Button
          type="submit"
          disabled={submitting}
          className={cn("w-full bg-accent text-accent-foreground hover:bg-accent/90", compact ? "h-10" : "h-11")}
        >
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

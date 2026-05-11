import { FormEvent, useState } from "react";
import { Loader2, User, Mail, Building2, MessageSquare, Settings, ArrowRight } from "lucide-react";
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
  trustText = "By submitting, you agree to our NDA-first process.",
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
    <form onSubmit={onSubmit} noValidate className={cn("rounded-3xl border border-border bg-card p-6 md:p-8 shadow-xl", className)}>
      <div className={cn("grid", compact ? "gap-4" : "gap-6")}>
        <div className="grid gap-2">
          <Label htmlFor={`${formId}-name`} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
            <Input
              id={`${formId}-name`}
              name="name"
              required
              value={values.name}
              onChange={(e) => updateValue("name", e.target.value)}
              placeholder="e.g. John Doe"
              autoComplete="name"
              disabled={submitting}
              className={cn("pl-10 rounded-xl border-border bg-background/50 focus:bg-background transition-all", compact ? "h-11 text-sm" : "h-12")}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor={`${formId}-email`} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Work Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
            <Input
              id={`${formId}-email`}
              name="email"
              type="email"
              required
              value={values.email}
              onChange={(e) => updateValue("email", e.target.value)}
              placeholder="e.g. john@company.com"
              autoComplete="email"
              disabled={submitting}
              className={cn("pl-10 rounded-xl border-border bg-background/50 focus:bg-background transition-all", compact ? "h-11 text-sm" : "h-12")}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor={`${formId}-company`} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Company Name</Label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
            <Input
              id={`${formId}-company`}
              name="company"
              value={values.company}
              onChange={(e) => updateValue("company", e.target.value)}
              placeholder="e.g. Acme Inc (Optional)"
              autoComplete="organization"
              disabled={submitting}
              className={cn("pl-10 rounded-xl border-border bg-background/50 focus:bg-background transition-all", compact ? "h-11 text-sm" : "h-12")}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor={`${formId}-service`} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Service Required</Label>
          <div className="relative">
            <Settings className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50 z-10" />
            <Select
              value={values.service}
              onValueChange={(value) => updateValue("service", value)}
              disabled={submitting}
            >
              <SelectTrigger
                id={`${formId}-service`}
                className={cn(
                  "pl-10 rounded-xl border-border bg-background/50 focus:bg-background transition-all",
                  compact ? "h-11 text-sm" : "h-12",
                  !values.service && "text-muted-foreground"
                )}
              >
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border rounded-xl shadow-2xl">
                {services.map((service) => (
                  <SelectItem key={service} value={service} className="focus:bg-accent focus:text-accent-foreground cursor-pointer rounded-lg mx-1 my-0.5">
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor={`${formId}-message`} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Project Brief</Label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-muted-foreground/50" />
            <Textarea
              id={`${formId}-message`}
              name="message"
              required
              rows={compact ? 3 : 4}
              value={values.message}
              onChange={(e) => updateValue("message", e.target.value)}
              placeholder="Tell us about your project, tech stack, and goals..."
              disabled={submitting}
              className="pl-10 rounded-xl border-border bg-background/50 focus:bg-background transition-all resize-none"
            />
          </div>
        </div>

        {formMessage && (
          <div
            className={cn(
              "rounded-xl border px-4 py-3 text-[13px] font-medium leading-relaxed animate-in fade-in zoom-in-95",
              formMessage.type === "success"
                ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-700"
                : "border-destructive/20 bg-destructive/5 text-destructive"
            )}
          >
            {formMessage.text}
          </div>
        )}

        <Button
          type="submit"
          disabled={submitting}
          className={cn("w-full rounded-xl bg-accent text-white font-bold tracking-tight shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all hover:scale-[1.01] active:scale-[0.99]", compact ? "h-12" : "h-14")}
        >
          {submitting ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {submitLabel}
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </Button>
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground/60">{trustText}</p>
      </div>
    </form>
  );
};

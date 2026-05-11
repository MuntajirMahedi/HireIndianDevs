import emailjs from "@emailjs/browser";

export interface ContactEmailPayload {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  time: string;
}

const emailConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  adminTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  thankYouTemplateId: import.meta.env.VITE_EMAILJS_THANKYOU_TEMPLATE_ID,
};

const requiredConfig = Object.entries(emailConfig).filter(([, value]) => !value);

export const isEmailConfigured = requiredConfig.length === 0;

export const sendContactEmails = async (payload: ContactEmailPayload) => {
  if (!isEmailConfigured) {
    throw new Error("Email service is not configured.");
  }

  const templateParams = {
    name: payload.name,
    email: payload.email,
    company: payload.company,
    service: payload.service,
    message: payload.message,
    time: payload.time,
  };

  await emailjs.send(emailConfig.serviceId, emailConfig.adminTemplateId, templateParams, {
    publicKey: emailConfig.publicKey,
  });

  await emailjs.send(emailConfig.serviceId, emailConfig.thankYouTemplateId, templateParams, {
    publicKey: emailConfig.publicKey,
  });
};

export const getEmailErrorMessage = (error: unknown) => {
  if (error instanceof Error && error.message === "Email service is not configured.") {
    return "Email service is not configured yet. Please try again later.";
  }

  if (typeof navigator !== "undefined" && !navigator.onLine) {
    return "You appear to be offline. Please check your connection and try again.";
  }

  return "We could not send your request right now. Please try again in a moment.";
};

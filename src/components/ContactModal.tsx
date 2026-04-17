import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

type NoticeState = {
  type: "success" | "error";
  message: string;
} | null;

const INITIAL_FORM_STATE: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

const ContactModal = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [isSending, setIsSending] = useState(false);
  const [notice, setNotice] = useState<NoticeState>(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
  const recipientEmail = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL?.trim();
  const emailConfigReady = Boolean(serviceId && templateId && publicKey && recipientEmail);

  const updateField =
    (field: keyof ContactFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const canSubmit =
    emailConfigReady &&
    !isSending &&
    form.name.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.message.trim().length > 0;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(null);

    if (!emailConfigReady) {
      setNotice({
        type: "error",
        message:
          "Email sending is not configured yet. Add EmailJS env keys and your client Gmail address first.",
      });
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        serviceId!,
        templateId!,
        {
          to_email: recipientEmail,
          recipient_email: recipientEmail,
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "Not provided",
          company: form.company || "Not provided",
          subject: form.subject || "New contact from portfolio website",
          message: form.message,
          reply_to: form.email,
          sent_at: new Date().toISOString(),
        },
        publicKey!,
      );

      setNotice({
        type: "success",
        message: `Message sent successfully. Your client will receive it at ${recipientEmail}.`,
      });
      setForm(INITIAL_FORM_STATE);
    } catch (error) {
      const detail = error instanceof Error ? error.message : "Unknown error";
      setNotice({
        type: "error",
        message: `Message could not be sent. ${detail}`,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) {
          setNotice(null);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="h-11 rounded-sm bg-accent px-5 text-sm font-semibold uppercase tracking-[0.12em] text-accent-foreground hover:bg-accent/90">
          Send Message
          <Send className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[92vh] overflow-y-auto border-border/70 bg-card/95 p-0 backdrop-blur-xl sm:max-w-2xl sm:rounded-sm">
        <div className="p-6 md:p-7">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-semibold">Contact Form</DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              Fill in your details and this will email your client inbox directly via Gmail.
            </DialogDescription>
          </DialogHeader>

          {!emailConfigReady && (
            <div className="mt-5 rounded-sm border border-amber-400/35 bg-amber-300/10 p-3 text-sm leading-relaxed text-amber-100">
              Missing configuration: set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID,
              VITE_EMAILJS_PUBLIC_KEY, and VITE_CONTACT_RECEIVER_EMAIL.
            </div>
          )}

          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Full Name</Label>
                <Input
                  id="contact-name"
                  value={form.name}
                  onChange={updateField("name")}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={updateField("email")}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Phone</Label>
                <Input
                  id="contact-phone"
                  value={form.phone}
                  onChange={updateField("phone")}
                  placeholder="+1 555 0100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-company">Company</Label>
                <Input
                  id="contact-company"
                  value={form.company}
                  onChange={updateField("company")}
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-subject">Subject</Label>
              <Input
                id="contact-subject"
                value={form.subject}
                onChange={updateField("subject")}
                placeholder="How can we help?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                value={form.message}
                onChange={updateField("message")}
                placeholder="Write your message here..."
                className="min-h-[140px]"
                required
              />
            </div>

            {notice && (
              <div
                className={cn(
                  "rounded-sm border p-3 text-sm leading-relaxed",
                  notice.type === "success"
                    ? "border-emerald-400/35 bg-emerald-300/10 text-emerald-100"
                    : "border-red-400/35 bg-red-300/10 text-red-100",
                )}
              >
                {notice.message}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground/80">
                Delivery: Gmail inbox
              </p>
              <Button type="submit" disabled={!canSubmit} className="h-11 rounded-sm px-5">
                {isSending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Send Email
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;

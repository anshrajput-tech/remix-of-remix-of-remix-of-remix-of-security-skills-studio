import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { courses } from "@/data/site";
import { enquirySchema, submitEnquiry } from "@/lib/enquiry.functions";

const interests = [
  "Training Programs",
  "Certifications",
  "Corporate Training",
  "VAPT / Penetration Testing",
  "Managed Security",
  "GRC & Compliance",
  "General Inquiry",
];

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function EnquiryForm({ defaultCourse }: { defaultCourse?: string }) {
  const send = useServerFn(submitEnquiry);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = enquirySchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await send({ data: parsed.data });
      setStatus("done");
      form.reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-lg border border-border bg-secondary p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-3 text-xl font-bold">Thank you for your enquiry</h3>
        <p className="mt-2 text-muted-foreground">Our team has received your details and will contact you.</p>
        <Button variant="outline" className="mt-5" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  const field = (name: string) =>
    errors[name] ? <p className="mt-1 text-sm text-destructive">{errors[name]}</p> : null;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <div>
        <Label htmlFor="name">Full name *</Label>
        <Input id="name" name="name" autoComplete="name" className="mt-1.5" />
        {field("name")}
      </div>
      <div>
        <Label htmlFor="phone">Phone *</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" className="mt-1.5" />
        {field("phone")}
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" autoComplete="email" className="mt-1.5" />
        {field("email")}
      </div>
      <div>
        <Label htmlFor="interest">I am enquiring about *</Label>
        <select id="interest" name="interest" className={`${selectClass} mt-1.5`} defaultValue="Training Programs">
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="course">Course (optional)</Label>
        <select id="course" name="course" className={`${selectClass} mt-1.5`} defaultValue={defaultCourse ?? ""}>
          <option value="">Not sure yet</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.title}>
              {c.title}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={4} className="mt-1.5" />
        {field("message")}
      </div>
      {status === "error" && <p className="text-sm text-destructive sm:col-span-2">{serverError}</p>}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}

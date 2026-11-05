import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .regex(/^[+0-9 ()-]{7,20}$/, "Please enter a valid phone number"),
  interest: z.string().trim().min(1).max(100),
  course: z.string().trim().max(200).optional(),
  message: z.string().trim().max(1000).optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("enquiries").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      interest: data.interest,
      course: data.course || null,
      message: data.message || null,
    });
    if (error) {
      console.error("enquiry insert failed", error);
      throw new Error("Could not send your enquiry. Please call us instead.");
    }
    return { ok: true };
  });

import { z } from "zod";

export const contactFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid Email Address" }),
  message: z.string().min(10, {
    message: "Please make sure your message is at least 10 characters long.",
  }),
});

export type ContactFormState = {
  values: z.infer<typeof contactFormSchema>;
  errors:
    | null
    | (Partial<Record<keyof z.infer<typeof contactFormSchema>, string[]>> & {
        _form?: string[];
      });
  success: boolean;
};

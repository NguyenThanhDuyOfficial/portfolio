"use server";

import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { sendMail } from "@/lib/sendMail";
import { headers } from "next/headers";
import {
  contactFormSchema,
  type ContactFormState,
} from "@/schemas/contact.schema";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "60 s"),
});

export async function contactFormAction(
  _prevState: ContactFormState,
  formData: FormData,
) {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0] ??
    headersList.get("x-real-ip") ??
    "anonymous";

  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return {
      values: {
        email: (formData.get("email") as string) || "",
        message: (formData.get("message") as string) || "",
      },
      success: false,
      errors: {
        _form: ["Too many requests. Please try again later."],
      },
    };
  }
  const values = {
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const result = contactFormSchema.safeParse(values);

  if (!result.success) {
    return {
      values,
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }
  const mailText = `Email: ${values.email}\nMessage: ${values.message}`;
  await sendMail({
    email: values.email,
    subject: "New Contact Us Form",
    text: mailText,
  });

  return {
    values: {
      email: "",
      message: "",
    },
    errors: null,
    success: true,
  };
}

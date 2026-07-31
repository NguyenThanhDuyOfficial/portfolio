"use server";

import { sendMail } from "@/lib/sendMail";
import {
  contactFormSchema,
  type ContactFormState,
} from "@/schemas/contact.schema";
import { sources } from "next/dist/compiled/webpack/webpack";

export async function contactFormAction(
  _prevState: ContactFormState,
  formData: FormData,
) {
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

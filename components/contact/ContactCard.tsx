"use client";

import { useActionState, useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import SocialLinks from "../ui/socialLinks";
import Form from "next/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  contactFormSchema,
  type ContactFormState,
} from "@/schemas/contact.schema";
import { contactFormAction } from "@/app/actions";
import { Field, FieldError, FieldGroup } from "../ui/field";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ContactCard({
  isOpen = true,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const [formState, formAction, pending] = useActionState<
    ContactFormState,
    FormData
  >(contactFormAction, {
    values: {
      email: "",
      message: "",
    },
    errors: null,
    success: false,
  });

  const [messageLength, setMessageLength] = useState(0);

  useEffect(() => {
    if (formState.success) {
      toast("Thank you for your letter", {
        description: "I'll review your letter and get back to you soon.",
      });
    }
  }, [formState.success]);

  useEffect(() => {
    setMessageLength(formState.values.message.length);
  }, [formState.values.message]);

  if (!isOpen) return null;
  return (
    <div className="min-h-screen fixed inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm z-99">
      <Card className="w-full md:w-fit md:min-w-120 min-h-120 bg-(--bg) p-4 md:p-8 flex flex-col gap-4 rounded-xl ">
        <CardHeader className="flex justify-between">
          <CardTitle className="text-2xl">Work With Me</CardTitle>
          <Button
            onClick={() => onClose?.()}
            variant="ghost"
            className="hover:text-(--bg)"
          >
            <X />
          </Button>
        </CardHeader>
        <CardContent className="flex-1">
          <Form
            action={formAction}
            id="contact-form"
            className="w-full h-full flex flex-col gap-4"
          >
            <FieldGroup className="h-full flex">
              <Field
                data-invalid={!!formState.errors?.message?.length}
                className="flex-1"
                data-disabled={pending}
              >
                <Textarea
                  id="message"
                  name="message"
                  disabled={pending}
                  rows={4}
                  required
                  defaultValue={formState.values.message}
                  placeholder="Tell me about your story...."
                  className="overflow-auto h-full p-4 border-(--border) border rounded-lg w-full placeholder:text-sm"
                ></Textarea>
                {formState.errors?.message && (
                  <FieldError>{formState.errors.message[0]}</FieldError>
                )}
              </Field>
              <Field
                data-invalid={!!formState.errors?.email?.length}
                data-disabled={pending}
              >
                <Input
                  id="email"
                  name="email"
                  defaultValue={formState.values.email}
                  disabled={pending}
                  required
                  placeholder="Type your email address so i can reply..."
                  className="p-4 py-6 border-(--border) border rounded-lg w-full placeholder:text-sm"
                />

                {formState.errors?.email && (
                  <FieldError>{formState.errors.email[0]}</FieldError>
                )}
              </Field>
            </FieldGroup>
          </Form>
        </CardContent>
        <CardFooter className="bg-(--bg) pb-8 border-0">
          <Field orientation="horizontal">
            <Button
              type="submit"
              form="contact-form"
              size="lg"
              className="bg-(--secondary) h-12 p-4 px-8"
              disabled={pending}
            >
              {pending ? "Sending..." : "Send"}
            </Button>
            <div className="flex-1 flex justify-center items-center">
              <SocialLinks />
            </div>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}

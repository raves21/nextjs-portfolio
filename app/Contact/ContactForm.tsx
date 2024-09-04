"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(1, { message: "This field is required." }),
  email: z
    .string()
    .min(1, { message: "This field is required." })
    .email({ message: "Invalid e-mail address." }),
  message: z.string().min(1, { message: "This field is required." }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isSendingEmail, setisSendingEmail] = useState(false);
  const [isSendEmailError, setIsSendEmailError] = useState(false);
  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    setisSendingEmail(true);

    emailjs
      .send("service_cjyaq4e", "template_5y0e60c", values, {
        publicKey: "xXmMKPie8SWrHCo8t",
      })
      .then(
        () => {
          form.reset();
          toast({
            className: "bg-green-500 text-mainWhite",
            title: "Message Sent!",
            description: "Your message was successfully sent.",
          });
        },
        (error) => {
          setIsSendEmailError(true);
          console.log("ERROR: ", error);
          toast({
            className: "text-mainWhite",
            variant: "destructive",
            title: "Uh oh, something went wrong.",
            description:
              "There was a problem sending the email, please try again later.",
          });
        }
      )
      .finally(() => {
        setisSendingEmail(false);
      });
  }

  return (
    <div className="flex flex-col gap-4 flex-grow">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between">
                  <p>
                    Name <span className="text-red-500">*</span>
                  </p>
                  <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-800 text-mainWhite border-none"
                    placeholder="Name of Sender/Company"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between">
                  <p>
                    Email <span className="text-red-500">*</span>
                  </p>
                  <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    className="bg-gray-800 text-mainWhite border-none"
                    placeholder="johndoe@email.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between">
                  <p>
                    Message <span className="text-red-500">*</span>
                  </p>
                  <FormMessage />
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-gray-800 text-mainWhite border-none h-44"
                    placeholder="Input message here..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
          <button
            disabled={isSendingEmail}
            type="submit"
            className="w-full disabled:bg-gray-800 hover:bg-mainAccent disabled:hover:bg-gray-800 disabled:hover:text-mainWhite hover:text-mainDarkBg flex justify-center items-center py-2 outline outline-1 outline-mainAccent rounded-lg text-mainWhite"
          >
            {isSendingEmail ? "Submitting..." : "Submit"}
          </button>
        </form>
      </Form>
    </div>
  );
}

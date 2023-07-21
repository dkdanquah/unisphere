"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { MDX } from "./markdown/mdx";

const FormSchema = z.object({
  comments: z.string().min(3, {
    message: "Comments must be at least 3 characters.",
  }),
});

export default function Comments() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <section className="mx-auto mt-24 max-w-3xl">
      <div className="">
        <p className="mb-2 text-sm font-semibold text-primary">Comments</p>
        <MDX placeholder="What are your thoughts?" />
        <Button variant="blue" className="mt-2">
          Post comment
        </Button>
      </div>

      {/* actual comments */}
      <article className="mb-6 mt-12 rounded-lg bg-white p-6 text-base dark:bg-zinc-900">
        <footer className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <p className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
              <img
                className="mr-2 h-6 w-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />
              Michael Gough
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                July 13, 2023
              </time>
            </p>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers. The knowledge
          of the design tools are as important as the creation of the design
          strategy.
        </p>
      </article>

      <article className="mb-6 ml-6 rounded-lg bg-white p-6 text-base dark:bg-zinc-900 lg:ml-12">
        <footer className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <p className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
              <img
                className="mr-2 h-6 w-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese Leos"
              />
              Jese Leos
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-02-12" title="February 12th, 2022">
                July 16, 2023
              </time>
            </p>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          Much appreciated! Glad you liked it ☺️
        </p>
      </article>

      <article className="mb-6 rounded-lg bg-white p-6 text-base dark:border-zinc-900 dark:bg-zinc-900">
        <footer className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <p className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
              <img
                className="mr-2 h-6 w-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie Green"
              />
              Bonnie Green
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-03-12" title="March 12th, 2022">
                July 22, 2023
              </time>
            </p>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          The article covers the essentials, challenges, myths and stages the UX
          designer should consider while creating the design strategy.
        </p>
      </article>

      <article className="rounded-lg bg-white p-6 text-base dark:border-zinc-900 dark:bg-zinc-900">
        <footer className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <p className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
              <img
                className="mr-2 h-6 w-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                alt="Helene Engels"
              />
              Helene Engels
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-06-23" title="June 23rd, 2022">
                July 31, 2023
              </time>
            </p>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          Thanks for sharing this. I do came from the Backend development and
          explored some of the tools to design my Side Projects.
        </p>
      </article>
    </section>
  );
}

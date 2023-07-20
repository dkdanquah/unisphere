"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import { CalendarDateRangePicker } from "@/components/range-picker";
import { MDX } from "@/components/markdown/mdx";

const FormSchema = z.object({
  title: z.string().min(7, {
    message: "Title must be at least 7 characters.",
  }),
  description: z.string().min(7, {
    message: "Description must be at least 7 characters.",
  }),
  tags: z.string().min(7, {
    message: "Tags must be at least 3 characters.",
  }),
  // date: z.date({
  //   required_error: "You must specify dates for the event.",
  // }),
  // file: z.string().min(3, {
  //   message: "You must upload a cover image",
  // }),
  // content: z.string().min(3, {
  //   message: "Content must be at least 10 characters.",
  // }),
});

export default function Page() {
  const [file, setFile] = useState<string>("");
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

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    // @ts-ignore
    setFile(URL.createObjectURL(e!.target!.files[0]));
  }

  return (
    <section className="flex flex-col justify-between p-2">
      <div className="py-6">
        <div className="flex items-center">
          <h1 className="leading-tighter text-3xl font-extrabold tracking-tighter text-zinc-700 dark:text-zinc-100 md:text-4xl">
            Create a new event
          </h1>
        </div>
        <div className="mt-1 max-w-7xl">
          <p className="mb-8 text-lg text-muted-foreground"></p>
          <div className="my-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="My awesome title..." {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the title of your event
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="My awesome description..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the description of your event
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags</FormLabel>
                      <FormControl>
                        <Input placeholder="school,src,fun,games" {...field} />
                      </FormControl>
                      <FormDescription>
                        A comma-separated list of tags
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <CalendarDateRangePicker />
                      </FormControl>
                      <FormDescription>Event dates</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <div className="">
                  <FormLabel>Date</FormLabel>
                  <div className="mt-2">
                    <CalendarDateRangePicker />
                  </div>
                </div>

                {/* <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cover image</FormLabel>
                      <FormControl>
                        <Input
                          id="picture"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the cover image of your event
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <div className="">
                  <FormLabel>Cover Image</FormLabel>
                  <Input
                    id="picture"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-2"
                  />
                  <FormDescription className="mt-2">
                    This is the cover image of your article
                  </FormDescription>
                </div>

                <Image
                  src={file ?? (file as string)}
                  alt="cover"
                  className="h-44 w-full object-cover"
                  width={176}
                  height={500}
                />

                <div className="">
                  <FormLabel>Content</FormLabel>
                  <div className="mt-2">
                    <MDX />
                  </div>
                </div>
                <Button type="submit" variant="secondary" className="w-full">
                  Create new event
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

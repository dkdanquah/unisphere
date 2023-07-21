"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

import { Icons } from "./icons";
import Link from "next/link";
import { CardProps } from "@/lib/types";

export default function Card({
  title,
  description,
  date,
  coverImage,
  author,
  authorImage,
  slug,
}: CardProps) {
  const pathname = usePathname();
  return (
    <div className="rounded-md border p-3 shadow">
      <Image
        src={coverImage}
        alt="article showcase"
        width={400}
        height={224}
        className="h-56 w-full rounded object-cover"
      />
      <h4 className="pt-3 text-lg font-bold text-zinc-700 dark:text-zinc-100">
        {title}
      </h4>
      <p className="min-h-[96px] py-3 text-muted-foreground">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icons.calendar className="h-4 w-4 text-zinc-500" />{" "}
          <span className="pl-2 text-xs">{new Date(date).toDateString()}</span>
        </div>
        {/* <div className="flex items-center">
          <Icons.eye className="h-4 w-4 text-zinc-500" />{" "}
          <span className="pl-2 text-xs">22 views</span>
        </div> */}
        <div className="flex items-center">
          <Image
            src={authorImage}
            alt="author"
            width={16}
            height={16}
            className="h-4 w-4 rounded-full object-cover"
          />
          <span className="pl-2 text-xs">{author}</span>
        </div>
      </div>
      <Link href={`/${slug}`}>
        <Button className="mt-3 w-full">
          {pathname.includes("articles") ? "Read" : "View"}
        </Button>
      </Link>
    </div>
  );
}

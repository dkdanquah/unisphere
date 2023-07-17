import Image from "next/image";
import { Button } from "./ui/button";

import demo1 from "@/public/images/demo1.jpg";
import demo2 from "@/public/images/demo2.jpg";
import { Icons } from "./icons";
import Link from "next/link";

export default function Card() {
  return (
    <div className="rounded-md border p-3 shadow">
      <Image
        src={demo1}
        alt="artilce showcase"
        width={400}
        className="h-56 w-full rounded object-cover"
      />
      <h4 className="pt-3 text-lg font-bold text-zinc-700">
        The Art Of Programming
      </h4>
      <p className="py-3 text-muted-foreground">
        Dive into a world of knowledge, inspiration, and intellectual growth
        through our captivating collection of articles.
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icons.calendar className="h-4 w-4 text-zinc-500" />{" "}
          <span className="pl-2 text-xs">13th July 2023</span>
        </div>
        {/* <div className="flex items-center">
          <Icons.eye className="h-4 w-4 text-zinc-500" />{" "}
          <span className="pl-2 text-xs">22 views</span>
        </div> */}
        <div className="flex items-center">
          <Image
            src={demo2}
            alt="artilce showcase"
            width={16}
            className="h-4 w-4 rounded-full object-cover"
          />
          <span className="pl-2 text-xs">Jason Adarkwah</span>
        </div>
      </div>
      <Link href={"/events/src-2023"}>
        <Button className="mt-3 w-full">Read</Button>
      </Link>
    </div>
  );
}

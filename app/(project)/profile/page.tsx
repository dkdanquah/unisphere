"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Card from "@/components/card";
import Listview from "@/components/listview";
import { articles, events } from "@/lib/data";

import { signOut, useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <section>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center py-24">
        <Image
          src={session?.user?.image as string}
          alt="artilce showcase"
          width={1000}
          height={192}
          className="h-48 w-48 rounded-full object-cover ring ring-zinc-300"
        />
        <h4 className="my-2 text-center text-2xl font-medium text-zinc-600 dark:text-zinc-100">
          {session?.user?.name}
        </h4>
        <p className="mb-2 text-muted-foreground">{session?.user?.email}</p>
        <Button
          variant="destructive"
          className="w-full max-w-sm"
          onClick={(e) => {
            e.preventDefault();
            signOut({ redirect: true, callbackUrl: "/" });
          }}
        >
          Sign out
        </Button>
      </div>
      {/* user's articles */}
      <h4 className="my-2 mb-4 font-medium">My articles:</h4>
      <Listview>
        <Card
          title={articles[0].title}
          description={articles[0].description}
          date={articles[0].date}
          coverImage={articles[0].coverImage}
          author={session?.user?.name as string}
          authorImage={session?.user?.image as string}
          slug={articles[0].slug}
        />
        <Card
          title={articles[7].title}
          description={articles[7].description}
          date={articles[7].date}
          coverImage={articles[7].coverImage}
          author={session?.user?.name as string}
          authorImage={session?.user?.image as string}
          slug={articles[7].slug}
        />
        <Card
          title={articles[3].title}
          description={articles[3].description}
          date={articles[3].date}
          coverImage={articles[3].coverImage}
          author={session?.user?.name as string}
          authorImage={session?.user?.image as string}
          slug={articles[3].slug}
        />
      </Listview>
      {/* user's articles end */}
      {/* user's events */}
      <h4 className="my-2 mb-4 mt-24 font-medium">My events:</h4>
      <Listview>
        <Card
          title={events[7].title}
          description={events[7].description}
          date={events[7].date}
          coverImage={events[7].coverImage}
          author={session?.user?.name as string}
          authorImage={session?.user?.image as string}
          slug={events[7].slug}
        />
        <Card
          title={events[3].title}
          description={events[3].description}
          date={events[3].date}
          coverImage={events[3].coverImage}
          author={session?.user?.name as string}
          authorImage={session?.user?.image as string}
          slug={events[3].slug}
        />
        <Card
          title={events[0].title}
          description={events[0].description}
          date={events[0].date}
          coverImage={events[0].coverImage}
          author={session?.user?.name as string}
          authorImage={session?.user?.image as string}
          slug={events[0].slug}
        />
      </Listview>
      {/* user's events end */}
    </section>
  );
}

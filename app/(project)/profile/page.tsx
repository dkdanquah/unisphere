"use client";

import React from "react";
import Image from "next/image";
import demo4 from "@/public/images/demo4.jpg";
import { Button } from "@/components/ui/button";
import Card from "@/components/card";
import Listview from "@/components/listview";

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
      <h4 className="my-2 mb-4 font-medium">My articles and events:</h4>
      <Listview>
        {Array(7)
          .fill("")
          .map((_, i) => (
            <Card key={i} />
          ))}
      </Listview>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "./logo";
import { Icons } from "./icons";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const { data: session } = useSession();

  return (
    <header
      className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${
        !top ? "bg-white shadow-lg backdrop-blur-sm dark:bg-zinc-900" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-7">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="mr-4 flex shrink-0 items-center">
            <Link href={"/"}>
              <h1 className="flex items-center font-medium">
                <Logo />
                <span className="ml-2 hidden font-medium md:block">
                  UniSphere
                </span>
              </h1>
            </Link>
            <ul className="ml-1 flex items-center md:ml-3">
              <li>
                <Link href={"/articles"} passHref>
                  <Button variant="link">Articles</Button>
                </Link>
              </li>
              <li>
                <Link href={"/events"} passHref>
                  <Button variant="link">Events</Button>
                </Link>
              </li>
            </ul>
          </div>

          <nav className="">
            <ul className="flex grow flex-wrap items-center justify-end">
              {!session && (
                <>
                  <li className="">
                    <Link href={"/signin"} passHref className="hidden lg:block">
                      <Button variant="ghost">Sign in</Button>
                    </Link>
                  </li>
                </>
              )}
              {session?.user && (
                <>
                  <li className="mr-2 hidden md:flex md:grow">
                    <Link href={"/new-article"} passHref>
                      <Button variant="outline">
                        <Icons.add className="mr-1 h-5 w-5" />
                        Write article
                      </Button>
                    </Link>
                  </li>
                  <li className="mr-2 hidden md:flex md:grow">
                    <Link href={"/new-event"} passHref>
                      <Button variant="outline">
                        <Icons.add className="mr-1 h-5 w-5" />
                        Create event
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/profile"} passHref>
                      <Avatar className="h-8 w-8 ring ring-zinc-300">
                        <AvatarImage src={session.user.image as string} />
                        <AvatarFallback>
                          {session.user.name?.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Link>
                  </li>
                </>
              )}

              <li className="ml-4">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

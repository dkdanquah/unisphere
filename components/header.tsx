"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "./logo";
import { Icons } from "./icons";

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

  return (
    <header
      className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${
        !top ? "bg-white shadow-lg backdrop-blur-sm" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-7">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="mr-4 shrink-0">
            <Link href={"/"}>
              <h1 className="flex items-center font-medium">
                <Logo />
                <span className="hidden md:block">Unisphere</span>
              </h1>
            </Link>
          </div>

          <nav className="">
            <ul className="flex grow flex-wrap items-center justify-end">
              <li className="hidden">
                <Link href={"/signin"} passHref>
                  <Button variant="link">Sign in</Button>
                </Link>
              </li>
              {/* <li className="mr-2 hidden md:flex md:grow">
                <Link href={"/signup"} passHref>
                  <Button>Sign up</Button>
                </Link>
              </li> */}
              <li className="mr-2 hidden md:flex md:grow">
                <Link href={"/signup"} passHref>
                  <Button>
                    <Icons.add className="mr-1 h-5 w-5" />
                    Write article
                  </Button>
                </Link>
              </li>
              <li className="mr-2 hidden md:flex md:grow">
                <Link href={"/signup"} passHref>
                  <Button>
                    <Icons.add className="mr-1 h-5 w-5" />
                    Create event
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/profile"} passHref>
                  <Avatar className="ring ring-zinc-300">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

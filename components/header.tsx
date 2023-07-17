"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./logo";
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
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
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
              <li className="">
                <Button variant="link">Sign in</Button>
              </li>
              <li className="hidden md:flex md:grow">
                <Button>Sign up</Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
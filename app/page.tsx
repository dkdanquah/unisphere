import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="flex min-h-screen flex-col justify-between p-2 pt-24">
        <div className="mx-auto max-w-6xl py-12 text-center sm:pt-44">
          <h1 className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter text-zinc-700 dark:text-zinc-100 md:text-8xl">
            Explore campus at your{" "}
            <span className="inline-block h-28 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text pr-2 text-transparent">
              fingertips
            </span>
          </h1>
          <div className="mx-auto max-w-2xl">
            <p className="mb-8 text-lg text-muted-foreground">
              Unisphere is your go-to online platform that brings the vibrant
              energy and essence of university life right to your fingertips
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <Link href={"/events"} passHref className="w-full">
                <Button variant="blue" className="w-full">
                  Explore events
                </Button>
              </Link>
              <div className="my-2 sm:mx-2"></div>
              <Link href={"/articles"} passHref className="w-full">
                <Button variant="secondary" className="w-full">
                  Read articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="scribble h-72 md:h-36"></div>
      </section>
    </main>
  );
}

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-2 pt-24">
      <div className="mx-auto max-w-6xl py-12 text-center sm:pt-44">
        <h1 className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter text-zinc-700 md:text-8xl">
          Explore events on your{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            fingertips
          </span>
        </h1>
        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-lg text-muted-foreground">
            Unisphere is your go-to online platform that brings the vibrant
            energy and essence of university life right to your fingertips
          </p>
          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
            <Button variant="blue" className="w-full">
              Explore events
            </Button>
            <div className="my-2 sm:mx-2"></div>
            <Button variant="secondary" className="w-full">
              Read articles
            </Button>
          </div>
        </div>
      </div>
      <div className="scribble h-72 md:h-36"></div>
    </main>
  );
}

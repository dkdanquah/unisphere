import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unisphere",
  description: "A community for university students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-7">
        {children}
      </section>
    </main>
  );
}

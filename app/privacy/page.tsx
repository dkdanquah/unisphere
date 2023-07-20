import Image from "next/image";

import demo3 from "@/public/images/demo3.jpg";
import { Icons } from "@/components/icons";
import Header from "@/components/header";

export default function Home() {
  return (
    <section>
      <Header />
      <section className="mx-auto flex max-w-6xl flex-col justify-between py-12 md:p-2 md:py-24">
        <div className="mx-auto py-6">
          <div className="flex items-center justify-start">
            <h1 className="leading-tighter mx-auto text-center text-4xl font-extrabold tracking-tighter text-zinc-700 dark:text-zinc-100 md:text-6xl">
              Privacy Policy
            </h1>
          </div>

          <div className="my-2 flex items-center justify-center">
            <span className="pl-2 text-muted-foreground">
              Updated 21 July 2023
            </span>
          </div>
        </div>
        {/* text content */}
        <div className="mx-auto mt-1 text-lg leading-10 text-muted-foreground sm:px-4">
          <p className="my-5">
            Welcome to Unisphere. We are committed to protecting your privacy
            and safeguarding your personal information. This Privacy Policy
            outlines the types of information we collect, how we use and protect
            that information, and your rights and choices regarding your data.
          </p>
          <h4 className="my-5 text-lg font-medium">
            We may collect the following types of information from users:
          </h4>
          <ul>
            <li className="list-disc">
              Personal Information: This includes data that identifies you as an
              individual or can be reasonably linked to you. Examples of
              personal information we may collect include your name, email
              address, postal address, phone number, and payment information.
            </li>
            <li className="list-disc">
              Non-Personal Information: This includes aggregated and anonymous
              data that does not directly identify you. It may include
              demographic information, device information, browsing history, and
              usage patterns.
            </li>
            <li className="list-disc">
              Cookies and Tracking Technologies: We may use cookies and other
              tracking technologies to collect information about your
              interactions with our Services. These technologies help us analyze
              website usage, customize user experiences, and serve targeted
              advertisements.
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

import Header from "@/components/header";

export default function Home() {
  return (
    <section>
      <Header />
      <section className="mx-auto flex max-w-6xl flex-col justify-between py-12 md:p-2 md:py-24">
        <div className="mx-auto py-6">
          <div className="flex items-center justify-start">
            <h1 className="leading-tighter mx-auto text-center text-4xl font-extrabold tracking-tighter text-zinc-700 dark:text-zinc-100 md:text-6xl">
              Terms and Conditions
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
            Welcome to Unisphere. These Terms and Conditions govern your use of
            our website, mobile applications, products, and services
            (collectively referred to as the Services). By accessing or using
            our Services, you agree to be bound by these Terms. If you do not
            agree with these Terms, please do not use our Services.
          </p>
          <h4 className="my-5 text-lg font-medium">Use of Services:</h4>
          <ul>
            <li className="list-disc">
              Eligibility: You must be at least 18 years old or the age of
              majority in your jurisdiction to use our Services. If you are
              using our Services on behalf of an organization, you represent and
              warrant that you have the authority to bind the organization to
              these Terms.
            </li>
            <li className="list-disc">
              Account Registration: To access certain features of our Services,
              you may need to create an account. You are responsible for
              maintaining the confidentiality of your account credentials and
              agree to notify us immediately of any unauthorized use or
              suspected security breach.
            </li>
            <li className="list-disc">
              User Conduct: You agree to use our Services responsibly and in
              compliance with applicable laws and regulations. You must not
              engage in any activity that may:
              <li className="list-disc">
                Violate any laws or infringe upon the rights of others;
              </li>
              <li className="list-disc">
                Impersonate any person or entity or misrepresent your
                affiliation with any entity;
              </li>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

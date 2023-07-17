import Image from "next/image";
import Listview from "@/components/listview";
import Card from "@/components/card";

import demo3 from "@/public/images/demo3.jpg";
import demo4 from "@/public/images/demo4.jpg";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col justify-between py-24 md:p-2">
      <div className="mx-auto py-6">
        <div className="flex items-center justify-start">
          <h1 className="leading-tighter mx-auto text-center text-4xl font-extrabold tracking-tighter text-zinc-700 md:text-6xl">
            The Art Of Programming
          </h1>
        </div>
        <div className="mx-auto mt-1 max-w-2xl">
          <p className="my-5 text-lg text-muted-foreground md:text-center">
            Dive into a world of knowledge, inspiration, and intellectual growth
            through our captivating collection of articles.
          </p>
        </div>
        <div className="mx-auto mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-center">
          <div className="flex items-center">
            <Icons.calendar className="h-4 w-4 text-zinc-500" />
            <span className="pl-2 text-muted-foreground">13th July 2023</span>
          </div>
          <div className="h-1 sm:w-12"></div>
          <div className="flex items-center sm:justify-center">
            <Icons.user className="h-4 w-4 text-zinc-500" />
            <span className="pl-2 text-muted-foreground">Jason Adarkwah</span>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src={demo3}
          alt="artilce showcase"
          width={9000}
          className="w-full rounded object-cover"
        />
      </div>
      {/* text content */}
      <div className="mx-auto mt-1 text-lg leading-10 text-muted-foreground sm:px-4">
        <p className="my-5">
          In today's digital age, coding has emerged as a remarkable fusion of
          art and technology. Beyond the lines of code lies a realm of creative
          expression, problem-solving, and innovation. The art of coding is not
          merely about writing instructions for computers; it is a canvas where
          ideas come to life, enabling us to shape the future and build
          transformative solutions. Let's delve into the fascinating world of
          coding and explore its inherent artistic nature. Coding is akin to an
          artist's palette, offering endless possibilities for creativity. Just
          like a painter selects colors and strokes to create a masterpiece, a
          coder chooses programming languages, algorithms, and data structures
          to build elegant and efficient solutions. The ability to think
          critically, imagine abstract concepts, and transform them into
          functioning programs is the essence of coding as an art form.
        </p>
        <p className="my-5">
          Similar to composing a symphony, coding demands a harmonious balance
          of logic and structure. Each line of code serves a purpose,
          contributing to the overall composition of the program. Just as a
          musician arranges notes and melodies, a coder arranges functions,
          loops, and conditional statements to orchestrate a program that
          performs with precision and efficiency. Coding is not limited to
          technical functionality; it also encompasses the art of creating
          captivating user experiences. Web and app developers craft intuitive
          interfaces, seamless interactions, and visually appealing designs that
          engage users on a deeper level. Through coding, they sculpt virtual
          experiences, guiding users through a digital journey that is both
          visually pleasing and functionally seamless.
        </p>
        <p className="my-5">
          The Art of Problem-Solving: Coding is inherently problem-solving at
          its core. It challenges us to break down complex problems into
          manageable pieces and devise elegant solutions. Just as an artist may
          encounter obstacles during the creative process, coders face
          challenges that require out-of-the-box thinking and resourcefulness.
          They explore different approaches, experiment with ideas, and persist
          until they uncover the most effective solution, much like an artist
          refining their work until it's just right. Embracing Collaboration and
          Community: The art of coding thrives in a vibrant and collaborative
          community. Programmers share knowledge, exchange ideas, and contribute
          to open-source projects, collectively pushing the boundaries of what
          is possible. Collaboration breeds innovation, as diverse perspectives
          and skill sets merge to create something greater than the sum of its
          parts. In this dynamic ecosystem, coding transcends individual
          expression and becomes a collective effort to advance technology and
          improve the world around us.
        </p>
      </div>
    </section>
  );
}

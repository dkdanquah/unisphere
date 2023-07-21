import Listview from "@/components/listview";
import Card from "@/components/card";
import { SearchField } from "@/components/search";
import { events } from "@/lib/data";
import { CardProps } from "@/lib/types";

export default function Home() {
  return (
    <section className="flex flex-col justify-between p-2">
      <div className="py-6">
        <div className="flex items-center">
          <h1 className="leading-tighter text-3xl font-extrabold tracking-tighter text-zinc-700 dark:text-zinc-100 md:text-4xl">
            Explore events
          </h1>
        </div>
        <div className="mt-1 max-w-2xl">
          <p className="mb-8 text-lg text-muted-foreground">
            Experience the pulse of campus life through our exciting and diverse
            events. Discover, engage, and participate in a wide range of
            activities.
          </p>
          <div className="my-4">
            <SearchField />
          </div>
        </div>
      </div>
      <Listview>
        {events.map((e: CardProps, i) => (
          <Card
            key={e.slug}
            title={e.title}
            description={e.description}
            date={e.date}
            coverImage={e.coverImage}
            author={e.author}
            authorImage={e.authorImage}
            slug={e.slug}
          />
        ))}
      </Listview>
    </section>
  );
}

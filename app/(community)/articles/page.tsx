import Listview from "@/components/listview";
import Card from "@/components/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col justify-between p-2">
      <div className="py-6">
        <div className="flex items-center">
          <h1 className="leading-tighter text-3xl font-extrabold tracking-tighter text-zinc-700 md:text-4xl">
            Latest articles
          </h1>
          <Badge className="ml-2">22 articles</Badge>
        </div>
        <div className="mt-1 max-w-2xl">
          <p className="mb-8 text-lg text-muted-foreground">
            Dive into a world of knowledge, inspiration, and intellectual growth
            through our captivating collection of articles.
          </p>
        </div>
      </div>
      <Listview>
        {Array(7)
          .fill("")
          .map((_, i) => (
            <Card key={i} />
          ))}
      </Listview>
    </section>
  );
}

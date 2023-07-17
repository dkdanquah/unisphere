import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";

export function SearchField() {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="text"
        placeholder="Search for anything..."
        className="py-5"
      />
      <Button type="submit">
        <Icons.search className="mr-1 h-5 w-5" />
        Search
      </Button>
    </div>
  );
}

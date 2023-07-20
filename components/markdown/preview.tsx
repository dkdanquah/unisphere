"use client";

import { useProcessor } from "./use-processor";

interface Props {
  textValue: string;
}

export function Preview({ textValue }: Props) {
  const Component = useProcessor(textValue);
  return (
    <div className="prose-headings:font-cal prose prose-sm min-h-[30vh] w-full overflow-auto border border-transparent px-1 dark:prose-invert">
      {Component}
    </div>
  );
}

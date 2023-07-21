"use client";

import React from "react";

import { usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Write } from "./write";
import { Preview } from "./preview";
// TODO: TabsList has an interesting tab focus. Need to investigate on it

const defaultText = ``;

export function MDX() {
  const [textValue, setTextValue] = React.useState(defaultText);

  return (
    <Tabs defaultValue="write" className="w-full">
      <TabsList>
        <TabsTrigger value="write">Write</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="write">
        <Write {...{ textValue, setTextValue }} />
      </TabsContent>
      <TabsContent value="preview">
        <Preview {...{ textValue }} />
      </TabsContent>
    </Tabs>
  );
}

import React from "react";

export default function Listview({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
}

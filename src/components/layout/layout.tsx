import * as React from "react";

import { cn } from "@/lib/utils";

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
  pageTitle?: string;
};

export default function Layout({
  className,
  children,
  pageTitle,
}: LayoutProps) {
  return (
    <main
      className={cn(
        "xs:px-8 min-h-screen max-w-[100vw] bg-slate-100 px-4 py-8 font-inter lg:px-10 lg:py-8",
        className,
      )}
    >
      {pageTitle && (
        <h1 className="text-xl font-medium capitalize tracking-tighter text-neutral-950 md:text-4xl">
          {pageTitle}
        </h1>
      )}
      {children}
    </main>
  );
}

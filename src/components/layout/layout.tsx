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
        "font-inter min-h-screen max-w-[100vw] bg-slate-100 p-2 sm:px-6 sm:py-4 md:px-8 md:py-6 lg:px-10 lg:py-8",
        className,
      )}
    >
      {pageTitle && (
        <h1 className="text-4xl capitalize tracking-tighter text-slate-700">
          {pageTitle}
        </h1>
      )}
      {children}
    </main>
  );
}

import * as React from "react";

import { cn } from "@/lib/utils";

import PokeBallIcon from "@/assets/pokeball-icon.png";

type LoaderProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<"img">;

export default function Loader({ className, ...props }: LoaderProps) {
  return (
    <img
      src={PokeBallIcon}
      className={cn("animate-bounce", className)}
      {...props}
    />
  );
}

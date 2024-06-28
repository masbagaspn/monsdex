import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { PokemonTypeVariants } from "@/types";

const pokemonCardTypeVariants = cva(
  "capitalize text-center text-[8px] md:text-[10px] font-medium px-2 py-1 text-neutral-50 rounded",
  {
    variants: {
      type: {
        normal: "bg-neutral-500 text-neutral-100",
        fighting: "bg-orange-500 text-orange-100",
        flying: "bg-sky-500 text-sky-100",
        poison: "bg-purple-500 text-purple-100",
        ground: "bg-amber-800",
        rock: "bg-yellow-800",
        bug: "bg-emerald-500 text-emerald-100",
        ghost: "bg-violet-500 text-violet-100",
        steel: "bg-slate-500 text-slate-100",
        fire: "bg-red-500 text-red-100",
        water: "bg-blue-500 text-blue-100",
        grass: "bg-green-500 text-green-100",
        electric: "bg-yellow-500 text-yellow-100",
        psychic: "bg-pink-500 text-pink-100",
        ice: "bg-cyan-500 text-cyan-100",
        dragon: "bg-indigo-500 text-indigo-100",
        dark: "bg-neutral-800/30",
        fairy: "bg-rose-500 text-rose-100",
        stellar: "bg-teal-500 text-teal-100",
        unknown: "bg-neutral-500 text-neutral-100",
      },
    },
  },
);

type PokemonCardTypeProps = {
  type: (typeof PokemonTypeVariants)[number];
} & React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof pokemonCardTypeVariants>;

export default function PokemonCardType({ type }: PokemonCardTypeProps) {
  return <div className={cn(pokemonCardTypeVariants({ type }))}>{type}</div>;
}

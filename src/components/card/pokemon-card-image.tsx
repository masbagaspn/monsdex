import * as React from "react";

import { getPokemonImageSource, pokemonIdToThreeDigitId } from "@/lib/helper";
import { cn } from "@/lib/utils";

import { PokemonContext } from "@/context/pokemon";

export default function PokemonCardImage() {
  const pokemon = React.useContext(PokemonContext);

  if (!pokemon) return null;

  const type = pokemon.types[0].type.name;

  return (
    <div
      className={cn(
        "relative flex aspect-square h-auto w-24 items-center justify-center rounded-md p-2 md:w-full",
        [
          type === "normal" && "bg-gray-200",
          type === "fighting" && "bg-orange-200",
          type === "flying" && "bg-sky-200",
          type === "poison" && "bg-purple-200",
          type === "ground" && "bg-amber-800/30",
          type === "rock" && "bg-yellow-800/30",
          type === "bug" && "bg-emerald-200",
          type === "ghost" && "bg-violet-200",
          type === "steel" && "bg-slate-200",
          type === "fire" && "bg-red-200",
          type === "water" && "bg-blue-200",
          type === "grass" && "bg-green-200",
          type === "electric" && "bg-yellow-200",
          type === "psychic" && "bg-pink-200",
          type === "ice" && "bg-cyan-200",
          type === "dragon" && "bg-indigo-200",
          type === "dark" && "bg-neutral-800/30",
          type === "fairy" && "bg-rose-200",
          type === "stellar" && "bg-teal-200",
          type === "unknown" && "bg-neutral-200",
        ],
      )}
    >
      <img src={getPokemonImageSource(pokemon.id)} />
      <span className="absolute right-2 top-2 rounded bg-neutral-50 px-1 py-0.5 text-[8px] font-semibold text-neutral-400 md:text-[10px]">
        {pokemonIdToThreeDigitId(pokemon.id)}
      </span>
    </div>
  );
}

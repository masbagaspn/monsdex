import * as React from "react";

import PokemonCardType from "@/components/card/pokemon-card-type";

import { PokemonContext } from "@/context/pokemon";

export default function PokemonCardDetails() {
  const pokemon = React.useContext(PokemonContext);

  if (!pokemon) return null;

  return (
    <div className="flex w-full grow flex-col justify-between gap-2 p-1">
      <h2 className="text-base font-medium capitalize tracking-tight sm:text-sm md:text-base">
        {pokemon.name}
      </h2>
      <div className="grid grid-cols-2 gap-1 md:gap-2">
        {pokemon.types.map((type) => (
          <PokemonCardType
            key={`${pokemon.name}-type-${type.slot}`}
            type={type.type.name}
          />
        ))}
      </div>
    </div>
  );
}

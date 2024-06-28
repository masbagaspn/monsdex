import * as React from "react";
import { useNavigate } from "@tanstack/react-router";

import PokemonCardType from "@/components/card/pokemon-card-type";

import { PokemonContext } from "@/context/pokemon";

export default function PokemonCardDetails() {
  const pokemon = React.useContext(PokemonContext);
  const navigate = useNavigate();

  if (!pokemon) return null;

  return (
    <div className="flex w-full grow flex-col justify-between gap-2 p-1">
      <h2
        onClick={() => navigate({ to: `/pokemon/${pokemon.name}` })}
        className="cursor-pointer text-base font-medium capitalize tracking-tight sm:text-sm md:text-base"
      >
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

import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

import PokemonCardDetails from "@/components/card/pokemon-card-details";
import PokemonCardImage from "@/components/card/pokemon-card-image";
import Loader from "@/components/loader";

import { NamedAPIResource } from "@/types";

import { getPokemonDetailByName } from "@/api";
import { PokemonContext } from "@/context/pokemon";

type PokemonCardProps = {
  className?: string;
  pokemon: NamedAPIResource;
} & React.ComponentPropsWithoutRef<"div">;

const usePokemonDetailQuery = (id: string) => {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonDetailByName(id),
  });
};

export default function PokemonCard({
  className,
  pokemon,
  ...rest
}: PokemonCardProps) {
  const { data, isLoading } = usePokemonDetailQuery(pokemon.name);
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="flex aspect-[2/3] w-full items-center justify-center rounded-lg bg-neutral-50 p-2 shadow-xl">
        <Loader className="h-10 w-10" />
      </div>
    );

  return (
    <PokemonContext.Provider value={data}>
      <div
        key={pokemon.name}
        className={cn(
          "flex w-full cursor-pointer flex-row justify-between gap-2 rounded-lg bg-neutral-50 p-1 shadow-xl md:aspect-[2/3] md:flex-col lg:p-2",
          className,
        )}
        onClick={() => navigate({ to: `/pokemon/${pokemon.name}` })}
        {...rest}
      >
        <PokemonCardImage />
        <PokemonCardDetails />
      </div>
    </PokemonContext.Provider>
  );
}

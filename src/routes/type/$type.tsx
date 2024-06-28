import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

import PokemonCard from "@/components/card/pokemon-card";
import FilterByType from "@/components/filter/type";
import Layout from "@/components/layout/layout";
import Loader from "@/components/loader";

import { NamedAPIResource } from "@/types";

import { getPokemonListByType } from "@/api";

const usePokemonListByTypeQuery = (type: string) => {
  return useQuery({
    queryKey: ["list", "type", type],
    queryFn: () => getPokemonListByType(type),
  });
};

export const Route = createFileRoute("/type/$type")({
  component: PokemonListByType,
});

function PokemonListByType() {
  const params = Route.useParams();
  const { page } = Route.useSearch() as { page: number };
  const { data, isLoading } = usePokemonListByTypeQuery(params.type);

  if (isLoading)
    return (
      <main className="flex min-h-screen max-w-[100vw] items-center justify-center bg-slate-100">
        <Loader className="h-20 w-20" />
      </main>
    );

  const LIMIT = 24;
  const FIRST_OFFSET = ((page ?? 1) - 1) * LIMIT;
  const SECOND_OFFSET = (page ?? 1) * LIMIT;

  const pokemonList = data.pokemon.slice(FIRST_OFFSET, SECOND_OFFSET);

  return (
    <Layout
      className="flex flex-col gap-10"
      pageTitle={`${params.type} Pokemon List`}
    >
      <div className="flex flex-col gap-4">
        <FilterByType />
        <section className="xs:grid xs:grid-cols-2 flex flex-col gap-4 md:grid-cols-4 md:gap-3 lg:grid-cols-6 lg:gap-4">
          {pokemonList.map((data: { pokemon: NamedAPIResource }) => (
            <PokemonCard key={data.pokemon.name} pokemon={data.pokemon} />
          ))}
        </section>
      </div>
      <section className="flex w-full items-center justify-between gap-4">
        <Link
          to={`/type/${params.type}`}
          search={{ page: Number(page ?? 1) - 1 }}
          disabled={page <= 1}
          className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-slate-800 hover:text-slate-500 aria-disabled:text-slate-400 hover:aria-disabled:text-slate-400"
        >
          <ChevronLeftIcon /> Previous Page
        </Link>
        <Link
          to={`/type/${params.type}`}
          search={{ page: Number(page ?? 1) + 1 }}
          disabled={SECOND_OFFSET > data.pokemon.length}
          className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-slate-800 hover:text-slate-500 aria-disabled:text-slate-400 hover:aria-disabled:text-slate-400"
        >
          Next Page <ChevronRightIcon />
        </Link>
      </section>
    </Layout>
  );
}

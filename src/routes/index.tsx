import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

import PokemonCard from "@/components/card/pokemon-card";
import FilterByType from "@/components/filter/type";
import Layout from "@/components/layout/layout";
import Loader from "@/components/loader";

import { NamedAPIResource } from "@/types";

import { getPokemonList } from "@/api";

const usePokemonListQuery = (page: number) => {
  return useQuery({
    queryKey: ["list", "pokemon", page],
    queryFn: () => getPokemonList(page),
  });
};

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  const { page } = Route.useSearch() as { page: number };
  const { data, isLoading } = usePokemonListQuery(page);

  if (isLoading)
    return (
      <main className="flex min-h-screen max-w-[100vw] items-center justify-center bg-slate-100">
        <Loader className="h-20 w-20" />
      </main>
    );

  return (
    <Layout pageTitle="Pokemon List" className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <FilterByType />
        <section className="flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-3 lg:grid-cols-6 lg:gap-4">
          {data.results.map((pokemon: NamedAPIResource) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </section>
      </section>
      <section className="flex w-full items-center justify-between gap-4">
        <Link
          to="/"
          search={{ page: Number(page ?? 1) - 1 }}
          disabled={data.previous === null}
          className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-slate-800 hover:text-slate-500 aria-disabled:text-slate-400 hover:aria-disabled:text-slate-400"
        >
          <ChevronLeftIcon /> Previous Page
        </Link>
        <Link
          to="/"
          search={{ page: Number(page ?? 1) + 1 }}
          disabled={data.next === null}
          className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-slate-800 hover:text-slate-500 aria-disabled:text-slate-400 hover:aria-disabled:text-slate-400"
        >
          Next Page <ChevronRightIcon />
        </Link>
      </section>
    </Layout>
  );
}

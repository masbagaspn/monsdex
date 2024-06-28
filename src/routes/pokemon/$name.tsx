import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { getPokemonDetailByName } from "@/api";

const usePokemonDetailsQuery = (name: string) => {
  return useQuery({
    queryKey: ["details", "pokemon", name],
    queryFn: () => getPokemonDetailByName(name),
  });
};

export const Route = createFileRoute("/pokemon/$name")({
  component: PokemonDetails,
});

function PokemonDetails() {
  const params = Route.useParams();

  return (
    <main className="font-inter h-screen w-screen bg-slate-100 px-10 py-8">
      <div className="h-full w-1/5 rounded-md bg-neutral-50 p-2 shadow-lg">
        Test
      </div>
    </main>
  );
}

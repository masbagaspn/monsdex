import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { NamedAPIResource } from "@/types";

import { getPokemonTypesList } from "@/api";
import PokeBall from "@/assets/pokeball.svg";

const usePokemonTypesListQuery = () => {
  return useQuery({
    queryKey: ["list", "types"],
    queryFn: () => getPokemonTypesList(),
  });
};

type TypeList = {
  to: string;
} & NamedAPIResource;

export default function FilterByType() {
  const { data, isLoading } = usePokemonTypesListQuery();
  const navigate = useNavigate();

  if (isLoading) return null;
  const typesList: TypeList[] = data.results.map((type: NamedAPIResource) => ({
    ...type,
    to: `/type/${type.name}`,
  }));

  return (
    <Select onValueChange={(value) => navigate({ to: value })}>
      <SelectTrigger className="inline-flex w-fit min-w-40 gap-4 bg-white text-xs font-medium capitalize shadow">
        <div className="inline-flex h-6 w-6 items-center">
          <img src={PokeBall} />
          <span className="text-neutral-500">Types</span>
        </div>
      </SelectTrigger>
      <SelectContent className="max-h-48">
        <SelectItem value="/" className="text-xs capitalize">
          All Pokemon Type
        </SelectItem>
        {typesList.map((type) => (
          <SelectItem
            key={`filter-by-${type.name}`}
            value={type.to}
            className="text-xs capitalize"
          >
            {type.name} Pokemon Type
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

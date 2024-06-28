import * as React from "react";

import { PokemonDetails } from "@/types";

export const PokemonContext = React.createContext<PokemonDetails | undefined>(
  undefined,
);

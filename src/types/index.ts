/* #region types */
export type NamedAPIResource = {
  name: string;
  url: string;
};

type PokemonType = {
  slot: number;
  type: {
    name: (typeof PokemonTypeVariants)[number];
    url: string;
  };
};

export type PokemonDetails = {
  id: number;
  name: string;
  types: PokemonType[];
};
/* #endregion */

/* #region variants */
export const PokemonTypeVariants = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "stellar",
  "unknown",
] as const;
/* #endregion */

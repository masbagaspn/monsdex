export const getPokemonIdFromUrl = (url: string) => {
  return url.split("/").slice(-2, -1)[0];
};

export const pokemonIdToThreeDigitId = (id: number) => {
  if (id < 10) return `#00${id}`;
  if (id < 100) return `#0${id}`;
  return `#${id}`;
};

export const getPokemonImageSource = (id: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

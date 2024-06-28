import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 1000,
  timeoutErrorMessage: "Server Timeout",
});

export const getPokemonList = async (page: number = 1) => {
  const LIMIT = 24;
  const OFFSET = (page - 1) * LIMIT;
  const url =
    page > 1
      ? `pokemon?limit=${LIMIT}&offset=${OFFSET}`
      : `pokemon?limit=${LIMIT}`;

  const response = await api.get(url);

  return await response.data;
};

export const getPokemonDetailById = async (id: string) => {
  const response = await api.get(`pokemon/${id}`);

  return await response.data;
};

export const getPokemonDetailByName = async (name: string) => {
  const response = await api.get(`pokemon/${name}`);

  return await response.data;
};

export const getPokemonTypesList = async () => {
  const response = await api.get("/type");

  return await response.data;
};

export const getPokemonListByType = async (type: string) => {
  const response = await api.get(`/type/${type}`);

  return await response.data;
};

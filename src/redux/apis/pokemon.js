import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = 'https://sunny-pokedex.herokuapp.com/api/';
// const baseUrl: "http://localhost:3001/api/";

const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints(build) {
    return {
      getAllPokemons: build.query({
        query() {
          return "pokemons";
        },
      }),
    };
  },
});

export const { useGetAllPokemonsQuery } = pokemonApi;

export default pokemonApi;

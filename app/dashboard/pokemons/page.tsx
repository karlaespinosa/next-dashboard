import type { Metadata } from "next";

import { SimplePokemon, PokemonsResponse, PokemonGrid } from "@/pokemons";
import { cacheTag } from "next/cache";

export const metadata: Metadata = {
  title: "Pokemons List",
  description: "Pokemons List Description",
};

const getPokemons = async (
  limit = 20,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  const data: PokemonsResponse = await response.json();

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  "use cache";

  cacheTag("pokemons");

  // cacheLife({
  //   stale: 5,
  //   revalidate: 10,
  // });

  // revalidateTag("pokemons", "max");

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons List <small className="text-blue-500">Static</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}

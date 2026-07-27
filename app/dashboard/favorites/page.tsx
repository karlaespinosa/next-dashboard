import type { Metadata } from "next";

import { FavoritePokemons } from "@/pokemons";

export const metadata: Metadata = {
  title: "Favorites",
  description: "Favorite pokemons",
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Favorite Pokemons <small className="text-blue-500">Global State</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}

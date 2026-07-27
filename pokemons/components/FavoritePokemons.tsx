"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites),
  );

  if (pokemons.length === 0) {
    return <NoFavorites />;
  }

  return <PokemonGrid pokemons={pokemons} />;
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} />
      <span>No Favorites Found!</span>
    </div>
  );
};

import { Middleware, isAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    if (isAction(action) && action.type === "pokemons/toggleFavorite") {
      const { pokemons } = store.getState() as RootState;

      localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
    }

    return result;
  };

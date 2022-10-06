import { configureStore } from "@reduxjs/toolkit";
import pokemonApi from "../apis/pokemon";
import typeApi from "../apis/type";

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [typeApi.reducerPath]: typeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, typeApi.middleware),
});

export default store;

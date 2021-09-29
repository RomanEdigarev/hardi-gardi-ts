import { Module } from "vuex";
import { State } from "@/services/vuex";
import { Favorites } from "@/entities/Favorites/model";
import {
  addToFavoritesAdapter,
  getFavoritesAdapter,
  removeToFavoritesAdapter,
} from "@/entities/Favorites/adapters";

export const favoritesModule: Module<Favorites, State> = {
  state: () => ({ products: [], totalCount: 0, isLoading: false }),
  mutations: {
    toggleLoading: (state, payload) => {
      state.isLoading = payload;
    },
    initFavorites: (state, payload) => {
      state.products = payload.products;
      state.totalCount = payload.totalCount;
    },
  },
  actions: {
    initFavorites: async ({ commit }) => {
      commit("toggleLoading", true);
      const favorites = await getFavoritesAdapter();
      commit("initFavorites", favorites);
      commit("toggleLoading", false);
    },
    addToFavorite: async ({ commit }, id) => {
      commit("toggleLoading", true);
      const favorites = await addToFavoritesAdapter(id);
      commit("initFavorites", favorites);
      commit("toggleLoading", false);
    },
    removeFromFavorites: async ({ commit }, id) => {
      commit("toggleLoading", true);
      const favorites = await removeToFavoritesAdapter(id);
      commit("initFavorites", favorites);
      commit("toggleLoading", false);
    },
  },
  getters: {
    getFavorites: (state) => state.products,
    getFavoritesTotalCount: (state) => state.totalCount,
    getIsFavoriteByProductId: (state) => (id: string | number) => {
      const product = state.products.filter((product) => {
        return product.id === id;
      })[0];
      return !!product;
    },
    getFavoritesIsLoading: (state) => state.isLoading,
  },
  namespaced: true,
};

import { Module } from "vuex";
import { State } from "@/services/vuex";
import { Search } from "@/entities/Search/model";
import { Product } from "@/entities/Products/Product/model";
import { searchProductAdapter } from "@/entities/Search/adapters";

export const searchModule: Module<Search, State> = {
  state: {
    query: "",
    results: [],
    isLoading: false,
  },
  mutations: {
    toggleLoading: (state) => (state.isLoading = !state.isLoading),
    setResults: (state, payload: Product[]) => {
      state.results = payload;
    },
    setSearchQuery: (state, payload: string) => {
      state.query = payload;
    },
    resetSearchResults: (state) => {
      state.results = [];
    },
  },
  actions: {
    fetchSearchProducts: async ({ commit }, payload: string) => {
      commit("toggleLoading", true);
      const products: Product[] = await searchProductAdapter(payload);
      commit("setResults", products);
      commit("toggleLoading", false);
    },
  },
  getters: {
    getSearchResults: (state) => state.results,
    getSearchingIsLoading: (state) => state.isLoading,
  },
  namespaced: true,
};

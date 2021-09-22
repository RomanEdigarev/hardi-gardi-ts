import { Module } from "vuex";
import { State } from "@/services/vuex";
import { Products } from "./model";
import { getProductAdapter } from "@/entities/Products/Product/adapters";
import { Product } from "./Product/model";

export const productsModule: Module<Products, State> = {
  state: () => {
    return {
      currentProduct: undefined,
      favorites: undefined,
      isLoading: true,
    };
  },
  mutations: {
    setCurrentProduct: (state, payload: Product) => {
      state.currentProduct = payload;
    },
    toggleLoading: (state, payload) => {
      state.isLoading = payload;
    },
  },
  actions: {
    setCurrentProduct: async ({ commit, rootState }, id: number) => {
      if (rootState.isInit) {
        commit("toggleLoading", true);
        const product = await getProductAdapter(id);
        commit("setCurrentProduct", product);
        commit("toggleLoading", false);
      }
    },
  },
  getters: {
    getCurrentProduct: (state) => state.currentProduct,
  },
  namespaced: true,
};

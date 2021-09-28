import { Module } from "vuex";
import { State } from "@/services/vuex";
import { AddToBasketData, Basket } from "@/entities/Basket/model";
import {
  addToBasketAdapter,
  getBasketAdapter,
} from "@/entities/Basket/adapters";

export const basketsModule: Module<Basket, State> = {
  state: () => {
    return {
      products: [],
      sum: 0,
      sumDiscount: 0,
      sumOld: 0,
      sumTotal: 0,
      isLoading: false,
    };
  },
  mutations: {
    toggleLoading: (state, payload) => {
      state.isLoading = payload;
    },
    initBasket: (state, payload) => {
      state.products = payload.products;
      state.sumOld = payload.sumOld;
      state.sumTotal = payload.sumTotal;
      state.sumDiscount = payload.sumDiscount;
    },
  },
  actions: {
    initBasket: async ({ commit }) => {
      commit("toggleLoading", true);
      const basket = await getBasketAdapter();
      commit("initBasket", basket);
      commit("toggleLoading", false);
    },
    addToBasket: async ({ commit }, payload: AddToBasketData) => {
      commit("toggleLoading", true);
      const basket = await addToBasketAdapter(payload.id, payload.quality);
      commit("initBasket", basket);
      commit("toggleLoading", false);
    },
  },
  getters: {
    getBasketCount: (state) =>
      state.products.reduce((prev, current) => {
        return prev + current.quantity;
      }, 0),
    getProducts: (state) => state.products,
  },
  namespaced: true,
};

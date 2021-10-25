import { Module } from "vuex";
import { State } from "@/services/vuex";
import { AddToBasketData, Basket } from "@/entities/Basket/model";
import {
  addBasketCouponAdapter,
  addToBasketAdapter,
  changeBasketPositionAdapter,
  getBasketAdapter,
} from "@/entities/Basket/adapters";
import {
  addBasketCouponAPI,
  changeBasketPositionAPI,
} from "@/services/api/lib/basket";

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
    changeQuantity: async (
      { commit },
      payload: { id: string | number; quantity: number }
    ) => {
      commit("toggleLoading", true);
      const basket = await changeBasketPositionAdapter(
        payload.id,
        payload.quantity
      );
      commit("initBasket", basket);
      commit("toggleLoading", false);
    },
    addBasketCoupon: async ({ commit }, payload: string) => {
      commit("toggleLoading", true);
      const basket = await addBasketCouponAdapter(payload);
      if (basket.sumTotal > 0) {
        commit("initBasket", basket);
      }
      commit("toggleLoading", false);
    },
  },
  getters: {
    getBasket: (state) => {
      return state;
    },
    getBasketCount: (state) =>
      state.products.reduce((prev, current) => {
        return prev + current.quantity;
      }, 0),
    getProducts: (state) => state.products,
    getPosition: (state) => (positionId) => {
      return state.products.filter((product) => {
        return product.positionID === positionId;
      })[0];
    },
    getBasketSum: (state) => state.sumTotal,
  },
  namespaced: true,
};

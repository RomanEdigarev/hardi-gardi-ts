import { Module } from "vuex";
import { State } from "@/services/vuex";
import { getOrderAdapter } from "@/entities/Order/adapters";
import { Order } from "@/entities/Order/model";

export const orderModule: Module<Order, State> = {
  state: () => {
    return {
      isLoading: false,
      contactPerson: undefined,
      delivery: {
        current: undefined,
        items: [],
      },
      payment: {
        current: undefined,
        items: [],
      },
      comment: "",
      sessId: "",
      price: undefined,
    };
  },
  mutations: {
    toggleLoading: (state, payload) => {
      state.isLoading = payload;
    },
    initOrder: (state, payload: Order) => {
      Object.entries(payload).map(([key, value]) => {
        state[key] = value;
      });
    },
  },
  actions: {
    fetchGetOrder: async ({ commit, state, rootGetters }) => {
      commit("toggleLoading", true);
      const order: Order = await getOrderAdapter();
      // if (!order.contactPerson) {
      //     order.contactPerson = rootGetters['']
      // }
      commit("initOrder", order);
      commit("toggleLoading", false);
    },
  },
  getters: {
    getOrder: (state) => state,
  },
  namespaced: true,
};

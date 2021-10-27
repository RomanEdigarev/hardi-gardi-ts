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
        items: {
          self: [],
          courier: [],
          post: [],
        },
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
    setNewCurrentId: (state, payload: string) => {
      state.delivery.current = payload;
    },
  },
  actions: {
    fetchGetOrder: async ({ commit, state, rootGetters }) => {
      commit("toggleLoading", true);
      const order: Order = await getOrderAdapter();
      if (!order.contactPerson) {
        const { name, lastName, phone, email } = rootGetters[
          "user/getUserAuthInfo"
        ];
        order.contactPerson = { name, lastName, phone, email };
      }
      commit("initOrder", order);
      commit("toggleLoading", false);
    },
  },
  getters: {
    getOrder: (state) => state,
    getSelfDeliveryItems: (state) => state.delivery.items.self,
    getCourierDeliveryItems: (state) => state.delivery.items.courier,
    getPostDeliveryItems: (state) => state.delivery.items.post,
    getCurrentDelivery: (state) => state.delivery.current,
  },
  namespaced: true,
};

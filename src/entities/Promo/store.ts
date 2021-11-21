import { Module } from "vuex";
import { State } from "@/services/vuex";
import { Promo } from "@/entities/Promo/model";
import { getPromoAdapter } from "@/entities/Promo/adapters";

export const promoModule: Module<Promo, State> = {
  state: () => {
    return {
      video: undefined,
    };
  },
  mutations: {
    setPromo: (state, payload) => {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    fetchPromo: async ({ commit }) => {
      const promo = await getPromoAdapter();
      commit("setPromo", promo);
    },
  },
  getters: {
    getPromoVideo: (state) => state.video,
  },
  namespaced: true,
};

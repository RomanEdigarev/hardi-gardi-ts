import { Module } from "vuex";
import { State } from "@/services/vuex";
import { Action } from "@/entities/Actions/model";
import { getActionsAdapter } from "@/entities/Actions/adapters";

export const actionsModule: Module<{ actions: Action[] }, State> = {
  state: () => {
    return {
      actions: [],
    };
  },
  mutations: {
    setActions: (state, payload) => {
      state.actions = payload;
    },
  },
  actions: {
    getActions: async ({ commit }) => {
      const actions = await getActionsAdapter();
      commit("setActions", actions);
    },
  },
  getters: {
    getActions: (state) => state.actions,
  },
  namespaced: true,
};

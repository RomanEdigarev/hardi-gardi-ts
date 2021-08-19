import { Menu } from "../model";
import { Module } from "vuex";
import { State } from "@/services/vuex";
import { getMenuAdapter } from "@/entities/Menu/adapters";

export const menuModule: Module<Menu, State> = {
  state: (): Menu => {
    return {
      catalog: [],
      footer: [],
      top: [],
    };
  },
  getters: {},
  mutations: {
    setMenu: (state, payload: Menu) => {
      state.catalog = payload.catalog;
      state.top = payload.top;
      state.footer = payload.footer;
    },
  },
  actions: {
    getMenu: async ({ commit }) => {
      commit("toggleLoading", true, { root: true });
      const menu = await getMenuAdapter();
      commit("setMenu", menu);
      commit("toggleLoading", false, { root: true });
    },
  },
  namespaced: true,
};

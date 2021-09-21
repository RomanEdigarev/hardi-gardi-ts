import { State } from "@/services/vuex";
import { Shop } from "./model";
import { Module } from "vuex";
import { getShopAdapter } from "./adapters";
import { Catalog } from "./Catalog/model";
import { TopMenu } from "./Menu/model";

export const shopModule: Module<Shop, State> = {
  state: (): Shop => {
    return {
      catalog: undefined,
      contacts: undefined,
      menu: undefined,
    };
  },
  getters: {
    getCatalog: (state): Catalog => {
      return state.catalog;
    },
    getTopMenu: (state): TopMenu => {
      return state.menu.top;
    },
  },
  mutations: {
    initShop: (state, payload: Shop) => {
      state.catalog = payload.catalog;
      state.contacts = payload.contacts;
      state.menu = payload.menu;
    },
  },
  actions: {
    initShop: async ({ commit }) => {
      commit("toggleLoading", true, { root: true });
      const shop = await getShopAdapter();
      commit("initShop", shop);
      commit("toggleLoading", false, { root: true });
    },
  },
  namespaced: true,
};

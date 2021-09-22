import { State } from "@/services/vuex";
import { Shop } from "./model";
import { Module } from "vuex";
import { getShopAdapter } from "./adapters";
import { Catalog } from "./Catalog/model";
import { FooterMenu, TopMenu } from "./Menu/model";
import { History } from "./History/model";

export const shopModule: Module<Shop, State> = {
  state: (): Shop => {
    return {
      catalog: undefined,
      contacts: undefined,
      menu: undefined,
      history: undefined,
    };
  },
  getters: {
    getShop: () => {},
    getCatalog: (state): Catalog => {
      return state.catalog;
    },
    getTopMenu: (state): TopMenu => {
      return state.menu.top;
    },
    getFooterMenu: (state): FooterMenu => {
      return state.menu.footer;
    },
    // getHistory: (state): History => {
    //   // return state.history;
    // },
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
      commit("init", true, { root: true });
    },
  },
  namespaced: true,
};

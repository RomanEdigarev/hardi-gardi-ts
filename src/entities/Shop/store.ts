import { State } from "@/services/vuex";
import { Shop } from "./model";
import { Module } from "vuex";
import { getShopAdapter } from "./adapters";
import { Catalog } from "./Catalog/model";
import { History } from "./History/model";
import { FooterMenu, MenuLink, TopMenu } from "./Menu/model";
import { Contacts } from "@/entities/Shop/Contacts/model";
import { Social } from "@/entities/Shop/Social/model";
import { FooterForPhone } from "@/app/ui";

export const shopModule: Module<Shop, State> = {
  state: (): Shop => {
    return {
      catalog: undefined,
      contacts: undefined,
      menu: undefined,
      history: undefined,
      social: undefined,
    };
  },
  getters: {
    getShop: () => {},
    getCatalog: (state): Catalog => {
      return state.catalog;
    },
    getTopMenu: (state): MenuLink[] => {
      return state.menu.top.main.slice(0, 3);
    },
    getFooterMenu: (state): FooterMenu => {
      return state.menu.footer;
    },
    getTooltipMenu: (state): MenuLink[] => {
      return state.menu.top.main.slice(3);
    },
    getHistory: (state): History => {
      return state.history;
    },
    getContacts: (state): Contacts => {
      return state.contacts;
    },
    getSocial: (state): Social => {
      return state.social;
    },
  },
  mutations: {
    initShop: (state, payload: Shop) => {
      state.catalog = payload.catalog;
      state.contacts = payload.contacts;
      state.menu = payload.menu;
      state.history = payload.history;
      state.social = payload.social;
    },
  },
  actions: {
    initShop: async ({ commit }) => {
      commit("toggleLoading", true, { root: true });
      const shop = await getShopAdapter();
      commit("initShop", shop);
      commit("init", true, { root: true });
      commit("toggleLoading", false, { root: true });
    },
  },
  namespaced: true,
};

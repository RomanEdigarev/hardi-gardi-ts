import { Module } from "vuex";
import { State } from "@/services/vuex";
import { Products, ProductsPage } from "./model";
import { getProductAdapter } from "@/entities/Products/Product/adapters";
import { Product } from "./Product/model";
import { getProductsByPageAdapter } from "@/entities/Products/adapters";
import { getSectionsAdapter } from "@/entities/Products/Filter/adapters";
import { Filter } from "@/entities/Products/Filter/model";

export const productsModule: Module<Products, State> = {
  state: () => {
    return {
      currentProduct: undefined,
      isLoading: true,
      page: {
        value: 1,
        products: [],
      },
      filter: {},
      sections: [],
    };
  },
  mutations: {
    initSections: (state, payload) => {
      state.sections = payload;
    },
    setCurrentProduct: (state, payload: Product) => {
      state.currentProduct = payload;
    },
    toggleLoading: (state, payload) => {
      state.isLoading = payload;
    },
    setProductsByPage: (state, payload: ProductsPage) => {
      if (state.page) {
        state.page.value = payload.value;
        state.page.products = [...state.page.products, ...payload.products];
      } else {
        state.page = payload;
      }
    },
    setFilter: (state, payload: Filter) => {
      state.filter = { ...state.filter, ...payload };
    },
  },
  actions: {
    initSections: async ({ commit, rootState }) => {
      if (rootState.isInit) {
        commit("toggleLoading", true);
        const sections = await getSectionsAdapter();
        commit("initSections", sections);
        commit("toggleLoading", false);
      }
    },
    setCurrentProduct: async ({ commit, rootState }, id: number) => {
      if (rootState.isInit) {
        commit("toggleLoading", true);
        const product = await getProductAdapter(id);
        commit("setCurrentProduct", product);
        commit("toggleLoading", false);
      }
    },
    setProductsByPage: async ({ commit, rootState }, page: number) => {
      if (rootState.isInit) {
        commit("toggleLoading", true);
        const products = await getProductsByPageAdapter(page);
        commit("setProductsByPage", { value: page, products });
        commit("toggleLoading", false);
      }
    },
    addProductsByPage: async ({ commit, rootState, state }) => {
      if (rootState.isInit) {
        commit("toggleLoading", true);
        const products = await getProductsByPageAdapter(state.page.value + 1);
        commit("setProductsByPage", { value: state.page.value + 1, products });
        commit("toggleLoading", false);
      }
    },
    getProductWithFilter: async () => {},
  },
  getters: {
    getCurrentProduct: (state) => state.currentProduct,
    getProductsOnCurrentPage: (state) => {
      return state.page.products;
    },
    getIsLoadingProducts: (state) => state.isLoading,
    getSections: (state) => state.sections,
    // getSectionById: (state, payload) => state.sections.filter(section => section.id === payload)
  },
  namespaced: true,
};

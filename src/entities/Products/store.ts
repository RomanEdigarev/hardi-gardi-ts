import { Module } from "vuex";
import { State } from "@/services/vuex";
import { Products, ProductsPage } from "./model";
import { getProductAdapter } from "@/entities/Products/Product/adapters";
import { Product } from "./Product/model";
import { getProductsByPageAdapter } from "@/entities/Products/adapters";
import {
  getFiltersAdapter,
  getSectionsAdapter,
} from "@/entities/Products/Filter/adapters";
import { Filters } from "@/entities/Products/Filter/model";
import { Section } from "@/entities/Shop/Catalog/model";

export const productsModule: Module<Products, State> = {
  state: () => {
    return {
      currentProduct: undefined,
      isLoading: true,
      page: {
        value: 1,
        products: [],
      },
      filters: undefined,
      sections: [],
      currentFilter: {},
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
      if (payload.value > 1) {
        state.page.value = payload.value;
        state.page.products = [...state.page.products, ...payload.products];
      } else {
        state.page = payload;
      }
    },
    setFilters: (state, payload: Filters) => {
      state.filters = payload;
    },
    setSections: (state, payload: Section[]) => {
      state.sections = payload;
    },
    addCurrentFilter: (
      state,
      payload: { name: string; value: string | number }
    ) => {
      state.currentFilter = {
        ...state.currentFilter,
        [payload.name]: payload.value,
      };
    },
    removeCurrentFilter: (state, payload: string) => {
      const {
        [payload]: removeFilterKey,
        ...newCurrentFilter
      } = state.currentFilter;
      state.currentFilter = newCurrentFilter;
    },
    resetCurrentFilters: (state) => (state.currentFilter = {}),
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
    initFilters: async ({ commit, rootState }) => {
      commit("toggleLoading", true);
      const { filters, sections } = await getFiltersAdapter();
      commit("setFilters", filters);
      commit("setSections", sections);
      commit("toggleLoading", false);
    },
    setCurrentProduct: async ({ commit, rootState }, id: number) => {
      if (rootState.isInit) {
        commit("toggleLoading", true);
        const product = await getProductAdapter(id);
        commit("setCurrentProduct", product);
        commit("toggleLoading", false);
      }
    },
    setProductsByPage: async ({ commit, rootState, state }, page: number) => {
      if (rootState.isInit) {
        commit("toggleLoading", true);
        const products = await getProductsByPageAdapter(
          page,
          state.currentFilter
        );
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
    getFilters: (state) => state.filters,
    getCurrentFilters: (state) => state.currentFilter,
  },
  namespaced: true,
};

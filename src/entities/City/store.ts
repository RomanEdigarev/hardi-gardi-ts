import { Module } from "vuex";
import { State } from "@/services/vuex";
import { City } from "@/entities/City/model";
import {
  getAllCitiesAdapter,
  searchByStringAdapter,
  setNewUserCityAdapter,
} from "@/entities/City/adapters";

export const cityModule: Module<City, State> = {
  state: () => {
    return {
      current: "84",
      items: {
        // "84": "Москва",
        // "85": "Санкт-Петербург",
      },
    };
  },
  mutations: {
    initCities: (state, payload) => {
      state.items = payload;
    },
    setCurrentCityIndex: (state, payload) => {
      state.current = payload;
    },
    setSearchingItems: (state, payload) => {
      state.searchingItems = payload;
    },
    resetSearchItems: (state) => {
      state.searchingItems = undefined;
    },
  },
  actions: {
    getCityItems: async ({ commit }) => {
      const cities = await getAllCitiesAdapter();
      commit("initCities", cities);
    },
    getUserCity: async ({ commit }) => {
      commit("setCurrentCityIndex");
    },
    setNewUserCity: async ({ commit, state }, payload: string) => {
      const city = await setNewUserCityAdapter(payload);
      state.items[payload] = city[payload];
      commit("setCurrentCityIndex", payload);
      commit("resetSearchItems");
    },
    searchByString: async ({ commit }, payload: string) => {
      const cities = await searchByStringAdapter(payload);
      commit("setSearchingItems", cities);
    },
  },
  getters: {
    getCurrentCityId: (state) => state.current,
    getAllCities: (state) => state.items,
    getSearchResults: (state) => state.searchingItems,
  },
  namespaced: true,
};

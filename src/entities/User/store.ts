import { Module } from "vuex";
import { Shop } from "@/entities/Shop/model";
import { State } from "@/services/vuex";
import { User } from "@/entities/User/model";
import { getUserAuthInfoAdapter } from "@/entities/User/adapters";

export const userModule: Module<User, State> = {
  state: () => {
    return {
      isLoading: false,
      isAuth: false,
      name: "",
      email: "",
    };
  },
  mutations: {
    toggleLoading: (state) => (state.isLoading = !state.isLoading),
    setUserAuthInfo: (state, payload: User) => {
      state.isAuth = payload.isAuth;
      state.email = payload.email;
      state.name = payload.name;
    },
  },
  actions: {
    fetchUserAuthInfo: async ({ commit }) => {
      commit("toggleLoading");
      const userInfo = await getUserAuthInfoAdapter();
      commit("setUserAuthInfo", userInfo);
      commit("toggleLoading");
    },
  },
  getters: {
    getUserAuthInfo: (state) => state,
  },
  namespaced: true,
};

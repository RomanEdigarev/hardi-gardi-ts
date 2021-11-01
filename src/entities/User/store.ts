import { Module } from "vuex";
import { Shop } from "@/entities/Shop/model";
import { State } from "@/services/vuex";
import {
  User,
  UserChild,
  UserProfileDataModel,
  UserRegistrationData,
  UserSessionId,
} from "@/entities/User/model";
import {
  getUserAuthInfoAdapter,
  loginUserAdapter,
  logoutUserAdapter,
  registrationUserAdapter,
  removeUserChildAdapter,
  setUserChildAdapter,
  setUserProfileDataAdapter,
} from "@/entities/User/adapters";

export const userModule: Module<User, State> = {
  state: () => {
    return {
      isLoading: false,
      isAuth: false,
      error: "",
      name: "",
      email: "",
      lastName: undefined,
      secondName: undefined,
      newPassword: undefined,
      phone: undefined,
      birth: undefined,
      childs: [],
      sessionId: undefined,
    };
  },
  mutations: {
    toggleLoading: (state) => (state.isLoading = !state.isLoading),
    setUserAuthInfo: (state, payload: User) => {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    setError: (state, payload: string) => (state.error = payload),
    logoutUser: (state) => {
      state.isAuth = false;
      state.email = "";
      state.name = "";
    },
    setUserChilds: (state, payload: UserChild[]) => {
      state.childs = payload;
    },
    removeUserChild: (state, payload) => {
      state.childs = state.childs.filter((child) => child.id !== payload);
    },
  },
  actions: {
    fetchUserAuthInfo: async ({ commit }) => {
      commit("toggleLoading");
      const userInfo = await getUserAuthInfoAdapter();
      commit("setUserAuthInfo", userInfo);
      commit("toggleLoading");
    },
    fetchRegistrationUser: async (
      { commit },
      payload: UserRegistrationData
    ) => {
      commit("toggleLoading");
      const userInfo = await registrationUserAdapter(payload);
      if (typeof userInfo != "string") {
        commit("setUserAuthInfo", userInfo);
        commit("setError", "");
        commit("toggleLoading");
      } else {
        commit("setError", userInfo);
        commit("toggleLoading");
      }
    },
    fetchLoginUser: async (
      { commit },
      payload: { email: string; password: string; remember: boolean }
    ) => {
      commit("toggleLoading");
      const userInfo = await loginUserAdapter(payload);
      if (typeof userInfo != "string") {
        commit("setUserAuthInfo", userInfo);
        commit("setError", "");
        commit("toggleLoading");
      } else {
        commit("setError", userInfo);
        commit("toggleLoading");
      }
    },
    fetchLogoutUser: async ({ commit }) => {
      commit("toggleLoading");
      const isLogout = await logoutUserAdapter();
      if (isLogout) {
        commit("logoutUser");
      }
      commit("toggleLoading");
    },
    fetchSetProfileUser: async (
      { commit, state, dispatch },
      payload: UserProfileDataModel
    ) => {
      commit("toggleLoading");
      const response = await setUserProfileDataAdapter(state, {
        ...state,
        ...payload,
      });
      await dispatch("fetchSetUserChild");
      commit("toggleLoading");
    },
    fetchSetUserChild: async ({ commit, state }) => {
      commit("toggleLoading");
      const response = await setUserChildAdapter(state.childs);
      commit("toggleLoading");
    },
    fetchRemoveUserChild: async ({ commit }, payload: string) => {
      commit("toggleLoading");
      commit("removeUserChild", payload);
      const userChildren = await removeUserChildAdapter(payload);
      commit("setUserChilds", userChildren);
      commit("toggleLoading");
    },
  },
  getters: {
    getUserAuthInfo: (state) => state,
    getUserIsLoading: (state) => state.isLoading,
    getUserError: (state) => state.error,
    getUserChilds: (state) => state.childs,
  },
  namespaced: true,
};

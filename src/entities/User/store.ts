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
      { commit, state },
      payload: UserProfileDataModel
    ) => {
      commit("toggleLoading");
      const response = setUserProfileDataAdapter(state, {
        ...state,
        ...payload,
      });
      commit("toggleLoading");
    },
  },
  getters: {
    getUserAuthInfo: (state) => state,
    getUserIsLoading: (state) => state.isLoading,
    getUserError: (state) => state.error,
  },
  namespaced: true,
};

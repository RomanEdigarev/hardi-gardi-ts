import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { Menu } from "@/entities/Menu/model";
import { menuModule } from "@/entities/Menu/store";

export type State = {
  loading: boolean;
  menu?: any;
};
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    loading: false,
  },
  mutations: {
    toggleLoading: (state, payload: boolean) => {
      state.loading = payload;
    },
  },
  modules: {
    menu: menuModule,
  },
});

export const useStore = () => {
  return baseUseStore(key);
};

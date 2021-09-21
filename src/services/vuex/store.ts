import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { Shop } from "@/entities/Shop/model";
import { shopModule } from "@/entities/Shop/store";

export type State = {
  loading: boolean;
  shop?: Shop;
};
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    loading: true,
  },
  mutations: {
    toggleLoading: (state, payload: boolean) => {
      state.loading = payload;
    },
  },
  modules: {
    shop: shopModule,
  },
});

export const useStore = () => {
  return baseUseStore(key);
};

import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { Shop } from "@/entities/Shop/model";
import { shopModule } from "@/entities/Shop/store";
import { Products } from "@/entities/Products/model";
import { productsModule } from "@/entities/Products/store";

export type State = {
  loading: boolean;
  isInit: boolean;
  isMobile: boolean;
  isPhone: boolean;
  shop?: Shop;
  products?: Products;
};
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    loading: true,
    isInit: false,
    isMobile: false,
    isPhone: false,
  },
  mutations: {
    init: (state, payload) => {
      state.isInit = payload;
    },
    toggleLoading: (state, payload?: boolean) => {
      state.loading = payload ? payload : !state.loading;
    },
    setIsMobile: (state, payload: boolean) => {
      state.isMobile = payload;
    },
    setIsPhone: (state, payload: boolean) => {
      state.isPhone = payload;
    },
  },
  modules: {
    shop: shopModule,
    products: productsModule,
  },
});

export const useStore = () => {
  return baseUseStore(key);
};

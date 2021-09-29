import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { Shop } from "@/entities/Shop/model";
import { shopModule } from "@/entities/Shop/store";
import { Products } from "@/entities/Products/model";
import { productsModule } from "@/entities/Products/store";
import { Basket } from "@/entities/Basket/model";
import { basketsModule } from "@/entities/Basket/store";

export type State = {
  loading: boolean;
  isInit: boolean;
  isToken: boolean;
  isMobile: boolean;
  isPhone: boolean;
  shop?: Shop;
  products?: Products;
  basket?: Basket;
};
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    loading: true,
    isInit: false,
    isMobile: false,
    isPhone: false,
    isToken: false,
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
    setIsToken: (state, payload: boolean) => {
      state.isToken = payload;
    },
    setIsPhone: (state, payload: boolean) => {
      state.isPhone = payload;
    },
  },
  getters: {
    getIsToken: (state) => state.isToken,
  },
  modules: {
    shop: shopModule,
    products: productsModule,
    basket: basketsModule,
  },
});

export const useStore = () => {
  return baseUseStore(key);
};

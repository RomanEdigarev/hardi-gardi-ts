import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { User, Shop, Basket, Products, Favorites } from "@/entities/models";
import {
  basketsModule,
  shopModule,
  productsModule,
  favoritesModule,
  userModule,
} from "@/entities/modules";

export type State = {
  loading: boolean;
  isInit: boolean;
  isToken: boolean;
  isMobile: boolean;
  isPhone: boolean;
  shop?: Shop;
  products?: Products;
  basket?: Basket;
  favorites?: Favorites;
  user: User | {};
};
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    loading: true,
    isInit: false,
    isMobile: false,
    isPhone: false,
    isToken: false,
    user: {},
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
    getIsPhone: (state) => state.isPhone,
    getIsMobile: (state) => state.isMobile,
  },
  modules: {
    shop: shopModule,
    products: productsModule,
    basket: basketsModule,
    favorites: favoritesModule,
    user: userModule,
  },
});

export const useStore = (customKey = key) => {
  return baseUseStore(customKey);
};

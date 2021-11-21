import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import {
  User,
  Shop,
  Basket,
  Products,
  Favorites,
  Order,
  City,
  Search,
  Promo,
} from "@/entities/models";
import {
  basketsModule,
  shopModule,
  productsModule,
  favoritesModule,
  userModule,
  orderModule,
  cityModule,
  searchModule,
  promoModule,
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
  order?: Order;
  city: City;
  search?: Search;
  token: string;
  promo: Promo;
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
    city: {
      current: "0",
      items: undefined,
    },
    token: "",
    promo: undefined,
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
    setToken: (state, payload) => (state.token = payload),
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
    order: orderModule,
    city: cityModule,
    search: searchModule,
    promo: promoModule,
  },
});

export const useStore = (customKey = key) => {
  return baseUseStore(customKey);
};

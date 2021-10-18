import { useStore } from "@/services/vuex";
import { Shop } from "./model";
import { Catalog } from "./Catalog/model";
import { FooterMenu, MenuLink } from "./Menu/model";
import { getApiInstance } from "@/services/api/config";

export const initShop = async (store): Promise<Shop> => {
  await getApiInstance();
  store.commit("setIsToken", true);
  await store.dispatch("shop/initShop");
  await store.dispatch("user/fetchUserAuthInfo");
  await store.dispatch("basket/initBasket");
  await store.dispatch("favorites/initFavorites");

  return store.state.shop;
};

export const getCatalog = (): Catalog => {
  const store = useStore();
  return store.getters["shop/getCatalog"];
};

export const getTopMenu = (): MenuLink[] => {
  const store = useStore();
  return store.getters["shop/getTopMenu"];
};

export const getFooterMenu = (): FooterMenu => {
  const store = useStore();
  return store.getters["shop/getFooterMenu"];
};

export const getTooltipMenu = (): MenuLink[] => {
  const store = useStore();
  return store.getters["shop/getTooltipMenu"];
};

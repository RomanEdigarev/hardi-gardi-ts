import { key, useStore } from "@/services/vuex";
import { Shop } from "./model";
import { Catalog } from "./Catalog/model";
import { FooterMenu, MenuLink } from "./Menu/model";
import { getApiInstance } from "@/services/api/config";
import { getCurrentInstance } from "vue";

export const initShop = async (store): Promise<Shop> => {
  await getApiInstance();

  store.commit(
    "setIsMobile",
    document.documentElement.clientWidth <= 1360 &&
      document.documentElement.clientWidth > 737
  );
  store.commit("setIsPhone", document.documentElement.clientWidth <= 737);
  store.commit("setIsToken", true);
  await store.dispatch("shop/initShop");
  await store.dispatch("user/fetchUserAuthInfo");
  await store.dispatch("basket/initBasket");
  await store.dispatch("favorites/initFavorites");
  await store.dispatch("order/fetchHistoryOrders");

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

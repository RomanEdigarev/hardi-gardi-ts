import { key, useStore } from "@/services/vuex";
import { Shop } from "./model";
import { Catalog } from "./Catalog/model";
import { FooterMenu, MenuLink } from "./Menu/model";
import { getApiInstance } from "@/services/api/config";

export const initShop = async (store): Promise<Shop> => {
  if (!store.state.token) {
    const token = await getApiInstance();
    store.commit("setToken", token);
  }

  store.commit(
    "setIsMobile",
    document.documentElement.clientWidth <= 1360 &&
      document.documentElement.clientWidth > 737
  );
  store.commit("setIsPhone", document.documentElement.clientWidth <= 737);
  store.commit("setIsToken", true);
  await store.dispatch("shop/initShop");
  await store.dispatch("promo/fetchPromo");
  await store.dispatch("user/fetchUserAuthInfo");
  await store.dispatch("basket/initBasket");
  await store.dispatch("favorites/initFavorites");
  await store.dispatch("actions/getActions");
  await store.dispatch("products/fetchBestProducts", "best");
  await store.dispatch("products/fetchBestProducts", "new");
  await store.dispatch("products/fetchBestProducts", "sale");
  if (store.state.user.isAuth) {
    await store.dispatch("order/fetchHistoryOrders");
  }

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

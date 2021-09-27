import { useStore } from "@/services/vuex";
import { Shop } from "./model";
import { Catalog } from "./Catalog/model";
import { FooterMenu, MenuLink, TopMenu } from "./Menu/model";

export const initShop = async (): Promise<Shop> => {
  const store = useStore();
  await store.dispatch("shop/initShop");
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

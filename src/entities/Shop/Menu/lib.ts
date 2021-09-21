import { useStore } from "@/services/vuex";
import { Catalog } from "../Catalog/model";

// export const getMenu = async (): Promise<Menu> => {
//   const store = useStore();
//   await store.dispatch("menu/getMenu");
//   return store.state.shop.menu;
// };
//
export const getCatalogMenu = (): Catalog => {
  const store = useStore();
  return store.state.shop.catalog;
};

import { useStore } from "@/services/vuex";
import { Menu, MenuLink } from "@/entities/Menu/model";

export const getMenu = async (): Promise<Menu> => {
  const store = useStore();
  await store.dispatch("menu/getMenu");
  return store.state.menu;
};

export const getCatalogMenu = (): MenuLink[] => {
  const store = useStore();
  return store.state.menu.catalog;
};

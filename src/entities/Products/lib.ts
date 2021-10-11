import { useStore } from "@/services/vuex";
import { Products } from "@/entities/Products/model";

export const getCurrentProduct = async (id: string) => {
  const store = useStore();
  await store.dispatch("products/setCurrentProduct", +id);
  return store.getters["products/getCurrentProduct"];
};

export const getProductByPage = async (page: number): Promise<Products[]> => {
  const store = useStore();
  await store.dispatch("products/setProductsByPage", page);
  return store.getters["products/getProductsOnCurrentPage"];
};
export const getSections = async () => {
  const store = useStore();
  return store.getters["products/getSections"];
};
export const initCatalog = async () => {
  const store = useStore();
  await store.dispatch("products/initFilters");
  await store.dispatch("products/setProductsByPage", 1);
};

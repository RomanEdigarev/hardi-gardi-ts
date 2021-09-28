import { useStore } from "@/services/vuex";
import { Products } from "@/entities/Products/model";
import { Characteristics, Product } from "@/entities/Products/Product/model";

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

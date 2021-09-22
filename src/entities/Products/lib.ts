import { useStore } from "@/services/vuex";

export const getCurrentProduct = async (id: string) => {
  const store = useStore();
  await store.dispatch("products/setCurrentProduct", +id);
  return store.getters["products/getCurrentProduct"];
};

import { useStore } from "@/services/vuex";

export const initBasket = async () => {
  const store = useStore();
  await store.dispatch("basket/initBasket");
};

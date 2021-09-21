import { computed, onMounted } from "vue";
import { getTopMenu } from "@/entities/Shop/lib";

export const useTopMenu = () => {
  let topMenu = computed(() => getTopMenu());

  return { topMenu };
};

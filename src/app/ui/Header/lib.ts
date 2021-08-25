import { computed } from "vue";
import { getCatalogMenu } from "@/entities/Menu/lib";

export const useCatalogMenu = () => {
  const catalogMenu = computed(() => getCatalogMenu());
  return {
    catalogMenu,
  };
};

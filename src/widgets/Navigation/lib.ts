import { computed, onMounted } from "vue";
import { getTopMenu } from "@/entities/Shop/lib";
import { Menu, MenuLink, TopMenu } from "@/entities/Shop/Menu/model";

export const useTopMenu = () => {
  let topMenu = computed<MenuLink[]>(() => getTopMenu());

  return { topMenu };
};

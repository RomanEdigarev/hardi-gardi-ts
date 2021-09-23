import { reactive, ref } from "vue";
import anime from "animejs";

export const useBurgerSubmenu = () => {
  const submenu = ref<HTMLElement>(null);
  const currenSubmenu = reactive({
    component: "catalog-submenu",
    name: "Каталог",
  });
  const setCurrentSubmenu = (component: string, name: string) => {
    currenSubmenu.name = name;
    currenSubmenu.component = component;
    showCurrentSubmenu();
  };

  const showCurrentSubmenu = () => {
    anime({
      targets: submenu.value,
      translateX: ["-100%", "0%"],
      easing: "spring(1, 70, 13, 0)",
    });
  };

  const hideCurrentSubmenu = () => {
    anime({
      targets: submenu.value,
      translateX: ["0%", "-100%"],
      easing: "spring(1, 70, 13, 0)",
    });
  };

  return {
    submenu,
    setCurrentSubmenu,
    hideCurrentSubmenu,
    currenSubmenu,
  };
};

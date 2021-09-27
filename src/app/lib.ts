import { ref } from "vue";
import anime from "animejs";

export const useBurgerMenu = () => {
  const burger = ref(null);
  const burgerBG = ref(null);
  const openBurger = () => {
    anime
      .timeline()
      .add({
        targets: burger.value,
        translateY: ["100%", "0%"],
        easing: "spring(1, 70, 13, 0)",
      })
      .add(
        {
          targets: burgerBG.value,
          opacity: [0, 0.7],
          duration: 300,
          easing: "linear",
        },
        300
      );
  };

  const closeBurger = () => {
    anime
      .timeline()
      .add({
        targets: burgerBG.value,
        opacity: [0.7, 0],
        duration: 200,
        easing: "linear",
      })
      .add(
        {
          targets: burger.value,
          translateY: ["0", "100%"],
          easing: "spring(1, 70, 13, 0)",
        },
        100
      );
  };

  return {
    openBurger,
    closeBurger,
    burger,
    burgerBG,
  };
};

export const useSearchModalPhone = () => {
  const searchModalPhone = ref(null);
  const openSearchModal = () => {
    anime.timeline().add({
      targets: searchModalPhone.value,
      translateY: ["100%", "0%"],
      easing: "spring(1, 70, 13, 0)",
    });
  };

  const closeSearchModal = () => {
    anime.timeline().add(
      {
        targets: searchModalPhone.value,
        translateY: ["0", "100%"],
        easing: "spring(1, 70, 13, 0)",
      },
      100
    );
  };

  return {
    openSearchModal,
    closeSearchModal,
    searchModalPhone,
  };
};

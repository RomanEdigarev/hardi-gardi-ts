import { computed, ref, watch } from "vue";
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
        complete: () => (document.documentElement.style.overflow = "hidden"),
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
          complete: () => (document.documentElement.style.overflow = "visible"),
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
  const searchModalPhone = ref<HTMLElement>(null);
  const openAnimation = computed(() => {
    if (searchModalPhone.value) {
      return anime.timeline().add({
        targets: searchModalPhone.value,
        translateY: ["100%", "0%"],
        easing: "spring(1, 70, 13, 0)",
      });
    }
  });
  const openSearchModal = () => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    searchModalPhone.value.style.display = "block";
    openAnimation.value.play();
  };
  watch(searchModalPhone, () => {
    console.log(searchModalPhone.value);
  });

  const closeSearchModal = () => {
    document.documentElement.style.overflow = "visible";
    document.body.style.overflow = "visible";

    anime.timeline().add(
      {
        targets: searchModalPhone.value,
        translateY: ["0", "100%"],
        easing: "spring(1, 70, 13, 0)",
        complete: () => {
          searchModalPhone.value.style.display = "none";
        },
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

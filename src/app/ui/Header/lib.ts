import { computed, onMounted, ref } from "vue";
import anime from "animejs";
import { getCatalogMenu } from "@/entities/Menu/lib";

export const useHeaderModal = () => {
  const headerModal = ref<HTMLElement>(null);
  let isOpenModal = ref(false);
  let animation = null;
  onMounted(() => {
    animation = anime({
      targets: headerModal.value,
      opacity: [0, 1],
      duration: 300,
      easing: "linear",
      autoplay: false,
      complete: (anim) => {
        headerModal.value.style.display = isOpenModal.value && "none";
        anim.reverse();
        isOpenModal.value = !isOpenModal.value;
      },
    });
  });
  const toggleModal = () => {
    headerModal.value.style.display = !isOpenModal.value && "block";
    animation.play();
  };
  return {
    headerModal,
    toggleModal,
  };
};

export const useCatalogMenu = () => {
  const catalogMenu = computed(() => getCatalogMenu());
  return {
    catalogMenu,
  };
};

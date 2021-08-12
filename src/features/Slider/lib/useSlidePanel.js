import { ref } from "vue";

export const useSlidePanel = (count) => {
  const currentSlide = ref(0);
  const nextSlide = () => {
    if (currentSlide.value === count - 1) {
      currentSlide.value = 0;
    } else {
      currentSlide.value++;
    }
  };
  const prevSlide = () => {
    if (currentSlide.value === 0) {
      currentSlide.value = count - 1;
    } else {
      currentSlide.value--;
    }
  };
  const setCurrentSlide = (index) => {
    currentSlide.value = index;
  };

  return {
    currentSlide,
    setCurrentSlide,
    nextSlide,
    prevSlide,
  };
};

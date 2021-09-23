import { computed, onMounted, ref } from "vue";
import { useStore } from "@/services/vuex";

const getSecondaryOptions = () => {
  const isMobile = document.documentElement.clientWidth <= 768;
  console.log(isMobile);

  return {
    type: "loop",
    perPage: 5,
    perMove: 1,
    pagination: false,
    rewind: true,
    isNavigation: true,
    focus: "center",
    direction: isMobile ? "ltr" : "ttb",
    height: isMobile ? "auto" : "480px",
    width: isMobile ? "480px" : "auto",
  };
};

const getPrimaryOptions = (isZoom) => {
  const store = useStore();
  return {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    width: isZoom ? "35.625vw" : store.state.isMobile ? "590px" : "684px",
    heightRatio: isZoom ? 1.25 : 0,
  };
};

export const useMainSlider = (isZoom) => {
  console.log("useMainSLider");
  const secondaryOptions = getSecondaryOptions();
  const primaryOptions = getPrimaryOptions(isZoom);
  const secondarySplide = ref(null);
  const primarySplide = ref(null);
  const nextSlideBtn = ref<HTMLElement>(null);
  const prevSlideBtn = ref<HTMLElement>(null);

  const goToNextSlide = () => {
    nextSlideBtn.value.click();
  };
  const goToPrevSlide = () => {
    prevSlideBtn.value.click();
  };

  onMounted(() => {
    primarySplide.value?.sync(secondarySplide.value.splide);
  });

  return {
    nextSlideBtn,
    prevSlideBtn,
    goToNextSlide,
    goToPrevSlide,
    secondaryOptions,
    primaryOptions,
    secondarySplide,
    primarySplide,
  };
};

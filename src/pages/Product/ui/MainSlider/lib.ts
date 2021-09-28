import { computed, onMounted, onUpdated, ref } from "vue";
import { useStore } from "@/services/vuex";

const getSecondaryOptions = () => {
  const store = useStore();
  const isMobile = store.state.isMobile;
  const isPhone = store.state.isPhone;

  console.log(isMobile);
  const getWidthForOptions = () => {
    if (store.state.isPhone) {
      return "273px";
    } else if (store.state.isMobile) {
      return "480px";
    } else {
      return "auto";
    }
  };
  return {
    type: "loop",
    perPage: isPhone ? 4 : 5,
    perMove: 1,
    pagination: false,
    rewind: true,
    isNavigation: true,
    focus: "center",
    direction: isMobile ? "ltr" : "ttb",
    height: isMobile ? "auto" : "480px",
    width: getWidthForOptions(),
  };
};

export const getPrimaryOptions = (isZoom) => {
  const store = useStore();
  const getWidthForOptions = () => {
    if (store.state.isPhone) {
      return "273px";
    } else if (store.state.isMobile) {
      return "590px";
    } else {
      return "684px";
    }
  };

  const getZoomWidth = () => {
    return store.state.isPhone ? "20px" : "35.625vw";
  };
  return {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    width: isZoom ? getZoomWidth() : getWidthForOptions(),
    heightRatio: isZoom ? 1.25 : 1.25,
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

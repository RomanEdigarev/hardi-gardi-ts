import { computed, onMounted, onUpdated, ref } from "vue";
import { useStore } from "@/services/vuex";

const getSecondaryOptions = (status?: string, width?: string) => {
  const isMobile = status === "isMobile";
  const isPhone = status === "isPhone";

  console.log(isMobile);
  const getWidthForOptions = () => {
    if (isPhone) {
      return "273px";
    } else if (isMobile) {
      return "480px";
    } else {
      return "auto";
    }
  };
  const options = {
    type: "loop",
    perPage: isPhone && width ? 5 : 4,
    perMove: 1,
    pagination: false,
    rewind: true,
    isNavigation: true,
    // focus: "center",
    padding: {
      // left: "100px",
      right: "0",
    },
    direction: isMobile || isPhone ? "ltr" : "ttb",
    height: isMobile || isPhone ? "auto" : "480px",
    width: width || getWidthForOptions(),
  };
  return options;
};

export const getPrimaryOptions = (status?: string, isZoom?: boolean) => {
  const isMobile = status === "isMobile";
  const isPhone = status === "isPhone";
  const getWidthForOptions = () => {
    if (isPhone) {
      return "273px";
    } else if (isMobile) {
      return "590px";
    } else {
      return "684px";
    }
  };

  const getZoomWidth = () => {
    return isPhone ? "95%" : "35.625vw";
  };
  const options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    width: isZoom ? getZoomWidth() : getWidthForOptions(),
    heightRatio: isZoom ? 1.25 : 1.25,
  };
  return options;
};

export const useMainSlider = (isZoom) => {
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

  onUpdated(() => {
    console.log("updated");
    primarySplide.value?.sync(secondarySplide.value.splide);
    primarySplide.value.splide.refresh();
  });

  onMounted(() => {
    primarySplide.value?.sync(secondarySplide.value.splide);
  });

  return {
    nextSlideBtn,
    prevSlideBtn,
    goToNextSlide,
    goToPrevSlide,
    secondaryOptions,
    getPrimaryOptions,
    getSecondaryOptions,
    secondarySplide,
    primarySplide,
  };
};

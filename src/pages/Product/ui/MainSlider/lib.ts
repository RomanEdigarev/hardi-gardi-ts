import { onMounted, onUpdated, ref } from "vue";

const getSecondaryOptions = (status?: string, width?: string) => {
  const isMobile = status === "isMobile";
  const isPhone = status === "isPhone";

  const options = {
    type: "slide",
    perPage: isPhone || isMobile || width ? 4 : 5,
    perMove: 1,
    pagination: false,
    rewind: false,
    isNavigation: true,
    // focus: "center",
    padding: {
      // left: "100px",
      right: isPhone || isMobile || width ? "20px" : "0px",
    },
    // gap: "2px",
    direction: isMobile || isPhone ? "ltr" : "ttb",
    height: isMobile || isPhone ? "auto" : "480px",
    // width: width || getWidthForOptions(),
    width: width || "300px",
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
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    width: isZoom ? getZoomWidth() : getWidthForOptions(),
    heightRatio: isZoom ? 1.25 : 1.25,
  };
  return options;
};

export const useMainSlider = ({isZoom, video}) => {
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

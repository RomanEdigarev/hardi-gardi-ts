<template>
  <div class="main-slider" :class="{ zoom: isZoom }">
    <div class="main-slider__body">
      <!-- thumbnails -->
      <div class="main-slider__body__thumbnails">
        <div class="main-slider__body__thumbnails__up-btn">
          <BetaButton
            styling="beta-zeta-btn"
            :is-disabled="isFirstSlide"
            @click="goToPrevSlide"
          >
            <SlideArrowIcon />
          </BetaButton>
        </div>
        <div class="main-slider__body__thumbnails__items">
          <Splide
            @splide:moved="splideMoved"
            v-if="isZoom && isPhone"
            ref="secondarySplide"
            :options="
              getSecondaryOptions('isPhone', isZoom && isPhone ? '339px' : null)
            "
          >
            <SplideSlide v-for="photo in photos">
              <div class="main-slider__body__thumbnails__item">
                <img
                  :src="photo"
                  alt=""
                  class="main-slider__body__thumbnails__item__img"
                />
              </div>
            </SplideSlide>
            <template v-slot:controls>
              <div class="splide__arrows">
                <button
                  ref="prevSlideBtn"
                  class="splide__arrow splide__arrow--prev test"
                ></button>
                <button
                  ref="nextSlideBtn"
                  class="splide__arrow splide__arrow--next"
                ></button>
              </div>
            </template>
          </Splide>
          <Splide
            @splide:moved="splideMoved"
            v-else-if="isPhone"
            ref="secondarySplide"
            :options="getSecondaryOptions('isPhone')"
          >
            <SplideSlide v-for="photo in photos">
              <div class="main-slider__body__thumbnails__item">
                <img
                  :src="photo"
                  alt=""
                  class="main-slider__body__thumbnails__item__img"
                />
              </div>
            </SplideSlide>
            <template v-slot:controls>
              <div class="splide__arrows">
                <button
                  ref="prevSlideBtn"
                  class="splide__arrow splide__arrow--prev test"
                ></button>
                <button
                  ref="nextSlideBtn"
                  class="splide__arrow splide__arrow--next"
                ></button>
              </div>
            </template>
          </Splide>
          <Splide
            @splide:moved="splideMoved"
            v-else-if="isMobile"
            ref="secondarySplide"
            :options="getSecondaryOptions('isMobile')"
          >
            <SplideSlide v-for="photo in photos">
              <div class="main-slider__body__thumbnails__item">
                <img
                  :src="photo"
                  alt=""
                  class="main-slider__body__thumbnails__item__img"
                />
              </div>
            </SplideSlide>
            <template v-slot:controls>
              <div class="splide__arrows">
                <button
                  ref="prevSlideBtn"
                  class="splide__arrow splide__arrow--prev test"
                ></button>
                <button
                  ref="nextSlideBtn"
                  class="splide__arrow splide__arrow--next"
                ></button>
              </div>
            </template>
          </Splide>
          <Splide
            @splide:moved="splideMoved"
            v-else
            ref="secondarySplide"
            :options="getSecondaryOptions()"
          >
            <SplideSlide v-for="photo in photos">
              <div class="main-slider__body__thumbnails__item">
                <img
                  :src="photo"
                  alt=""
                  class="main-slider__body__thumbnails__item__img"
                />
              </div>
            </SplideSlide>
            <template v-slot:controls>
              <div class="splide__arrows">
                <button
                  ref="prevSlideBtn"
                  class="splide__arrow splide__arrow--prev test"
                ></button>
                <button
                  ref="nextSlideBtn"
                  class="splide__arrow splide__arrow--next"
                ></button>
              </div>
            </template>
          </Splide>
        </div>
        <div class="main-slider__body__thumbnails__down-btn">
          <BetaButton
            styling="beta-zeta-btn"
            @click="goToNextSlide"
            :is-disabled="isLastSlide"
          >
            <SlideArrowIcon />
          </BetaButton>
        </div>
      </div>
      <!-- *** thumbnails END *** -->

      <!-- Current Slide -->
      <div class="main-slider__body__current-slide">
        <Splide
          v-if="isZoom && (isPhone || isMobile)"
          ref="primarySplide"
          :options="getPrimaryOptions('isPhone', isZoom)"
          @splide:click="$emit('zoom')"
        >
          <SplideSlide v-for="photo in photos">
            <img
              :src="photo"
              alt=""
              class="main-slider__body__current-slide__img"
            />
          </SplideSlide>
          <template v-slot:controls>
            <div class="splide__arrows">
              <button
                ref="prevSlideBtn"
                class="splide__arrow splide__arrow--prev test"
              ></button>
              <button
                ref="nextSlideBtn"
                class="splide__arrow splide__arrow--next"
              ></button>
            </div>
          </template>
        </Splide>
        <Splide
          v-else-if="isPhone"
          ref="primarySplide"
          :options="getPrimaryOptions('isPhone')"
          @splide:click="$emit('zoom')"
        >
          <SplideSlide>
            <img
              src="./assets/thumbnail_0.jpg"
              alt=""
              class="main-slider__body__current-slide__img"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="./assets/thumbnail_1.jpg"
              alt=""
              class="main-slider__body__current-slide__img"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="./assets/thumbnail_2.jpg"
              alt=""
              class="main-slider__body__current-slide__img"
            />
          </SplideSlide>
          <template v-slot:controls>
            <div class="splide__arrows">
              <button
                ref="prevSlideBtn"
                class="splide__arrow splide__arrow--prev test"
              ></button>
              <button
                ref="nextSlideBtn"
                class="splide__arrow splide__arrow--next"
              ></button>
            </div>
          </template>
        </Splide>
        <Splide
          v-else-if="isMobile"
          ref="primarySplide"
          :options="getPrimaryOptions('isMobile')"
          @splide:click="$emit('zoom')"
        >
          <SplideSlide>
            <img
              src="./assets/thumbnail_0.jpg"
              alt=""
              class="main-slider__body__current-slide__img"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="./assets/thumbnail_1.jpg"
              alt=""
              class="main-slider__body__current-slide__img"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="./assets/thumbnail_2.jpg"
              alt=""
              class="main-slider__body__current-slide__img"
            />
          </SplideSlide>
          <template v-slot:controls>
            <div class="splide__arrows">
              <button
                ref="prevSlideBtn"
                class="splide__arrow splide__arrow--prev"
              ></button>
              <button
                ref="nextSlideBtn"
                class="splide__arrow splide__arrow--next"
              ></button>
            </div>
          </template>
        </Splide>
        <Splide
          v-else
          ref="primarySplide"
          :options="getPrimaryOptions()"
          @splide:click="$emit('zoom')"
        >
          <SplideSlide v-for="photo in photos">
            <img
              :src="photo"
              alt=""
              class="main-slider__body__current-slide__img"
            />
          </SplideSlide>

          <template v-slot:controls>
            <div class="splide__arrows">
              <button
                ref="prevSlideBtn"
                class="splide__arrow splide__arrow--prev test"
              ></button>
              <button
                ref="nextSlideBtn"
                class="splide__arrow splide__arrow--next"
              ></button>
            </div>
          </template>
        </Splide>
      </div>
      <!-- *** Current Slide END *** -->
    </div>
    <div class="main-slider__close-btn">
      <BetaButton @click="$emit('zoom')" styling="beta-gamma-btn">
        <CloseIcon />
      </BetaButton>
    </div>
    <div ref="bg" class="main-slider__bg"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated, PropType, ref } from "vue";
import { BetaButton } from "@/shared/ui/buttons";
import { CloseIcon, SlideArrowIcon } from "@/shared/ui/icons";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { getPrimaryOptions, useMainSlider } from "./lib";
import { ProductPhoto } from "@/entities/Products/Product/model";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "MainSlider",
  components: {
    BetaButton,
    SlideArrowIcon,
    Splide,
    SplideSlide,
    CloseIcon,
  },
  emits: ["zoom"],
  props: {
    isZoom: {
      type: Boolean,
      required: false,
      default: false,
    },
    photos: {
      type: Object as PropType<ProductPhoto[]>,
      required: true,
    },
  },
  setup(props) {
    const slider = useMainSlider(props.isZoom);
    const store = useStore();
    const isFirstSlide = ref(true);
    const isLastSlide = ref(false);

    onUpdated(() => {
      document.documentElement.style.overflow = props.isZoom
        ? "hidden"
        : "visible";
      slider.primarySplide.value.splide.refresh();
    });

    const splideMoved = (value) => {
      if (value.index === 0) {
        isFirstSlide.value = true;
        isLastSlide.value = false;
      } else if (value.index === value.length - 1) {
        isFirstSlide.value = false;
        isLastSlide.value = true;
      } else {
        isFirstSlide.value = false;
        isLastSlide.value = false;
      }
    };

    return {
      ...slider,
      isPhone: computed(() => store.getters["getIsPhone"]),
      isMobile: computed(() => store.getters["getIsMobile"]),
      isFirstSlide,
      isLastSlide,
      splideMoved,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~@splidejs/splide/dist/css/themes/splide-default.min.css";
.main-slider {
  width: 100%;
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
  // *** Body *** //
  &__body {
    display: flex;
    justify-content: space-between;
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
    &__thumbnails {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-right: 22px;
      width: 80px;
      height: 600px;
      padding: 20px 0;
      &__items {
      }
      &__item {
        width: 80px;
        height: 80px;
        background: $clr-alpha-delta;
        border-radius: 18px;
        overflow: hidden;
        border: 2px solid transparent;
        transition: border-color 0.3s ease-in-out;
        cursor: pointer;
        &__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &__up-btn,
      &__down-btn {
        width: 40px;
      }
      &__up-btn {
        transform: rotate(90deg);
      }
      &__down-btn {
        transform: rotate(-90deg);
      }
    }
    &__current-slide {
      width: 480px;
      height: 600px;
      overflow: hidden;

      &__img {
        width: 100%;
        height: 100%;
        border-radius: 25px;
        object-fit: cover;
      }
    }
  }
  // *** Body END *** //

  &__close-btn {
    display: none;
    width: 40px;
    height: 40px;
    position: fixed;
    top: 32px;
    right: 32px;
  }

  &__bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 10;
    opacity: 0;
    display: none;
  }

  // *** Splide *** //
  .splide__arrow {
    display: none;
  }
  .splide__slide.is-active {
    border-color: transparent !important;
  }
  .splide__slide.is-active > div {
    border: 2px solid $clr-zeta;
  }
  // *** Splide END *** //
}
.main-slider.zoom {
  background-color: white;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 15;
  .main-slider__body {
    padding: 10vh 80px;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    &__thumbnails {
      height: 100%;
    }
    &__current-slide {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &__img {
        height: 100%;
        border-radius: 25px;
        max-height: 855px;
      }
    }
  }
  .main-slider__close-btn {
    display: block;
    z-index: 25;
  }
}
@media screen and (min-width: 738px) and (max-width: 1364px),
  (-webkit-min-device-pixel-ratio: 3) {
  .main-slider {
    &__body {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      &__current-slide {
        margin-bottom: 30px;
      }

      &__thumbnails {
        height: auto;
        flex-direction: row;
        width: 600px;
        margin-right: 0;
        &__item {
          margin: 0 auto;
        }
        &__down-btn {
          transform: rotate(-180deg);
        }
        &__up-btn {
          transform: rotate(0deg);
        }
      }
    }
  }
}
@media screen and (min-width: 738px) and (max-width: 1364px),
  (-webkit-min-device-pixel-ratio: 3) {
  .main-slider.zoom {
    overflow-y: scroll;
    .main-slider__body {
      height: auto;
      padding: 114px 86px 42px 86px;
      &__current-slide {
        height: 740px;
      }
      &__thumbnails {
        height: 62px;
      }
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .main-slider {
    &__body {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      &__current-slide {
        width: 100%;
        text-align: center;
        height: auto;
        margin-bottom: 30px;
        & > div {
          margin: 0 auto;
        }
      }
      .main-slider__body__thumbnails {
        width: 100%;
        margin-right: 0;
        justify-content: center;
        height: auto;
        flex-direction: row;
        &__item {
          max-width: 56px;
          max-height: 56px;
          margin: 0 auto;
        }
        &__up-btn,
        &__down-btn {
          display: none;
        }
      }
    }
  }
  .main-slider.zoom {
    background-color: white;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 15;
    overflow-y: scroll;
    .main-slider__body {
      padding: 0;
      margin-top: 10vh;
      justify-content: flex-start;
      align-items: center;
      height: auto;
      &__current-slide {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
      }
      &__thumbnails {
        height: auto;
        flex-direction: row;
        width: 100%;
        margin-right: 0;
        &__items {
          margin: 0 auto;
        }
        &__up-btn,
        &__down-btn {
          display: none;
        }
      }
    }
  }
}
</style>

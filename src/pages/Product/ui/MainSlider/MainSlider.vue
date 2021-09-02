<template>
  <div class="main-slider">
    <div class="main-slider__body">
      <div class="main-slider__body__thumbnails">
        <div class="main-slider__body__thumbnails__up-btn">
          <BetaButton styling="beta-zeta-btn">
            <SlideArrowIcon />
          </BetaButton>
        </div>
        <div class="main-slider__body__thumbnails__items">
          <Splide :options="options">
            <SplideSlide>
              <div class="main-slider__body__thumbnails__item">
                <img
                  src="./assets/thumbnail_0.jpg"
                  alt=""
                  class="main-slider__body__thumbnails__item__img"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="main-slider__body__thumbnails__item">
                <img
                  src="./assets/thumbnail_1.jpg"
                  alt=""
                  class="main-slider__body__thumbnails__item__img"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="main-slider__body__thumbnails__item">
                <img
                  src="./assets/thumbnail_2.jpg"
                  alt=""
                  class="main-slider__body__thumbnails__item__img"
                />
              </div>
            </SplideSlide>

            <SplideSlide>
              <div class="main-slider__body__thumbnails__item"></div>
            </SplideSlide>
            <SplideSlide>
              <div class="main-slider__body__thumbnails__item"></div>
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
          <BetaButton styling="beta-zeta-btn">
            <SlideArrowIcon />
          </BetaButton>
        </div>
      </div>
      <div class="main-slider__body__current-slide">
        <img
          src="./assets/thumbnail_2.jpg"
          alt=""
          class="main-slider__body__current-slide__img"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BetaButton } from "@/shared/ui/buttons";
import { SlideArrowIcon } from "@/shared/ui/icons";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default defineComponent({
  name: "MainSlider",
  components: {
    BetaButton,
    SlideArrowIcon,
    Splide,
    SplideSlide,
  },
  setup() {
    const options = {
      type: "loop",
      perPage: 5,
      perMove: 1,
      pagination: false,
      direction: "ttb",
      height: "480px",
    };

    return {
      options,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~@splidejs/splide/dist/css/themes/splide-default.min.css";
.main-slider {
  width: 100%;
  // *** Body *** //
  &__body {
    display: flex;
    justify-content: space-between;

    &__thumbnails {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 80px;
      height: 600px;
      &__items {
      }
      &__item {
        width: 80px;
        height: 80px;
        background: $clr-alpha-delta;
        border-radius: 18px;
        overflow: hidden;
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
      border-radius: 25px;
      overflow: hidden;
      &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  // *** Body END *** //
  .splide__arrow {
    display: none;
  }
}
</style>

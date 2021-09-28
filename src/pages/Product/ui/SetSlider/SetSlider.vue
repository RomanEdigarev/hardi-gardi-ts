<template>
  <div class="set-slider">
    <div class="set-slider__header">
      <div class="set-slider__header__title">Состав набора</div>
    </div>
    <div class="set-slider__body">
      <div class="set-slider__body__slider">
        <div class="set-slider__body__slider__prev-btn" @click="goToPrevSlide">
          <BetaButton styling="beta-zeta-btn">
            <SlideArrowIcon />
          </BetaButton>
        </div>
        <div class="set-slider__body__slider__items">
          <Splide :options="options">
            <SplideSlide v-for="product in products">
              <div class="set-slider__body__item">
                <img
                  class="set-slider__body__item__img"
                  :src="product.img"
                  alt=""
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

        <div class="set-slider__body__slider__next-btn" @click="goToNextSlide">
          <BetaButton @click="" styling="beta-zeta-btn">
            <SlideArrowIcon />
          </BetaButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { SlideArrowIcon } from "@/shared/ui/icons";
import { BetaButton } from "@/shared/ui/buttons";
import { Product } from "@/entities/Products/Product/model";
export default defineComponent({
  name: "SetSlider",
  components: {
    Splide,
    SplideSlide,
    BetaButton,
    SlideArrowIcon,
  },
  props: {
    products: {
      type: Object as PropType<Product[]>,
      required: true,
    },
  },
  setup() {
    const options = {
      type: "loop",
      perPage: 3,
      perMove: 3,
      gap: 15,
      width: "378px",
      rewind: true,
    };

    const nextSlideBtn = ref<HTMLElement>(null);
    const prevSlideBtn = ref<HTMLElement>(null);

    const goToNextSlide = () => {
      nextSlideBtn.value.click();
    };
    const goToPrevSlide = () => {
      prevSlideBtn.value.click();
    };

    return {
      options,
      nextSlideBtn,
      prevSlideBtn,
      goToNextSlide,
      goToPrevSlide,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~@splidejs/splide/dist/css/themes/splide-default.min.css";
.set-slider {
  // *** Header *** //
  &__header {
    margin-bottom: 24px;
    &__title {
      font-weight: 600;
      font-size: 18px;
      line-height: 1.22;
      color: $clr-phi;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    &__item {
      width: 116px;
      height: 145px;
      &__img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        object-fit: cover;
      }
    }
    &__slider {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &__items {
      }
      &__prev-btn,
      &__next-btn {
        flex-shrink: 0;
        width: 38px;
        height: 38px;
        margin: 0 10px 56px 10px;
      }
      &__next-btn {
        transform: rotate(180deg);
      }
    }
  }
  // *** Body END *** //
}
</style>
<style lang="scss">
.set-slider {
  // *** Splide *** //
  .splide__arrows {
    display: none;
  }
  .splide__pagination {
    margin-top: 34px;
    position: static;
    transform: none;
    &__page {
      width: 11px;
      height: 11px;
      border: 3px solid $clr-zeta;
      background: $clr-tau;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
      &:hover {
        opacity: 0.5;
      }
    }
    &__page.is-active {
      transform: none;
      background: $clr-zeta;
    }
  }

  // *** Splide END *** //
}
</style>

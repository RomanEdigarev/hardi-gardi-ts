<template>
  <div class="footer-slider">
    <div class="footer-slider__header">
      <div class="footer-slider__header__title">{{ title }}</div>
      <div class="footer-slider__header__btn-container">
        <div class="footer-slider__header__btn" @click="goToPrevSlide">
          <BetaButton styling="beta-epsilon-btn">
            <SlideArrowIcon />
          </BetaButton>
        </div>
        <div class="footer-slider__header__btn" @click="goToNextSlide">
          <BetaButton styling="beta-epsilon-btn">
            <SlideArrowIcon />
          </BetaButton>
        </div>
      </div>
    </div>
    <div class="footer-slider__body">
      <Splide v-if="withHomeCards" :options="getOptionsForSplide()">
        <SplideSlide>
          <div class="footer-slider__body__item">
            <ProductCardHome />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="footer-slider__body__item">
            <ProductCardHome />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="footer-slider__body__item">
            <ProductCardHome />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="footer-slider__body__item">
            <ProductCardHome />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="footer-slider__body__item">
            <ProductCardHome />
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
      <Splide v-else :options="getOptionsForSplide()">
        <SplideSlide>
          <div class="footer-slider__body__item">
            <ProductCardCatalog />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="footer-slider__body__item">
            <ProductCardCatalog />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="footer-slider__body__item">
            <ProductCardCatalog />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="footer-slider__body__item">
            <ProductCardCatalog />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="footer-slider__body__item">
            <ProductCardCatalog />
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
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { SlideArrowIcon } from "@/shared/ui/icons";
import { BetaButton } from "@/shared/ui/buttons";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ProductCardCatalog, ProductCardHome } from "@/widgets";
import {useStore} from "@/services/vuex";

export default defineComponent({
  name: "FooterSlider",
  components: {
    BetaButton,
    SlideArrowIcon,
    ProductCardCatalog,
    ProductCardHome,
    Splide,
    SplideSlide,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    withHomeCards: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const store = useStore()
    const getOptionsForSplide = () => {
      if (props.withHomeCards) {
        return {
          type: "loop",
          perPage: 1,
          perMove: 1,
          gap: "30px",
          pagination: false,
        };
      } else {
        return {
          type: "loop",
          perPage: store.state.isMobile ? 3 : 2,
          perMove: 1,
          gap: "30px",
          pagination: false,
        };
      }
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
      nextSlideBtn,
      prevSlideBtn,
      goToNextSlide,
      goToPrevSlide,
      getOptionsForSplide,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~@splidejs/splide/dist/css/themes/splide-default.min.css";
.footer-slider {
  color: $clr-phi;
  // *** Header *** //
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 27px;
    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 1.25;
    }
    &__btn-container {
      display: flex;
      width: 102px;
      justify-content: space-between;
    }
    &__btn {
      width: 46px;
      height: 46px;
    }
    &__btn:nth-child(2) {
      transform: scale(-1, 1);
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
  }
  // *** Body END *** //

  .splide__arrow {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .footer-slider {}
  }
}
</style>

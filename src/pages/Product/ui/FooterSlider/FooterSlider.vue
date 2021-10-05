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
      <Splide ref="slider" v-if="withHomeCards" :options="options">
        <SplideSlide v-for="product in products">
          <div class="footer-slider__body__item">
            <ProductCardHome :product="product" />
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
      <Splide ref="slider" v-else :options="options">
        <SplideSlide v-for="product in products">
          <div class="footer-slider__body__item">
            <ProductCardCatalog :product="product" />
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
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  onUpdated,
  ref,
} from "vue";
import { SlideArrowIcon } from "@/shared/ui/icons";
import { BetaButton } from "@/shared/ui/buttons";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ProductCardCatalog, ProductCardHome } from "@/widgets";
import { useStore } from "@/services/vuex";
import { Product } from "@/entities/Products/Product/model";

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
    products: {
      type: Object as PropType<Product[]>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const isMobile = computed(() => store.getters["getIsMobile"]);
    const isPhone = computed(() => store.getters["getIsPhone"]);
    const slider = ref(null);
    const options = computed(() => {
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
          perPage: isMobile.value ? (isPhone.value ? 2 : 3) : 2,
          perMove: 1,
          gap: "20px",
          pagination: false,
        };
      }
    });
    onUpdated(() => {
      slider.value.splide.refresh();
    });

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
      options,
      isMobile,
      isPhone,
      slider,
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
    &__item {
      height: 472px;
    }
  }

  // *** Body END *** //

  .splide__arrow {
    display: none;
  }
}

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .footer-slider {
    &__header {
      &__title {
        font-size: 21px;
        line-height: 26px;
      }
      &__btn-container {
        width: 92px;
      }
      &__btn {
        width: 40px;
        height: 40px;
      }
    }
  }
  :deep .catalog-product-card {
    max-height: 388px;
    max-width: 220px;
    &__title {
      font-size: 12px;
      line-height: 1.33;
    }
    &__shop-btn {
      display: block;
      width: 52px;
      height: 52px;
    }
  }
  :deep .product-card-info-phone__add-to-shop-btn {
    width: 44px;
    height: 44px;
  }
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .footer-slider {
    &__header {
      &__title {
        font-size: 18px;
        line-height: 1.22;
      }
      &__btn-container {
        width: 92px;
      }
      &__btn {
        width: 40px;
        height: 40px;
      }
    }
    &__body__item {
      & > div {
        margin: 0 auto;
        justify-content: center;
      }
    }
  }
  :deep .catalog-product-card {
    max-height: 326px;
    &__image-wrapper {
      max-height: 175px;
    }
    &__image {
      max-height: 175px;
    }
    &__title {
      font-size: 12px;
      line-height: 1.33;
    }
    &__shop-btn {
      display: block;
      width: 44px;
      height: 44px;
    }
  }
  :deep .product-card-info-phone__add-to-shop-btn {
    width: 44px;
    height: 44px;
  }
}
</style>

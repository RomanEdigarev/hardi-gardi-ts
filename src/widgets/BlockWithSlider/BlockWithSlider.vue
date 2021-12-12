<template>
  <div class="block-with-slider" :class="{'is-actions': isActions}">
    <div ref="imageCard" class="block-with-slider__image-card-container">
      <ImageProductCard
        :title="currentProduct.title"
        :img-path="IMG_URL + currentProduct.img"
      />
      <div class="block-with-slider__image-card-container__bg-container">
        <slot name="image-bg-container"></slot>
      </div>
    </div>
    <div class="block-with-slider__content-container">
      <div class="block-with-slider__section-title-container">
        <span class="block-with-slider__section-title title">{{ title }}</span>
        <div class="block-with-slider__section-title__bg-container">
          <slot name="title-bg-container"></slot>
        </div>
      </div>
      <div class="block-with-slider__info-card-container">
        <div class="block-with-slider__info-card">
          <InfoProductCard
            ref="infoProduct"
            v-bind="currentProduct"
            bg-color="#FFEDC6"
          />
        </div>
        <div class="block-with-slider__slider-panel">
          <SliderPanel
            @next-slide="nextProduct"
            @prev-slide="prevProduct"
            :count="products.length"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent,PropType, ref } from "vue";
import { SliderPanel } from "@/features";
import { Product } from "@/entities/Products/Product/model";
import InfoProductCard from "@/widgets/Product/InfoProductCard/InfoProductCard.vue";
import ImageProductCard from "@/widgets/Product/ImageProductCard/ImageProductCard.vue";
import { useAnimation } from "./animations";
import {IMG_URL} from "@/shared/config";

export default defineComponent({
  name: "BlockWithSlider",
  components: { SliderPanel, InfoProductCard, ImageProductCard },
  props: {
    products: {
      type: Object as PropType<Product[]>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isActions: {
      type: Boolean,
      default: false
    }
  },
  setup({ products }) {
    const infoProduct = ref<InstanceType<typeof InfoProductCard>>();
    const imageCard = ref<HTMLElement>(null);
    const infoContent = computed<HTMLElement>(() => {
      return infoProduct.value.$refs.content as HTMLElement;
    });
    const currentSlide = ref(0);
    let slideNumber = 0;
    const currentProduct = computed<Product>(
      () => products[currentSlide.value]
    );
    const setNewSlide = () => {
      currentSlide.value = slideNumber;
    };
    const animation = computed(() => {
      return useAnimation(infoContent.value, imageCard.value, setNewSlide);
    });

    const nextProduct = () => {
      slideNumber++;
      animation.value.play();
    };

    const prevProduct = () => {
      slideNumber--;
      animation.value.play();
    };

    return {
      nextProduct,
      infoProduct,
      currentProduct,
      currentSlide,
      prevProduct,
      imageCard,
      IMG_URL
    };
  },
});
</script>

<style lang="scss" scoped>
.block-with-slider {
  width: 100%;
  height: 600px;
  display: flex;

  // *** Containers *** //

  &__image-card-container {
    height: 100%;
    width: 480px;
    flex: 0.4;
    position: relative;

    &__bg-container {
      position: absolute;
      bottom: -21px;
      right: 0;
    }
  }

  &__content-container {
    height: 100%;
    flex: 0.6;
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__section-title-container {
    position: relative;
    margin-bottom: 90px;
    max-width: 465px;
    color: $clr-nu;
  }

  &__info-card-container {
    width: 750px;
    height: 300px;
    position: absolute;
    top: 33.333%;
    right: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  // *** Containers END *** //

  &__section-title {
    display: inline-block;
    text-align: center;
    white-space: break-spaces;

    &__bg-container {
      position: absolute;
      top: -18px;
      left: 0;
      z-index: -1;
      width: 496px;
    }
  }

  &__info-card {
    margin-bottom: 40px;
    width: 100%;
    min-height: 300px;
  }

  &__slider-panel {
    width: 267px;
  }

  :deep .product-card-info {
    &__content {
      justify-content: space-between;
      div {
        margin-bottom: 0;
      }
    }
  }
}
.is-actions {
  :deep .product-card-info {
    &__price {
      display: none;
    }
    &__favorite-btn-container, &__shop-btn-container {
      display: none;
    }
  }
}
@media screen and (min-width: 736px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .block-with-slider {
    height: 500px;
    position: relative;
    &__content-container {
      flex-direction: column;
      position: static;
      margin-left: -75px;
    }
    &__info-card-container {
      width: auto;
      height: auto;
      position: static;
    }
    &__info-card {
      max-width: 450px;
    }
    &__section-title-container {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -140%);
    }
    &__section-title {
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      text-align: center;
      &__bg-container {
        top: -12px;
        left: -6%;
        width: 396px;
        :deep svg {
          width: 100% !important;
          height: 100% !important;
        }
      }
    }
    &__image-card-container {
      min-width: 345px;
      max-height: 431px;
    }
    &__slider-panel {
      position: absolute;
      bottom: -18px;
      left: 50%;
      transform: translateX(-50%);
    }
    :deep .product-card-info {
      width: 450px;
      &__content {
        padding: 34px;
      }
      &__title {
        max-width: 250px;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 11px;
      }
      &__price {
        margin-bottom: 32px;
      }
      &__description {
        max-width: 250px;
        margin-bottom: 26px;
        font-size: 16px;
        line-height: 1.5;
        max-height: 72px;
        overflow: hidden;
        /* or 150% */
      }
    }
  }
}
@media screen and (min-width: 425px) and (max-width: 767px) {
  .block-with-slider {
    &__image-card-container {
      min-width: auto;
    }
    :deep .product-card-info {
      width: auto;
    }
  }
}
</style>

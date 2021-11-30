<template>
  <div class="block-with-slider-phone" :class="{'is-actions': isActions}">

    <div class="block-with-slider-phone__header">
      <div class="block-with-slider-phone__header__title">
        <span>{{ title }}</span>
        <div class="block-with-slider-phone__header__title__bg-container">
          <slot name="title-bg-container"></slot>
        </div>
      </div>
    </div>
    <div class="block-with-slider-phone__body">
      <div class="block-with-slider-phone__body__left-btn">
        <BetaButton styling="beta-zeta-btn" @click="prevProduct">
          <SlideArrowIcon />
        </BetaButton>
      </div>
      <div ref="imageCard" class="block-with-slider-phone__body__image-slider">
        <ImageProductCard
          :title="currentProduct.title"
          :img-path="currentProduct.img"
        />
      </div>
      <div class="block-with-slider-phone__body__right-btn">
        <BetaButton styling="beta-zeta-btn" @click="nextProduct">
          <SlideArrowIcon />
        </BetaButton>
      </div>
    </div>
    <div class="block-with-slider-phone__footer">
      <div class="block-with-slider-phone__footer__product-info">
        <InfoProductCard  ref="infoProduct" v-bind="currentProduct" bg-color="#FFEDC6" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from "vue";
import InfoProductCard from "@/widgets/Product/InfoProductCard/InfoProductCard.vue";
import { Product } from "@/entities/Products/Product/model";
import ImageProductCard from "@/widgets/Product/ImageProductCard/ImageProductCard.vue";
import {BetaButton} from "@/shared/ui/buttons";
import {SlideArrowIcon} from "@/shared/ui/icons";
import {useAnimation} from "@/widgets/BlockWithSlider/animations";

export default defineComponent({
  name: "BlockWithSliderPhone",
  components: { InfoProductCard, ImageProductCard, BetaButton, SlideArrowIcon },
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
      console.log(currentProduct.value)
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
    };
  },
});
</script>

<style lang="scss" scoped>
.block-with-slider-phone {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__header {
    &__title {
      max-width: 199px;
      margin-bottom: 32px;
      text-align: center;
      position: relative;
      span {
        font-weight: $semi-bold;
        font-size: 28px;
        line-height: 34px;
        color: #5f73aa;
      }
      &__bg-container {
        width: 238px;
        position: absolute;
        top: 0;
        left: -10px;
        z-index: -1;
      }
    }
  }
  &__body {
    position: relative;
    &__image-slider {
      width: 64%;
      height: auto;
      margin: 0 auto;
    }
    &__left-btn, &__right-btn {
      position: absolute;
      width: 40px;
      height: 40px;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &__left-btn {
      left: 28px;
    }
    &__right-btn {
      transform: translate(50%, -50%)rotate(180deg);
      right: 28px;
    }
  }
  &__footer {
    &__product-info {
      margin-top: -26px;
    }
  }



  :deep .product-card-info {
    width: 100%;
    height: 62vw;
    max-width: none;
    max-height: 300px;
    &__content {
      padding: 7vw;
    }
    &__description {
      max-height: 72px;
      overflow: hidden;
      margin-bottom: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    &__price {
      &__current {
        font-size: 22px;
        line-height: 24px;
      }
      &__prev {
        font-size: 16px;
        line-height: 18px;
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
@media screen and (max-width: 375px) {
  .block-with-slider-phone {
    &__body__image-slider {
      width: 250px;
    }
    :deep .product-card-info {
      height: 258px;
      &__image {
        width: 250px;
      }
      &__content {
        padding: 26px;
        justify-content: space-between;
      }
      &__favorite-btn-container,
      &__shop-btn-container {
        width: 44px;
        display: block;
      }
    }
  }
}
</style>

<template>
  <div class="block-with-slider">
    <div class="block-with-slider__image-card-container">
      <ImageProductCard
        :title="currentProduct.title"
        :img-path="currentProduct.img"
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
          <SliderPanel @next-slide="nextProduct" :count="5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import anime from "animejs";
import { ImageProductCard, InfoProductCard } from "@/widgets";
import { SliderPanel } from "@/features";
import { Product } from "@/entities/Products/Product/model";
import { getUserCity } from "@/services/api";

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
  },
  setup({ products }) {
    const infoProduct = ref<InstanceType<typeof InfoProductCard>>();
    const currentProduct = ref<Product>(products[0]);

    const nextProduct = (e) => {
      getUserCity().then((response) => {
        console.log(response);
      });
      const infoContent: HTMLElement = infoProduct?.value.$refs
        .content as HTMLElement;
      anime({
        targets: infoContent,
        opacity: [1, 0.5],
        translateY: [0, 20],
        duration: 300,
        easing: "linear",
      });
    };

    return {
      nextProduct,
      infoProduct,
      currentProduct,
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

    &__bg-container {
      position: absolute;
      top: -25px;
      left: 0;
      z-index: -1;
    }
  }

  &__info-card {
    margin-bottom: 40px;
  }

  &__slider-panel {
    width: 267px;
  }
}
</style>

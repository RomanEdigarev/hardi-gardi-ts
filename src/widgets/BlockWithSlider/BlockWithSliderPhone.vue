<template>
  <div class="block-with-slider-phone">
    <div class="block-with-slider-phone__header">
      <div class="block-with-slider-phone__header__title">
        <span>{{ title }}</span>
        <div class="block-with-slider-phone__header__title__bg-container">
          <slot name="title-bg-container"></slot>
        </div>
      </div>
    </div>
    <div class="block-with-slider-phone__body">
      <div class="block-with-slider-phone__body__image-slider">
        <ImageProductCard
          :title="currentProduct.title"
          :img-path="currentProduct.img"
        />
      </div>
    </div>
    <div class="block-with-slider-phone__footer">
      <div class="block-with-slider-phone__footer__product-info">
        <InfoProductCard v-bind="currentProduct" bg-color="#FFEDC6" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import InfoProductCard from "@/widgets/Product/InfoProductCard/InfoProductCard.vue";
import { Product } from "@/entities/Products/Product/model";
import ImageProductCard from "@/widgets/Product/ImageProductCard/ImageProductCard.vue";

export default defineComponent({
  name: "BlockWithSliderPhone",
  components: { InfoProductCard, ImageProductCard },
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
    const currentProduct = ref<Product>(products[0]);
    return {
      currentProduct,
    };
  },
});
</script>

<style lang="scss" scoped>
.block-with-slider-phone {
  width: 339px;
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
    &__image-slider {
      width: 250px;
      height: 312px;
    }
  }
  &__footer {
    &__product-info {
      margin-top: -26px;
    }
  }
}
</style>

<template>
  <div class="home-product-card-phone">
    <div class="home-product-card-phone__left">
      <ImageProductCard :img-path="product.img" />
    </div>
    <div class="home-product-card-phone__right">
      <InfoProductCardPhone
        :title="product.title"
        :description="product.description"
        :current-price="product.currentPrice"
        :prev-price="product.prevPrice"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ImageProductCard, InfoProductCardPhone } from "@/widgets";
import { useProduct } from "@/entities/Products/Product/lib";

export default defineComponent({
  name: "ProductCardHomePhone",
  components: { InfoProductCardPhone, ImageProductCard },
  props: {
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { product } = useProduct();

    return {
      product,
    };
  },
});
</script>

<style lang="scss" scoped>
.home-product-card-phone {
  width: 100%;
  max-width: 339px;
  max-height: 230px;
  display: flex;
  &__left {
    max-width: 159px;
  }

  &__right {
    max-width: 180px;
  }
}
</style>

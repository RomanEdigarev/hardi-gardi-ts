<template>
  <div class="home-product-card" :class="{ isReverse }">
    <!-- Product Image -->
    <div class="home-product-card__image-wrapper">
      <ImageProductCard :img-path="product.img" />
    </div>

    <!-- Product Info -->
    <div class="home-product-card__info-wrapper">
      <InfoProductCard v-bind="product" :is-simple="isSimple" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { InfoProductCard, ImageProductCard } from "@/widgets";
import { Card } from "@/shared/ui";
import { useProduct } from "@/entities/Products/Product/lib";

export default defineComponent({
  name: "ProductCardHome",
  components: { InfoProductCard, Card, ImageProductCard },
  props: {
    isReverse: {
      type: Boolean,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    isSimple: {
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
.home-product-card {
  width: 100%;
  height: 100%;
  display: flex;
  color: $clr-phi;

  &__image-wrapper {
    min-width: 270px;
    width: 46.4%;
  }
  &__info-wrapper {
    width: 100%;
  }
}

.isReverse {
  flex-direction: row-reverse;
}
</style>

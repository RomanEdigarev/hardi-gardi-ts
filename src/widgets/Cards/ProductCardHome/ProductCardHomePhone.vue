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
  max-width: 100%;
  max-height: none;
  display: flex;
  &__left {
    max-width: 46.9%;
  }
  &__right {
    max-width: 53.1%;
  }

  :deep .product-card-info-phone {
    max-width: none;
    height: 100%;
    max-height: none;
    padding-left: 5vw;

    &__header__title {
      font-size: 3vw;
    }
    &__body {
      &__text {
        font-size: 3vw;
      }
    }
    &__footer__price {
      div {
        font-size: 3vw;
      }
    }
    &__add-to-shop-btn {
      width: 44px;
    }
  }
}
@media screen and (max-width: 375px) {
  .home-product-card-phone {
    max-height: 230px;
  }
}
</style>

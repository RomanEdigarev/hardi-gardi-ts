<template>
  <div class="home-product-card-phone">
    <div class="home-product-card-phone__left">
      <ImageProductCard :img-path="IMG_URL + product.img" />
    </div>
    <div class="home-product-card-phone__right">
      <InfoProductCardPhone
        v-bind="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import { ImageProductCard, InfoProductCardPhone } from "@/widgets";
import {Product} from "@/entities/Products/Product/model";
import {IMG_URL} from "@/shared/config";

export default defineComponent({
  name: "ProductCardHomePhone",
  components: { InfoProductCardPhone, ImageProductCard },
  props: {
    isFavorite: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup() {
    return {
      IMG_URL
    }
  },
});
</script>

<style lang="scss" scoped>
.home-product-card-phone {
  width: 100%;
  max-width: 100%;
  max-height: 230px;
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
        font-size: 14px;
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

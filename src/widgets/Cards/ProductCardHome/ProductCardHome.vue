<template>
  <div class="home-product-card" :class="{ isReverse }">
    <!-- Product Image -->
    <div class="home-product-card__image-wrapper">
      <ImageProductCard :img-path="product.img" />
    </div>

    <!-- Product Info -->
    <div class="home-product-card__info-wrapper">
      <InfoProductCardPhone
        v-if="isPhone"
        v-bind="product"
        :is-simple="isSimple"
      />
      <InfoProductCard v-else v-bind="product" :is-simple="isSimple" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import {
  InfoProductCard,
  ImageProductCard,
  InfoProductCardPhone,
} from "@/widgets";
import { Card } from "@/shared/ui";
import { useProduct } from "@/entities/Products/Product/lib";
import { useStore } from "@/services/vuex";
import { Product } from "@/entities/Products/Product/model";

export default defineComponent({
  name: "ProductCardHome",
  components: { InfoProductCard, InfoProductCardPhone, Card, ImageProductCard },
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
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup() {
    const isPhone = computed(() => useStore().state.isPhone);

    return {
      isPhone,
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

  :deep .product-card-info {
    &__content {
      padding: 34px 36px;
      //justify-content: space-between;
    }
    &__title {
      -webkit-line-clamp: 4;
    }
    &__link {
      display: none;
    }
    &__price {
      justify-content: flex-start;
      flex-direction: row;
      &__current {
        margin-right: 0;
      }
      &__prev {
        margin-right: 17px;
        span {
          text-decoration: line-through;
        }
        span:first-child {
          display: none;
        }
      }
    }

    &__favorite-btn-container {
      width: 36px;
      height: 36px;
      .add-to-favorite__favorite-btn-container {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.isReverse {
  flex-direction: row-reverse;
}

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .home-product-card {
    :deep .product-card-info {
      &__title {
        font-size: 20px;
        line-height: 24px;
        max-width: 289px;
        margin-bottom: 44px;
      }
      &__price {
        margin-bottom: 41px;
      }
      &__description {
        overflow: hidden;
        max-width: 319px;
        max-height: 72px;
      }
      &__link {
        display: none;
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .home-product-card {
    &__image-wrapper {
      min-width: auto;
      max-width: 159px;
      max-height: 230px;
    }
    &__info-wrapper {
      max-width: 180px;
      max-height: 230px;
    }
  }
}
</style>

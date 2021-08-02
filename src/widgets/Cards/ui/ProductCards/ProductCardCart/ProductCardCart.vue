<template>
  <div class="cart-product-card-wrapper">
    <Card borderRadiusPX="25">
      <template v-slot:content>
        <div class="cart-product-card">
          <!-- Product Image -->
          <div class="cart-product-card__image-wrapper">
            <img class="cart-product-card__image" :src="img" :alt="title" />
          </div>

          <!-- Product Info -->
          <div class="cart-product-card__info-wrapper">
            <div class="cart-product-card__info">
              <div class="cart-product-card__title">{{ title }}</div>
              <div class="cart-product-card__price">
                <div class="cart-product-card__price__prev">
                  {{ prevPrice }}&#8381;
                </div>
                <div class="cart-product-card__price__current">
                  {{ currentPrice }} &#8381;/шт
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Card>

    <!-- buttons -->
    <div class="cart-product-card__favorite-btn">
      <FavoriteButton :isActive="isFavorite" />
    </div>
    <div class="cart-product-card__shop-btn">
      <ShopButton />
    </div>
  </div>
</template>

<script lang="ts">
import Card from "../../../../../shared/ui/Card/Card.vue";
import { useProductCard } from "../../../../../features/InfoProductCard/lib";
import { FavoriteButton, ShopButton } from "@/shared/ui/buttons";
import {defineComponent} from "vue";

export default defineComponent({
  name: "ProductCardHome",
  components: {
    Card,
    FavoriteButton,
    ShopButton,
  },
  props: {
    isSearchResult: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { card } = useProductCard();
    return {
      ...card,
    };
  },
});
</script>

<style lang="scss" scoped>

.cart-product-card-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.cart-product-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  color: $clr-phi;
  background-color: $clr-alpha-delta;

  &__image-wrapper {
    height: 100%;
    flex: 0.4;
    margin-bottom: 12px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }

  &__info-wrapper {
    position: relative;
    flex: 0.6;
  }

  &__info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: $clr-alpha-delta;
  }

  &__title {
    font-weight: $bold;
    margin-bottom: 32px;
  }

  &__price {
    margin-bottom: 27px;

    &__prev {
      font-weight: $bold;
      margin-right: 17px;
      text-decoration: line-through;
      margin-bottom: 4px;
    }

    &__current {
      font-size: 22px;
      font-weight: $bold;
      color: $clr-zeta;
    }
  }

  &__favorite-btn,
  &__shop-btn {
    position: absolute;
    width: 60px;
    height: 60px;
    right: 15px;
  }

  &__favorite-btn {
    width: 36px;
    height: 36px;
  }

  &__favorite-btn {
    top: 15px;
  }

  &__shop-btn {
    bottom: 15px;
  }
}

.isSearchResult {
  .cart-product-card {
    flex-direction: row;

    &__image-wrapper {
      flex: 0.3;
    }

    &__image {
      object-fit: contain;
    }

    &__info {
      justify-content: center;
    }

    &__title {
      font-size: 13px;
      margin-bottom: 9px;
      line-height: 1.3;
    }

    &__price {
      display: flex;
      align-items: center;
      margin-bottom: 0;

      &__current {
        font-size: 16px;
      }

      &__prev {
        font-size: 14px;
        margin-bottom: 0;
        margin-right: 9px;
      }
    }

    &__favorite-btn {
      display: none;
    }

    &__shop-btn {
      width: 44px;
      height: 44px;
    }
  }
}
</style>

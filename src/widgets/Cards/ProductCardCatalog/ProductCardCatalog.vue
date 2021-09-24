<template>
  <div class="catalog-product-card-wrapper" :class="{ isSearchResult, isCart }">
    <Card borderRadiusPX="25">
      <template v-slot:content>
        <div class="catalog-product-card">
          <!-- Product Image -->
          <div class="catalog-product-card__image-wrapper">
            <img class="catalog-product-card__image" :src="img" :alt="title" />
          </div>

          <!-- Product Info -->
          <div class="catalog-product-card__info-wrapper">
            <div class="catalog-product-card__info">
              <div class="catalog-product-card__title">{{ title }}</div>
              <div v-if="isCart" class="catalog-product-card__counter">
                counter
              </div>
              <div class="catalog-product-card__price">
                <div class="catalog-product-card__price__prev">
                  {{ prevPrice }}&#8381;
                </div>
                <div class="catalog-product-card__price__current">
                  {{ currentPrice }} &#8381;/шт
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Card>

    <!-- buttons -->
    <div class="catalog-product-card__favorite-btn">
      <AddToFavorite :is-favorite="false" />
    </div>
    <div class="catalog-product-card__shop-btn">
      <AddToBasket />
    </div>
  </div>
</template>

<script lang="ts">
import { Card } from "@/shared/ui";
import { useProduct } from "@/entities/Products/Product/lib";
import { FavoriteButton, ShopButton } from "@/shared/ui/buttons";
import { defineComponent } from "vue";
import { AddToBasket, AddToFavorite } from "@/features";

export default defineComponent({
  name: "ProductCardHome",
  components: {
    AddToBasket,
    AddToFavorite,
    Card,
  },
  props: {
    isSearchResult: {
      type: Boolean,
      default: false,
    },
    isCart: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { product } = useProduct();
    return {
      ...product,
    };
  },
});
</script>

<style lang="scss" scoped>
.catalog-product-card-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.catalog-product-card {
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
    //width: 60px;
    //height: 60px;
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

.isSearchResult,
.isCart {
  .catalog-product-card {
    flex-direction: row;

    &__image-wrapper {
      flex: 0.3;
    }

    &__image {
      width: auto;
      object-fit: contain;
      border-radius: 12px;
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

.isCart {
  .card {
    max-width: 786px;
    height: 197px;
  }
  .catalog-product-card {
    padding: 36px;
    background-color: $clr-alpha-delta;

    &__image-wrapper {
      flex: 0;
      margin-right: 24px;
    }

    &__info-wrapper {
      flex: auto;
    }

    &__info {
      justify-content: flex-start;
      flex-direction: row;
      align-items: center;
    }

    &__title {
      margin-bottom: 0;
    }

    &__shop-btn {
      display: none;
    }
  }
}
@media screen and (max-width: 376px) {
  .catalog-product-card {
    padding: 10px;
    &__info {
      padding: 6px;
    }
    &__price {
      margin-bottom: 0;
      &__current {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
}
</style>

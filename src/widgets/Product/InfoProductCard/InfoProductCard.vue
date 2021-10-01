<template>
  <div class="product-card-info">
    <div
      class="product-card-info__content-container"
      :class="{ isSimple: isSimple }"
    >
      <Card borderRadiusPX="25" :bg-color="bgColor">
        <template v-slot:content>
          <div ref="content" class="product-card-info__content">
            <div class="product-card-info__title">{{ title }}</div>

            <div class="product-card-info__price">
              <div class="product-card-info__price__prev">
                {{ prevPrice }}&#8381;
              </div>
              <div class="product-card-info__price__current">
                {{ currentPrice }} &#8381;/шт
              </div>
            </div>
            <div class="product-card-info__description">{{ description }}</div>
          </div>
        </template>
      </Card>
    </div>

    <div class="product-card-info__favorite-btn-container">
      <AddToFavorite :is-favorite="isFavorite" />
    </div>
    <div class="product-card-info__shop-btn-container">
      <AddToBasket />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Card } from "@/shared/ui";
import { FavoriteButton, ShopButton } from "@/shared/ui/buttons";
import { AddToFavorite, AddToBasket } from "@/features";

export default defineComponent({
  name: "InfoProductCard",
  components: { AddToBasket, Card, FavoriteButton, ShopButton, AddToFavorite },
  props: {
    title: {
      type: String,
      required: true,
    },
    prevPrice: {
      type: String,
      required: true,
    },
    currentPrice: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
    },
    bgColor: {
      type: String,
      default: "#fceef4",
      required: false,
    },
    isSimple: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup() {
    const content = ref<HTMLElement>(null);

    return {
      content,
    };
  },
});
</script>

<style lang="scss" scoped>
.product-card-info {
  width: 100%;
  height: 100%;
  position: relative;
  color: $clr-phi;

  &__content-container {
    width: 100%;
    height: 100%;
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 48px 36px;
  }

  &__title {
    font-size: 20px;
    font-weight: $bold;
    margin-bottom: 65px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__price {
    display: flex;
    align-items: center;
    margin-bottom: 27px;

    &__prev {
      font-size: 20px;
      font-weight: $bold;
      margin-right: 17px;
      text-decoration: line-through;
    }

    &__current {
      font-size: 28px;
      font-weight: $bold;
      color: $clr-zeta;
    }
  }

  &__description {
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__link {
    font-size: 15px;
    line-height: 18px;
    color: $clr-zeta;
    cursor: pointer;
  }

  &__favorite-btn-container,
  &__shop-btn-container {
    position: absolute;
    right: 15px;
  }

  &__favorite-btn-container {
    top: 15px;
  }

  &__shop-btn-container {
    bottom: 15px;
  }
}

.isSimple {
  .product-card-info__title {
    font-size: 36px;
  }
  .product-card-info__link {
    display: none;
  }
  .product-card-info__price__prev {
    display: none;
  }
  .product-card-info__description {
    display: none;
  }

  .product-card-info__content {
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .product-card-info {
    &__content {
      padding: 48px 36px;
    }
  }
  .isSimple {
    .product-card-info__title {
      font-size: 28px;
      line-height: 1.29;
      max-width: 205px;
    }
  }
}
@media screen and (max-width: 376px) {
  .product-card-info {
    max-width: 339px;
    max-height: 258px;
    &__content {
      padding: 26px;
    }
    &__title {
      font-size: 16px;
      line-height: 18px;
      margin-bottom: 16px;
    }
    &__description {
      font-size: 14px;
      line-height: 21px;
    }

    &__favorite-btn-container {
      display: none;
    }
    &__shop-btn-container {
      display: none;
    }
  }
  .isSimple {
    .product-card-info__title {
      font-size: 22px;
      line-height: 1.27;
    }
    .product-card-info__price {
      &__current {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
}
</style>

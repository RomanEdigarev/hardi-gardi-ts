<template>
  <div class="product-card-info-phone">
    <div class="product-card-info-phone__header">
      <div class="product-card-info-phone__header__title">
        Магнитная игра «Одень девочку»
      </div>
    </div>
    <div class="product-card-info-phone__body">
      <div class="product-card-info-phone__body__text">
        Крупные детали каждого пазла удобны для игры...
      </div>
    </div>
    <div class="product-card-info-phone__footer">
      <div class="product-card-info-phone__footer__price">
        <div class="product-card-info-phone__footer__price__prev">430₽</div>
        <div class="product-card-info-phone__footer__price__current">
          400 ₽/шт
        </div>
      </div>
    </div>
    <div class="product-card-info-phone__favorite-btn">
      <AddToFavorite :is-favorite="false" />
    </div>
    <div class="product-card-info-phone__add-to-shop-btn">
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
  components: { AddToBasket, AddToFavorite },
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
.product-card-info-phone {
  width: 100%;
  max-width: 180px;
  max-height: 230px;
  border-radius: 25px;
  padding: 42px 18px;
  background: #fceef4;
  color: #606060;
  position: relative;

  // *** Header *** //
  &__header {
    max-width: 140px;
    margin-bottom: 8px;
    &__title {
      font-weight: $semi-bold;
      font-size: 14px;
      line-height: 1.29;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    margin-bottom: 30px;
    &__text {
      font-size: 12px;
      line-height: 1.5;
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    &__price {
      &__prev {
        font-weight: $bold;
        font-size: 14px;
        line-height: 1.29;
        text-decoration: line-through;
        color: #606060;
      }
      &__current {
        font-weight: $bold;
        font-size: 16px;
        line-height: 1.12;
        color: #d23c50;
      }
    }
  }
  // *** Footer END *** //

  &__favorite-btn,
  &__add-to-shop-btn {
    position: absolute;
  }

  &__favorite-btn {
    top: 10px;
    right: 10px;
  }

  &__add-to-shop-btn {
    bottom: 10px;
    right: 10px;
  }
}
</style>

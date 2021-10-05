<template>
  <div class="product-card" :class="{ toModal: toModal }">
    <div class="product-card__product">
      <img
        src="./assets/product_0.jpg"
        class="product-card__product__img"
        alt=""
      />
      <div class="product-card__product__title">
        <span>Артикул: {{ product.article }}</span>
        <p>{{ product.title }}</p>
      </div>
    </div>
    <div class="product-card__count">
      <div v-if="!toModal">
        <span class="product-card__count__btn">
          <CounterButton
            :isPlus="false"
            @click="$emit('minus-position', positionId)"
          />
        </span>
        <span class="product-card__count__value"> {{ count }} </span>
        <span class="product-card__count__btn">
          <CounterButton
            :isPlus="true"
            @click="$emit('plus-position', positionId)"
          />
        </span>
      </div>
      <div v-else>
        <span>{{ count }} шт</span>
      </div>
    </div>
    <div class="product-card__price">
      <span class="product-card__price__prev"
        >{{ product.prevPrice }} &#8381;</span
      >
      <span class="product-card__price__current"
        >{{ product.currentPrice }} &#8381;/шт</span
      >
    </div>
    <!--     v-toggle-modal="{ modal: 'delete-modal', name: 'delete' }"-->
    <div v-if="!toModal" class="product-card__del-btn">
      <BetaButton styling="beta-gamma-btn">
        <DeleteIcon />
      </BetaButton>
    </div>
    <div v-if="!toModal" class="product-card__fav-btn">
      <BetaButton styling="beta-gamma-btn">
        <FavoriteIcon />
      </BetaButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CounterButton, BetaButton } from "@/shared/ui/buttons";
import { DeleteIcon, FavoriteIcon } from "@/shared/ui/icons";
import { Product } from "@/entities/Products/Product/model";
export default defineComponent({
  name: "ProductCard",
  components: { CounterButton, BetaButton, DeleteIcon, FavoriteIcon },
  props: {
    toModal: {
      type: Boolean,
      defaults: false,
    },
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    positionId: {
      type: Number || String,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.product-card {
  width: 100%;
  height: 100%;
  max-width: 786px;
  padding: 36px 95px 36px 36px;
  border: 1px solid $clr-upsilon;
  border-radius: 25px;
  color: $clr-phi;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  // *** Product *** //
  &__product {
    display: flex;
    height: 100%;

    &__img {
      //width: 100px;
      //height: 125px;
      height: 100%;
      width: 100%;
      max-width: 100px;
      max-height: 125px;
      border-radius: 12px;
      object-fit: cover;
      margin-right: 24px;
    }
    &__title {
      max-width: 219px;
      display: flex;
      flex-direction: column;
      span {
        display: inline-block;
        font-size: 14px;
        line-height: 1.71;
      }
      p {
        font-weight: $bold;
        font-size: 15px;
        line-height: 1.33;
      }
    }
  }
  // *** Product END *** //

  // *** Count *** //
  &__count {
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    display: contents;
    width: 140px;
    height: 44px;
    &__btn {
      height: 100%;
      width: 44px;
      display: inline-block;
    }
    &__value {
      font-weight: $bold;
      font-size: 16px;
      line-height: 1.12;
      color: $clr-phi;
      margin: 0 18px;
    }
  }
  // *** Count END *** //

  // *** Price *** //
  &__price {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__prev {
      display: inline-block;
      font-weight: $bold;
      font-size: 16px;
      line-height: 1.25;
      text-decoration-line: line-through;
    }
    &__current {
      display: inline-block;
      font-weight: $bold;
      font-size: 16px;
      line-height: 1.25;
      color: $clr-zeta;
      width: 100%;
    }
  }
  // *** Price END *** //

  // *** Buttons *** //
  &__del-btn,
  &__fav-btn {
    position: absolute;
  }
  &__del-btn {
    width: 38px;
    height: 38px;
    top: 26px;
    right: 26px;
  }
  &__fav-btn {
    width: 20px;
    bottom: 26px;
    right: 35px;
  }

  // *** Buttons END *** //
}
.product-card.toModal {
  padding: 0;
  border: none;
}
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .product-card {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    padding: 18px 22px;
    max-width: 470px;

    &__product {
      &__img {
        max-width: 75px;
        max-height: 93px;
      }
      &__title {
        p,
        span {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
    &__price {
      padding-left: 100px;
      grid-row: 2 / 3;
      margin-bottom: 16px;
      &__prev {
        width: 100%;
      }
    }
    &__count {
      grid-row: 3 / 4;
      div {
        padding-left: 100px;
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .product-card {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    padding: 18px 22px;
    max-width: 470px;
    &__product {
      &__img {
        max-width: 75px;
        max-height: 93px;
      }
      &__title {
        p,
        span {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
    &__price {
      padding-left: 100px;
      grid-row: 2 / 3;
      margin-bottom: 16px;
      &__prev {
        width: 100%;
      }
    }
    &__count {
      grid-row: 3 / 4;
      div {
        padding-left: 100px;
      }
    }
    &__del-btn {
      top: 18px;
      right: 18px;
    }
    &__fav-btn {
      bottom: 18px;
      right: 26px;
    }
  }
  .product-card.toModal {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    & > div:first-child {
      grid-column: 1/3;
    }
    & > div:nth-child(2) {
      grid-row: 2/3;
      align-items: flex-start;
      display: block;
      padding-top: 6px;
    }
    div:nth-child(3) {
      grid-column: 2/3;
      padding: 0;
      flex-direction: row;
      span {
        width: auto;
      }
      .product-card__price__current {
        font-size: 16px;
        line-height: 20px;
      }
      .product-card__price__prev {
        font-size: 12px;
        line-height: 1.33;
        margin-right: 8px;
      }
    }
    .product-card__product {
      &__img {
        margin-right: 14px;
      }
    }
  }
}
</style>

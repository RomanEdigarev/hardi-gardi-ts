<template>
  <div class="product-card" :class="{ toModal: toModal }">
    <div class="product-card__product">
      <img
        src="./assets/product_0.jpg"
        class="product-card__product__img"
        alt=""
      />
      <div class="product-card__product__title">
        <span>Артикул: 3900005</span>
        <p>Магнитная игра «Удивительные обитатели морей и океанов»</p>
      </div>
    </div>
    <div class="product-card__count">
      <div v-if="!toModal">
        <span class="product-card__count__btn">
          <CounterButton :isPlus="false" />
        </span>
        <span class="product-card__count__value"> 1 </span>
        <span class="product-card__count__btn">
          <CounterButton :isPlus="true" />
        </span>
      </div>
      <div v-else>
        <span>1 шт</span>
      </div>
    </div>
    <div class="product-card__price">
      <span class="product-card__price__prev">430 &#8381;</span>
      <span class="product-card__price__current">400 &#8381;/шт</span>
    </div>
    <!--     v-toggle-modal="{ modal: 'delete-modal', name: 'delete' }"-->
    <div
      v-if="!toModal"
      v-toggle-modal="{ modal: 'delete-modal', name: 'delete' }"
      class="product-card__del-btn"
    >
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
import { defineComponent } from "vue";
import { CounterButton, BetaButton } from "@/shared/ui/buttons";
import { DeleteIcon, FavoriteIcon } from "@/shared/ui/icons";
export default defineComponent({
  name: "ProductCard",
  components: { CounterButton, BetaButton, DeleteIcon, FavoriteIcon },
  props: {
    toModal: {
      type: Boolean,
      defaults: false,
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
</style>

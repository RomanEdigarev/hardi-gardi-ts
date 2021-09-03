<template>
  <div class="checkout">
    <div class="checkout__header">
      <form>
        <input v-model="promoCode" type="text" placeholder="Промокод" />
      </form>
    </div>
    <div class="checkout__body">
      <div class="checkout__body__title">
        <span> Итого </span>
        <span> {{ price }} &#8381; </span>
      </div>
      <div class="checkout__body__subtitle">
        При заказе <span>от 2 000 ₽</span> доставка до пункта СДЭК —
        <span>бесплатно</span>
      </div>
      <div class="checkout__body__list">
        <div class="checkout__body__list__row">
          <span>Товары (4)</span>
          <span>1 560 &#8381;</span>
        </div>
        <div class="checkout__body__list__row">
          <span>Скидка</span>
          <span>1 560 &#8381;</span>
        </div>
      </div>
    </div>
    <div class="checkout__footer">
      <AlfaButton class="checkout__footer__btn" text="Оформить заказ" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AlfaButton } from "@/shared/ui/buttons";
export default defineComponent({
  name: "Checkout",
  components: {
    AlfaButton,
  },
  props: {
    price: {
      type: String,
      default: "400",
    },
  },
  setup() {
    const promoCode = ref("");

    return {
      promoCode,
    };
  },
});
</script>

<style lang="scss" scoped>
.checkout {
  width: 100%;
  padding: 36px;
  color: $clr-phi;
  background: $clr-kappa;
  border-radius: 25px;

  // *** Header *** //
  &__header {
    margin-bottom: 39px;
    input {
      width: 100%;
      height: 52px;
      outline: none;
      color: $clr-eta;
      padding: 12px 24px;
      font-size: 16px;
      line-height: 1.75;
      border-radius: 16px;
      border: none;
      &::placeholder {
        color: $clr-eta;
      }
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    margin-bottom: 27px;
    padding-bottom: 22px;
    border-bottom: 1px solid $clr-tau;
    &__title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      span {
        display: inline-block;
        font-weight: $bold;
        font-size: 28px;
        line-height: 1.21;
      }
    }
    &__subtitle {
      font-size: 13px;
      line-height: 1.54;
      margin-bottom: 29px;
      span {
        color: $clr-zeta;
      }
    }
    &__list {
      width: 100%;
      &__row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 6px;
        span {
          display: inline-block;
          font-size: 15px;
          line-height: 1.6;
        }
      }
    }
  }
  // *** Body End *** //
}
</style>
<style lang="scss">
// *** Footer  *** //
.checkout__footer {
  &__btn {
    background-color: palegreen;
    span {
      font-size: 16px !important;
      line-height: 1.75;
    }
  }
}
// *** Footer END *** //
</style>

<template>
  <div class="checkout">
    <div v-if="!isOrdering" class="checkout__header">
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
          <div class="checkout__body__list__goods">
            <span>Товары (4)</span>
            <div v-if="isOrdering" class="checkout__body__list__goods__link">
              Подробнее
            </div>
          </div>
          <span>1 560 &#8381;</span>
        </div>
        <div class="checkout__body__list__row">
          <span>Скидка</span>
          <span>1 560 &#8381;</span>
        </div>
      </div>
    </div>
    <div class="checkout__footer">
      <div v-if="isOrdering" class="checkout__footer__info">
        <div class="checkout__footer__info__row">
          <span>Доставка: </span><span>Курьер</span>
        </div>
        <div class="checkout__footer__info__row">
          <span>Оплата: </span><span>Картой</span>
        </div>
      </div>
      <AlfaButton class="checkout__footer__btn" text="Оформить заказ" />
      <div v-if="isOrdering" class="checkout__footer__policy">
        Оформляя заказ, вы соглашаетесь с <span>договором оферты</span> и
        <span>политикой конфиденциальности</span>.
      </div>
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
    isOrdering: {
      type: Boolean,
      default: false,
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
      &__goods {
        margin-bottom: 8px;
        &__link {
          font-size: 15px;
          line-height: 1.6;
          color: $clr-zeta;
          cursor: pointer;
        }
      }
    }
  }
  // *** Body End *** //

  // *** Footer *** //
  &__footer {
    &__info {
      margin-bottom: 26px;
      &__row {
        margin-bottom: 8px;
        span:nth-child(2) {
          font-weight: $semi-bold;
          font-size: 15px;
          line-height: 1.6;
          color: $clr-zeta;
        }
      }
    }
    &__policy {
      margin-top: 16px;
      span {
        cursor: pointer;
        font-weight: $semi-bold;
      }
    }
  }
  // *** Footer END *** //
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

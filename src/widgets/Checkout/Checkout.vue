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
        <span> {{ basket.sumTotal }} &#8381; </span>
      </div>
      <div class="checkout__body__subtitle">
        При заказе <span>от 2 000 ₽</span> доставка до пункта СДЭК —
        <span>бесплатно</span>
      </div>
      <div class="checkout__body__list">
        <div class="checkout__body__list__row">
          <div class="checkout__body__list__goods">
            <span>Товары ({{ basketCount }})</span>
            <div
              v-if="isOrdering"
              class="checkout__body__list__goods__link"
              v-toggle-modal="{ modal: 'goods-modal', name: 'goods' }"
            >
              Подробнее
            </div>
          </div>
          <span>{{ basket.sumTotal }} &#8381;</span>
        </div>
        <div class="checkout__body__list__row">
          <span>Скидка</span>
          <span>{{ basket.sumDiscount }} &#8381;</span>
        </div>
        <div class="checkout__body__list__row" id="delivery">
          <span>Доставка</span>
          <span>0 &#8381;</span>
        </div>
      </div>
    </div>
    <div class="checkout__footer">
      <div v-if="isOrdering" class="checkout__footer__info">
        <div class="checkout__footer__info__row">
          <span>Доставка: </span>
          <span> {{ deliveryMap[deliverType] }}</span>
        </div>
        <div class="checkout__footer__info__row">
          <span>Оплата: </span>
          <span> {{ paymentMap[paymentType] }}</span>
        </div>
      </div>
      <AlfaButton
        class="checkout__footer__btn"
        text="Оформить заказ"
        @click="
          $emit('checkout', isOrdering ? '/payment' : '/ordering', promoCode)
        "
        :is-disabled="disabled"
      />
      <div v-if="isOrdering" class="checkout__footer__policy">
        Оформляя заказ, вы соглашаетесь с <span>договором оферты</span> и
        <span>политикой конфиденциальности</span>.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { AlfaButton } from "@/shared/ui/buttons";
import { Basket } from "@/entities/Basket/model";
import { useRouter } from "vue-router";
import { useStore } from "@/services/vuex";
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
    disabled: {
      type: Boolean,
    },
  },
  setup(props) {
    const promoCode = ref("");
    const router = useRouter();
    const store = useStore();
    const deliveryMap = {
      self: "Самовывоз",
      courier: "Курьером",
      post: "Почтой",
    };
    const paymentMap = {
      onSite: "Картой",
      "onDeliver": "При получении",
    };
    return {
      promoCode,
      basket: computed<Basket>(() => store.getters["basket/getBasket"]),
      basketCount: computed<number>(
        () => store.getters["basket/getBasketCount"]
      ),
      paymentType: computed(() => store.getters["order/getPaymentType"]),
      deliverType: computed(() => store.getters["order/getDeliveryType"]),
      paymentMap,
      deliveryMap,
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
        font-size: 13px;
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
        span {
          font-size: 15px;
        }
        span:first-child {
          font-weight: $semi-bold;
        }
        span:nth-child(2) {
          font-weight: $semi-bold;
          font-size: 15px;
          line-height: 1.6;
          color: $clr-zeta;
        }
      }
    }
    &__policy {
      font-size: 13px;
      line-height: 18px;
      margin-top: 16px;
      span {
        font-size: 13px;
        cursor: pointer;
        font-weight: $semi-bold;
      }
    }
  }
  // *** Footer END *** //
  #delivery {
    display: none;
  }
}
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .checkout {
    padding: 12px;
    &__header {
      margin-bottom: 24px;
    }
    &__body {
      padding-bottom: 0;
      margin-bottom: 11px;
      &__title {
        span {
          font-size: 22px;
          line-height: 27px;
        }
      }
      &__subtitle {
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 16px;
      }
      &__list {
        span {
          font-size: 14px;
          line-height: 150%;
        }
        &__goods {
          margin-bottom: 0;
        }
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .checkout {
    padding: 22px;
  }
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
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .checkout__footer {
    &__btn {
      span {
        font-size: 15px !important;
        line-height: 1.75;
      }
    }
  }
}
// *** Footer END *** //
</style>

<template>
  <div class="payment">
    <main class="page-main">
      <div class="page-main__header">
        <PageTitle text="Заказ оформлен, но не оплачен" />
      </div>
      <div class="payment__header">
        <div class="payment__header__title">
          Мы уже начали собирать Ваш заказ. Не забудьте оплатить заказ, чтобы мы
          его отправили.
        </div>
      </div>
      <div class="payment__body">
        <div class="payment__body__info">
          <OrderInfo />
        </div>
        <div class="payment__body__item contacts">
          <div class="payment__body__item__title">Контактные данные</div>
          <template v-if="contactPerson">
            <div class="payment__body__item__text">{{ contactPerson.name }}</div>
            <div class="payment__body__item__text">{{ contactPerson.email }}</div>
            <div class="payment__body__item__text">{{ contactPerson.phone }}</div>
          </template>
        </div>
        <div class="payment__body__item method">
          <div class="payment__body__item__title">Способ получения</div>
          <p>
            <span class="payment__body__item__subtitle"
              >Доставка: {{ deliveryMap[deliveryType] }}</span
            >
            <span v-if="!isPhone" class="payment__body__item__subtitle">
              Сроки доставки: 4 дня
            </span>
          </p>
          <!--          <div class="payment__body__item__text">Курьером: СДЭК</div>-->
          <div class="payment__body__item__text">
            {{ order.location.address }}
          </div>
          <span v-if="isPhone" class="payment__body__item__subtitle">
            Сроки доставки: 4 дня
          </span>
        </div>
        <div class="payment__body__item pay">
          <div class="payment__body__item__title">Способ оплаты</div>
          <div class="payment__body__item__subtitle">
            Оплата: {{ paymentMap[paymentType] }}
          </div>
        </div>
        <div class="payment__body__item order-list">
          <div class="payment__body__item__title">Состав заказа</div>
          <div class="order-list__item">
            <ProductCardCart to-modal :product="product" :count="2" />
          </div>
          <div class="order-list__item">
            <ProductCardCart to-modal :product="product" :count="2" />
          </div>
          <div class="order-list__item">
            <ProductCardCart to-modal :product="product" :count="2" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import { PageTitle } from "@/shared/ui";
import { ProductCardCart } from "@/widgets";
import { OrderInfo } from "./ui";
import { useStore } from "@/services/vuex";
import { useProduct } from "@/entities/Products/Product/lib";
import {getOrderAPI} from "@/services/api/lib/order";
export default defineComponent({
  name: "Payment",
  components: { PageTitle, ProductCardCart, OrderInfo },
  setup() {
    const { product } = useProduct();
    const store = useStore();
    const order = computed(() => {
      return store.getters["order/getOrder"];
    });

    const deliveryMap = {
      self: "Самовывоз",
      courier: "Курьером",
      post: "Почтой",
    };

    const paymentMap = {
      onSite: "Картой",
      onDeliver: "При получении",
    };

    onMounted(async () => {
      const response = await getOrderAPI(order.value.id)
    })

    return {
      product,
      isPhone: computed(() => store.getters["getIsPhone"]),
      contactPerson: order.value.contactPerson,
      order,
      deliveryMap,
      deliveryType: computed(() => store.getters["order/getDeliveryType"]),
      paymentType: computed(() => store.getters["order/getPaymentType"]),
      paymentMap,
    };
  },
});
</script>

<style lang="scss" scoped>
.payment {
  color: $clr-phi;
  // *** Header *** //
  &__header {
    margin-bottom: 48px;
    &__title {
      max-width: 582px;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 1.6;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    &__item {
      max-width: 786px;
      border-bottom: 1px solid $clr-kappa;
      padding-bottom: 46px;
      margin-bottom: 34px;
      &__title {
        font-weight: $semi-bold;
        font-size: 24px;
        line-height: 1.25;
        margin-bottom: 24px;
      }
      &__subtitle {
        font-weight: $semi-bold;
        font-size: 15px;
        line-height: 24px;
        margin-bottom: 8px;
      }
      &__text {
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 8px;
      }
    }
    &__info {
      position: sticky;
      top: 20px;
      float: right;
      margin-bottom: 150px;
    }
  }
  // *** Body END *** //

  .method {
    p {
      & :first-child {
        margin-right: 36.4%;
      }
    }
  }

  .order-list {
    border-bottom: none;
    &__item {
      padding-bottom: 19px;
      border-bottom: 1px solid $clr-kappa;
      margin-bottom: 25px;
    }
  }
  :deep .product-card {
    grid-template-rows: 1fr 0fr;

    &__product {
      &__title {
        max-width: 344px;
        p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
}
@media screen and (max-width: 1367px) {
  .payment {
    :deep .order-list__item {
      max-width: 714px;
    }
  }
}
@media screen and (max-width: 769px) {
  .payment {
    &__body {
      &__item {
        max-width: 470px;
        padding-bottom: 38px;
        margin-bottom: 34px;
      }
    }
    :deep .product-card.toModal,
    :deep .product-card {
      grid-template-rows: 1fr 0fr;
      &__product {
        grid-column: 1/3;
        &__title {
          max-width: 80%;
          p {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
      &__price {
        margin-bottom: 0;
        grid-column: 2/3;
        padding: 0;
        flex-direction: row;
        margin-top: -38px;
        &__prev {
          margin-right: 13px;
        }
        span {
          width: auto;
          flex-shrink: 0;
        }
      }
      &__count {
        height: auto;
        grid-row: 2/3;
        align-items: flex-start;
        display: block;
        padding-top: 6px;
        margin-top: -38px;
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .payment {
    &__header {
      margin-bottom: 36px;
    }
    &__body {
      &__info {
        position: static;
        margin-bottom: 36px;
      }
      &__item {
        padding-bottom: 36px;
        &__title {
          font-size: 20px;
          line-height: 1.2;
          margin-bottom: 18px;
        }
        &__subtitle {
          font-size: 14px;
          line-height: 1.5;
        }
        &__text {
          font-size: 14px;
          line-height: 1.5;
        }
        p {
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
        }
      }
    }
    :deep .product-card.toModal,
    :deep .product-card {
      grid-template-rows: 1fr 0fr;
      &__price {
        margin-top: 0;
        margin-bottom: 0;
      }
      &__count {
        padding-top: 0;
        margin-top: 0;
        height: auto;
      }
    }
  }
}
</style>
<style lang="scss">
.payment {
  .page-main__header {
    margin-bottom: 20px;
  }
}
</style>

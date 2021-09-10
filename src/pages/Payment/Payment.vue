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
          <div class="payment__body__item__text">Англеина обрамова</div>
          <div class="payment__body__item__text">test@test.ru</div>
          <div class="payment__body__item__text">+7 (911) 786-98-98</div>
        </div>
        <div class="payment__body__item method">
          <div class="payment__body__item__title">Способ получения</div>
          <p>
            <span class="payment__body__item__subtitle">Доставка: Курьер</span>
            <span class="payment__body__item__subtitle"
              >Сроки доставки: 4 дня</span
            >
          </p>
          <div class="payment__body__item__text">Курьером: СДЭК</div>
          <div class="payment__body__item__text">
            г. Санкт-Петербург, проспект Энгельса д,96 кв.93
          </div>
        </div>
        <div class="payment__body__item pay">
          <div class="payment__body__item__title">Способ оплаты</div>
          <div class="payment__body__item__subtitle">Оплата: Картой</div>
        </div>
        <div class="payment__body__item order-list">
          <div class="payment__body__item__title">Состав заказа</div>
          <div class="order-list__item"><ProductCardCart to-modal /></div>
          <div class="order-list__item"><ProductCardCart to-modal /></div>
          <div class="order-list__item"><ProductCardCart to-modal /></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageTitle } from "@/shared/ui";
import { ProductCardCart } from "@/widgets";
import { OrderInfo } from "./ui";
export default defineComponent({
  name: "Payment",
  components: { PageTitle, ProductCardCart, OrderInfo },
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
}
</style>
<style lang="scss">
.payment {
  .page-main__header {
    margin-bottom: 20px;
  }
}
</style>

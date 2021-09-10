<template>
  <div class="order-info">
    <div class="order-info__header">
      <div class="order-info__header__title">Заказ №6384</div>
    </div>
    <div class="order-info__body">
      <div class="order-info__body__text">
        Перейдите <a href="" class="alfa-link">по ссылке</a> для отслеживания
        статусов заказа и оплаты.
      </div>
      <div class="order-info__body__list">
        <div class="order-info__body__list__item">
          <span>Сумма заказа</span>
          <span>1 260 ₽</span>
        </div>
        <div class="order-info__body__list__item">
          <span>Доставка</span>
          <span>300 ₽</span>
        </div>
      </div>
    </div>
    <div class="order-info__footer">
      <div class="order-info__footer__btn">
        <AlfaButton text="Продолжить покупки" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AlfaButton } from "@/shared/ui/buttons";
export default defineComponent({
  name: "OrderInfo",
  components: { AlfaButton },
});
</script>

<style lang="scss" scoped>
.order-info {
  color: $clr-phi;
  width: 100%;
  max-width: 378px;
  background: $clr-kappa;
  padding: 36px;
  border-radius: 25px;
  // *** Header *** //
  &__header {
    margin-bottom: 12px;
    &__title {
      font-weight: $bold;
      font-size: 28px;
      line-height: 34px;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    margin-bottom: 35px;
    border-bottom: 1px solid $clr-tau;
    &__text {
      margin-bottom: 18px;
      font-size: 15px;
      line-height: 24px;
    }
    &__list {
      width: 100%;
      margin-bottom: 31px;
      &__item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        span {
          font-size: 15px;
          line-height: 24px;
          margin-bottom: 8px;
        }
      }
    }
  }
  // *** Body END *** //
  // *** Footer  *** //
  &__ {
  }
  // *** Footer END *** //
}
</style>

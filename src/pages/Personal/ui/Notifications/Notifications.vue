<template>
  <div class="notifications">
    <div class="notifications__item">
      <div class="notifications__item__icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="#D23C50" />
          <path
            d="M13.75 7.5L8.59375 13.125L6.25 10.5682"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="notifications__item__title">Скидки, распродажи, обзоры</div>
      <div class="notifications__item__text">
        Все о подарках и выгодных покупках с доставкой самых свежих новостей!
      </div>
    </div>
    <div class="notifications__item">
      <div class="notifications__item__icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="#D23C50" />
          <path
            d="M13.75 7.5L8.59375 13.125L6.25 10.5682"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="notifications__item__title">SMS оповещения</div>
      <div class="notifications__item__text">
        Возвращение к последнему месту просмотра и возобновление процесса
        оформления заказа.
      </div>
    </div>
    <div class="notifications__item">
      <div class="notifications__item__icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="#D23C50" />
          <path
            d="M13.75 7.5L8.59375 13.125L6.25 10.5682"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="notifications__item__title">Актуальные напоминания</div>
      <div class="notifications__item__text">
        Возвращение к последнему месту просмотра и возобновление процесса
        оформления заказа.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Notifications",
});
</script>

<style lang="scss" scoped>
.notifications {
  width: 100%;

  &__item {
    width: 100%;
    max-width: 408px;
    color: $clr-phi;
    margin-bottom: 46px;
    padding-left: 36px;
    position: relative;

    &__title {
      font-style: normal;
      font-weight: $bold;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 12px;
    }
    &__text {
      line-height: 1.6;
    }
    &__icon {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>

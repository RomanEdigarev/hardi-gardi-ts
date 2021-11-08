<template>
  <div class="notifications">
    <div class="notifications__item">
      <div class="notifications__item__icon">
        <Checkbox id="sales" />
      </div>
      <div class="notifications__item__title">Скидки на любимые игры</div>
      <div class="notifications__item__text">
        Все о подарках и выгодных покупках с доставкой самых свежих новостей!
      </div>
    </div>
    <div class="notifications__item">
      <div class="notifications__item__icon">
        <Checkbox id="new-items" />
      </div>
      <div class="notifications__item__title">Новинки от ХардиГарди</div>
      <div class="notifications__item__text">
        Возвращение к последнему месту просмотра и возобновление процесса
        оформления заказа.
      </div>
    </div>
    <div class="notifications__item">
      <div class="notifications__item__icon">
        <Checkbox id="relevant-reminders" />
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
import { Checkbox } from "@/shared/ui/inputs";

export default defineComponent({
  name: "Notifications",
  components: { Checkbox },
});
</script>

<style lang="scss" scoped>
.notifications {
  width: 100%;

  &__item {
    width: 100%;
    //max-width: 408px;
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
      font-size: 15px;
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

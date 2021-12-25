<template>
  <div class="notifications">
    <div class="notifications__item">
      <div class="notifications__item__icon">
        <Checkbox id="sales" />
      </div>
      <div class="notifications__item__title">Скидки на любимые игры</div>
      <div class="notifications__item__text">
        Если Вы хотите первыми узнавать об акциях, скидках и закрытых распродажах на игры Харди Гарди, подпишитесь на уведомления по электронной почте. Мы обязательно Вас проинформируем.
      </div>
    </div>
    <div class="notifications__item">
      <div class="notifications__item__icon">
        <Checkbox id="new-items" />
      </div>
      <div class="notifications__item__title">Новинки от ХардиГарди</div>
      <div class="notifications__item__text">
        Если Вы хотите первыми узнавать о выходе новинок и получать специальные предложения на их покупку, подпишитесь на уведомления по электронной почте. Мы обязательно Вас проинформируем
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Checkbox } from "@/shared/ui/Inputs";

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

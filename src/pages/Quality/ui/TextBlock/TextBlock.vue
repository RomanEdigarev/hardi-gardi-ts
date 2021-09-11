<template>
  <div class="text-block">
    <div class="text-block__header">
      <div class="text-block__header__number">
        <slot name="number"></slot>
      </div>
      <div class="text-block__header__title">{{ title }}</div>
    </div>
    <div class="text-block__body">
      <div class="text-block__body__text">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextBlock",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.text-block {
  color: $clr-phi;
  width: 100%;
  // *** Header *** //
  &__header {
    margin-bottom: 22px;
    &__number {
      margin-bottom: 32px;
      margin-left: -20px;
    }
    &__title {
      font-weight: bold;
      font-size: 24px;
      line-height: 1.25;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    &__text {
      font-size: 15px;
      line-height: 1.6;
    }
  }
  // *** Body END *** //
}
</style>

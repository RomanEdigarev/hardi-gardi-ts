<template>
  <div class="text-block">
    <div class="text-block__header">
      <div class="text-block__header__title">
        <slot name="title"></slot>
      </div>
      <div class="text-block__header__subtitle">
        <slot name="subtitle"></slot>
      </div>
    </div>
    <div class="text-block__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextBlock",
});
</script>

<style lang="scss" scoped>
.text-block {
  color: $clr-phi;
  width: 100%;
  max-width: 482px;

  // *** Header *** //
  &__header {
    margin-bottom: 25px;
    &__title {
      margin-bottom: 25px;
    }
    &__subtitle {
      font-weight: $bold;
      font-size: 24px;
      line-height: 1.25;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    font-size: 18px;
    line-height: 27px;
    :deep p {
      font-size: 18px;
      line-height: 27px;
    }
  }
  // *** Body END *** //
}
@media screen and (max-width: 768px) {
  .text-block {
    &__header {
      &__subtitle {
        font-size: 20px;
        line-height: 24px;
      }
    }
    &__body {
      font-size: 16px;
      line-height: 24px;

      :deep p {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}

@media screen and (max-width: 376px) {
  .text-block {
    max-width: 100%;
    &__header {
    }
    &__body {
      max-width: none;
    }
  }
}
</style>

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
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
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

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .text-block {
    max-width: 100%;
    &__header {
      &__title {
        margin-bottom: 23px;
      }
      &__subtitle {
        font-size: 20px;
        font-weight: $bold;
        line-height: 24px;
        margin-bottom: 16px;
      }
    }
    &__body {
     :deep p {
        margin: 0;
      }
      max-width: none;
      max-height: 192px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>

<template>
  <div class="container" :class="{ empty: !count }">
    <div class="count">{{ count }}</div>
    <div class="icon">
      <slot name="svg-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "IconWithCount",
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;

  .count {
    position: absolute;
    width: 22px;
    height: 22px;
    top: -2px;
    left: -12px;
    z-index: 1;
    font-size: 11px;
    border-radius: 50%;
    background-color: $clr-zeta;
    border: 2px solid $clr-tau;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $clr-tau;
  }

  .icon {
    width: 100%;
    height: 100%;
    :deep svg {
      width: 100%;
      height: 100%;
    }
  }
}

.empty {
  .count {
    background-color: $clr-alpha-beta;
  }

  .icon {
    :deep path {
      stroke: $clr-alpha-beta;
    }
  }
}
</style>

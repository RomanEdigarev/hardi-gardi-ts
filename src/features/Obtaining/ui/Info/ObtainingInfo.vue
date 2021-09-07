<template>
  <div class="info">
    <span class="info__title">{{ `${title}: ` }}</span>
    <span class="info__value">{{ value }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ObtainingInfo",
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.info {
  &__title {
    font-weight: $semi-bold;
    font-size: 15px;
    line-height: 1.6;
    color: $clr-phi;
  }
  &__value {
    font-style: normal;
    font-weight: $semi-bold;
    font-size: 15px;
    line-height: 1.6;
    color: $clr-zeta;
  }
}
</style>

<template>
  <div class="card" :style="`border-radius: ${borderRadiusPX}px;`">
    <slot name="content" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Card",
  props: {
    borderRadiusPX: {
      type: String,
      default: "16",
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

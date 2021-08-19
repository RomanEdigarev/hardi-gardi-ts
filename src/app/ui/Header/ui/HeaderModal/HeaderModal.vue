<template>
  <div class="header-modal">
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderModal",
});
</script>

<style lang="scss" scoped>
.header-modal {
  width: 100%;
  background-color: #fff;
}
</style>

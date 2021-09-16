<template>
  <div class="history">
    <div class="history__body">
      <div class="history__body__item"><Order /></div>
      <div class="history__body__item"><Order /></div>
      <div class="history__body__item"><Order /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Order } from "./ui";

export default defineComponent({
  name: "History",
  components: {
    Order,
  },
});
</script>

<style lang="scss" scoped></style>

<template>
  <h1 class="page-title">{{ text }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTitle",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.page-title {
  font-weight: $semi-bold;
  font-size: 45px;
  line-height: 55px;
  color: $clr-nu;
  margin: 0;
}
</style>

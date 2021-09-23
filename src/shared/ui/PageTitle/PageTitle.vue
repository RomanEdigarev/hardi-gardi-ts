<template>
  <h1 v-if="text" class="page-title">
    {{ text }}
  </h1>
  <div v-else class="page-title">
    <slot name="text"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTitle",
  props: {
    text: {
      type: String,
      required: false,
      // default: "Заголовок страницы",
    },
  },
  mounted() {
    console.log(this.text);
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
@media screen and (max-width: 768px) {
  .page-title {
    font-size: 36px;
    line-height: 1.25;
  }
}
</style>

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
@media screen and (min-width: 738px) and (max-width: 1364px), (-webkit-min-device-pixel-ratio: 3) {
  .page-title {
    font-size: 36px;
    line-height: 1.25;
  }
}

@media screen and (min-width: 320px) and (max-width: 736px), (-webkit-min-device-pixel-ratio: 3) {
  .page-title {
    font-size: 28px;
    line-height: 1.21;
  }
}
</style>

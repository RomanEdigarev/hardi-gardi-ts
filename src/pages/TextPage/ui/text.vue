<template>
  <p class="text-page__body__text" v-html="value">
  </p>
</template>

<script>
export default {
  name: "text",
  props: {
    value: String,
  },
};
</script>

<style scoped></style>
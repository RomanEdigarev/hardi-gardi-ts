<template>
  <h3 class="text-page__header__text" v-html="value"></h3>
</template>

<script>
export default {
  name: "htag",
  props: {
    value: String
  }
}
</script>

<style scoped>

</style>
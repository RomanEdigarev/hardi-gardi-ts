<template>
  <ul class="text-page__body__list">
    <li v-for="element in elements" v-html="element.text"></li>
  </ul>
</template>

<script>
export default {
  name: "lists",
  props: {
    elements: Array
  }
}
</script>

<style scoped>

</style>
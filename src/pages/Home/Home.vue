<template>
  <div class="home">
    <section class="home__prolog-container">
      <Prolog/>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Prolog} from "./ui";

export default defineComponent({
  name: "Home",
  components: {
    Prolog,
  },
});
</script>

<style scoped lang="scss">
.home {
  &__prolog-container {
    width: 100%;
    height: 816px;
    margin-top: 757px;

  }
}
</style>

<template>
  <div class="search">
    <div class="search__input-container">
      <SearchInput/>
    </div>
    <div class="search__results-container">
      <slot name="search-results"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SearchInput } from "@/features";
export default defineComponent({
  name: "Search",
  components: {
    SearchInput
  },
});
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__input-container {
    width: 100%;
    max-width: 786px;
    margin: 48px 0;
  }

  &__results-container {
    width: 100%;
    height: 500px;
    background-color: #fff5f9;
  }
}
</style>

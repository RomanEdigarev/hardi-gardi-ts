<template>
  <div class="favorites">
    <main class="page-main">
      <div class="page-main__header">
        <div class="page-main__title-container">
          <PageTitle :text="`Избранное (${4})`" />
        </div>
      </div>
      <div class="favorites__header"><Sorting /></div>
      <div class="favorites__body">
        <div class="favorites__body__item">
          <ProductCardCatalog />
        </div>
        <div class="favorites__body__item">
          <ProductCardCatalog />
        </div>
        <div class="favorites__body__item">
          <ProductCardCatalog />
        </div>
        <div class="favorites__body__item">
          <ProductCardCatalog />
        </div>
        <div class="favorites__body__item">
          <ProductCardCatalog />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageTitle } from "@/shared/ui";
import { Sorting } from "@/features";
import { ProductCardCatalog } from "@/widgets";
export default defineComponent({
  name: "Favorites",
  components: { PageTitle, Sorting, ProductCardCatalog },
});
</script>

<style lang="scss" scoped>
.favorites {
  .page-main__header {
    margin-bottom: 42px;
  }

  // *** Header *** //
  &__header {
    margin-bottom: 32px;
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
    justify-content: space-between;
    &__item {
      padding: 10px 20px 10px 0px;
    }
  }
  // *** Body END *** //
}
</style>

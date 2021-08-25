<template>
  <div class="catalog">
    <img
      class="catalog__bg"
      :src="require('/public/images/catalog-bg.svg')"
      alt=""
    />
    <main class="page-main">
      <div class="page-main__header">
        <div class="page-main__breadcrumbs-container">
          <BreadCrumbs />
        </div>
        <div class="page-main__title-container">
          <PageTitle text="Весь каталог" />
        </div>
      </div>

      <div class="catalog__content">
        <div class="catalog__filter-container"><CatalogFilter /></div>
        <div class="catalog__results-container">Results</div>
      </div>
      <div class="catalog__footer"></div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs } from "@/widgets";
import { CatalogFilter } from "./ui";

export default defineComponent({
  name: "Catalog",
  components: {
    PageTitle,
    BreadCrumbs,
    CatalogFilter,
  },
});
</script>

<style lang="scss" scoped>
.catalog {
  position: relative;
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    transform: translate(-25%, -75%);
  }

  &__content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 35px;

    //
    height: 500px;
  }

  &__filter-container {
    max-width: 236px;
  }
}
</style>

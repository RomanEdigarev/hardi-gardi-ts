<template>
  <div class="search-results">
    <main class="page-main">
      <div class="page-main__header">
        <div class="page-main__breadcrumbs-container">
          <BreadCrumbs />
        </div>
        <div class="page-main__title-container">
          <PageTitle>
            <template v-slot:text>
              <div class="search-results__page-title">
                По запросу <span>рисуй стирай</span> найдено 74 товара
              </div>
            </template>
          </PageTitle>
        </div>
      </div>
      <div class="search-results__header">
        <Sorting />
      </div>
      <div class="search-results__body">
        <div class="search-results__item"><ProductCardCatalog /></div>
        <div class="search-results__item"><ProductCardCatalog /></div>
        <div class="search-results__item"><ProductCardCatalog /></div>
        <div class="search-results__item"><ProductCardCatalog /></div>
        <div class="search-results__item"><ProductCardCatalog /></div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs, ProductCardCatalog } from "@/widgets";
import { Sorting } from "@/features";

export default defineComponent({
  name: "SearchResultsPage",
  props: {
    request: {
      type: String,
      default: "Рисуй стирай",
    },
  },
  components: {
    BreadCrumbs,
    PageTitle,
    Sorting,
    ProductCardCatalog,
  },
});
</script>

<style lang="scss" scoped>
.search-results {
  &__page-title {
    font-size: 28px;
    line-height: 1.21;
    font-weight: $regular;
    color: $clr-nu;
    span {
      font-weight: $semi-bold;
    }
  }

  &__header {
    margin-bottom: 33px;
  }

  &__body {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
    justify-content: space-between;
  }

  &__item {
    padding: 10px 20px 10px 0px;
  }
}
</style>

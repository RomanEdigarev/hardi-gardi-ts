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
        <div class="catalog__results">
          <div class="catalog__results__header">
            <Sorting />
          </div>
          <div class="catalog__results__body">
            <div class="catalog__results__item">
              <ProductCardCatalog />
            </div>
            <div class="catalog__results__item">
              <ProductCardCatalog />
            </div>
            <div class="catalog__results__item">
              <ProductCardCatalog />
            </div>
            <div class="catalog__results__item">
              <ProductCardCatalog />
            </div>
          </div>
          <div class="catalog__results__footer">
            <AlfaButton styling="secondary" text="Показать все" />
          </div>
        </div>
      </div>
      <div class="catalog__footer">
        <PromotionSection />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs, ProductCardCatalog, PromotionSection } from "@/widgets";
import { CatalogFilter, Sorting } from "./ui";
import { AlfaButton } from "@/shared/ui/buttons";
import { useProduct } from "@/entities/Product/lib";
const { product } = useProduct();

export default defineComponent({
  name: "Catalog",
  components: {
    PageTitle,
    BreadCrumbs,
    CatalogFilter,
    Sorting,
    ProductCardCatalog,
    AlfaButton,
    PromotionSection,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
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
    grid-template-columns: auto 1fr;
    padding-left: 20px;
    column-gap: 50px;
    margin-bottom: 132px;
  }

  &__filter-container {
    max-width: 236px;
  }

  // *** Results *** //

  &__results {
    &__header {
      margin-bottom: 33px;
    }
    &__body {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
      justify-content: space-between;
    }

    &__item {
      //width: 276px;
      padding: 10px;
    }

    &__footer {
      margin-top: 20px;
    }
  }

  // *** Results END *** //
}
</style>

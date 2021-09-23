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
          <PageTitle :text="title" />
        </div>
      </div>

      <div class="catalog__content">
        <button
          class="catalog__content__mobile-filter-btn"
          @click="showFilterMobile"
        >
          <img src="./assets/mobile-filter-icon.svg" alt="" />
        </button>
        <div ref="filter" class="catalog__filter-container">
          <CatalogFilter @hide-mobile-filter="hideFilterMobile" />
          <div ref="filterBG" class="catalog__filter-container__bg"></div>
        </div>
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
import { CatalogFilter } from "./ui";
import { AlfaButton } from "@/shared/ui/buttons";
import { useProduct } from "@/entities/Products/Product/lib";
import { Sorting } from "@/features";
import { defineTitle, useMobileFilter } from "@/pages/Catalog/lib";
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
  props: {
    section: {
      type: String,
    },
    subsection: {
      type: String,
    },
  },
  setup(props) {
    const { product } = useProduct();

    return {
      product,
      ...useMobileFilter(),
      ...defineTitle(props),
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
    &__mobile-filter-btn {
      display: none;
    }
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

  @media screen and (max-width: 768px) {
    .catalog {
      &__content {
        grid-template-columns: 1fr;
        margin-bottom: 212px;
        position: relative;
        &__mobile-filter-btn {
          display: block;
          position: absolute;
          top: 0;
          right: 26px;
          transform: translateY(-50%);
        }
      }
      &__filter-container {
        background-color: white;
        max-width: 399px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
        min-height: 100vh;
        transform: translateX(-100%);
        div:first-child {
          position: relative;
          z-index: 4;
        }
        &__bg {
          background-color: #51628e;
          position: absolute;
          top: 0;
          left: 0;
          width: 200vw;
          height: 100vh;
          opacity: 0;
          display: none;
          z-index: 2;
        }
      }

      &__results {
        &__body {
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        }
      }
      &__bg {
        top: 2%;
        left: 9%;
        z-index: -1;
        width: 138vw;
      }
    }
  }
}
</style>

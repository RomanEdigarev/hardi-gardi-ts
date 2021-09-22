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
import { computed, defineComponent, onMounted } from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs, ProductCardCatalog, PromotionSection } from "@/widgets";
import { CatalogFilter } from "./ui";
import { AlfaButton } from "@/shared/ui/buttons";
import { useProduct } from "@/entities/Products/Product/lib";
import { Sorting } from "@/features";
import { useRoute } from "vue-router";
import { getCatalog } from "@/entities/Shop/lib";
import { Section } from "@/entities/Shop/Catalog/model";
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
    const route = useRoute();
    const { product } = useProduct();
    const catalog = getCatalog();

    const searchSectionByParams = (link: string, items: Section[]): Section => {
      const result = items.find((item) => {
        return item.link.includes(link);
      });
      return result;
    };
    const section = searchSectionByParams(
      props.section as string,
      catalog.sections
    );
    const subsection = searchSectionByParams(
      props.subsection as string,
      section.sections
    );
    const title = subsection?.name || section.name;

    return {
      product,
      title,
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

  @media screen and (max-width: 768px) {
    .catalog {
      &__content {
        grid-template-columns: 1fr;
        margin-bottom: 212px;
      }
      &__filter-container {
        display: none;
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

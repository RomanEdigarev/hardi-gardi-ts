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
        <button
          class="catalog__content__mobile-filter-btn"
          @click="showFilterMobile"
        >
          <img src="./assets/mobile-filter-icon.svg" alt="" />
        </button>
        <div ref="filter" class="catalog__filter-container">
          <CatalogFilter
            v-if="filters"
            @hide-mobile-filter="hideFilterMobile"
            @set-filter="setFilter"
            @remove-filter="removeFilter"
            @reset-filters="resetFilters"
            @apply-filter="applyFilter"
            @set-price="setPrice"
          />
          <div ref="filterBG" class="catalog__filter-container__bg"></div>
        </div>
        <div class="catalog__results">
          <div class="catalog__results__header">
            <Sorting />
          </div>
          <div
            class="catalog__results__header__change-phone-view"
            :class="phoneView"
          >
            <img
              src="./assets/phone-view_01.svg"
              alt=""
              @click="changePhoneView('cl-2')"
            />
            <img
              src="./assets/phone-view_02.svg"
              alt=""
              @click="changePhoneView('cl-1')"
            />
          </div>
          <div
            v-if="!isLoading || products.length > 0"
            class="catalog__results__body"
            :class="phoneView"
          >
            <div
              v-for="product in products"
              :key="product.id"
              class="catalog__results__item"
            >
              <ProductCardCatalog :product="product" />
            </div>
          </div>
          <div class="catalog__results__footer">
            <AlfaButton
              styling="secondary"
              text="Показать еще"
              :is-pending="isLoading"
              @click="fetchProducts"
            />
          </div>
        </div>
      </div>
      <div class="catalog__footer">
        <PromotionSection :products="[product, product]" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs, ProductCardCatalog, PromotionSection } from "@/widgets";
import { CatalogFilter } from "./ui";
import { AlfaButton } from "@/shared/ui/buttons";
import { useProduct } from "@/entities/Products/Product/lib";
import { Sorting } from "@/features";
import { defineTitle, useMobileFilter } from "@/pages/Catalog/lib";
import { getProductByPage, initCatalog } from "@/entities/Products/lib";
import { useStore } from "@/services/vuex";
import { Product } from "@/entities/Products/Product/model";
import {useRoute} from "vue-router";
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
    subsection: {
      type: String,
    },
  },
  setup(props) {
    const store = useStore();
    const route = useRoute()
    const { product } = useProduct();
    const phoneView = ref("cl-2");
    const changePhoneView = (viewType: string) => {
      phoneView.value = viewType;
    };

    onMounted(async () => {
      if(route.params.section) {
        store.commit("products/addCurrentFilter", { name: "section", value: route.params.section });
      }
      await initCatalog();
      console.log(route.params.section)
    });

    const applyFilter = async () => {
      await store.dispatch("products/setProductsByPage", 1);
    };
    const fetchProducts = () => {
      store.dispatch("products/addProductsByPage");
    };
    const setFilter = (name: string) => {
      store.commit("products/addCurrentFilter", { name });
    };
    const removeFilter = (name: string) => {
      store.commit("products/removeCurrentFilter", name);
    };
    const resetFilters = () => {
      store.commit("products/resetCurrentFilters");
      applyFilter();
    };

    const setPrice = (price: []) => {
      price.forEach((string) =>
        store.commit("products/addCurrentFilter", string)
      );
    };

    const filters = computed(() => store.getters["products/getFilters"]);

    return {
      product,
      ...useMobileFilter(),
      ...defineTitle(props),
      phoneView,
      changePhoneView,
      isLoading: computed(() => store.getters["products/getIsLoadingProducts"]),
      products: computed<Product[]>(
        () => store.getters["products/getProductsOnCurrentPage"]
      ),
      fetchProducts,
      setFilter,
      removeFilter,
      resetFilters,
      applyFilter,
      setPrice,
      filters,
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
      &__change-phone-view {
        display: none;
      }
    }
    &__body {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
      grid-auto-rows: 492px;
      justify-content: space-between;
    }

    &__item {
      //width: 276px;
      padding: 10px;
    }

    &__footer {
      margin-top: 20px;
      padding: 0 10px;
      :deep .btn {
        span {
          font-size: 16px;
        }
      }
    }
  }

  // *** Results END *** //
}

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
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
        //grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        grid-template-columns: repeat(auto-fill, 220px);
        grid-auto-rows: 388px;
        row-gap: 30px;
      }
      &__item {
        padding: 0;
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

@media screen and (min-width: 320px) and (max-width: 737px),
  (-webkit-min-device-pixel-ratio: 3) {
  .catalog {
    &__bg {
      display: none;
    }
    &__content {
      grid-template-columns: 1fr;
      position: relative;
      padding: 0;
      margin-bottom: 80px;
      &__mobile-filter-btn {
        width: 44px;
        height: 44px;
        right: 0;
        top: 8px;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    &__results {
      &__header {
        margin-bottom: 16px;
        &__change-phone-view {
          display: block;
          margin-bottom: 23px;
          img {
            transition: opacity 0.3s ease-in-out;
          }
          img:first-child {
            cursor: pointer;
            margin-right: 15px;
          }
        }
        &__change-phone-view.cl-1 {
          img:first-child {
            opacity: 0.3;
          }
        }
        &__change-phone-view.cl-2 {
          img:nth-child(2) {
            opacity: 0.3;
          }
        }
      }
      &__body {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        row-gap: 19px;
        gap: 10px;
        justify-content: space-between;
        grid-auto-rows: auto;
      }

      &__body.cl-1 {
        .catalog__results__item {
          width: 80vw;
          max-width: 460px;
        }

        justify-items: center;
        grid-template-columns: 1fr;
        grid-auto-rows: 160px;
        :deep .catalog-product-card {
          flex-direction: row;
          &__info {
            padding-left: 16px;
            max-width: 86%;
            justify-content: space-between;
          }
          &__title {
            font-size: 12px;
            line-height: 1.33;
            margin-bottom: 0;
          }
          &__price__prev {
            font-size: 12px;
            line-height: 1.33;
          }
          &__favorite-btn {
            width: 32px;
            height: 32px;
            top: 10px;
            right: 10px;
          }
          &__shop-btn {
            width: 44px;
            height: 44px;
            right: 10px;
            bottom: 10px;
          }
          &__image-wrapper {
            max-width: 112px;
          }
        }
      }

      &__item {
        padding: 0;
      }
      &__footer {
        :deep & > button > span {
          font-weight: $bold;
          font-size: 16px;
          line-height: 1.75;
        }
      }
    }
    &__filter-container {
      background-color: white;
      max-width: 100vh;
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
  }

  .catalog {
    &__results {
      &__body.cl-2 {
        :deep .catalog-product-card {
          &__title {
            font-size: 12px;
            line-height: 1.33;
            margin-bottom: 0;
          }
          &__price__prev {
            font-size: 12px;
            line-height: 1.33;
          }
          &__info {
            justify-content: space-between;
          }
          &__favorite-btn {
            width: 32px;
            height: 32px;
            top: 10px;
            right: 10px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .catalog {
    &__results {
      &__body {
        grid-template-columns: 160px 160px;
        row-gap: 19px;
        justify-content: space-between;
        grid-auto-rows: 326px;
      }
      &__body.cl-1 {
        .catalog__results__item {
          width: 100%;
        }
      }
    }
  }
}
</style>

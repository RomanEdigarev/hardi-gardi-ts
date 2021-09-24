<template>
  <div class="favorites">
    <main class="page-main">
      <div class="page-main__header">
        <div class="page-main__title-container">
          <PageTitle :text="`Избранное (${4})`" />
        </div>
      </div>
      <div class="favorites__header">
        <Sorting />
        <div class="favorites__header__change-phone-view" :class="phoneView">
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
      </div>

      <div class="favorites__body" :class="phoneView">
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
import { defineComponent, ref } from "vue";
import { PageTitle } from "@/shared/ui";
import { Sorting } from "@/features";
import { ProductCardCatalog } from "@/widgets";
export default defineComponent({
  name: "Favorites",
  components: { PageTitle, Sorting, ProductCardCatalog },
  setup() {
    const phoneView = ref("cl-1");
    const changePhoneView = (viewType: string) => {
      phoneView.value = viewType;
    };
    return {
      phoneView,
      changePhoneView,
    };
  },
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

    &__change-phone-view {
      margin-top: 12px;
      display: none;
    }
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

@media screen and (max-width: 768px) {
  .favorites {
    &__body {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }
  }
}

@media screen and (max-width: 376px) {
  .favorites {
    &__header {
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
      grid-template-columns: 160px 160px;
      row-gap: 19px;
      justify-content: space-between;
      &__item {
        padding: 0;
      }
    }
    &__body.cl-1 {
      grid-template-columns: 1fr;
      grid-auto-rows: 160px;
      :deep .catalog-product-card {
        flex-direction: row;
        &__info {
          padding-left: 16px;
          max-width: 135px;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>

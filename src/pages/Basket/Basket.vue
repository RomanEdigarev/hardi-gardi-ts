<template>
  <div class="basket">
    <main class="page-main">
      <div class="page-main__header">
        <PageTitle text="Корзина (2)" />
      </div>
      <div class="basket__body">
        <div class="basket__body__products-list">
          <ProductCardCatalog is-cart />
        </div>
        <div class="basket__body__checkout"><Checkout /></div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Checkout } from "./ui";
import { PageTitle } from "@/shared/ui";
import { ProductCardCart, ProductCardCatalog } from "@/widgets";
export default defineComponent({
  name: "Basket",
  components: {
    Checkout,
    PageTitle,
    ProductCardCatalog,
  },
});
</script>

<style lang="scss" scoped>
.basket {
  // *** Body *** //
  &__body {
    display: flex;
    width: 100%;
    &__products-list {
      width: 100%;
      height: 10px;
    }
    &__checkout {
      min-width: 378px;
    }
  }
  // *** Body END *** //
}
</style>

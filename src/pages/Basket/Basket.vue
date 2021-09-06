<template>
  <div class="basket">
    <main class="page-main">
      <div class="page-main__header">
        <PageTitle text="Корзина (2)" />
      </div>
      <div class="basket__body">
        <div class="basket__body__products-list">
          <div class="basket__body__products-list__item">
            <ProductCard />
          </div>
          <div class="basket__body__products-list__item">
            <ProductCard />
          </div>
          <div class="basket__body__products-list__item">
            <ProductCard />
          </div>
          <div class="basket__body__products-list__item">
            <ProductCard />
          </div>
        </div>
        <div class="basket__body__checkout"><Checkout /></div>
      </div>
      <div class="basket__footer">
        <Package />
      </div>
    </main>
    <div ref="deleteModal" class="basket__delete-modal-container">
      <DeleteModal />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Checkout, ProductCard, DeleteModal, Package } from "./ui";
import { PageTitle } from "@/shared/ui";
export default defineComponent({
  name: "Basket",
  components: {
    Checkout,
    PageTitle,
    ProductCard,
    DeleteModal,
    Package,
  },
});
</script>

<style lang="scss" scoped>
.basket {
  position: relative;
  .page-main__header {
    margin-bottom: 32px;
  }
  // *** Body *** //
  &__body {
    display: flex;
    width: 100%;
    margin-bottom: 36px;
    &__products-list {
      width: 100%;
      &__item {
        margin-bottom: 12px;
      }
    }
    &__checkout {
      min-width: 378px;
    }
  }
  // *** Body END *** //

  &__delete-modal-container {
    width: 582px;
    position: absolute;
    left: 0;
    opacity: 0;
    display: none;
  }
}
</style>

<template>
  <div class="basket">
    <main class="page-main">
      <div class="page-main__header">
        <PageTitle :text="`Корзина (${basketCount})`" />
      </div>
      <div class="basket__body">
        <div class="basket__body__products-list">
          <div v-for="product in products" class="basket__body__products-list__item">
            <ProductCardCart :product="product.product" :count="product.quantity"/>
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
import {computed, defineComponent, onMounted} from "vue";
import { DeleteModal, Package } from "./ui";
import { PageTitle } from "@/shared/ui";
import { Checkout, ProductCardCart } from "@/widgets";
import {useStore} from "@/services/vuex";
import {BasketItem} from "@/entities/Basket/model";
export default defineComponent({
  name: "Basket",
  components: {
    Checkout,
    PageTitle,
    DeleteModal,
    Package,
    ProductCardCart,
  },
  setup() {
    const store = useStore()
    return {
      products: computed<BasketItem[]>(() => store.getters['basket/getProducts']),
      basketCount: computed<number>(() => store.getters['basket/getBasketCount'])
    }
  }
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
@media screen and (max-width: 768px) {
  .basket {
    &__body {
      &__checkout {
        width: 232px;
        min-width:  232px;
      }
    }

  }
}
@media screen and (max-width: 376px) {
  .basket {
    &__body {
      flex-direction: column;
      &__checkout {
        min-width:  100%;
      }
    }

  }
}
</style>

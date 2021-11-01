<template>
  <div class="basket">
    <main class="page-main">
      <div class="page-main__header">
        <PageTitle :text="`Корзина (${basketCount})`" />
      </div>
      <div class="basket__body">
        <div class="basket__body__products-list">
          <div
            v-for="product in products"
            class="basket__body__products-list__item"
          >
            <ProductCardCart
              :product="product.product"
              :count="product.quantity"
              :position-id="product.positionID"
              @plus-position="plusPosition"
              @minus-position="minusPosition"
              @delete-product="deleteProduct"
            />
          </div>
        </div>
        <div v-if="!isPhone" class="basket__body__checkout">
          <Checkout @checkout="checkout" />
        </div>
      </div>
      <div class="basket__footer">
        <div class="basket__footer__package">
          <Package />
        </div>
        <div v-if="isPhone" class="basket__footer__checkout">
          <Checkout @checkout="checkout" />
        </div>
      </div>
    </main>
    <div ref="deleteModal" class="basket__delete-modal-container">
      <DeleteModal :product-id="deletingProductId" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { DeleteModal, Package } from "./ui";
import { PageTitle } from "@/shared/ui";
import { Checkout, ProductCardCart } from "@/widgets";
import { useStore } from "@/services/vuex";
import { Basket, BasketItem } from "@/entities/Basket/model";
import { useRouter } from "vue-router";
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
    const store = useStore();
    const router = useRouter();
    const products = computed<BasketItem[]>(
      () => store.getters["basket/getProducts"]
    );
    const deletingProductId = ref();
    const plusPosition = (positionID) => {
      const position = store.getters["basket/getPosition"](positionID);
      store.dispatch("basket/changeQuantity", {
        id: positionID,
        quantity: position.quantity + 1,
      });
    };
    const minusPosition = (positionID) => {
      const position = store.getters["basket/getPosition"](positionID);
      store.dispatch("basket/changeQuantity", {
        id: positionID,
        quantity: position.quantity - 1,
      });
    };
    const checkout = (link, promoCode?) => {
      promoCode && store.dispatch("basket/addBasketCoupon", promoCode);
      router.push(link);
    };
    const deleteProduct = (positionId) => {
      deletingProductId.value = positionId;
    };

    return {
      products,
      basketCount: computed<number>(
        () => store.getters["basket/getBasketCount"]
      ),
      basket: computed<Basket>(() => store.getters["basket/getBasket"]),
      plusPosition,
      minusPosition,
      checkout,
      isPhone: computed(() => store.getters["getIsPhone"]),
      deleteProduct,
      deletingProductId,
    };
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
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .basket {
    &__body {
      &__checkout {
        width: 232px;
        min-width: 232px;
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .basket {
    &__body {
      flex-direction: column;
      &__checkout {
        min-width: 100%;
      }
    }
    &__footer {
      &__package {
        margin-bottom: 22px;
      }
    }
  }
}
</style>

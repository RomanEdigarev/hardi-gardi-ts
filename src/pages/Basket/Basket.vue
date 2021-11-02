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
        <div ref="checkoutRef" v-if="isPhone" class="basket__footer__checkout" :class="{'is-fixed': isFixed}">
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
import {computed, defineComponent, ref, watchEffect} from "vue";
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


    const checkoutRef = ref(null)
    const isFixed = ref(true)
    watchEffect(() => {
      if (checkoutRef.value) {
        const options = {
          root: null,
          threshold: 0
        }
        const callback = (entries, observer) => {
          if (entries[0].intersectionRatio >= 0) {
            isFixed.value = !entries[0].isIntersecting
            console.log(
                // observer
                // entries[0].isIntersecting
                parseFloat(entries[0].intersectionRatio.toFixed(1))
            )
          }
        }
        const observer = new IntersectionObserver(callback, options)
        observer.observe(checkoutRef.value)
      }
    })


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
      checkoutRef,
      isFixed
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
@include phone {
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
    &__delete-modal-container {
      width: 98vw;
      max-width: 339px;
    }
    :deep .product-card {
      &__price {
        flex-direction: row-reverse;
        justify-content: flex-end;
        &__current {
          margin-right: 10px;
        }
        span {
          width: auto;
        }
      }
    }
    :deep .checkout {
      &__header {
        margin-bottom: 18px;
      }
      &__body {
        padding-bottom: 0;
        margin-bottom: 0;
        border-bottom: none;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
          "list"
          "title"
          "subtitle";

        &__title {
          grid-area: title;
          span {
            font-size: 22px;
          }
        }
        &__subtitle {
          grid-area: subtitle;
          font-size: 12px;
          max-width: 204px;
          margin-bottom: 26px;
          span {
            font-size: 12px;
          }
        }
        &__list {
          grid-area: list;
          padding-bottom: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid #FFFFFF;
          &__goods {
            margin-bottom: 0;
          }
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
  .is-fixed {
    :deep .checkout__footer {
      width: 100%;
      position: fixed;
      bottom: 10px;
      left: 0;
      margin: 0 auto;
      display: flex;
      justify-content: center;
       button {
        width: 295px;
      }
    }
  }
}
</style>

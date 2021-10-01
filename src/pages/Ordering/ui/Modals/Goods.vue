<template>
  <div class="goods-modal">
    <div class="goods-modal__header">
      <div class="goods-modal__header__title">Состав заказа</div>
      <div class="goods-modal__close-btn"></div>
    </div>
    <div class="goods-modal__body">
      <div v-for="product in products" class="goods-modal__body__item">
        <ProductCardCart
          to-modal
          :product="product.product"
          :count="product.quantity"
          :position-id="product.id"
        />
      </div>
      <div class="goods-modal__body__item packing">
        <div class="goods-modal__body__item__icon packing__icon">
          <PlusIcon />
        </div>
        <img
          class="goods-modal__body__item__img"
          :src="require('/public/images/packing.png')"
        />
        <div class="goods-modal__body__item__packing-info">
          <div class="goods-modal__body__item__packing-info__title">
            Подарочная упаковка
          </div>
          <div class="goods-modal__body__item__packing-info__price">250 Р</div>
        </div>
      </div>
    </div>
    <div class="goods-modal__footer">
      <div class="goods-modal__footer__btn" data-close-modal>
        <AlfaButton text="Продолжить" />
      </div>
      <div class="goods-modal__footer__sub-btn alfa-link">Изменить</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ProductCardCart } from "@/widgets";
import { PlusIcon } from "@/shared/ui/icons";
import { AlfaButton } from "@/shared/ui/buttons";
import { BasketItem } from "@/entities/Basket/model";
export default defineComponent({
  name: "Modal",
  components: { ProductCardCart, PlusIcon, AlfaButton },
  props: {
    products: {
      type: Object as PropType<BasketItem[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.goods-modal {
  width: 786px;
  max-height: 68.79vh;
  overflow-y: scroll;
  padding: 36px;
  color: $clr-phi;
  background-color: $clr-tau;
  border-radius: 25px;

  // *** Header *** //
  &__header {
    margin-bottom: 25px;
    &__title {
      font-weight: $bold;
      font-size: 24px;
      line-height: 1.25;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    margin-bottom: 22px;
    &__item {
      height: 140px;
      margin-bottom: 19px;
      border-bottom: 1px solid $clr-kappa;
      &__icon {
        width: 20px;
        height: 20px;
        margin-right: 32px;
      }
      &__img {
        width: 80px;
        height: 100px;
        object-fit: cover;
        border-radius: 12px;
        margin-right: 24px;
      }
      &__packing-info {
        &__title {
          font-weight: $semi-bold;
          font-size: 15px;
          line-height: 1.2;
          margin-bottom: 7px;
        }
        &__price {
          font-weight: $semi-bold;
          font-size: 16px;
          line-height: 20px;
          color: $clr-zeta;
        }
      }
    }

    &__item.packing {
      background: $clr-kappa;
      padding: 20px 36px;
      border-radius: 20px;
      display: flex;
      align-items: center;
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    display: flex;
    align-items: center;
    &__btn {
      width: 276px;
      margin-right: 30px;
    }
    &__sub-btn {
    }
  }
  // *** Footer END *** //
}
@media screen and (min-width: 320px) and (max-width: 736px), (-webkit-min-device-pixel-ratio: 3) {
  .goods-modal {
    max-width: 339px;
    padding: 40px 22px;
    max-height: 95vh;
  }
}
</style>

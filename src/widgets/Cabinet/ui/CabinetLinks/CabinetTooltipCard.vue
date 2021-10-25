<template>
  <div class="cabinet-tooltip-card">
    <div class="cabinet-tooltip-card__image-container">
      <ImageProductCard :img-path="product.img" />
    </div>
    <div class="cabinet-tooltip-card__body">
      <div class="cabinet-tooltip-card__body__title">
        {{ product.title }}
      </div>
      <div class="cabinet-tooltip-card__body__price">
        <div>{{ product.currentPrice }} ₽/шт</div>
        <div>{{ quantity }} шт</div>
      </div>
      <div class="cabinet-tooltip-card__close-btn">
        <CloseIcon @click="$emit('delete')" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ImageProductCard from "@/widgets/Product/ImageProductCard/ImageProductCard.vue";
import { CloseIcon } from "@/shared/ui/icons";
import { Product } from "@/entities/Products/Product/model";

export default defineComponent({
  name: "CabinetTooltipCard",
  components: { ImageProductCard, CloseIcon },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
    quantity: {
      type: Number,
    },
  },
  setup() {},
});
</script>

<style scoped lang="scss">
.cabinet-tooltip-card {
  width: 330px;
  height: 132px;
  padding: 16px;
  background: #fceef4;
  border-radius: 25px;
  display: flex;
  position: relative;
  &__image-container {
    min-width: 80px;
    height: 100px;
    margin-right: 14px;
  }
  :deep .product-image-card {
    &__content-container {
      min-width: auto;
      .card {
        border-radius: 12px !important;
      }
    }
  }
  &__body {
    padding: 10px 0;
    &__title {
      max-width: 80%;
      font-weight: bold;
      font-size: 13px;
      line-height: 17px;
      color: #606060;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 9px;
    }
    &__price {
      width: 100%;
      display: flex;
      justify-content: space-between;
      div:first-child {
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #d23c50;
      }
      div:nth-child(2) {
        font-size: 14px;
        line-height: 24px;
        color: #606060;
      }
    }
  }
  &__close-btn {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
  }
}
</style>

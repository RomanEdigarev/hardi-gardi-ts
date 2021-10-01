<template>
  <div class="history">
    <div class="history__body">
      <div class="history__body__item"><Order /></div>
      <div class="history__body__item"><Order /></div>
      <div class="history__body__item"><Order /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Order } from "./ui";

export default defineComponent({
  name: "History",
  components: {
    Order,
  },
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 769px) and (min-width: 377px){
  .history {
    :deep .order__footer__item {
      padding: 20px;
    }
    :deep .product-card.toModal, :deep .product-card {
      grid-template-columns: 1fr 0fr;
      &__product {
        grid-row: 1/3;
        &__title {
          max-width: 205px;
        }
      }
      &__count {
        grid-row: 2/3;
        display: block;
        width: auto;
        height: auto;
        align-self: flex-start;
        justify-self: flex-end;
        div {
          padding-left: 0;
          span {
            white-space: nowrap;
          }
        }
      }
      &__price {
        grid-row: 1/2;
        padding-left: 0;
        min-width: 69px;
        margin-bottom: 0;
        span {
          font-size: 14px;
          white-space: nowrap;
        }
      }
    }
  }

}
@media screen and (max-width: 376px){
  .history {
    :deep .product-card.toModal, :deep .product-card {
      grid-template-rows: 1fr 0fr;
      &__product {
        grid-column: 1/3;
        &__title {
          max-width: 80%;
          p {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

        }
      }
      &__price {
        margin-bottom: 0;
        grid-column: 2/3;
        padding: 0;
        flex-direction: row;

        span {
          width: auto;
          flex-shrink: 0;
          line-height: 0.8 !important;
        }
      }
      &__count {
        height: auto;
        grid-row: 2/3;
        align-items: flex-start;
        display: block;
        padding-top: 0 !important;
        div {
          padding-left: 90px;
        }
      }
    }
  }

}
</style>

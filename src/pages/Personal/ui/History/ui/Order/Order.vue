<template>
  <div class="order" :class="{ 'is-open': isOpen }">
    <div class="order__body">
      <div class="order__body__left">
        <div class="order__body__left__btn" @click="toggle">
          <button>
            <svg
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 1.99854L9 8.99854L2 1.99853"
                stroke="white"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="order__body__left__info">
          <div class="order__body__left__info__title">
            <span>№6578</span>
            <span>от 15.12.2020</span>
          </div>
          <div class="order__body__left__info__status">
            <span>В пути</span>
            <span>29358769048</span>
          </div>
        </div>
      </div>
      <div class="order__body__right">
        <div class="order__body__right__price">2 400 ₽</div>
        <div class="order__body__right__quantity">5 товаров</div>
      </div>
    </div>
    <div ref="footer" class="order__footer">
      <div class="order__footer__details">
        <Details />
      </div>
      <div class="order__footer__item">
        <ProductCardCart to-modal :product="product" :count="2"/>
      </div>
      <div class="order__footer__item">
        <ProductCardCart to-modal :product="product" :count="2"/>
      </div>
      <div class="order__footer__item">
        <ProductCardCart to-modal :product="product" :count="2"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ProductCardCart } from "@/widgets";
import anime from "animejs";
import Details from "@/pages/Personal/ui/Details/Details.vue";
import {useProduct} from "@/entities/Products/Product/lib";

export default defineComponent({
  name: "Order",
  components: {
    ProductCardCart,
    Details,
  },
  setup() {
    const isOpen = ref(false);
    const footer = ref<HTMLElement>(null);
    const {product} = useProduct()
    const animation = (isOpen) => {
      if (isOpen) {
        anime
          .timeline({
            targets: footer.value,
            maxHeight: [0, "1000px"],
            easing: "spring(1, 70, 10, 0)",
          })
          .add({
            targets: footer.value,
            opacity: [0, 1],
            duration: 500,
            easing: "linear",
          });
      } else {
        anime({
          targets: footer.value,
          maxHeight: ["1000px", "0px"],
          duration: 300,
          easing: "linear",
        });
      }
    };
    const toggle = () => {
      isOpen.value = !isOpen.value;
      animation(isOpen.value);
    };

    return {
      isOpen,
      footer,
      toggle,
      product
    };
  },
});
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  max-width: 726px;
  color: $clr-phi;
  // *** Body *** //
  &__body {
    border: 1px solid $clr-upsilon;
    border-radius: 25px;
    padding: 24px 36px;
    display: flex;
    width: 100%;
    transition: background-color 0.3s ease-in-out;
    justify-content: space-between;
    margin-bottom: 12px;
    &__left {
      display: flex;
      &__btn {
        width: 46px;
        height: 46px;
        flex-shrink: 0;
        margin-right: 28px;
        button {
          width: 100%;
          height: 100%;
          max-height: 46px;
          max-width: 46px;
          background: $clr-zeta;
          border-radius: 17px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        svg {
          width: 20px;
          transition: transform 0.3s ease-in-out;
        }
      }
      &__info {
        &__title {
          margin-bottom: 8px;
          span:first-child {
            margin-right: 10px;
            font-weight: $bold;
            font-size: 16px;
            line-height: 24px;
          }
        }
        &__status {
          span {
            margin-right: 10px;
            font-size: 15px;
            line-height: 1.6;
            color: $clr-nu;
          }
          span:nth-child(2) {
            text-decoration-line: underline;
            font-size: 15px;
            line-height: 1.6;
            color: $clr-nu;
          }
        }
      }
    }
    &__right {
      display: flex;
      flex-direction: column;
      &__price {
        margin-bottom: 5px;
        font-weight: $bold;
        font-size: 24px;
        line-height: 1.25;
      }
      &__quantity {
        font-size: 14px;
        line-height: 1.43;
        text-align: center;
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    max-height: 0;
    overflow: hidden;
    &__item {
      margin-bottom: 12px;
      padding: 24px 36px;
      border: 1px solid $clr-upsilon;
      border-radius: 25px;
    }
    &__details {
      display: none;
      margin-bottom: 10px;
    }
  }
  // *** Footer END *** //
}

.is-open {
  .order {
    &__body {
      background-color: $clr-upsilon;
      &__left__btn {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
}

@media screen and (min-width: 738px) and (max-width: 1364px), (-webkit-min-device-pixel-ratio: 3) {
  .order {
    max-width: 430px;
  }
}

@media screen and (min-width: 320px) and (max-width: 736px), (-webkit-min-device-pixel-ratio: 3) {
  .order {
    max-width: 310px;

    &__body {
      padding: 20px 10px;
      &__left {
        align-items: center;
        &__info {
          &__title {
            span:first-child {
              font-size: 14px;
              line-height: 18px;
            }
            span:nth-child(2) {
              font-size: 12px;
              line-height: 1.5;
            }
          }
          &__status {
            span,
            span:nth-child(2) {
              font-size: 12px;
              line-height: 1.5;
            }
          }
        }
        &__btn {
          width: 24px;
          height: 24px;
          border-radius: 10px;
          button {
            background: $clr-zeta;
            border-radius: 10px;
          }
          svg {
            width: 10px;
          }
        }
      }
      &__right {
        &__price {
          font-size: 16px;
          line-height: 1.12;
        }
        &__quantity {
          font-size: 12px;
          line-height: 1.5;
        }
      }
    }
    &__footer {
      &__item {
        padding: 14px;
        :deep .product-card__price {
          flex-direction: row;
          padding: 0;
          margin: 0;
          position: absolute;
          bottom: 0;
          right: 0;
          span {
            width: auto;
            flex-shrink: 0;
          }
          &__current {
            font-size: 14px;
            line-height: 18px;
            margin-left: 8px;
          }
          &__prev {
            font-size: 11px;
            line-height: 1.45;
          }
        }
      }
      &__details {
        display: block;
      }
    }
  }
}
</style>

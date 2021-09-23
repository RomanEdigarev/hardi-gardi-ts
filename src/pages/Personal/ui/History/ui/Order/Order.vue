<template>
  <div class="order" :class="{ 'is-open': isOpen }">
    <div class="order__body">
      <div class="order__body__left">
        <div class="order__body__left__btn" @click="toggle">
          <button>
            <svg
              width="18"
              height="11"
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
      <div class="order__footer__item">
        <ProductCardCart to-modal />
      </div>
      <div class="order__footer__item">
        <ProductCardCart to-modal />
      </div>
      <div class="order__footer__item">
        <ProductCardCart to-modal />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ProductCardCart } from "@/widgets";
import anime from "animejs";

export default defineComponent({
  name: "Order",
  components: {
    ProductCardCart,
  },
  setup() {
    const isOpen = ref(false);
    const footer = ref<HTMLElement>(null);
    const animation = (isOpen) => {
      if (isOpen) {
        anime
          .timeline({
            targets: footer.value,
            maxHeight: [0, "1000px"],
            easing: "spring(1, 20, 10, 0)",
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
          background: #d23c50;
          border-radius: 17px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        svg {
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

@media screen and (max-width: 768px) {
  .order {
    max-width: 430px;
  }
}
</style>

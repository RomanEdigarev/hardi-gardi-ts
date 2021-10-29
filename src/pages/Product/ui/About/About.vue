<template>
  <div class="about-product">
    <div class="about-product__header">
      <div class="about-product__title">
        {{ title }}
      </div>
    </div>
    <div class="about-product__body">
      <div class="about-product__body__text">
        Ты знаешь кто такой тиранозавр? Умеет ли птеродактиль летать? Кто такие
        палеонтологи и что они изучают? Давай разбираться вместе с магнитной
        игрой «Познаём мир. Юрских период. Динозавры» от Харди Гарди.
      </div>
      <div class="about-product__body__price-container">
        <div class="about-product__body__price-container__price-prev">
          {{ pricePrev }} &#8381;
        </div>
        <div class="about-product__body__price-container__price-current">
          {{ priceCurrent }} &#8381;/шт
        </div>
        <div class="about-product__body__price-container__add-to-fav">
          <AddToFavorite :is-favorite="false" :product-id="productId" />
        </div>
      </div>
      <div class="about-product__body__add-container">
        <div class="about-product__body__add-container__count">
          <span class="about-product__body__add-container__count__btn">
            <CounterButton
              :isPlus="false"
              @click="quality--"
              :disabled="quality === 1"
            />
          </span>
          <span class="about-product__body__add-container__count__value">
            {{ quality }}
          </span>
          <span class="about-product__body__add-container__count__btn">
            <CounterButton :isPlus="true" @click="quality++" />
          </span>
        </div>
        <div class="about-product__body__add-container__btn">
          <AlfaButton
            styling="primary"
            text="В корзину"
            @click="addToBasket"
          ></AlfaButton>
        </div>
      </div>
      <div v-if="isSets" class="about-product__body__set-slider">
        <SetSlider :products="partsProducts" />
      </div>
    </div>
    <div class="about-product__footer">
      <div class="about-product__footer__item">
        <svg
          width="38"
          height="42"
          viewBox="0 0 38 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.16764 14.8767C6.71947 14.0129 5.15544 13.1491 3.53349 12.2854C2.60666 11.7671 1.96947 11.1337 1.67983 10.3275C1.3902 9.52134 1.3902 8.77274 1.62191 8.02414C1.85361 7.27555 2.31703 6.58454 2.95422 6.06628C3.59142 5.49044 4.34447 5.20251 5.21337 5.20251C5.90849 5.20251 6.54569 5.37527 7.12496 5.66319C8.63105 6.41178 10.1372 7.21796 11.5274 7.96656C12.9756 8.77274 14.3079 9.52134 15.5823 10.2699V3.87808C15.5823 2.61122 15.9878 1.68987 16.7987 1.05645C17.5518 0.365436 18.4207 0.0775146 19.4054 0.0775146C20.3323 0.0775146 21.2012 0.365436 22.0122 0.998863C22.8231 1.63229 23.1707 2.61122 23.1707 3.87808V12.2854L32.4969 7.85139C33.0182 7.62105 33.5975 7.4483 34.2926 7.4483C35.1615 7.4483 35.9146 7.73622 36.5518 8.31207C37.189 8.88791 37.5945 9.57892 37.8262 10.3275C38.0579 11.1337 38 11.8823 37.7103 12.6885C37.4207 13.4946 36.7835 14.1281 35.7408 14.6463L27.1097 18.7924C30.1798 21.4413 33.3079 24.4357 36.4939 27.8907C37.189 28.5817 37.5945 29.3303 37.6524 30.0789C37.7103 30.8275 37.5945 31.5185 37.2469 32.0944C36.9573 32.6702 36.4939 33.1885 35.8567 33.5916C35.2774 33.9947 34.5823 34.225 33.8292 34.225C32.7865 34.225 31.9176 33.8219 31.0487 33.0157C29.6006 31.5761 28.2103 30.2517 26.9359 28.9848C25.7195 27.718 24.4451 26.5087 23.1707 25.4146V37.3345C23.1707 38.6014 22.7652 39.5227 21.9542 40.1562C21.1433 40.7896 20.2743 41.0775 19.3475 41.0775C18.4207 41.0775 17.5518 40.7896 16.7408 40.1562C15.9298 39.5227 15.5243 38.6014 15.5243 37.3345V24.2629L5.503 29.1C4.98166 29.3303 4.40239 29.4455 3.70727 29.4455C2.83837 29.4455 2.08532 29.1576 1.44813 28.5817C0.810931 28.0059 0.405443 27.3149 0.173736 26.5663C-0.0579718 25.7601 -4.49847e-05 24.9539 0.289589 24.1477C0.579223 23.3416 1.21642 22.7081 2.2591 22.2475L12.4542 17.4104C11.0061 16.6042 9.61581 15.7404 8.16764 14.8767Z"
            fill="#5F73AA"
          />
        </svg>
        <div>
          <span class="about-product__footer__item__value">39</span>
          <span class="about-product__footer__item__text">предметов</span>
        </div>
      </div>
      <div class="about-product__footer__item">
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9685 47.9288L1.02398 26.9843C-0.341328 25.619 -0.341328 23.4113 1.02398 22.046L21.9685 1.1015C23.3338 -0.263813 25.5415 -0.263813 26.9068 1.1015L47.8513 22.046C49.2166 23.4113 49.2166 25.619 47.8513 26.9843L26.9068 47.9288C25.5415 49.2941 23.3338 49.2941 21.9685 47.9288Z"
            fill="#FADDEA"
          />
        </svg>
        <div>
          <span class="about-product__footer__item__value">1</span>
          <span class="about-product__footer__item__text">персонаж</span>
        </div>
      </div>
      <div class="about-product__footer__item">
        <svg
          width="30"
          height="41"
          viewBox="0 0 30 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.05892 9.2809C0.983196 8.44423 0.305929 7.48804 0.106721 6.45216C-0.0924865 5.41628 -0.0128131 4.38039 0.345761 3.42419C0.704335 2.46799 1.34177 1.67116 2.25813 1.0337C3.13464 0.396232 4.09088 0.0775146 5.08691 0.0775146C6.08295 0.0775146 7.11882 0.436084 8.11486 1.19307L27.5575 15.9743C28.9918 17.05 29.709 18.3648 29.7488 19.8787C29.7886 21.3927 29.1113 22.7474 27.6771 23.9028L9.27028 38.923C8.35392 39.7597 7.27819 40.1979 6.12279 40.1979C5.12675 40.1979 4.17056 39.8792 3.29404 39.2418C2.41753 38.6043 1.78005 37.8473 1.38163 36.8911C0.983216 35.9747 0.903542 34.9787 1.14259 33.9428C1.3418 32.9069 1.97925 31.9507 2.97529 31.1141L16.362 20.1576L2.05892 9.2809Z"
            fill="#FFC124"
          />
        </svg>
        <div>
          <span class="about-product__footer__item__value">3+</span>
          <span class="about-product__footer__item__text">возраст</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { AddToFavorite } from "@/features";
import { CounterButton, AlfaButton } from "@/shared/ui/buttons";
import SetSlider from "../SetSlider/SetSlider.vue";
import { Product } from "@/entities/Products/Product/model";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "About",
  components: { AddToFavorite, CounterButton, AlfaButton, SetSlider },
  props: {
    isSets: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    pricePrev: {
      type: String,
    },
    priceCurrent: {
      type: String,
      required: true,
    },
    partsProducts: {
      type: Object as PropType<Product[]>,
    },
    productId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const quality = ref(1);

    const addToBasket = async () => {
      await store.dispatch("basket/addToBasket", {
        id: props.productId,
        quantity: quality.value,
      });
    };

    return {
      quality,
      addToBasket,
    };
  },
});
</script>

<style lang="scss" scoped>
.about-product {
  width: 100%;
  &__header {
    margin-bottom: 22px;
  }

  &__title {
    font-weight: $semi-bold;
    font-size: 36px;
    line-height: 1.22;
    color: $clr-nu;
  }

  // *** Body *** //
  &__body {
    margin-bottom: 54px;
    &__text {
      font-style: normal;
      font-weight: $regular;
      font-size: 15px;
      line-height: 1.6;
      color: $clr-phi;
      margin-bottom: 45px;
    }

    &__price-container {
      display: flex;
      margin-bottom: 34px;
      align-items: center;
      &__price-prev {
        flex-shrink: 0;
        padding-top: 7px;
        font-weight: $bold;
        font-size: 20px;
        line-height: 1.1;
        text-decoration-line: line-through;
        color: $clr-phi;
        margin-right: 16px;
      }
      &__price-current {
        font-weight: $bold;
        font-size: 28px;
        line-height: 1.21;
        color: $clr-zeta;
        width: 100%;
      }
    }

    &__add-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__btn {
        width: 224px;
        :deep .btn {
          span {
            font-size: 16px;
          }
        }
      }
      &__count {
        height: 44px;
        &__btn {
          height: 100%;
          width: 44px;
          display: inline-block;
        }
        &__value {
          font-weight: $bold;
          font-size: 16px;
          line-height: 1.12;
          color: $clr-phi;
          margin: 0 18px;
        }
      }
    }
    &__set-slider {
      margin-top: 44px;
      padding: 34px 0;
      border-top: 1px solid $clr-upsilon;
      border-bottom: 1px solid $clr-upsilon;
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    //width: 100%;
    display: flex;
    justify-content: center;
    &__item {
      width: 118px;
      margin-right: 12px;
      height: 98px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #d9dce2;
      box-sizing: border-box;
      border-radius: 25px;
      div {
        text-align: center;
      }
      svg {
        position: absolute;
        top: -10px;
        left: -2px;
      }
      &__value {
        display: inline-block;
        width: 100%;
        font-weight: $bold;
        font-size: 28px;
        line-height: 1.21;
        text-align: center;
        color: $clr-phi;
      }
      &__text {
        font-weight: normal;
        font-size: 15px;
        line-height: 1.6;
        color: $clr-phi;
      }
    }
  }

  // *** Footer END *** //
}

//@media screen and (min-width: 737px) and (max-width: 1360px),
//  (-webkit-min-device-pixel-ratio: 3) {
//  .about-product {
//    width: 80vw;
//    //max-width: 480px;
//    min-width: 340px;
//    margin: 0 auto;
//  }
//}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .about-product {
    width: 80vw;
    max-width: 480px;
    min-width: 340px;
    margin: 0 auto;
    &__header {
    }
    &__title {
      font-size: 22px;
      line-height: 1.27;
    }
    &__body {
      &__add-container__btn {
        width: 182px;
        :deep button > span {
          font-weight: 600;
          font-size: 16px;
          line-height: 28px;
        }
      }
      &__text {
        margin-bottom: 37px;
      }
      &__price-container {
        &__price-current {
          font-size: 22px;
          line-height: 1.09;
        }
        &__price-prev {
          font-size: 18px;
          line-height: 22px;
        }
        &__add-to-fav {
          width: 70px;
        }
      }
    }
    &__footer__item {
      width: 102px;
      height: 84px;
      &__value {
        font-size: 22px;
        line-height: 24px;
      }
      &__text {
        font-size: 14px;
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .about-product {
    width: 100%;
    max-width: none;
  }
}
</style>

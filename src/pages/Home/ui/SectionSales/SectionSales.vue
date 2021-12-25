<template>
  <div class="sales-section">
    <div class="sales-section__content-container">
      <div class="sales-section__content">
        <div class="sales-section__title-container">
          <span class="sales-section__title title">
            Скидки<br />
            на любимые игры
          </span>
          <div class="sales-section__title-container__bg-container">
            <svg
              viewBox="0 0 418 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.5998 117.9C178.2 123.1 260.8 118 392.5 74.5001C438.9 59.2001 414.8 -12.6999 368.3 2.70013C242.4 44.3001 167.1 47.3001 34.6998 42.3001C-14.1002 40.5001 -8.80024 116.1 39.5998 117.9Z"
                fill="#FCEEF4"
              />
            </svg>
          </div>
        </div>

        <div v-if="isPhone" class="sales-section__items-container">
          <div v-for="(product, index) in products" >
            <template v-if="index <= 1">
              <div class="sales-section__item">
                <ProductCardHomePhone :product="product" />
              </div>
            </template>
            <template v-else>
              <transition appear @enter="enterElement" @leave="leaveElement">
                <div v-if="isShow" class="sales-section__item">
                  <ProductCardHomePhone :product="product" />
                </div>
              </transition>
            </template>
          </div>
        </div>

        <div v-else class="sales-section__items-container">
          <div v-for="(product, index) in products" >
            <template v-if="index <= 3">
              <div class="sales-section__item">
                <ProductCardHome :product="product" />
              </div>
            </template>
            <template v-else>
              <transition appear @enter="enterElement" @leave="leaveElement">
                <div v-if="isShow" class="sales-section__item">
                  <ProductCardHome :product="product" />
                </div>
              </transition>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="sales-section__plus-btn-container" v-if="!isShow">
      <BetaButton styling="beta-beta-btn" @click="toggleShow">
        <PlusIcon />
      </BetaButton>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from "vue";
import { ProductCardHome, ProductCardHomePhone } from "@/widgets";
import { PlusIcon } from "@/shared/ui/icons";
import { BetaButton } from "@/shared/ui/buttons";
import { useStore } from "@/services/vuex";
import { Product } from "@/entities/Products/Product/model";
import anime from "animejs";

export default defineComponent({
  name: "SectionSales",
  components: {
    ProductCardHome,
    ProductCardHomePhone,
    BetaButton,
    PlusIcon,
  },
  props: {
    products: {
      type: Object as PropType<Product[]>,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const isShow = ref<boolean>(false)

    const toggleShow = () => {
      isShow.value = !isShow.value
    }

    const enterElement = (el, done) => {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 600,
        easing: "linear",
        complete: done,
      });
    }
    const leaveElement = (el, done) => {
      anime({
        targets: el,
        opacity: [1, 0],
        easing: "linear",
        duration: 600,
        complete: done,
      });
    }
    return {
      isPhone: computed(() => store.state.isPhone),
      enterElement,
      leaveElement,
      toggleShow,
      isShow
    };
  },
});
</script>

<style lang="scss" scoped>
.sales-section {
  width: 100%;
  max-width: 1195px;
  // *** Containers *** //

  &__content-container {
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
  }

  &__title-container {
    margin: 0 auto 50px auto;
    max-width: 465px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &__bg-container {
      position: absolute;
      top: -12px;
      left: 6%;
      z-index: -1;
      width: 414px;
    }
  }

  &__items-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(560px, 1fr));
    //grid-auto-rows: 390px;
    column-gap: 30px;
    row-gap: 40px;
  }

  &__plus-btn-container {
    width: 68px;
    height: 68px;
    margin: 0 auto;
  }

  // *** Containers END *** //

  &__content {
    width: 100%;
    height: 100%;
  }

  &__title {
    display: inline-block;
    text-align: center;
    color: $clr-nu;
  }

  &__item {
    height: 390px;
    @include phone {
      height: auto;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .sales-section {
    &__items-container {
      grid-template-columns: auto;
      justify-content: center;
      grid-auto-rows: auto;
      row-gap: 18px;
    }
    &__title-container {
      &__bg-container {
        width: 276px;
        left: 10%;
      }
    }
    &__title {
      font-size: 28px;
    }
    &__plus-btn-container {
      width: 52px;
      height: 52px;
    }
  }
}
</style>

<template>
  <div class="promotion-section">
    <div v-if="isPhone" class="promotion-section__content-container">
      <BlockWithSliderPhone :products="products" title="Акции ХардиГарди">
        <template v-slot:title-bg-container>
          <svg
            viewBox="0 0 497 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.7017 20.0629L58.8017 19.8629C88.5017 20.5629 121.402 20.7629 156.702 20.4629C224.102 19.8629 292.802 16.2629 353.702 9.9629C382.802 6.9629 408.802 3.8629 431.102 0.862897L433.502 0.662897C448.502 -0.137103 461.902 3.3629 473.402 11.1629C483.002 17.6629 494.802 30.4629 496.102 54.0629C496.802 66.8629 493.502 79.0629 486.202 90.4629C480.302 99.6629 468.702 111.363 447.102 114.863L446.302 114.963C416.502 118.963 386.402 122.463 356.902 125.263C327.102 128.063 296.502 130.363 265.802 132.063C200.102 135.663 129.702 136.663 56.6017 135.063C33.3017 135.063 20.0017 124.163 12.9017 115.063C4.30167 103.963 -0.0983329 91.0629 0.00166708 77.6629C0.301667 64.4629 4.50167 52.2629 12.6017 41.3629C19.4017 32.2629 32.0017 21.2629 53.7017 20.0629Z"
              fill="#FCEEF4"
            />
          </svg>
        </template>
      </BlockWithSliderPhone>
    </div>
    <div v-else class="promotion-section__content-container">
      <div class="promotion-section__content">
        <BlockWithSlider
          v-if="!isPhone"
          :products="products"
          title="Акции харди гарди"
        >
          <template v-slot:image-bg-container>
            <svg
              width="205"
              height="44"
              viewBox="0 0 205 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6999 1.14965C29.3999 4.14965 41.4999 6.34965 56.1999 7.94965C70.7999 9.54965 85.9999 10.4496 101.7 10.5496C117.4 10.6496 132.7 10.0496 147.6 8.74965C162.5 7.44965 175.3 5.24965 186 2.34965C191.1 1.04965 195.2 1.64965 198.4 4.14965C201.6 6.64965 203.6 9.94965 204.5 13.9496C205.4 17.9496 205 21.9496 203.4 25.8496C201.7 29.7496 198.5 32.3497 193.7 33.6497C181.2 36.8497 167 39.2497 151.1 40.8497C135.2 42.4496 118.9 43.1496 102.4 43.0496C85.7999 42.9496 69.5999 41.9496 53.6999 40.2496C37.7999 38.5496 23.6999 35.8497 11.4999 32.4496C6.69987 30.8496 3.39987 28.0496 1.79987 24.2496C0.0998716 20.3496 -0.200128 16.4496 0.799872 12.5496C1.79987 8.64965 3.99987 5.44965 7.49987 2.94965C10.6999 0.449649 14.8999 -0.150351 19.6999 1.14965Z"
                fill="#FCEEF4"
              />
            </svg>
          </template>
          <template v-slot:title-bg-container>
            <svg
              width="497"
              height="136"
              viewBox="0 0 497 136"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.1001 19.6L59.2001 19.4C88.9001 20.1 121.8 20.3 157.1 20C224.5 19.4 293.2 15.8 354.1 9.50001C383.2 6.50001 409.2 3.40001 431.5 0.400007L433.9 0.200007C448.9 -0.599993 462.3 2.90001 473.8 10.7C483.4 17.2 495.2 30 496.5 53.6C497.2 66.4 493.9 78.6 486.6 90C480.7 99.2 469.1 110.9 447.5 114.4L446.7 114.5C416.9 118.5 386.8 122 357.3 124.8C327.5 127.6 296.9 129.9 266.2 131.6C200.5 135.2 130.1 136.2 57.0001 134.6C33.7001 134.6 20.4001 123.7 13.3001 114.6C4.7001 103.5 0.300105 90.6 0.400105 77.2C0.700105 64 4.9001 51.8 13.0001 40.9C19.8001 31.8 32.4001 20.8 54.1001 19.6Z"
                fill="#FFEDC6"
              />
            </svg>
          </template>
        </BlockWithSlider>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Card } from "@/shared/ui";
import { SliderPanel } from "@/features";
import { useStore } from "@/services/vuex";
import { BlockWithSlider, BlockWithSliderPhone } from "@/widgets";
import { Product } from "@/entities/Products/Product/model";
import { useProduct } from "@/entities/Products/Product/lib";

export default defineComponent({
  name: "PromotionSection",
  components: { Card, SliderPanel, BlockWithSliderPhone, BlockWithSlider },
  props: {
    isSimple: {
      type: Boolean,
      default: false,
    },
    products: {
      type: Object as PropType<Product[]>,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    return {
      isPhone: computed(() => store.state.isPhone),
    };
  },
});
</script>

<style lang="scss" scoped>
.promotion-section {
  width: 100%;
  max-width: 1195px;
  height: 614px;

  // *** Containers *** //

  &__content-container {
    width: 100%;
    height: 100%;
  }

  &__image-container {
    width: 480px;
    height: 100%;
    flex: 0.4;
  }

  &__info-container {
    height: 100%;
    display: flex;
    flex: 0.6;
    justify-content: center;
  }

  &__title-container {
    position: relative;
    margin-bottom: 90px;
    max-width: 465px;
    color: #5f73aa;

    &__bg-container {
      position: absolute;
      top: -15px;
      left: 0;
      z-index: -1;
    }
  }

  &__slider-container {
    margin: 40px auto 0 auto;
    width: 267px;
  }

  // *** Containers END *** //

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
  }

  &__info {
    width: 750px;
    height: 300px;
    position: absolute;
    right: 0;
    bottom: 100px;

    &__content {
      width: 100%;
      height: 100%;
      background-color: $clr-alpha-delta;
      padding: 42px 66px;
    }

    &__title {
      display: inline-block;
      color: $clr-phi;
      font-size: 20px;
      font-weight: $bold;
      margin-bottom: 34px;
    }

    &__text {
      font-size: 18px;
      color: $clr-phi;
      margin-top: 0;
      margin-bottom: 67px;
      line-height: 1.5;
    }

    &__link {
      font-size: 15px;
      font-weight: $regular;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    display: inline-block;
    text-align: center;
    color: $clr-nu;
  }
}

@media screen and (max-width: 768px) {
  .promotion-section {
    &__image {
      width: 345px;
      height: 431px;
      border-radius: 45px;
    }
    &__title-container {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -135%);
      &__bg-container {
        left: -40px;
      }
    }
    &__info {
      width: 450px;
      height: 300px;
      top: 16%;
      &__content {
        padding: 34px;
        padding-right: 96px;
        border-radius: 25px;
      }
      &__title {
        font-size: 20px;
        line-height: 24px;
      }
      &__text {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 48px;
      }
    }
  }
}

@media screen and (max-width: 376px) {
  .promotion-section {
    &__image {
      width: 100px;
      height: 431px;
      border-radius: 45px;
    }
  }
}
</style>

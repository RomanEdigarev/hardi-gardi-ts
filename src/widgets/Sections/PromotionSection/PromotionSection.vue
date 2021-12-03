<template>
  <div class="promotion-section">
    <div v-if="isPhone" class="promotion-section__content-container">
      <BlockWithSliderPhone :products="actions" title="" :is-actions="true">
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
      <template v-if="$route.path === '/actions/'">
        <BlockWithSlider v-for="action in actions" :products="[action]"  :is-actions="true" title=""/>
      </template>
      <template v-else>
        <BlockWithSlider :products="actions"  :is-actions="true" title=""/>
      </template>

    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Card } from "@/shared/ui";
import { SliderPanel } from "@/features";
import { useStore } from "@/services/vuex";
import {  BlockWithSlider, BlockWithSliderPhone } from "@/widgets";
import { Action } from "@/entities/Actions/model";

export default defineComponent({
  name: "PromotionSection",
  components: { Card, SliderPanel, BlockWithSliderPhone, BlockWithSlider },
  props: {
    isSimple: {
      type: Boolean,
      default: false,
    },
    actions: {
      type: Object as PropType<Action[]>,
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
    & > div {
      margin-bottom: 40px;
    }
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
      left: -34%;
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
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
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

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .promotion-section {
    height: auto;
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
        left: -26%;
        width: 51.7vw;
        svg {
          width: 100%;
          height: 100%;
        }
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

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .promotion-section {
    height: auto;
    &__content-container > div {
      margin: 0 auto;
    }
    &__image {
      width: 100px;
      height: 431px;
      border-radius: 45px;
    }
  }
}
</style>
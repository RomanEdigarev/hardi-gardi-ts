<template>
  <div class="promotion-section">
    <div class="promotion-section__content-container">
      <div class="promotion-section__content">
        <div class="promotion-section__image-container">
          <Card>
            <template v-slot:content>
              <img
                class="promotion-section__image"
                src="/dist/images/promotionSection.png"
                alt=""
              />
            </template>
          </Card>
        </div>

        <div class="promotion-section__info-container">
          <div class="promotion-section__title-container">
            <span class="promotion-section__title title">
              Акции ХардиГарди
            </span>
            <div class="promotion-section__title-container__bg-container">
              <svg
                width="497"
                height="136"
                viewBox="0 0 497 136"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.7017 20.0629L58.8017 19.8629C88.5017 20.5629 121.402 20.7629 156.702 20.4629C224.102 19.8629 292.802 16.2629 353.702 9.9629C382.802 6.9629 408.802 3.8629 431.102 0.862897L433.502 0.662897C448.502 -0.137103 461.902 3.3629 473.402 11.1629C483.002 17.6629 494.802 30.4629 496.102 54.0629C496.802 66.8629 493.502 79.0629 486.202 90.4629C480.302 99.6629 468.702 111.363 447.102 114.863L446.302 114.963C416.502 118.963 386.402 122.463 356.902 125.263C327.102 128.063 296.502 130.363 265.802 132.063C200.102 135.663 129.702 136.663 56.6017 135.063C33.3017 135.063 20.0017 124.163 12.9017 115.063C4.30167 103.963 -0.0983329 91.0629 0.00166708 77.6629C0.301667 64.4629 4.50167 52.2629 12.6017 41.3629C19.4017 32.2629 32.0017 21.2629 53.7017 20.0629Z"
                  fill="#FCEEF4"
                />
              </svg>
            </div>
          </div>
          <div class="promotion-section__info">
            <Card>
              <template v-slot:content>
                <div class="promotion-section__info__content">
                  <span class="promotion-section__info__title"
                    >Бесплатная доставка до пункта выдачи</span
                  >
                  <p class="promotion-section__info__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sed porttitor est. Sed vel pulvinar metus.
                    Pellentesque semper nisi sit amet ligula mollis ullamcorper.
                  </p>
                  <router-link
                    class="promotion-section__info__link alfa-link"
                    to="#"
                  >
                    <a class="promotion-section__info__link alfa-link">
                      Подробнее
                    </a>
                  </router-link>
                </div>
              </template>
            </Card>
            <div class="promotion-section__slider-container">
              <SliderPanel :count="4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Card } from "@/shared/ui";
import { SliderPanel } from "@/features";

export default defineComponent({
  name: "SectionPromotion",
  components: { Card, SliderPanel },
});
</script>

<style lang="scss" scoped>
.promotion-section {
  width: 100%;
  height: 100%;

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
</style>

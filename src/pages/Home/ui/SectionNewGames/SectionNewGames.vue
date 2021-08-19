<template>
  <div class="new-games">
    <div class="new-games__content-container">
      <div class="new-games__content">
        <div class="new-games__title-container">
          <span class="new-games__title title">Новые игры для тебя</span>
          <div class="new-games__title-container__bg-image">
            <svg
              width="365"
              height="106"
              viewBox="0 0 365 106"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M325.938 6.05128C187.338 0.851282 156.838 -12.0487 25.1381 31.4513C-21.2619 46.7513 2.83811 118.651 49.3381 103.251C175.238 61.6513 198.438 76.7513 330.938 81.6513C379.638 83.4513 374.438 7.85128 325.938 6.05128Z"
                fill="#E6EFFF"
              />
            </svg>
          </div>
        </div>

        <div class="new-games__first-row">
          <div class="new-games__first-row__info-product-card-container">
            <InfoProductCard v-bind="product" :is-simple="true" />
          </div>
          <div class="new-games__first-row__image-product-card-container">
            <ImageProductCard :img-path="product.img" :title="product.title" />
          </div>
          <div class="new-games__first-row__image-card-container">
            <Card>
              <template v-slot:content>
                <img
                  class="new-games__first-row__image-card"
                  :src="require('/public/images/newGames.png')"
                  alt=""
                />
              </template>
            </Card>
          </div>
        </div>
        <div class="new-games__second-row">
          <div class="new-games__second-row__item">
            <ProductCardHome />
          </div>
          <div class="new-games__second-row__item">
            <ProductCardHome />
          </div>
        </div>
      </div>
    </div>

    <div class="new-games__plus-btn">
      <BetaButton styling="beta-beta-btn">
        <PlusIcon />
      </BetaButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Card } from "@/shared/ui";
import { InfoProductCard, ImageProductCard } from "@/entities/Product/ui";
import { useProduct } from "@/entities/Product/lib";
import { ProductCardHome } from "@/widgets";
import { BetaButton } from "@/shared/ui/buttons";
import { PlusIcon } from "@/shared/ui/icons";

export default defineComponent({
  name: "SectionNewGames",
  components: {
    Card,
    InfoProductCard,
    ImageProductCard,
    ProductCardHome,
    BetaButton,
    PlusIcon,
  },
  setup() {
    const { product } = useProduct();

    return {
      product,
    };
  },
});
</script>

<style lang="scss" scoped>
.new-games {
  &__content-container {
    width: 100%;
    height: auto;
  }

  &__title-container {
    margin: 0 auto 50px auto;
    max-width: 372px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &__bg-image {
      position: absolute;
      top: 20px;
      left: 0;
      z-index: -1;
    }
  }

  &__title {
    display: inline-block;
    text-align: center;
    width: 100%;
    color: $clr-nu;
  }

  &__content {
    width: 100%;
    height: auto;
  }

  &__first-row {
    width: 100%;
    height: 510px;
    margin-bottom: 40px;
    display: flex;

    &__info-product-card-container {
      flex: 0.333;
    }

    &__image-product-card-container {
      flex: 0.333;
    }

    &__image-card-container {
      flex: 0.333;
      width: 398px;
    }

    &__image-card {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__second-row {
    width: 100%;
    height: 390px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    &__item {
      width: 100%;
      max-width: 48.7%;
    }
  }

  &__plus-btn {
    width: 68px;
    height: 68px;
    margin: 0 auto;
  }
}
</style>

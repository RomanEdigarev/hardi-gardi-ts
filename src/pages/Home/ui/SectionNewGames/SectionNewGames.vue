<template>
  <div class="new-games">
    <div class="new-games__content-container">
      <div class="new-games__content">
        <div class="new-games__title-container">
          <span class="new-games__title title">Новые игры <br />для тебя</span>
          <div class="new-games__title-container__bg-image">
            <svg
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
            <InfoProductCard v-bind="firstProduct" :is-simple="true" />
          </div>
          <div class="new-games__first-row__image-product-card-container">
            <ImageProductCard :img-path="IMG_URL + firstProduct.img" :title="firstProduct.title" />
          </div>
          <div class="new-games__first-row__image-card-container">
            <Card>
              <template v-slot:content>
                <img
                  class="new-games__first-row__image-card"
                  :src="IMG_URL + firstProduct.img2"
                  alt=""
                />
              </template>
            </Card>
          </div>
        </div>
        <div class="new-games__second-row">
          <div v-for="(product, index) in alsoProducts">
            <template v-if="index <= 1">
              <div class="new-games__second-row__item">
                <ProductCardHome :product="product" />
              </div>
            </template>
            <template v-else>
              <transition appear @enter="enterElement" @leave="leaveElement">
                <div v-if="isShow" class="new-games__second-row__item">
                  <ProductCardHome :product="product" />
                </div>
              </transition>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="new-games__plus-btn">
      <BetaButton styling="beta-beta-btn" @click="toggleShow">
        <PlusIcon />
      </BetaButton>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue";
import { Card } from "@/shared/ui";
import { InfoProductCard, ImageProductCard } from "@/widgets";
import { useProduct } from "@/entities/Products/Product/lib";
import { ProductCardHome } from "@/widgets";
import { BetaButton } from "@/shared/ui/buttons";
import { PlusIcon } from "@/shared/ui/icons";
import { Product } from "@/entities/Products/Product/model";
import {IMG_URL} from "@/shared/config";
import anime from "animejs";

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
  props: {
    products: {
      type: Object as PropType<Product[]>,
      required: true,
    },
  },
  setup(props) {
    const [firstProduct, ...alsoProducts] = props.products as Product[]
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
      firstProduct,
      alsoProducts,
      isShow,
      toggleShow,
      IMG_URL,
      enterElement,
      leaveElement
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
      width: 364px;
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
    //height: 390px;
    //display: flex;
    //justify-content: space-between;
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 50px;
    @include tablet {
      grid-template-columns: 1fr;
    }

    &__item {
      width: 100%;
      //max-width: 48.7%;
      height: 390px;
    }
  }

  &__plus-btn {
    width: 68px;
    height: 68px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .new-games {
    &__title-continer__bg-image {
      top: 12%;
    }
    &__first-row {
      display: grid;
      grid-template-columns: 375px 1fr;
      grid-template-rows: 442px 390px;
      height: auto;
      div:nth-child(3) {
        width: 100%;
        grid-column: 1 /3;
      }
    }
    &__second-row {
      height: auto;
      width: 100%;
      flex-direction: column;
      &__item {
        max-width: 100%;
        margin-bottom: 30px;
      }
    }
  }
}
//@media screen and (min-width: 769px) and (max-width: 1200px) {
//  .new-games {
//    &__second-row {
//      height: auto;
//      width: 100%;
//      flex-direction: column;
//      justify-content: center;
//      align-items: center;
//      &__item {
//        max-width: 90%;
//        margin-bottom: 30px;
//      }
//    }
//  }
//}
@media screen and (min-width: 320px) and (max-width: 738px) {
  .new-games {
    &__first-row {
      display: grid;
      justify-content: center;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 48vw;
      height: auto;
      &__image-card-container {
        grid-column: 1/3;
        width: auto;
      }
    }
    &__second-row {
      display: none;
    }
    &__title-container__bg-image {
      width: 242px;
      top: 8px;
      left: 32px;
    }
    &__title {
      max-width: 200px;
      font-size: 28px;
      line-height: 34px;
    }
    &__plus-btn {
      width: 52px;
      height: 52px;
    }

    :deep .product-card-info {
      height: 100%;
      max-height: none;
      &__content {
        padding: 4vw;
        justify-content: space-between;
      }
      &__title {
        font-size: 4vw;
        line-height: 1.27;
        margin-bottom: 0;
      }
      &__price {
        div {
          font-size: 5vw;
        }
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .new-games {
    &__first-row {
      height: auto;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 216px 184px;
    }
    &__content {
      padding: 16px;
      justify-content: space-between;
    }
    &__price {
      div {
        font-size: 16px;
      }
    }
    &__plus-btn {
      display: none;
    }
    :deep .product-card-info {
      &__content {
        padding: 16px;
      }
      &__price div {
        font-size: 16px;
      }
      &__title {
        font-size: 22px;
        line-height: 1.27;
        max-width: 100px;
        margin-bottom: 0;
      }
    }
  }
}
</style>

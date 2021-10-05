<template>
  <div class="product-page">
    <div class="product-page__header">
      <BreadCrumbs :items="breadcrumbs" />
    </div>
    <div v-if="currentProduct" class="product-page__body">
      <div class="product-page__body__left">
        <div class="product-page__body__left__slider">
          <MainSlider
            @zoom="zoomSlider"
            :is-zoom="isZoomSlider"
            :photos="currentProduct.photos"
          />
        </div>
      </div>
      <div class="product-page__body__right">
        <div class="product-page__body__about-container">
          <About
            :is-sets="currentProduct.isComplect"
            :title="currentProduct.title"
            :price-prev="currentProduct.prevPrice"
            :price-current="currentProduct.currentPrice"
            :parts-products="currentProduct.parts"
          />
        </div>
        <div class="product-page__body__right-body">
          <div class="product-page__body__description">
            <Description
              id="description"
              title="Описание товара"
              :is-close="false"
            >
              <template v-slot:content>
                <div ref="text" class="product-page__body__description__text">
                  {{ currentProduct.description }}
                </div>
                <div class="product-page__body__description__list"></div>
              </template>
            </Description>
          </div>
          <div class="product-page__body__characteristic">
            <Description
              id="characteristic"
              title="Характеристики"
              :is-close="true"
            >
              <template v-slot:content>
                <div class="product-page__body__characteristic__text"></div>
                <div class="product-page__body__characteristic__list">
                  <div class="product-page__body__characteristic__list__item">
                    <span>Артикул</span>
                    <div></div>
                    <span>{{ currentProduct.characteristics.article }}</span>
                  </div>
                  <div class="product-page__body__characteristic__list__item">
                    <span>Размеры</span>
                    <div></div>
                    <span>{{ currentProduct.characteristics.size }}</span>
                  </div>
                  <div class="product-page__body__characteristic__list__item">
                    <span>Вес</span>
                    <div></div>
                    <span>{{ currentProduct.characteristics.weight }}</span>
                  </div>
                  <div class="product-page__body__characteristic__list__item">
                    <span>Пол</span>
                    <div></div>
                    <span>{{ currentProduct.characteristics.gender }}</span>
                  </div>
                </div>
              </template>
            </Description>
          </div>
        </div>
        <div class="product-page__body__right-footer">
          <div
            v-if="currentProduct.linkProducts"
            class="product-page__body__right-footer__slider"
          >
            <FooterSlider
              title="Похожие товары"
              :products="currentProduct.linkProducts"
            />
          </div>
          <div
            v-if="currentProduct.linkProducts"
            class="product-page__body__right-footer__slider"
          >
            <FooterSlider
              title="Наборы с этой игрой"
              :with-home-cards="true"
              :products="currentProduct.linkProducts"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  onUpdated,
  PropType,
  ref,
} from "vue";
import { BreadCrumbs } from "@/widgets";
import { About, Description, FooterSlider, MainSlider, SetSlider } from "./ui";
import { getCurrentProduct } from "@/entities/Products/lib";
import { useStore } from "@/services/vuex";
import { Product } from "@/entities/Products/Product/model";
import { useRoute } from "vue-router";
import { useProduct } from "@/entities/Products/Product/lib";

export default defineComponent({
  name: "Product",
  components: {
    BreadCrumbs,
    About,
    Description,
    FooterSlider,
    MainSlider,
    SetSlider,
  },
  props: {
    productId: {
      type: Object as PropType<string>,
    },
  },
  setup(props) {
    const isZoomSlider = ref(false);
    const zoomSlider = () => {
      isZoomSlider.value = !isZoomSlider.value;
    };
    const store = useStore();
    let currentProduct = ref<Product>(null);
    const isLoading = computed(() => store.state.products.isLoading);
    let breadcrumbs = ref(null);

    const text = ref<HTMLElement>(null);

    onMounted(async () => {
      currentProduct.value = await getCurrentProduct(props.productId as string);
      breadcrumbs.value = [
        {
          name: currentProduct.value.section.name,
          link: "/catalog",
        },
        {
          name: currentProduct.value.title,
          link: `/product/${currentProduct.value.id}`,
        },
      ];
    });

    onUpdated(() => {
      text.value.innerHTML = currentProduct.value.description;
    });

    const { product } = useProduct();
    return {
      isZoomSlider,
      zoomSlider,
      isLoading,
      currentProduct,
      text,
      breadcrumbs,
      product,
    };
  },
});
</script>

<style lang="scss" scoped>
.product-page {
  margin-top: 60px;
  color: $clr-phi;
  &__header {
    margin-bottom: 38px;
  }

  // *** Body *** //
  &__body {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 48.74%));
    justify-content: space-between;
    //column-gap: 30px;
    &__left,
    &__right {
      height: auto;
      &-footer__slider {
        margin-bottom: 62px;
      }
    }

    &__about-container {
      width: 100%;
      padding: 0 17.52%;
      margin-bottom: 32px;
    }
    &__description {
      width: 100%;
      margin-bottom: 16px;
      &__text {
        font-weight: normal;
        font-size: 15px;
        line-height: 1.6;
        //margin-bottom: 26px;
        p {
          margin-bottom: 0;
        }
      }
      &__list {
        li {
          font-size: 15px;
          line-height: 1.6;
        }
      }
    }
    &__characteristic {
      width: 100%;
      margin-bottom: 76px;
      &__list {
        &__item {
          margin-bottom: 16px;
          display: flex;
          span {
            display: inline-block;
          }
          div {
            margin: 2px 4px;
            flex: 1;
            flex-shrink: 0;
            border-bottom: 2px dotted #b3b3b3;
          }
        }
      }
    }
  }

  // *** Body END *** //
}
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .product-page {
    &__body {
      grid-template-columns: 100%;
      &__left {
        margin-bottom: 48px;
      }
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .product-page {
    &__body {
      grid-template-columns: 100%;
      &__left {
        margin-bottom: 48px;
      }
      &__about-container {
        padding: 0;
      }
      &__description__text {
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
}
</style>

<template>
  <div class="product-page">
    <div class="product-page__header">
      <BreadCrumbs />
    </div>
    <div v-if="currentProduct" class="product-page__body">
      <div class="product-page__body__left">
        <div class="product-page__body__left__slider">
          <MainSlider @zoom="zoomSlider" :is-zoom="isZoomSlider" />
        </div>
      </div>
      <div class="product-page__body__right">
        <div class="product-page__body__about-container">
          <About
            :is-sets="true"
            :title="currentProduct.title"
            :price-prev="currentProduct.prevPrice"
            :price-current="currentProduct.currentPrice"
          />
        </div>
        <div class="product-page__body__right-body">
          <div class="product-page__body__description">
            <Description
              id="description"
              title="Описнаие товара"
              :is-close="false"
            >
              <template v-slot:content>
                <div ref="text" class="product-page__body__description__text">
                  {{ currentProduct.description }}
                </div>
                <div class="product-page__body__description__list">
                  <!--                  <span>Цели игры</span>-->
                  <!--                  <ul>-->
                  <!--                    <li>познакомить ребенка с окружающим миром;</li>-->
                  <!--                    <li>-->
                  <!--                      воспитать интерес к природе, к различным профессиям;-->
                  <!--                    </li>-->
                  <!--                    <li>-->
                  <!--                      развить у ребенка кругозор, воображение и логическое-->
                  <!--                      мышление;-->
                  <!--                    </li>-->
                  <!--                    <li>пополнить словарный запас малыша.</li>-->
                  <!--                  </ul>-->
                </div>
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
          <div class="product-page__body__right-footer__slider">
            <FooterSlider title="Похожие товары" />
          </div>
          <div class="product-page__body__right-footer__slider">
            <FooterSlider title="Наборы с этой игрой" :with-home-cards="true" />
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
      console.log(isZoomSlider.value)
    };
    const store = useStore();
    let currentProduct = ref<Product>(null);
    const isLoading = computed(() => store.state.products.isLoading);

    const text = ref<HTMLElement>(null);

    onMounted(async () => {
      currentProduct.value = await getCurrentProduct(props.productId as string);
    });

    onUpdated(() => {
      text.value.innerHTML = currentProduct.value.description;
    });

    return {
      isZoomSlider,
      zoomSlider,
      isLoading,
      currentProduct,
      text,
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
        margin-bottom: 26px;
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

  @media screen and (max-width: 768px) {
    .product-page {
      &__body {
        grid-template-columns: 100%;
        &__left {
          margin-bottom: 48px;
        }
      }
    }
  }
}
</style>

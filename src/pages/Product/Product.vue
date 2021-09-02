<template>
  <div class="product-page">
    <div class="product-page__header">
      <BreadCrumbs />
    </div>
    <div class="product-page__body">
      <div class="product-page__body__left"></div>
      <div class="product-page__body__right">
        <div class="product-page__body__about-container">
          <About />
        </div>
        <div class="product-page__body__right-body">
          <div class="product-page__body__description">
            <Description
              id="description"
              title="Описнаие товара"
              :is-close="false"
            >
              <template v-slot:content>
                <div class="product-page__body__description__text">
                  Знакомьтесь! Это Каролина, она, как любая девочка, очень любит
                  наряжаться. Для похода на пляж у неё есть очаровательная
                  шляпка и купальник, для дождливой погоды — модные резиновые
                  сапожки, ну а на более холодную — теплая куртка. Маленькие
                  модницы с удовольствием будут выбирать наряды для Каролины для
                  любого случая: будь то прогулка в лесу или вечерний променад.
                  Эта магнитная игра поможет ребёнку научиться подбирать одежду
                  по погоде и по сезону, а также создать веселое настроение.
                  Большой выбор одежды позволит ребёнку самому придумывать сюжет
                  игры, интересно и разнообразно проводя время. Вариаций игр
                  множество. Играйте всей семьей вместе с Харди Гарди! В серии
                  также представлены магнитные игры «Одень мальчика. Макс» и
                  «Одень девочку. Алиса». Персонажей можно «знакомить» между
                  собой и сочетать предметы одежды.
                </div>
                <div class="product-page__body__description__list">
                  <span>Цели игры</span>
                  <ul>
                    <li>познакомить ребенка с окружающим миром;</li>
                    <li>
                      воспитать интерес к природе, к различным профессиям;
                    </li>
                    <li>
                      развить у ребенка кругозор, воображение и логическое
                      мышление;
                    </li>
                    <li>пополнить словарный запас малыша.</li>
                  </ul>
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
                <div class="product-page__body__characteristic__text">
                  Знакомьтесь! Это Каролина, она, как любая девочка, очень любит
                  наряжаться. Для похода на пляж у неё есть очаровательная
                  шляпка и купальник, для дождливой погоды — модные резиновые
                  сапожки, ну а на более холодную — теплая куртка. Маленькие
                  модницы с удовольствием будут выбирать наряды для Каролины для
                  любого случая: будь то прогулка в лесу или вечерний променад.
                  Эта магнитная игра поможет ребёнку научиться подбирать одежду
                  по погоде и по сезону, а также создать веселое настроение.
                  Большой выбор одежды позволит ребёнку самому придумывать сюжет
                  игры, интересно и разнообразно проводя время. Вариаций игр
                  множество. Играйте всей семьей вместе с Харди Гарди! В серии
                  также представлены магнитные игры «Одень мальчика. Макс» и
                  «Одень девочку. Алиса». Персонажей можно «знакомить» между
                  собой и сочетать предметы одежды.
                </div>
                <div class="product-page__body__characteristic__list">
                  <span>Цели игры</span>
                  <ul>
                    <li>познакомить ребенка с окружающим миром;</li>
                    <li>
                      воспитать интерес к природе, к различным профессиям;
                    </li>
                    <li>
                      развить у ребенка кругозор, воображение и логическое
                      мышление;
                    </li>
                    <li>пополнить словарный запас малыша.</li>
                  </ul>
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
import { defineComponent } from "vue";
import { BreadCrumbs } from "@/widgets";
import { About, Description, FooterSlider } from "./ui";

export default defineComponent({
  name: "Product",
  components: {
    BreadCrumbs,
    About,
    Description,
    FooterSlider,
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
    }
  }

  // *** Body END *** //
}
</style>

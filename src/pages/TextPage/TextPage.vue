<template>
  <div class="text-page">
    <main class="page-main">
      <div v-if="!isMobile && !isPhone" class="text-page__sidebar">
        <Sidebar />
      </div>
      <div class="page-main__header">
        <BreadCrumbs :items="[{name: title, link:$route.params.type}]"/>
        <PageTitle :text="title" />
      </div>
      <div class="text-page__sidebar">
        <SidebarMobile v-if="isMobile || isPhone" />
      </div>

      <!--      <div class="text-page__header">-->
      <!--        <p class="text-page__header__text">-->
      <!--          Мы знаем, как развлечь вашего малыша. Наши игры помогают развить-->
      <!--          полезное любопытство, логику, память, мышление и мелкую моторику,-->
      <!--          расширить кругозор и воображение. Мы поможем привить вашим детям-->
      <!--          внимательность и усидчивость и подготовиться к дальнейшему обучению.-->
      <!--        </p>-->
      <!--        <component is="htag" value="Доставка до пункта выдачи:"></component>-->
      <!--      </div>-->
      <!--      <div class="text-page__body">-->
      <!--        <p class="text-page__body__text">-->
      <!--          Мы знаем, как развлечь вашего малыша. Наши игры помогают развить-->
      <!--          полезное любопытство, логику, память, мышление и мелкую моторику,-->
      <!--          расширить кругозор и воображение. Мы поможем привить вашим детям-->
      <!--          внимательность и усидчивость и подготовиться к дальнейшему обучению. В-->
      <!--          ассортименте «Харди Гарди» вы найдёте множество развивающих игр с-->
      <!--          бумагой, магнитных игр, пазлов и прочего. Мы постоянно придумываем-->
      <!--          новые игры и развиваемся для вас.Наша команда стремится создавать-->
      <!--          полезные и качественные игры по доступным ценам. Для нас важно сделать-->
      <!--          качество доступным, ведь мы стараемся для самых взыскательных-->
      <!--          потребителей.-->
      <!--        </p>-->
      <!--        <p class="text-page__body__text">-->
      <!--          Мы изготавливаем продукцию в центре Петербурга, в типографии с большой-->
      <!--          историей. Над созданием игр трудится большая команда профессионалов.-->
      <!--          Мы постоянно работам над созданием новых развивающих пособий для самых-->
      <!--          требовательных юных читателей. Совершенствуемся и работаем над-->
      <!--          ошибками. Мы всегда рады вашим отзывам и предложениям. Приглашаем-->
      <!--          присоединиться к нам в социальных сетях, чтобы узнавать о новинках и-->
      <!--          мероприятиях. Будем рады вашим отзывам!-->
      <!--        </p>-->
      <!--        <div class="text-page__body__slider">-->
      <!--          <Slider />-->
      <!--        </div>-->
      <!--        <div class="text-page__body__title">1. Оформление заказа</div>-->
      <!--        <p class="text-page__body__text">-->
      <!--          Мы знаем, как развлечь вашего малыша. Наши игры помогают развить-->
      <!--          полезное любопытство, логику, память, мышление и мелкую моторику,-->
      <!--          расширить кругозор и воображение. Мы поможем привить вашим детям-->
      <!--          внимательность и усидчивость и подготовиться к дальнейшему обучению. В-->
      <!--          ассортименте «Харди Гарди» вы найдёте множество развивающих игр с-->
      <!--          бумагой, магнитных игр, пазлов и прочего. Мы постоянно придумываем-->
      <!--          новые игры и развиваемся для вас.-->
      <!--        </p>-->
      <!--        <p class="text-page__body__text">-->
      <!--          Наша команда стремится создавать полезные и качественные игры по-->
      <!--          доступным ценам. Для нас важно сделать качество доступным, ведь мы-->
      <!--          стараемся для самых взыскательных потребителей.-->
      <!--        </p>-->
      <!--        <ul class="text-page__body__list">-->
      <!--          <li>Безналичный расчет на нашем сайте</li>-->
      <!--          <li>Безналичный расчет на нашем сайте</li>-->
      <!--          <li>Безналичный расчет на нашем сайте</li>-->
      <!--        </ul>-->
      <!--        <component is="lists" :elements="[{-->
      <!--            text: 'Доставка курьером Харди Гарди (только по Санкт-Петербургу)'-->
      <!--        }]"></component>-->
      <!--        <p class="text-page__body__text">-->
      <!--          Мы знаем, как развлечь вашего малыша. Наши игры помогают развить-->
      <!--          полезное любопытство, логику, память, мышление и мелкую моторику,-->
      <!--          расширить кругозор и воображение. Мы поможем привить вашим детям-->
      <!--          внимательность и усидчивость и подготовиться к дальнейшему обучению. В-->
      <!--          ассортименте «Харди Гарди» вы найдёте множество развивающих игр с-->
      <!--          бумагой, магнитных игр, пазлов и прочего. Мы постоянно придумываем-->
      <!--          новые игры и развиваемся для вас.-->
      <!--        </p>-->
      <!--        <component is="text" value="<p>Бесплатная доставка до двери при заказе на сумму от 2000 рублей.</p><p>Если сумма Вашего заказа менее 2000 рублей – стоимость доставки курьером до двери 300 рублей. Сроки доставки оговариваются с курьером при подтверждении доставки.&nbsp;</p>"></component>-->
      <!--        <div class="text-page__body__card-list">-->
      <!--          <div class="text-page__body__card-list__row">-->
      <!--            <span class="text-page__body__card-list__row__number">1.</span>-->
      <!--            <span class="text-page__body__card-list__row__text">-->
      <!--              Мы изготавливаем продукцию в центре Петербурга, в типографии с-->
      <!--              большой историей. Над созданием игр трудится большая команда-->
      <!--              профессионалов.-->
      <!--            </span>-->
      <!--          </div>-->
      <!--          <div class="text-page__body__card-list__row">-->
      <!--            <span class="text-page__body__card-list__row__number">2.</span>-->
      <!--            <span class="text-page__body__card-list__row__text">-->
      <!--              Мы изготавливаем продукцию в центре Петербурга, в типографии с-->
      <!--              большой историей. Над созданием игр трудится-->
      <!--            </span>-->
      <!--          </div>-->
      <!--          <div class="text-page__body__card-list__row">-->
      <!--            <span class="text-page__body__card-list__row__number">3.</span>-->
      <!--            <span class="text-page__body__card-list__row__text">-->
      <!--              Мы изготавливаем продукцию в центре Петербурга, в типографии с-->
      <!--              большой историей.-->
      <!--            </span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="text-page__body__text-block-img">-->
      <!--          <div class="text-page__body__text-block-img__left">-->
      <!--            <img src="./assets/01.jpg" alt="" />-->
      <!--          </div>-->
      <!--          <div class="text-page__body__text-block-img__right">-->
      <!--            <div class="text-page__body__text-block-img__right__title">-->
      <!--              Как сделать возврат заказа?-->
      <!--            </div>-->
      <!--            <div class="text-page__body__text-block-img__right__text">-->
      <!--              Мы знаем, как развлечь вашего малыша. Наши игры помогают развить-->
      <!--              полезное любопытство, логику, память, мышление и мелкую моторику,-->
      <!--              расширить кругозор и воображение. Мы поможем привить вашим детям-->
      <!--              внимательность и усидчивость и подготовиться к дальнейшему-->
      <!--              обучению.-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="text-page__body__title">Таблица</div>-->
      <!--        <div class="text-page__body__table">-->
      <!--          <div class="text-page__body__table__header">-->
      <!--            <div>Example Header</div>-->
      <!--            <div>Example Header</div>-->
      <!--            <div>Example Header</div>-->
      <!--          </div>-->
      <!--          <div class="text-page__body__table__row">-->
      <!--            <div>Example Cell</div>-->
      <!--            <div>Example Cell</div>-->
      <!--            <div>Example Cell</div>-->
      <!--          </div>-->
      <!--          <div class="text-page__body__table__row">-->
      <!--            <div>Example Cell</div>-->
      <!--            <div>Example Cell</div>-->
      <!--            <div>Example Cell</div>-->
      <!--          </div>-->
      <!--          <div class="text-page__body__table__row">-->
      <!--            <div>Example Cell</div>-->
      <!--            <div>Example Cell</div>-->
      <!--            <div>Example Cell</div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="text-page__body">
        <template v-if="textPage">
          <component
              v-for="item in textPage.content"
              :is="item.name"
              :value="item.value"
              :elements="item.elements"
              :images="item.images"
          >
          </component>
        </template>
      </div>


      <div class="text-page__footer"></div>
    </main>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, watch} from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs } from "@/widgets";
import * as Ui from "./ui";
import { useStore } from "@/services/vuex";
import { getTextPageAPI } from "@/services/api/lib/textPage";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
export default defineComponent({
  name: "TextPage",
  components: {
    ...Ui,
    PageTitle,
    BreadCrumbs,
  },
  setup() {
    const store = useStore();
    const route = useRoute()
    const isMobile = computed(() => store.getters["getIsMobile"]);
    const isPhone = computed(() => store.getters["getIsPhone"]);
    const textPage = ref(null);
    const title = ref("");

    watch(() => route.params, async () => {
      textPage.value = await getTextPageAPI((route.params.type as string).split('.')[0]);
      title.value = textPage.value.seo?.title;
    }, )

    onMounted(async () => {
      textPage.value = await getTextPageAPI((route.params.type as string).split('.')[0]);
      console.log(route.params);
      title.value = textPage.value.seo?.title;
    });

    return {
      isMobile,
      isPhone,
      title,
      textPage,
    };
  },
});
</script>

<style lang="scss">
.text-page {
  width: 100%;

  &__sidebar {
    padding-top: 222px;
    display: flex;
    position: sticky;
    top: 0;
    left: 100%;
    float: right;
    margin-bottom: 20px;
    margin-left: 20px;
  }

  color: $clr-phi;
  position: relative;
  // *** Header *** //
  &__header {
    max-width: 786px;
    margin-bottom: 39px;
    &__text {
      font-weight: bold;
      font-size: 20px;
      line-height: 1.4;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    max-width: 786px;
    &__text,
    &__text > p {
      margin-bottom: 30px;
      font-size: 15px;
      line-height: 1.6;
    }
    &__slider {
      margin-bottom: 60px;
    }
    &__title {
      margin-bottom: 24px;
      font-weight: bold;
      font-size: 24px;
      line-height: 1.25;
    }
    &__list {
      margin-bottom: 48px;
      padding-left: 83px;
      list-style: none;
      li {
        margin-bottom: 14px;
        line-height: 1.6;
        position: relative;
        &::before {
          position: absolute;
          content: "";
          width: 4px;
          height: 4px;
          border: 3px solid $clr-zeta;
          border-radius: 50%;
          top: 50%;
          left: -30px;
          transform: translateY(-50%);
        }
      }
    }
    &__card-list {
      width: 100%;
      border: 1px solid $clr-upsilon;
      box-sizing: border-box;
      border-radius: 40px;
      padding: 60px 68px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 80px;
      &__row {
        margin-bottom: 35px;
        display: flex;
        &__number {
          display: inline-block;
          height: 100%;
          font-weight: $semi-bold;
          font-size: 28px;
          line-height: 34px;
          margin-right: 44px;
        }
        &__text {
          line-height: 1.6;
        }
      }
    }
    &__text-block-img {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 91px;
      &__left {
        img {
          width: 100%;
          max-width: 306px;
          height: 376px;
          border-radius: 30px;
          object-fit: cover;
        }
      }

      &__right {
        width: 100%;
        max-width: 408px;
        &__title {
          font-weight: $bold;
          font-size: 20px;
          line-height: 1.5;
          margin-bottom: 21px;
        }
        &__text {
          line-height: 1.6;
        }
      }
    }
    &__table {
      border: 1px solid $clr-kappa;
      border-radius: 15px;
      overflow: hidden;
      &__header,
      &__row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        div {
          padding: 12px 0;
          text-align: center;
          font-size: 16px;
          line-height: 2;
          border-bottom: 1px solid #d6d8e7;
          border-right: 1px solid #d6d8e7;
        }
        div:last-child {
          border-right: none;
        }
      }
      &__header {
        font-weight: $semi-bold;
        background-color: $clr-kappa;
      }
      &__row:last-child {
        div {
          border-bottom: none;
        }
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
  }
  // *** Footer END *** //
}
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .text-page {
    &__sidebar {
      position: static;
      padding-top: 0;
      float: none;
      height: 60px;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .text-page {
    &__sidebar {
      position: static;
      padding-top: 0;
      float: none;
      height: 60px;
    }
    &__body {
      &__list {
        padding-left: 28px;
      }
      &__card-list {
        padding: 39px 24px;
        &__row__number {
          margin-right: 16px;
        }
      }
      &__text-block-img {
        &__left {
          margin-bottom: 46px;
        }
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
  }
}
</style>
<style lang="scss">
.text-page {
  .page-main__header {
    margin-bottom: 40px;
  }
}
</style>
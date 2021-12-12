<template>
  <div class="history">
    <main class="page-main">
      <div class="page-main__header">
        <BreadCrumbs />
        <PageTitle>
          <template v-slot:text>
            <span class="history__title">Наша история</span>
          </template>
        </PageTitle>
      </div>
      <div class="history__body">
        <div
          class="history__body__item first-block"
          :class="{ 'pl-40': isMobile, 'pr-88': isMobile }"
        >
          <div class="nachalo">
            <img src="./assets/nachalo.svg" alt="" />
          </div>
          <div class="history__body__item__text">
            <TextBlock>
              <template v-slot:title>
                <img
                  class="history__body__item__title"
                  src="./assets/2018-title.svg"
                  alt=""
                />
              </template>
              <template v-slot:subtitle> {{ history[0].subtitle }} </template>
              <template v-slot:body>
                {{ history[0].text }}
              </template>
            </TextBlock>
          </div>
          <div class="history__body__item__img-container">
            <img src="./assets/01.svg" alt="" />
            <img
              class="history__body__item__img"
              :class="{ firstImageMobile: isMobile }"
              :src="IMG_URL + history[0].img"
              alt=""
            />
          </div>
        </div>
        <div class="history__body__item second-block">
          <div class="history__body__item__img-container">
            <svg
              width="187"
              height="38"
              viewBox="0 0 187 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9793 0.622974C26.8319 3.29276 37.8749 5.25061 51.2907 6.6745C64.6152 8.09838 78.4874 8.89932 92.8158 8.98831C107.144 9.07731 121.108 8.54335 134.706 7.38644C148.304 6.22953 159.986 4.27169 169.751 1.69089C174.406 0.533981 178.148 1.06794 181.068 3.29276C183.989 5.51759 185.814 8.45435 186.635 12.0141C187.457 15.5738 187.092 19.1335 185.631 22.6042C184.08 26.075 181.159 28.3888 176.779 29.5457C165.371 32.3935 152.411 34.5293 137.9 35.9532C123.389 37.3771 108.513 38 93.4547 37.911C78.3049 37.822 63.5201 36.9321 49.0091 35.4192C34.4981 33.9063 21.6299 31.5035 10.4957 28.4778C6.11501 27.0539 3.10329 24.5621 1.64307 21.1803C0.0915787 17.7096 -0.182213 14.2389 0.730427 10.7682C1.64307 7.29745 3.65088 4.44967 6.84512 2.22485C9.76557 2.27727e-05 13.5987 -0.533935 17.9793 0.622974Z"
                fill="#FFEDC6"
              />
            </svg>

            <img
              class="history__body__item__img"
              :src="IMG_URL + history[1].img"
              alt=""
            />
          </div>
          <div class="history__body__item__text">
            <TextBlock>
              <template v-slot:title>
                <img
                  class="history__body__item__title"
                  src="./assets/2019-title.svg"
                  alt=""
                />
              </template>
              <template v-slot:subtitle> {{ history[1].subtitle }} </template>
              <template v-slot:body>
                <p>
                  {{ history[1].text }}
                </p>
              </template>
            </TextBlock>
          </div>
        </div>
        <div
          class="history__body__item third-block"
          :class="{ 'pl-40': isMobile, 'pr-88': isMobile }"
        >
          <div class="history__body__item__text">
            <TextBlock>
              <template v-slot:title>
                <img
                  class="history__body__item__title"
                  src="./assets/2020-title.svg"
                  alt=""
                />
              </template>
              <template v-slot:subtitle> {{ history[2].subtitle }} </template>
              <template v-slot:body>
                {{ history[2].text }}
              </template>
            </TextBlock>
          </div>
          <div class="history__body__item__img-container">
            <img src="./assets/03.svg" alt="" />
            <img
              class="history__body__item__img"
              :src="IMG_URL + history[2].img"
              alt=""
            />
            <img src="./assets/star.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="history__footer">
        <FooterCard>
          <template v-slot:text>
            Мы уверены, что создание/изготовление товаров для детей одно из
            самых сложных, интересных и ответственных производств. Ведь дети —
            это самые непосредственные и непредвзятые потребители.
          </template>
        </FooterCard>
      </div>
      <img
        v-if="isMobile"
        class="history__footer__line-mobile"
        src="./assets/Line-mobile.svg"
        alt=""
      />
      <img
        v-else-if="isPhone"
        src="./assets/Line_phone.svg"
        alt=""
        class="history__footer__line-phone"
      />
      <img
        v-else
        class="history__footer__line"
        src="./assets/Line.svg"
        alt=""
      />
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs, FooterCard } from "@/widgets";
import { TextBlock } from "./ui";
import { useStore } from "@/services/vuex";
import {IMG_URL} from "@/shared/config";
export default defineComponent({
  name: "History",
  components: { PageTitle, BreadCrumbs, TextBlock, FooterCard },
  setup() {
    const store = useStore();
    const history = computed(() => store.getters["shop/getHistory"]);
    const isMobile = computed(() => store.state.isMobile);
    const isPhone = computed(() => store.getters["getIsPhone"]);
    return {
      isMobile,
      history,
      isPhone,
      IMG_URL
    };
  },
});
</script>

<style lang="scss" scoped>
.history {
  position: relative;
  &__title {
    font-weight: $semi-bold;
    font-size: 45px;
    line-height: 55px;
    color: #f27f94;
  }

  // *** Body *** //
  &__body {
    padding-left: 115px;
    &__item {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 324px;
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    width: 100%;
    height: 621px;
    &__line {
      height: 2088px;
    }
    &__line,
    &__line-phone {
      position: absolute;
      top: 285px;
      left: 0;
      z-index: -1;
    }
    &__line-phone {
      display: none;
    }
  }
  // *** Footer END *** //

  // *** Other *** //
  .pl-130 {
    padding-left: 130px;
  }
  .pr-123 {
    padding-right: 123px;
  }

  .pl-40 {
    padding-left: 40px;
  }
  .pr-88 {
    padding-right: 88px;
  }
  .w-357 {
    width: 357px;
  }
  .h-462 {
    height: 462px;
  }

  // *** Other END *** //
  .first-block {
    margin-bottom: 58px;
    .nachalo {
      width: 100px;
      position: absolute;
      top: -40px;
      left: -114px;
      @include phone {
        width: 100px;
        position: absolute;
        top: -40px;
        left: 37px;
      }
    }
    .history__body__item {
      &__title {
        width: 23.86%;
      }
      &__img-container {
        position: relative;
        width: 500px;
        height: 595px;
        top: -233px;
        right: 0;
        img:first-child {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
          z-index: -1;
        }
        img:nth-child(2) {
          position: absolute;
          bottom: 16px;
          width: 72%;
          height: 462px;
          object-fit: cover;
          border-radius: 30px;
          @include phone {
            height: auto;
          }
        }
      }
    }
  }

  .second-block {
    @include phone {
      padding-left: 6.6%;
    }
    margin-bottom: 432px;
    .history__body__item {
      &__title {
        width: 23.86%;
      }
    }
    .history__body__item__img-container {
      width: 394px;
      height: 272px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      svg {
        position: absolute;
        z-index: 1;
        bottom: -4%;
        right: -12%;
      }
    }
    .history__body__item__img {
      width: 394px;
      height: 272px;
      border-radius: 30px;
      object-fit: cover;
    }
  }
  .third-block {
    @include phone {
      padding-left: 121px;
    }
    margin-bottom: 168px;
    .history__body__item {
      &__title {
        width: 23.86%;
      }
      &__img-container {
        width: 407px;
        height: 492px;
        position: relative;
        top: -90px;
        img:first-child {
          position: absolute;
          width: 79.85%;
          height: 66.87%;
          bottom: 0;
          left: 0;
        }

        img:nth-child(2) {
          position: absolute;
          top: 0;
          right: 0;
          width: 84.76%;
          height: 90.44%;
          border-radius: 30px;
          object-fit: cover;
        }
        img:nth-child(3) {
          width: 80px;
          height: 87px;
          position: absolute;
          left: -20%;
          top: -5px;
        }
      }
    }
  }

  :deep .page-main__header {
    margin-bottom: 132px;
  }
}
@media screen and (max-width: 768px) {
  .history {
    .first-block {
      .history__body__item {
        &__img-container {
          width: 333px;
          height: 397px;
          img:first-child {
            min-width: 325px;
            min-height: 397px;
          }
          img:nth-child(2) {
            height: 77.58%;
          }
        }
      }
      :deep .text-block {
        max-width: 329px;
        font-size: 16px;
        line-height: 24px;
      }
    }
    .second-block {
      .history__body__item {
        &__img-container {
        }
      }
    }
    .third-block {
      .history__body__item {
        &__img-container {
        }
      }
    }
  }
}
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .history {
    :deep .page-main__header {
      margin-bottom: 108px;
    }
    &__body {
      &__item {
        &__text {
          margin-right: 30px;
        }
      }
    }
    &__footer {
      height: auto;
      &__line-mobile {
        z-index: -10;
        width: 100vw;
        position: absolute;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        left: 50%;
        top: 180px;
      }
    }
    .history__body__item {
      &__title {
        width: 23.86%;
        min-width: 127px;
      }
    }

    .first-block {
      margin-top: 126px;
      margin-bottom: 110px;
      padding-right: 0;
      justify-content: space-between;
      .nachalo {
          width: 100px;
          position: absolute;
          top: -40px;
          left: 37px;
      }
      .history__body__item {
        &__title {
          width: 23.86%;
        }
        &__text {
          max-width: 329px;
          margin-right: 0;
          :deep .text-block__header__title {
            min-width: 115px;
            margin-bottom: 20px;
          }
        }
        &__img-container {
          top: -76px;
          img:first-child {
            width: 31vw;
            height: 37vw;
            min-width: 325px;
            min-height: 397px;
          }
        }
      }
    }

    .second-block {
      margin-bottom: 250px;
      .history__body__item__img {
        width: 339px;
        height: 234px;
      }
      .history__body__item__text {
        margin-right: 0;
        margin-left: 30px;
      }
    }
    .third-block {
      padding: 0;
      :deep .text-block {
        max-width: 329px;
      }

      .history__body__item {
        &__text {
          margin-right: 0;
        }
        &__img-container {
          width: 294px;
          height: 355px;
          top: 0;

          img:first-child {
          }

          img:nth-child(2) {
          }
          img:nth-child(3) {
            width: 42px;
            height: 46px;
            left: -112px;
          }
        }
      }
    }
  }
}
@include phone {
  .history {
    padding: 0 10px;
    &__title {
      font-size: 28px;
      line-height: 34px;
    }
    :deep .page-main__header {
      margin-bottom: 108px;
    }

    &__body {
      padding-left: 0;
      &__item {
        padding: 0;
        flex-direction: column;
        &__title {
          min-width: 115px;
          margin-bottom: 23px;
        }
        &__text {
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 23px;
        }
      }
    }

    .first-block {
      margin-bottom: 104px;
      .nachalo {
        left: 14px;
      }
      :deep .text-block {
        &__header__title {
          margin-bottom: 0;
        }
        margin: 0;
        width: 100%;
        max-width: none;
      }
      .history__body__item {
        &__text {
          margin-bottom: 2px;
        }
        &__img-container {
          position: relative;
          top:0;
          left:0;
          width: 100%;
          height: 397px;
          img:first-child {
            position: absolute;
            width: 100%;
            height: 397px;
            min-width: auto;
            min-height: auto;
          }
          img:nth-child(2) {
            width: 73.23%;
            height: 308px;
            min-width: auto;
            min-height: auto;
          }
        }
      }
    }
    .second-block {
      flex-direction: column-reverse;
      padding-left: 0;
      margin-bottom: 216px;
      :deep .text-block {
        &__header__title {
          margin-bottom: 0;
        }
      }
      .history__body__item {
        &__text {
          padding-left: 14px;
        }
        &__img-container {
          width: 100%;
          svg {
            right: -4%;
          }
        }
      }


    }
    .third-block {
      padding-left: 0;
      flex-direction: column;
      margin-bottom: 122px;
      .history__body__item {
        &__text {
          padding-left: 14px  ;
        }
        &__img-container {
          align-self: flex-end;
          max-width: 284px;
          height: 343px;
          width: 100%;
          top:0;
          img:nth-child(3) {
            width: 42px;
            height: 46px;
            left: auto;
            right: 12%;
            top: -116%;
          }
        }
      }

    }
    &__footer {
      height: auto;
      &__line-phone {
        display: block;
        left: -18px;
        top: 132px;
        width: 100vw;
      }
    }
  }
}
</style>
<style lang="scss">
.history {
  .page-main__header {
    margin-bottom: 170px;
  }
}
</style>

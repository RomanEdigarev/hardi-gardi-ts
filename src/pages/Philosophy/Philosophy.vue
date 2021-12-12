<template>
  <div class="philosophy">
    <main class="page-main">
      <div class="page-main__header">
        <BreadCrumbs />
        <PageTitle>
          <template v-slot:text>
            <span class="quality__title">Философия</span>
          </template>
        </PageTitle>
      </div>
      <div class="philosophy__header">
        <div class="philosophy__header__image-container">
          <img :src="require('./assets/f.png')" alt="" />
          <svg
            width="77"
            height="83"
            viewBox="0 0 77 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4829 29.9593C13.5604 28.2107 10.4042 26.4621 7.13108 24.7135C5.26072 23.6643 3.97485 22.382 3.39036 20.75C2.80587 19.118 2.80587 17.6025 3.27346 16.0871C3.74105 14.5716 4.67623 13.1728 5.9621 12.1236C7.24798 10.9579 8.76764 10.375 10.5211 10.375C11.9239 10.375 13.2098 10.7247 14.3787 11.3076C17.4181 12.823 20.4574 14.4551 23.2629 15.9705C26.1854 17.6025 28.874 19.118 31.4458 20.6334V7.69382C31.4458 5.12921 32.264 3.26405 33.9006 1.98174C35.4203 0.582865 37.1737 0 39.161 0C41.0314 0 42.7848 0.582865 44.4214 1.86517C46.058 3.14747 46.7593 5.12921 46.7593 7.69382V24.7135L65.5798 15.7374C66.6319 15.2711 67.8009 14.9213 69.2037 14.9213C70.9571 14.9213 72.4768 15.5042 73.7627 16.6699C75.0485 17.8357 75.8668 19.2346 76.3344 20.75C76.802 22.382 76.6851 23.8975 76.1006 25.5295C75.5161 27.1615 74.2303 28.4438 72.1261 29.493L54.7084 37.8862C60.9039 43.2486 67.2164 49.3104 73.6458 56.3048C75.0485 57.7037 75.8668 59.2191 75.9837 60.7346C76.1006 62.25 75.8668 63.6489 75.1654 64.8146C74.5809 65.9803 73.6458 67.0295 72.3599 67.8455C71.1909 68.6615 69.7881 69.1278 68.2685 69.1278C66.1643 69.1278 64.4109 68.3118 62.6574 66.6798C59.735 63.7654 56.9294 61.0843 54.3577 58.5197C51.9028 55.9551 49.3311 53.507 46.7593 51.2921V75.4228C46.7593 77.9874 45.9411 79.8525 44.3045 81.1348C42.6679 82.4171 40.9145 83 39.0441 83C37.1737 83 35.4203 82.4171 33.7837 81.1348C32.1471 79.8525 31.3289 77.9874 31.3289 75.4228V48.9607L11.1056 58.7528C10.0535 59.2191 8.88454 59.4522 7.48177 59.4522C5.72831 59.4522 4.20864 58.8694 2.92277 57.7037C1.6369 56.5379 0.818614 55.139 0.351024 53.6236C-0.116566 51.9916 0.000331454 50.3596 0.584819 48.7275C1.16931 47.0955 2.45518 45.8132 4.55933 44.8806L25.1333 35.0885C22.2109 33.4565 19.4053 31.7079 16.4829 29.9593Z"
              fill="#5F73AA"
            />
          </svg>
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="left: 96%; top: -11px"
          >
            <path
              d="M25.859 33.466C22.8827 34.3194 19.6512 33.978 17.015 32.5273C13.0182 30.0524 10.382 25.1028 11.1474 20.3239C11.8277 16.057 15.1442 12.8141 19.226 11.534C22.2024 10.6806 25.4338 11.022 28.07 12.4727C32.0668 14.9476 34.703 19.8972 33.9377 24.6761C33.1723 28.9431 29.8558 32.1859 25.859 33.466ZM44.9927 23.2254C44.9927 23.14 44.9927 23.0547 44.9927 22.9694C45.1628 16.569 42.3565 10.5953 37.8494 6.32837C35.3833 3.85356 32.407 1.97612 29.0054 0.952055C25.2638 -0.242683 21.0118 -0.328021 16.5048 0.781378C6.89544 3.17085 0.347473 12.046 0.00731902 21.7746C0.00731902 21.86 0.00731902 21.9453 0.00731902 22.0306C-0.162758 28.431 2.64352 34.4047 7.15056 38.6716C9.61668 41.1464 12.593 43.0239 15.9946 44.0479C19.7362 45.2427 23.9882 45.328 28.4952 44.2186C38.1046 41.7438 44.6525 32.954 44.9927 23.2254Z"
              fill="#F59FAF"
            />
          </svg>
        </div>
        <div class="philosophy__header__bg">
          <img src="./assets/header-bg.svg" alt="" />
        </div>
        <div class="philosophy__header__title">
          Философия Харди Гарди очень проста
        </div>
        <p class="philosophy__header__text-block">
          Дарить яркие эмоции детям, видеть в их глазах радость, удивление и желание познавать окружающий мир.
        </p>
        <p class="philosophy__header__text-block">
          Наблюдать, как малыш изучает новое и развивается. Как дети растут и познают этот большой и пока неизведанный ими мир!
        </p>
      </div>
      <div class="philosophy__body">
        <div class="philosophy__body__item pr-72 first-block">
          <div class="philosophy__body__item__img-container">
            <img src="./assets/01.jpg" alt="" />
            <svg
              width="60"
              height="85"
              viewBox="0 0 60 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.3566 0.543101C14.2978 9.78697 -4.3244 41.7203 0.862915 74.5587C3.38061 90.4823 26.6476 86.5175 24.1299 70.637C21.113 51.5244 33.7014 30.0847 51.347 24.8487C66.2578 20.4314 60.3542 -3.91723 45.3566 0.543101Z"
                fill="#5F73AA"
              />
            </svg>
            <svg
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.1471 51.0002C39.0272 51.0002 50.2941 39.739 50.2941 25.8531C50.2941 11.9672 39.0415 0.706055 25.1471 0.706055C11.2526 0.706055 0 11.9531 0 25.839C0 39.739 11.2526 51.0002 25.1471 51.0002Z"
                fill="#FCEEF4"
              />
            </svg>
          </div>
          <div class="philosophy__body__item__text-block">
            Когда мы приступаем к разработке новой игры, мы думаем именно об этом. Мы с большим вниманием относимся к каждой детали: начиная от идеи и задумки, заканчивая ее воплощением.
          </div>
        </div>
        <div class="philosophy__body__item mb-78 second-block">
          <div class="philosophy__body__item__text-block">
            Иллюстраторы, дизайнеры, технологи. Все вовлечены в процесс создания игр. И на каждом этапе мы стараемся представить, что будет чувствовать ребенок, когда будет играть в «Харди Гарди».
          </div>
          <div class="philosophy__body__item__img-container image-grid">
            <div  :style="`background-image: url(${require('./assets/3.jpg')})`"
                  style="    background-size: 382%;background-position: 74% 54%;">
            </div>
            <div  :style="`background-image: url(${require('./assets/2.jpg')})`"
                  style="background-size: 271%;background-position: 86% 95%;">
            </div>
            <div  :style="`background-image: url(${require('./assets/4.jpg')})`"
                  style="background-size: 204%;background-position: 33% 96%;">
            </div>
          </div>
        </div>
      </div>
      <div class="philosophy__footer">
        <div class="philosophy__footer__img">
          <img src="./assets/1.jpg" alt="" />
        </div>
        <div class="philosophy__footer__card">
          <FooterCard bg-string="#ECF0F8">
            <template v-slot:text>
              Мы уверены, что создание товаров для детей одно из самых сложных, интересных и ответственных производств. Ведь дети -- это самые непосредственные и непредвзятые покупатели.
            </template>
          </FooterCard>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs, FooterCard } from "@/widgets";
export default defineComponent({
  name: "History",
  components: {
    BreadCrumbs,
    PageTitle,
    FooterCard,
  },
});
</script>

<style lang="scss" scoped>
.philosophy {
  color: $clr-phi;
  // *** Header *** //
  &__header {
    max-width: 480px;
    position: relative;
    margin-bottom: 123px;
    &__title {
      font-weight: bold;
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 40px;
    }
    &__text-block {
      font-size: 18px;
      line-height: 27px;
      padding-left: 30px;
      position: relative;

      &:before {
        content: "";
        width: 7px;
        height: 7px;
        position: absolute;
        border-radius: 50%;
        border: 3px solid $clr-zeta;
        top: 10px;
        left: 0;
      }
    }
    &__image-container {
      position: absolute;
      top: -70%;
      right: -125%;
      img {
        width: 420px;
        height: 420px;
        object-fit: cover;
        //mask-image: url("./assets/mask.svg");
        //mask-position: center center;
      }
      svg {
        position: absolute;
        bottom: -74px;
        left: -34px;
      }
    }
    &__bg {
      position: absolute;
      top: -136%;
      left: -56%;
      width: 1997px;
      height: 704px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__img-container {
        position: relative;
        img {
          width: 100%;
          height: 100%;
          border-radius: 30px;
          object-fit: cover;
        }
        svg {
          position: absolute;
        }
      }
      &__text-block {
        max-width: 410px;
        font-size: 18px;
        line-height: 1.5;
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    &__img {
      width: 100%;
      margin-bottom: 58px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 60px;
        object-fit: cover;
      }
    }
  }
  // *** Footer END *** //

  // *** Other *** //
  .pr-72 {
    padding-right: 72px;
  }

  .mb-78 {
    margin-bottom: 78px;
  }

  .image-grid {
    max-width: 714px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 23px;
    grid-template-rows: 154px 368px;
  }
  .first-block {
    margin-bottom: 79px;
    .philosophy__body__item {
      &__img-container {
        max-width: 649px;
        svg:nth-child(2) {
          top: 108%;
          left: 12%;
        }
        svg:last-child {
          left: 24%;
          top: 126%;
        }
      }
    }
  }
  .second-block {
    .philosophy__body__item {
      &__img-container {
        grid-template-columns: 434px 257px;
        div:first-child {
          grid-row: 1 /3;
          grid-column: 2;
          border-radius: 30px;
        }
        div:nth-child(2) {
          width: 153px;
          max-width: 153px;
          justify-self: flex-end;
          border-radius: 30px;
        }
        div:nth-child(3) {
          border-radius: 30px;
        }
      }
    }
  }
  // *** Other END *** //
}

@include tablet {
  .philosophy {
    // *** Header *** //
    &__header {
      max-width: 338px;
      &__image-container {
        position: absolute;
        top: 0%;
        right: -104%;
        img {
          width: 295px;
          height: 295px;
        }
        svg:nth-child(2) {
          width: 53px;
          height: 57px;
          bottom: 0%;
          left: 2%;
        }
        svg:last-child {
          width: 31px;
          height: 31px;
        }
      }

      &__title {
        font-size: 22px;
        line-height: 24px;
      }
      &__text-block {
        font-size: 16px;
        line-height: 24px;
      }
    }
    // *** Header END *** //

    // *** Body *** //
    &__body {
      &__item {
        &__text-block {
          max-width: 339px;
          font-size: 16px;
          line-height: 24px;
        }
      }
      &__item:first-child {
        padding-right: 0;
        .philosophy__body__item__img-container {
          width: 339px !important;
          height: 196px !important;
          svg:nth-child(2) {
            bottom: -45% !important;
            left: 103% !important;
          }

          svg:nth-child(3) {
            bottom: -60%;
            left: 122%;
          }
        }
      }
      &__item:nth-child(2) {
        .philosophy__body__item__text-block {
        }
      }
    }
    // *** Body END *** //
    .first-block {
      .philosophy__body__item {
        &__img-container {
          img {
            border-radius: 15px;
          }
        }
      }
    }
    .second-block {
      .philosophy__body__item {
        &__img-container {
        }
      }
      .image-grid {
        grid-template-columns: 1fr 122px;
        grid-template-rows: 72px 174px;
        gap: 11px;
        div:first-child {
          width: 100%;
          border-radius: 14px;
        }
        div:nth-child(2) {
          max-width: 72px;
          border-radius: 14px;
        }
        div:nth-child(3) {
          border-radius: 14px;
        }
      }
    }

    &__footer__img {
      img {
        border-radius: 36px;
      }
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
}
@include phone {
  .philosophy {
    :deep .page-main__header {
      margin-bottom: 0;
    }
    :deep .history__title {
      font-size: 28px;
    }
    &__header {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 44px;
      &__title {
        font-size: 22px;
        margin-bottom: 28px;
      }
      &__text-block {
        margin: 0;
      }
      &__image-container {
        position: static;
        width: 280px;
        height: 338px;
        margin-bottom: 57px;
        img {
          width: 100%;
          height: 100%;
        }
        svg:nth-child(2) {
          width: 46px;
          height: 50px;
          top: 36% !important;
          left: 12% !important;
        }
        svg:last-child {
          width: 27px;
          height: 27px;
          left: 82% !important;
          top: 50px !important;
        }
      }
    }
    .first-block {
      flex-direction: column;
      padding: 0;
      margin-bottom: 82px;
      .philosophy__body__item {
        &__img-container {
          width: 100%;
          margin-bottom: 27px;
          img {
            border-radius: 15px;
          }
          svg:nth-child(2) {
            top: 198%;
            left: 6%;
          }
          svg:nth-child(3) {
            left: 20%;
            top: 228%;
          }
        }
      }
    }
    .second-block {
      flex-direction: column-reverse;
      padding: 0;
      margin-bottom: 44px;
      .philosophy__body__item {
        &__img-container {
          margin-bottom: 44px;
        }
      }
      .image-grid {
        grid-template-columns: 1fr 122px;
        grid-template-rows: 72px 174px;
        gap: 11px;
        img:first-child {
          border-radius: 9px;

        }
        img:nth-child(2) {
          border-radius: 14px;
          max-width: 72px;
        }
        img:nth-child(3) {
          border-radius: 14px;
        }
      }
    }

    &__footer {
      &__img {
        img {
          border-radius: 17px;
        }
      }
    }
  }
}
</style>

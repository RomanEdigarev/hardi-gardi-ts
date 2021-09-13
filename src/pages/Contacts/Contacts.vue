<template>
  <div class="contacts">
    <main class="page-main">
      <div class="page-main__header">
        <BreadCrumbs />
        <PageTitle text="Контакты" />
      </div>
      <div class="contacts__body">
        <div class="contacts__body__map-container">
          <img src="./assets/map.png" alt="" />
          <div class="contacts__body__map-container__info">
            <Info />
          </div>
        </div>
      </div>
      <div class="contacts__footer">
        <div class="contacts__footer__title">
          Связаться с нами
          <svg
            width="423"
            height="116"
            viewBox="0 0 423 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.1681 16.7851L50.5051 16.6151C75.7621 17.2103 103.74 17.3804 133.76 17.1253C191.077 16.6151 249.5 13.5536 301.289 8.19606C326.036 5.64485 348.146 3.0086 367.11 0.457392L369.151 0.287312C381.907 -0.393011 393.303 2.5834 403.082 9.21655C411.246 14.7442 421.281 25.6293 422.387 45.6989C422.982 56.584 420.176 66.959 413.968 76.6535C408.95 84.4773 399.086 94.427 380.717 97.4034L380.037 97.4884C354.694 100.89 329.097 103.866 304.01 106.248C278.668 108.629 252.646 110.585 226.539 112.03C170.667 115.092 110.799 115.942 48.6343 114.582C28.8199 114.582 17.5095 105.312 11.4716 97.5735C4.15815 88.134 0.416377 77.1638 0.501418 65.7684C0.756539 54.5431 4.32823 44.1681 11.2165 34.8987C16.9992 27.1601 27.7143 17.8056 46.1681 16.7851Z"
              fill="#FCEEF4"
            />
          </svg>
        </div>
        <div class="contacts__footer__text">
          Оставьте Ваше сообщение и контактные данные и наши специалисты
          свяжутся с Вами в ближайшее рабочее время для решения Вашего вопроса.
        </div>
        <div class="contacts__footer__form">
          <div class="contacts__footer__form__inputs">
            <div class="contacts__footer__form__inputs__input">
              <VInput id="name" label-text="Имя" placeholder="Имя" />
            </div>
            <div class="contacts__footer__form__inputs__input">
              <VInput id="phone" label-text="Телефон" placeholder="Телефон" />
            </div>
          </div>
          <div class="contacts__footer__form__btn">
            <AlfaButton text="Отправить" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BreadCrumbs } from "@/widgets";
import { PageTitle } from "@/shared/ui";
import { Info } from "./ui";
import { VInput } from "@/shared/ui/inputs";
import { AlfaButton } from "@/shared/ui/buttons";
export default defineComponent({
  name: "Contacts",
  components: {
    BreadCrumbs,
    PageTitle,
    Info,
    VInput,
    AlfaButton,
  },
});
</script>

<style lang="scss" scoped>
.contacts {
  color: $clr-phi;
  // *** Body *** //
  &__body {
    &__map-container {
      width: 100%;
      height: 643px;
      position: relative;
      margin-bottom: 203px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 40px;
      }
      &__info {
        position: absolute;
        top: 113px;
        left: 72px;
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__title {
      position: relative;
      font-weight: $semi-bold;
      font-size: 45px;
      line-height: 55px;
      text-align: center;
      color: $clr-nu;
      margin-bottom: 40px;
      svg {
        position: absolute;
        left: 41px;
        top: -38px;
        z-index: -1;
      }
    }
    &__text {
      font-size: 15px;
      line-height: 24px;
      text-align: center;
      max-width: 498px;
      margin-bottom: 38px;
    }
    &__form {
      &__inputs {
        display: flex;
        margin-bottom: 28px;
        &__input {
          width: 384px;
          margin-right: 16px;
        }
      }
      &__btn {
        margin: 0 auto;
        width: 249px;
      }
    }
  }
  // *** Footer END *** //
}
</style>
<style lang="scss">
.contacts {
  .page-main__header {
    margin-bottom: 61px;
  }
}
</style>

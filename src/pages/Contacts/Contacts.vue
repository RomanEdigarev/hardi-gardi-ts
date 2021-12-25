<template>
  <div class="contacts">
    <main class="page-main">
      <div class="page-main__header">
        <BreadCrumbs />
        <PageTitle text="Контакты" />
      </div>
      <div class="contacts__body">
        <div class="contacts__body__map-container">
          <YMap :coordinates="contacts.coordinates"/>
          <div class="contacts__body__map-container__info">
            <Info :contacts="contacts" />
          </div>
        </div>
      </div>
      <div class="contacts__footer">
        <div class="contacts__footer__title">
          Связаться с нами
          <svg
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
              <VInput
                id="name"
                label-text="Имя"
                placeholder="Имя"
                name="contact-name"
              />
            </div>
            <div class="contacts__footer__form__inputs__input">
              <VInput
                id="phone"
                label-text="Телефон"
                placeholder="Телефон"
                name="contact-phone"
                mask="+{7}(000)000-00-00"
              />
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
import {defineComponent, onMounted} from "vue";
import { BreadCrumbs } from "@/widgets";
import { PageTitle } from "@/shared/ui";
import { VInput } from "@/shared/ui/Inputs";
import { AlfaButton } from "@/shared/ui/buttons";
import { Info } from "./ui";
import { useContacts } from "./lib";
import {YMap} from "@/features";

export default defineComponent({
  name: "Contacts",
  components: {
    BreadCrumbs,
    PageTitle,
    Info,
    VInput,
    AlfaButton,
    YMap
  },
  setup() {
    return {
      ...useContacts(),
    };
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
      border-radius: 40px;
      overflow: hidden;
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
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .contacts {
    &__body {
      &__map-container {
        height: 340px;
        &__info {
          top: 46px;
          left: 34px;
        }
      }
    }
    &__footer {
      &__form {
        &__inputs {
          flex-direction: column;
          gap: 10px;
        }
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .contacts {
    &__body {
      &__map-container {
        margin-bottom: 50px;
        height: auto;
        img {
          min-width: 100vw;
          border-radius: 0;
          margin-left: -19px;
        }
        &__info {
          position: static;
          width: 100%;
        }
      }
    }
    &__footer {
      border: 1px solid #e3e4e9;
      border-radius: 25px;
      padding: 47px 15px;
      &__title {
        margin-bottom: 47px;
        font-size: 28px;
        line-height: 1.21;
        svg {
          left: 0;
          top: -56%;
          width: 252px;
        }
      }
      &__text {
        font-size: 14px;
        line-height: 1.5;
      }
      &__form {
        width: 100%;
        &__inputs__input {
          width: 100%;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.contacts {
  .page-main__header {
    margin-bottom: 61px;
  }
}
</style>
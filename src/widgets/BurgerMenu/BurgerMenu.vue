<template>
  <div class="burger-menu">
    <div class="burger-menu__line"></div>
    <div class="burger-menu__body">
      <div class="burger-menu__body__links">
        <div
          class="burger-menu__body__links__link"
          @click="setCurrentSubmenu('catalog-component', 'Каталог')"
        >
          <b>Каталог</b>
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L6.464 6.464L2 2"
              stroke="#D23C50"
              stroke-width="2.3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="burger-menu__body__links__link">Акции</div>
        <div class="burger-menu__body__links__link">Доаствка и оплата</div>
        <div class="burger-menu__body__links__link">Контакты</div>
        <div class="burger-menu__body__links__link">
          <span>О компании</span>
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L6.464 6.464L2 2"
              stroke="#D23C50"
              stroke-width="2.3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="burger-menu__body__links__link">
          <span>Помощь</span>
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L6.464 6.464L2 2"
              stroke="#D23C50"
              stroke-width="2.3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div ref="submenu" class="burger-menu__submenu" @click="hideCurrentSubmenu">
      <div class="burger-menu__submenu__title">
        <svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 2L1.536 6.536L6 11"
            stroke="#D23C50"
            stroke-width="2.3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>{{ currenSubmenu.name }}</span>
      </div>
      <div>
        <component is="catalog-submenu"></component>
      </div>
    </div>
    <div class="burger-menu__footer">
      <a class="burger-menu__footer__phone" href="tel:+79219611441"
        >+7 921 961 14 41
      </a>
      <div class="burger-menu__footer__working-hours">
        <div>Пн-Пт: с 10.00 до 20.00</div>
        <div>Сб-Вс: с 11.00 до 18.00</div>
      </div>
      <div class="burger-menu__footer__mail">info@khardigardi.ru</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CatalogSubmenu } from "@/app/ui/Header/ui";
import { useBurgerSubmenu } from "./lib";

export default defineComponent({
  name: "BurgerMenu",
  components: { CatalogSubmenu },
  setup() {
    return {
      ...useBurgerSubmenu(),
    };
  },
});
</script>

<style lang="scss" scoped>
.burger-menu {
  width: 100%;
  height: 100vh;
  margin-top: 90px;
  background-color: white;
  border-radius: 25px 25px 0px 0px;
  padding: 65px 24px;
  color: $clr-phi;
  position: relative;

  &__line {
    width: 40px;
    border-bottom: 3px solid #606060;
    position: absolute;
    top: 16px;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%);
  }

  // *** Body *** //
  &__body {
    margin-bottom: 118px;
    &__links {
      &__link {
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 18px;
        cursor: pointer;
        display: flex;
        align-items: center;
        svg {
          padding-top: 2px;
          margin-left: 11px;
        }
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    &__phone {
      font-weight: $semi-bold;
      font-size: 18px;
      line-height: 1.22;
      color: $clr-zeta;
      margin-bottom: 5px;
    }
    &__working-hours {
      margin-bottom: 16px;
      div {
        font-size: 14px;
        line-height: 1.5;
        color: #b3b3b3;
      }
    }

    &__mail {
      font-size: 16px;
      line-height: 1.5;
      color: $clr-zeta;
    }
  }
  // *** Footer END *** //

  &__submenu {
    margin-top: 65px;
    position: absolute;
    background-color: white;
    top: 0;
    left: 0;
    padding: 0 68px 0 34px;
    transform: translateX(-100%);
    &__title {
      font-weight: $bold;
      font-size: 18px;
      line-height: 1.5;
      svg {
        margin-right: 17px;
      }
    }
  }
}
</style>

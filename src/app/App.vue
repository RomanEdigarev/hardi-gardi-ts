<template>
  <div class="app">
    <template v-if="loading || !isToken">
      <h1>{{ "LOADING" }}</h1>
    </template>
    <template v-else>
      <div class="app__header">
        <HeaderForPhone
          v-if="isPhone"
          @open-burger="openBurger"
          @openSearchModalPhone="openSearchModal"
        />
        <Header v-else @open-burger="openBurger" />
      </div>

      <div class="app__wrapper">
        <div class="app__container">
          <div class="app__body">
            <router-view />
          </div>
        </div>
      </div>

      <div class="app__scroll-btn-container">
        <ScrollUpPage />
      </div>

      <div class="app__footer">
        <FooterForPhone
          v-if="isPhone"
          :social="social"
          :footer-menu="footerMenu"
          :contacts="contacts"
        />
        <Footer v-else :social="social" />
      </div>

      <img
        class="app__footer-bg"
        :src="require('/public/images/footer-bg.svg')"
        alt=""
      />
      <div ref="burger" v-if="isMobile" class="app__burger-menu">
        <BurgerMenu />
        <div
          ref="burgerBG"
          class="app__burger-menu__bg"
          @click="closeBurger"
        ></div>
      </div>
      <div
        ref="searchModalPhone"
        v-if="isMobile"
        class="app__search-modal-phone"
      >
        <SearchModalPhone @close="closeSearchModal" />
      </div>
    </template>

    <div class="modal-bg"></div>
  </div>
</template>

<script lang="ts">
import { Header, Footer, HeaderForPhone, FooterForPhone } from "./ui";
import { ScrollUpPage } from "@/features";
import { computed, defineComponent, onBeforeMount, onMounted } from "vue";
import { useStore } from "@/services/vuex";
import { initShop } from "@/entities/Shop/lib";
import { BurgerMenu } from "@/widgets";
import { useBurgerMenu, useSearchModalPhone } from "./lib";
import { SearchModalPhone } from "@/app/ui/Header/ui";
import { initBasket } from "@/entities/Basket/lib";
import { getApiInstance } from "@/services/api/config";

export default defineComponent({
  components: {
    Header,
    Footer,
    ScrollUpPage,
    BurgerMenu,
    HeaderForPhone,
    FooterForPhone,
    SearchModalPhone,
  },
  name: "App",
  setup() {
    const store = useStore();
    const isToken = computed(() => store.getters["getIsToken"]);
    onBeforeMount(async () => {});
    onMounted(async () => {
      if (!store.state.isInit) {
        await initShop();
        store.commit(
          "setIsMobile",
          document.documentElement.clientWidth <= 768
        );
        store.commit("setIsPhone", document.documentElement.clientWidth <= 375);
        await store.dispatch("basket/initBasket");
      }
    });

    const isMobile = computed(() => store.state.isMobile);

    return {
      loading: computed(() => store.state.loading),
      isPhone: computed(() => store.state.isPhone),
      social: computed(() => store.getters["shop/getSocial"]),
      footerMenu: computed(() => store.getters["shop/getFooterMenu"]),
      contacts: computed(() => store.getters["shop/getContacts"]),
      isToken,
      isMobile,
      ...useBurgerMenu(),
      ...useSearchModalPhone(),
    };
  },
});
</script>

<style lang="scss">
@import "~normalize.css";
@import "src/shared/style/style";
.app {
  width: 100%;
  min-height: 130vh;
  height: 100%;
  position: relative;

  &__wrapper {
    min-height: 50vh;
    height: 100%;
    padding: 0 19vw;
    margin-bottom: 250px;
  }

  &__container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    //min-height: 100vh;
    max-width: 1195px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__header {
    background: white;
    position: relative;
    z-index: 3;
  }

  &__body {
    height: 100%;
  }

  &__footer {
    bottom: 0;
    max-width: 100%;
    //position: absolute;
    width: 100%;
  }

  &__header-bg,
  &__footer-bg {
    position: absolute;
    z-index: -2;
    object-fit: cover;
    width: 100%;
  }

  &__header-bg {
    top: 0;
    left: 0;
    height: 821px;
  }

  &__footer-bg {
    height: 844px;
    bottom: 0;
  }

  &__header-image {
    z-index: -1;
    position: absolute;
    top: 22px;
    right: 23.8%;
  }

  &__scroll-btn-container {
    position: fixed;
    bottom: 780px;
    right: 13.54%;
  }

  &__burger-menu {
    width: 100%;
    position: fixed;
    margin-top: 90px;
    z-index: 6;
    bottom: -90px;
    transform: translateY(100%);
    & > div:first-child {
      position: relative;
      z-index: 8;
    }
    &__bg {
      width: 100vw;
      height: 100vh;
      position: fixed;
      background: #51628e;
      opacity: 0;
      z-index: 5;
      top: 0;
      left: 0;
    }
  }

  &__search-modal-phone {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    transform: translateY(100%);
  }

  .modal-bg {
    width: 100vw;
    height: 100%;
    background-color: rgba(81, 98, 142, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: none;
    opacity: 0.3;
    &--header {
      z-index: 1;
    }
  }
}

@media screen and (max-width: 1366px) {
  .app {
    &__wrapper {
      padding: 0 86px;
    }
  }
}

@media screen and (max-width: 768px) {
  .app {
    overflow-x: hidden;
    &__wrapper {
      padding: 0 24px;
      margin-bottom: 136px;
    }
    &__footer-bg {
      height: 1157px;
    }
  }
}

@media screen and (max-width: 376px) {
  .app {
    &__wrapper {
      padding: 0 18px;
      margin-bottom: 136px;
    }
  }
}
</style>

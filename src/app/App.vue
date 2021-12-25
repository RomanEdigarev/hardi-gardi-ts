<template>
  <div class="app">
    <template v-if="loading || !isToken">
      <div class="loader__container">
        <div class="loader"></div>
      </div>
    </template>
    <template v-else>
      <div class="app__header">
        <HeaderForPhone
          v-if="isPhone"
          @open-burger="openBurger"
          @openSearchModalPhone="openSearchModal"
          @change-city="openChangeCity"
        />
        <Header
          v-else
          @open-burger="openBurger"
          @change-city="openChangeCity"
        />
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
        v-if="!isOrderingPage"
        class="app__footer-bg"
        :src="require('/public/images/footer-bg.svg')"
        alt=""
      />
      <div ref="burger" v-if="isMobile || isPhone" class="app__burger-menu">
        <BurgerMenu @close-burger-menu="closeBurger" />
        <div
          ref="burgerBG"
          class="app__burger-menu__bg"
          @click="closeBurger"
        ></div>
      </div>
      <div
        ref="searchModalPhone"
        v-if="isMobile || isPhone"
        class="app__search-modal-phone"
      >
        <SearchModalPhone @close="closeSearchModal" />
      </div>
    </template>
    <div ref="changeCity" class="app__change-city">
      <ChangeCity @close="closeChangeCity" />
    </div>
    <div class="modal-bg"></div>
  </div>
</template>

<script lang="ts">
import {
  Header,
  Footer,
  HeaderForPhone,
  FooterForPhone,
  ChangeCity,
} from "./ui";
import { ScrollUpPage } from "@/features";
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  ref,
  watch,
  watchEffect,
} from "vue";
import { useStore } from "@/services/vuex";
import { initShop } from "@/entities/Shop/lib";
import { BurgerMenu } from "@/widgets";
import { useBurgerMenu, useSearchModalPhone } from "./lib";
import { SearchModalPhone } from "@/app/ui/Header/ui";
import anime from "animejs";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    Header,
    Footer,
    ScrollUpPage,
    BurgerMenu,
    HeaderForPhone,
    FooterForPhone,
    SearchModalPhone,
    ChangeCity,
  },
  name: "App",
  setup() {
    const changeCity = ref(null);
    const store = useStore();
    const route = useRoute();
    const isToken = computed(() => store.getters["getIsToken"]);
    const isOrderingPage = ref(false);

    onMounted(async () => {
      isOrderingPage.value = route.path === "/ordering";
      if (!store.state.isInit) {
        await initShop(store);
      }
    });

    window.addEventListener("resize", () => {
      if (
        document.documentElement.clientWidth <= 1360 &&
        document.documentElement.clientWidth > 737
      ) {
        store.commit("setIsPhone", false);
        store.commit("setIsMobile", true);
      } else if (document.documentElement.clientWidth <= 737) {
        store.commit("setIsPhone", true);
        store.commit("setIsMobile", false);
      } else {
        store.commit("setIsMobile", false);
        store.commit("setIsPhone", false);
      }
    });

    const isMobile = computed(() => store.state.isMobile);

    const closeChangeCity = () => {
      anime({
        targets: changeCity.value,
        opacity: [1, 0],
        duration: 400,
        easing: "linear",
        complete: () => {
          changeCity.value.style.zIndex = "-10";
        },
      });
    };
    const openChangeCity = () => {
      changeCity.value.style.zIndex = "100";
      anime({
        targets: changeCity.value,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
      });
    };

    watchEffect(() => {
      route.path === "/ordering" ? (isOrderingPage.value = true) : false;
    });

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
      closeChangeCity,
      changeCity,
      openChangeCity,
      isOrderingPage,
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
  overflow: hidden;

  &__change-city {
    position: relative;
    opacity: 0;
    z-index: -10;
  }

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
    top: 100px;
    left: 0;
    height: 821px;
    z-index: 0;
    overflow: hidden;
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
    bottom: 10vh;
    right: 13.54%;
  }

  &__burger-menu {
    width: 100%;
    position: fixed;
    margin-top: 90px;
    z-index: 6;
    bottom: -90px;
    transform: translateY(100%);
    overflow-y: scroll;
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
    z-index: 6;
    transform: translateY(100%);
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
@media screen and (min-width: 1250px) and (max-width: 1919px) {
  .app {
    &__wrapper {
      padding: 0 6vw;
    }
    &__container {
      //max-width: none;
      //min-width: 1194px;
      width: 1194px;
    }
    &__scroll-btn-container {
      right: 10vw;
    }
  }
}
@media screen and (max-width: 1368px) {
  .app {
    &__wrapper {
      padding: 0 0;
    }
    &__scroll-btn-container {
      bottom: 18vw;
      right: 7vw;
    }
    &__container {
      max-width: 1191px;
      width: 95%;
      margin: 0 auto;
    }
  }
}
@media screen and (min-width: 769px) and (max-width: 1200px) {
  .app {
    &__wrapper {
      padding: 0 0;
    }
    &__scroll-btn-container {
      right: 4vw;
    }
    &__container {
      width: 720px;
    }
  }
}
@media screen and (min-width: 450px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .app {
    overflow-x: hidden;
    &__wrapper {
      //padding: 0 24px;
      margin-bottom: 136px;
    }
    &__footer-bg {
      //max-height: 90vh;
      height: 1157px;
    }
    &__scroll-btn-container {
      right: 4vw;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .app {
    overflow: hidden;
    &__header {
      z-index: 6;
    }
    &__wrapper {
      //padding: 0 18px;
      margin-bottom: 136px;
    }
    &__footer-bg {
      max-height: none;
      height: 1157px;
    }
    &__scroll-btn-container {
      right: 4vw;
    }
  }
}
@media screen and (max-width: 375px) {
  .app {
    &__container {
      width: 339px;
    }
    &__footer-bg {
      //max-height: 145vh;
      height: 1192px;
    }
  }
}
</style>
<style lang="scss">
.loader__container {
  width: 100vw;
  height: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 24vh;
}
.loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: $clr-zeta;
  background: -moz-linear-gradient(
    left,
    $clr-zeta 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    $clr-zeta 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    $clr-zeta 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    $clr-zeta 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    $clr-zeta 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: $clr-zeta;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}
.loader:after {
  background: white;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

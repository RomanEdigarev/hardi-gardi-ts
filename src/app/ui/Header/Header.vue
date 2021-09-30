<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__container">
        <div class="header__logo">
          <Logo @click="$router.push('/')" />
        </div>
        <div class="header__navigation">
          <Navigation
            :tooltip-links="tooltipLinks"
            @show-modal="setCurrentModal"
          />
        </div>
        <a class="header__phone" href="tel:+7 921 961 14 41">
          +7 921 961 14 41
        </a>
        <div class="header__cabinet">
          <Cabinet @show-modal="setCurrentModal" />
        </div>
        <button
          v-if="isMobile"
          class="header__burger"
          @click="$emit('open-burger')"
        >
          <img src="./assets/burger.svg" alt="" />
        </button>
      </div>
      <div ref="headerModal" class="header__header-modal-container">
        <HeaderModal>
          <template v-slot:content>
            <div class="header__header-modal__content">
              <keep-alive>
                <component :is="currentModal" :items="catalogMenu">
                  <template
                    v-if="currentModal === 'search'"
                    v-slot:serch-results
                  >
                    SearchResults
                  </template>
                </component>
              </keep-alive>
            </div>
          </template>
        </HeaderModal>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Logo from "./assets/Logo.vue";
import { Navigation, Cabinet } from "@/widgets";
import { HeaderModal, CatalogSubmenu, Search } from "./ui";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "Header",
  components: {
    Logo,
    Navigation,
    Cabinet,
    HeaderModal,
    CatalogSubmenu,
    Search,
  },
  emits: ["open-burger"],
  setup() {
    const currentModal = ref("search");
    const setCurrentModal = (currentModalName) => {
      currentModal.value = currentModalName;
    };
    const store = useStore();
    const isMobile = computed(() => store.state.isMobile);
    const tooltipLinks = computed(() => store.getters["shop/getTooltipMenu"]);

    return {
      currentModal,
      setCurrentModal,
      isMobile,
      tooltipLinks,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  &__wrapper {
    width: 100%;
    padding: 0 19vw;
    height: 100px;
    background-color: $clr-tau;
  }

  &__container {
    width: 100%;
    max-width: 1184px;
    height: 100%;
    padding: 21px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    max-width: 90px;
    cursor: pointer;
    :deep svg {
      width: 100%;
      height: 100%;
    }
  }

  &__navigation {
    flex: 0.7;
  }

  &__cabinet {
    height: 100%;
  }

  &__phone {
    font-size: 24px;
    font-weight: $semi-bold;
    color: $clr-zeta;
  }

  &__header-modal-container {
    width: 100%;
    position: absolute;
    left: 0;
    opacity: 0;
    display: none;
  }

  &__header-modal__content {
    width: 100%;
    padding: 0 27.5vw;
  }
}

@media screen and (min-width: 1367px) and (max-width: 1919px) {
  .header {
    &__wrapper {
      padding: 0 10vw;
    }
    &__container {
      max-width: none;
      min-width: 80vw;
    }
  }
}

@media screen and (max-width: 1366px) {
  .header {
    &__wrapper {
      padding: 0 86px;
    }
    &__header-modal__content {
      padding: 0px 18.3vw;
    }
  }
}
@media screen and (min-width: 769px) and (max-width: 1365px) {
  .header {
    &__wrapper {
      padding: 0 4vw;
    }
    &__navigation {
      flex: 0.85;
    }
  }
}
@media screen and (max-width: 768px) {
  .header {
    &__wrapper {
      padding: 0 24px;
    }
    &__phone {
      display: none;
    }
  }
}
</style>

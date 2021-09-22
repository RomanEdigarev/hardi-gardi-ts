<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__container">
        <div class="header__logo">
          <Logo @click="$router.push('/')" />
        </div>
        <div class="header__navigation">
          <Navigation @show-modal="setCurrentModal" />
        </div>
        <div class="header__phone">+7 921 961 14 41</div>
        <div class="header__cabinet">
          <Cabinet @show-modal="setCurrentModal" />
        </div>
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
import { defineComponent, ref } from "vue";
import Logo from "./assets/Logo.vue";
import { Navigation, Cabinet } from "@/widgets";
import { HeaderModal, CatalogSubmenu, Search } from "./ui";

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
  setup() {
    const currentModal = ref("search");
    const setCurrentModal = (currentModalName) => {
      currentModal.value = currentModalName;
    };

    return {
      currentModal,
      setCurrentModal,
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
</style>

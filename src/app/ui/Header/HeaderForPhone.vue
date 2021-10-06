<template>
  <div class="header-for-phone">
    <div class="header-for-phone__header">
      <div class="header-for-phone__header__left">
        <Location city="Санкт-Петербург" />
      </div>
      <div class="header-for-phone__header__right">
        <CabinetTitle />
      </div>
    </div>
    <div class="header-for-phone__body">
      <div class="header-for-phone__body__logo">
        <Logo @click="$router.push('/')" />
      </div>
      <div class="header-for-phone__body__ui">
        <CabinetLinks
          @openSearchModalPhone="$emit('openSearchModalPhone')"
          :basket-count="basketCount"
          :favorites-count="favoritesCount"
        />
      </div>
      <button
        class="header-for-phone__body__burger-btn"
        @click="$emit('open-burger')"
      >
        <img src="./assets/burger.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Location } from "@/widgets";
import Logo from "@/app/ui/Header/assets/Logo.vue";
import { CabinetLinks, CabinetTitle } from "@/widgets/Cabinet/ui";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "HeaderForPhone",
  components: { Location, CabinetTitle, Logo, CabinetLinks },
  setup() {
    const store = useStore();
    return {
      basketCount: computed(() => store.getters["basket/getBasketCount"]),
      favoritesCount: computed(
        () => store.getters["favorites/getFavoritesTotalCount"]
      ),
    };
  },
});
</script>

<style lang="scss" scoped>
.header-for-phone {
  width: 100%;
  height: 107px;
  background-color: $clr-tau;

  // *** Header *** //
  &__header {
    padding: 13px 18px;
    display: flex;
    justify-content: space-between;
    background: #f5f6f8;
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    display: flex;
    justify-content: space-between;
    padding: 10px 18px;
    align-items: center;
    &__ui {
      margin-left: 38px;
    }
    &__logo {
      flex: 1;
      svg {
        width: 70px;
      }
    }
    &__burger-btn {
      text-align: end;
      flex: 0.2;
      img {
        width: 28px;
      }
    }
  }
  // *** Body END *** //
}
@media screen and (max-width: 375px) {
  .header-for-phone {
    &__body__logo {
      flex: 0.6;
    }
  }
}
</style>

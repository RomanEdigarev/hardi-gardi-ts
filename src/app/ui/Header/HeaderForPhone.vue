<template>
  <div  class="header-for-phone">
    <div ref="location" class="header-for-phone__header">
      <div class="header-for-phone__header__left">
        <Location  :city="cities[currentCityIndex]" @change-city="$emit('change-city')"/>
      </div>
      <div class="header-for-phone__header__right">
        <CabinetTitle />
      </div>
    </div>
    <div ref="body" class="header-for-phone__body" :class="{'is-fixed': isFixed}">
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
import {computed, defineComponent, onMounted, ref, watch, watchEffect} from "vue";
import { Location } from "@/widgets";
import Logo from "@/app/ui/Header/assets/Logo.vue";
import { CabinetLinks, CabinetTitle } from "@/widgets/Cabinet/ui";
import { useStore } from "@/services/vuex";
import {HeaderModal} from "@/app/ui/Header/ui";

export default defineComponent({
  name: "HeaderForPhone",
  components: { Location, CabinetTitle, Logo, CabinetLinks },
  setup() {
    const store = useStore();
    const location = ref<HTMLElement>(null)
    const body = ref<HTMLElement>(null)
    const isFixed = ref(false)

    watchEffect(() => {
      if (location.value && body.value) {
        const options = {
          root: null,
          threshold: 0
        }
        const callback = (entries, observer) => {
          if (entries[0].intersectionRatio < 1) {
           isFixed.value = !isFixed.value
          }
        }
        const observer = new IntersectionObserver(callback, options)
        observer.observe(location.value)
      }
    })

    const currentCityIndex = computed(
        () => store.getters["city/getCurrentCityId"]
    );
    const cities = computed(() => store.getters["city/getAllCities"]);
    onMounted(async () => {
      await store.dispatch("city/getCityItems");
    });
    return {
      basketCount: computed(() => store.getters["basket/getBasketCount"]),
      favoritesCount: computed(
        () => store.getters["favorites/getFavoritesTotalCount"]
      ),
      cities,
      currentCityIndex,
      location,
      body,
      isFixed
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
    width: 100%;
    background-color: white;
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

  .is-fixed {
    position: fixed;
    top: 0
  }
}
@media screen and (max-width: 375px) {
  .header-for-phone {
    &__body__logo {
      flex: 0.6;
    }
  }
}
</style>

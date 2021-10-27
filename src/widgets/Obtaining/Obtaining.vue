<template>
  <div class="obtaining">
    <div class="obtaining__header">
      <div class="obtaining__header__search-icon">
        <SearchIcon />
      </div>
      <input
        class="obtaining__header__input"
        type="text"
        :value="currentCity"
        placeholder="Санкт-Петербург"
      />
      <div class="obtaining__header__clear-btn" @click="clearInput">
        <CloseIcon />
      </div>
    </div>
    <div class="obtaining__body">
      <div class="obtaining__body__toggle">
        <ToggleMenu
          :items="items"
          :current-item-key="currentItemKey"
          @set-current-item="setCurrentItem"
        />
      </div>
      <div class="obtaining__body__content">
        <div class="obtaining__body__content__item">
          <component :is="currentItemKey"></component>
          <!--          <Self />-->
          <!--          <Courier />-->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { SearchIcon, CloseIcon } from "@/shared/ui/icons";
import { Courier, Post, Self } from "./ui";
import { ToggleMenu } from "@/shared/ui";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "Obtaining",
  components: { SearchIcon, CloseIcon, Self, ToggleMenu, Courier, Post },
  setup() {
    const store = useStore();
    const userCity = computed(() => {
      return store.getters["city/getCurrentCityName"];
    });
    const currentCity = ref(userCity.value);
    // const items = ["Самовывоз", "Курьер", "Почта России"];
    const obtainingTypes = {
      self: "Самовывоз",
      courier: "Курьер",
      post: "Почта России",
    };
    const currentItemKey = ref<keyof typeof obtainingTypes>("self");

    const items = computed(() => {
      return Object.entries(obtainingTypes).map(([key, value]) => {
        return {
          key,
          value,
        };
      });
    });

    const setCurrentItem = (itemKey) => {
      currentItemKey.value = itemKey;
    };
    const clearInput = () => {
      currentCity.value = "";
    };

    return {
      items,
      setCurrentItem,
      currentItemKey,
      currentCity,
      clearInput,
    };
  },
});
</script>

<style lang="scss" scoped>
.obtaining {
  color: $clr-phi;
  // *** Header *** //
  &__header {
    margin-bottom: 42px;
    position: relative;
    &__input {
      width: 100%;
      outline: none;
      border: 1px solid $clr-upsilon;
      box-sizing: border-box;
      border-radius: 16px;
      padding: 22px 64px;
      color: $clr-phi;
      font-size: 16px;
      line-height: 1.75;
      &::placeholder {
        color: $clr-phi;
        opacity: 0.4;
      }
    }
    &__search-icon {
      width: 21px;
      height: 21px;
      position: absolute;
      top: 50%;
      left: 26px;
      transform: translateY(-50%);
    }
    &__input:focus ~ &__clear-btn {
      opacity: 1;
    }
    &__clear-btn {
      width: 24px;
      height: 24px;
      position: absolute;
      right: 26px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      cursor: pointer;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    &__content {
    }
  }
  // *** Body END *** //
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .obtaining {
    &__header {
      &__input {
        padding: 16px 57px;
      }
    }
  }
}
</style>

<style lang="scss">
.obtaining {
  &__header__search-icon {
    svg > g > path {
      stroke: $clr-eta;
    }
  }
}
</style>

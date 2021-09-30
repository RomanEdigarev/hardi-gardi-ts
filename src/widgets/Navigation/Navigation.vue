<template>
  <div class="navigation">
    <div class="navigation__location"><Location city="Санкт-Петербург" /></div>
    <div class="navigation__container">
      <nav class="navigation__links">
        <span
          v-toggle-modal="{ modal: 'header-modal', name: 'catalogMenu' }"
          class="navigation__link with-submenu"
          @click="$emit('show-modal', 'catalogSubmenu')"
        >
          Каталог
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.97461 8.55951L8.27461 2.35951L14.4746 8.55951"
              stroke="#D23C50"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <router-link v-for="menuItem in topMenu" :to="menuItem.link">
          {{ menuItem.name }}
        </router-link>
      </nav>
      <div class="navigation__tooltip">
        <NavigationButton :links="tooltipLinks" />
      </div>
    </div>
    <div class="navigation__cabinet">
      <CabinetTitle />
    </div>
    <div ref="submenu" class="navigation__submenu-container">
      <div class="navigation__submenu">
        <!--        <CatalogSubmenu :items="catalogMenu" />-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { NavigationButton } from "./ui";
import {defineComponent, PropType} from "vue";
import { CatalogSubmenu } from "./ui";
import Location from "../Location/Location.vue";
import { useTopMenu } from "@/widgets/Navigation/lib";
import CabinetTitle from "@/widgets/Cabinet/ui/CabinetTitle/CabinetTitle.vue";
import { MenuLink } from "@/entities/Shop/Menu/model";

export default defineComponent({
  name: "Navigation",
  components: {
    NavigationButton,
    Location,
    CatalogSubmenu,
    CabinetTitle,
  },
  props: {
    tooltipLinks: {
      type: Object as PropType<MenuLink[]>,
      required: true,
    },
  },
  setup() {
    return {
      ...useTopMenu(),
    };
  },
});
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  height: 100%;
  color: $clr-phi;

  &__location {
    margin-bottom: 18px;
  }

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex: 0.8;
  }
  &__cabinet {
    display: none;
  }

  &__submenu-container {
    width: 100vw;
    position: absolute;
    height: auto;
    left: 0;
    background-color: #fff;
    background-position: 25% 75%;
    padding-left: 19vw;
    display: none;
    opacity: 0;
    z-index: 10;
  }

  &__submenu {
    width: 100%;
    max-width: 854px;
    margin-left: 10.35%;
    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: red;
      z-index: 1;
      opacity: 0.2;
    }
  }

  &__links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 21px;
  }

  &__link {
    transition: text-shadow 0.2s ease-in-out;
    white-space: nowrap;
    cursor: pointer;

    flex: 0.1;
    &:hover {
      text-shadow: 0 0 1px $clr-phi;
    }

    svg {
      margin-left: 9px;
      transition: transform 0.3s ease-in-out;
      transform: rotate(180deg);
    }
  }

  .with-submenu {
    &:hover {
      color: $clr-zeta;
      text-shadow: 0 0 1px $clr-zeta;
      svg {
        transform: rotate(0);
      }
    }
  }

  &__tooltip {
    flex: 0.2;
  }
}

@media screen and (max-width: 768px) {
  .navigation {
    &__container {
      display: none;
    }
    &__cabinet {
      display: block;
    }
  }
}
</style>

<template>
  <div class="cabinet">
    <div class="cabinet__title" :class="{ isLogin: isLogin }">
      <CabinetTitle />
    </div>
    <div class="cabinet__links">
      <CabinetLinks
        :basket-count="basketCount"
        :favorites-count="favoritesCount"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Tooltip from "@/shared/ui/Tooltip/Tooltip.vue";
import CabinetTitle from "./ui/CabinetTitle/CabinetTitle.vue";
import { CabinetLinks } from "./ui";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "Cabinet",
  components: {
    Tooltip,
    CabinetTitle,
    CabinetLinks,
  },
  props: {
    isLogin: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
  },
  setup(props) {
    const store = useStore();
    const text = computed(() => {
      return props.isLogin ? props.name : "Личный кабинет";
    });

    return {
      text,
      basketCount: computed(() => store.getters["basket/getBasketCount"]),
      favoritesCount: computed(
        () => store.getters["favorites/getFavoritesTotalCount"]
      ),
    };
  },
});
</script>

<style lang="scss" scoped>
.cabinet {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  &__title {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: $clr-phi;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    :deep path {
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      color: $clr-zeta;

      :deep path {
        opacity: 1;
        fill: $clr-zeta;
      }
    }
  }

  &__icon {
    display: inline-block;
    width: 14px;
    margin-right: 8px;
  }

  &__links {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__link {
    display: inline-block;
    width: 27px;
    height: 27px;
    cursor: pointer;
  }

  &__link[id="shop"] {
    transform: translateX(6px);
  }
}

.isLogin {
  color: $clr-zeta;

  :deep path {
    opacity: 1;
    fill: $clr-zeta;
  }
}

.tooltip-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  color: $clr-phi;
  line-height: 1.75;

  &__name {
    font-weight: $semi-bold;
    padding: 6px 0;
  }

  &__link {
    padding: 6px 0;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: $clr-alpha-epsilon;
    }
  }

  &__link-out {
    padding: 6px 0;
    color: $clr-zeta;

    &:hover {
      text-shadow: 0 0 1px $clr-zeta;
    }
  }
}

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .cabinet {
    align-items: center;
    justify-content: center;
    &__title {
      display: none;
    }
    &__links {
      gap: 21px;
    }
  }
}
</style>

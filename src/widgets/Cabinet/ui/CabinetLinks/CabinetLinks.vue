<template>
  <div class="cabinet-links">
    <!--    v-toggle-modal="{ modal: 'header-modal', name: 'search' }"-->
    <span
      v-if="!isPhone"
      v-toggle-modal="{ modal: 'header-modal', name: 'search' }"
      class="cabinet-links__link"
      @click="$emit('show-modal', 'search')"
    >
      <SearchIcon />
    </span>
    <span
      v-else
      class="cabinet-links__link"
      @click="$emit('openSearchModalPhone')"
    >
      <SearchIcon />
    </span>
    <div class="cabinet-links__link" id="favorite" @click="goToFavorites">
      <IconWithCount :count="favoritesCount">
        <template v-slot:svg-icon>
          <FavoriteIcon />
        </template>
      </IconWithCount>
    </div>
    <Tooltip trigger="mouseenter" offset="-42">
      <template v-slot:reference>
        <router-link class="cabinet-links__link" id="shop" to="/basket">
          <IconWithCount :count="basketCount">
            <template v-slot:svg-icon>
              <ShopIcon />
            </template>
          </IconWithCount>
        </router-link>
      </template>
      <template v-slot:content>
        <CabinetTooltip />
      </template>
    </Tooltip>
  </div>
</template>

<script>
import { FavoriteIcon, SearchIcon, ShopIcon } from "@/shared/ui/icons";
import { computed, defineComponent } from "vue";
import { IconWithCount } from "@/features";
import { useStore } from "@/services/vuex";
import { Tooltip } from "@/shared/ui";
import CabinetTooltip from "./CabinetTooltip";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CabinetLinks",
  components: {
    SearchIcon,
    FavoriteIcon,
    ShopIcon,
    IconWithCount,
    Tooltip,
    CabinetTooltip,
  },
  props: {
    basketCount: {
      type: Number,
      default: 0,
    },
    favoritesCount: {
      type: Number,
      default: 0,
    },
  },
  emits: ["openSearchModalPhone"],
  setup() {
    const store = useStore();
    const router = useRouter();
    const favoritesCount = computed(
      () => store.getters["favorites/getFavoritesTotalCount"]
    );
    const goToFavorites = () => {
      if (favoritesCount.value > 0) {
        router.push("/favorites");
      }
    };
    return {
      isPhone: computed(() => store.getters["getIsPhone"]),
      goToFavorites,
    };
  },
});
</script>

<style lang="scss" scoped>
.cabinet-links {
  position: relative;
  z-index: 1;
  display: flex;
  //gap: 18px;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  &__link {
    display: inline-block;
    width: 27px;
    height: 27px;
    cursor: pointer;
    margin-right: 18px;
  }
  &__link[id="shop"] {
    margin-right: 0;
    transform: translateX(6px);
  }
}
</style>
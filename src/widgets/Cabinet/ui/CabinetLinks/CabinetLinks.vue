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
    <router-link class="cabinet-links__link" id="favorite" to="/favorites">
      <IconWithCount :count="favoritesCount">
        <template v-slot:svg-icon>
          <FavoriteIcon />
        </template>
      </IconWithCount>
    </router-link>
    <router-link class="cabinet-links__link" id="shop" to="/basket">
      <IconWithCount :count="basketCount">
        <template v-slot:svg-icon>
          <ShopIcon />
        </template>
      </IconWithCount>
    </router-link>
  </div>
</template>

<script>
import { FavoriteIcon, SearchIcon, ShopIcon } from "@/shared/ui/icons";
import { computed, defineComponent } from "vue";
import { IconWithCount } from "@/features";
import {useStore} from "@/services/vuex";

export default defineComponent({
  name: "CabinetLinks",
  components: {
    SearchIcon,
    FavoriteIcon,
    ShopIcon,
    IconWithCount,
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
    const store = useStore()
    return {
      isPhone: computed(() => store.getters['getIsPhone']),
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

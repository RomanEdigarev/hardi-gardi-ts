<template>
  <div class="cabinet-links">
    <!--    v-toggle-modal="{ modal: 'header-modal', name: 'search' }"-->
    <span class="cabinet-links__link" @click="$emit('show-modal', 'search')"
      ><SearchIcon
    /></span>
    <a class="cabinet-links__link" href="/">
      <IconWithCount :count="4">
        <template v-slot:svg-icon>
          <FavoriteIcon />
        </template>
      </IconWithCount>
    </a>
    <a class="cabinet-links__link" id="shop" href="/">
      <IconWithCount>
        <template v-slot:svg-icon>
          <ShopIcon />
        </template>
      </IconWithCount>
    </a>
  </div>
</template>

<script>
import { FavoriteIcon, SearchIcon, ShopIcon } from "@/shared/ui/icons";
import { defineComponent } from "vue";
import { IconWithCount } from "@/features";

export default defineComponent({
  name: "CabinetLinks",
  components: {
    SearchIcon,
    FavoriteIcon,
    ShopIcon,
    IconWithCount,
  },
});
</script>

<style lang="scss" scoped>
.cabinet-links {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 18px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
</style>

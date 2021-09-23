<template>
  <div class="add-to-favorite__favorite-btn-container">
    <FavoriteButton :isActive="isFavorite" @click="toggleToFavorite" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FavoriteButton } from "@/shared/ui/buttons";

export default defineComponent({
  name: "AddToFavorite",
  components: {
    FavoriteButton,
  },
  props: {
    isFavorite: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  setup() {
    const toggleToFavorite = () => {
      console.log("toggle favorite");
    };

    return {
      toggleToFavorite,
    };
  },
});
</script>

<style lang="scss" scoped>
.add-to-favorite {
  &__favorite-btn-container {
    width: 60px;
    height: 60px;
  }
}
@media screen and (max-width: 376px) {
  .add-to-favorite {
    &__favorite-btn-container {
      width: 40px;
      height: 40px;
    }
  }
}
</style>

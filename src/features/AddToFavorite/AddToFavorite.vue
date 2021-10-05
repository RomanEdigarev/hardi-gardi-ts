<template>
  <div class="add-to-favorite__favorite-btn-container">
    <FavoriteButton
      v-if="isPending"
      :isActive="isFavorite"
      @click="toggleFavorite"
      :is-pending="true"
    />
    <FavoriteButton
      v-else
      :isActive="isFavorite"
      @click="toggleFavorite"
      :is-pending="false"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { FavoriteButton } from "@/shared/ui/buttons";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "AddToFavorite",
  components: {
    FavoriteButton,
  },
  props: {
    isFavorite: {},
    productId: {
      type: String || Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const isPending = ref(false);
    const isFavorite = computed(() =>
      store.getters["favorites/getIsFavoriteByProductId"](props.productId)
    );

    const toggleFavorite = async () => {
      console.log("toggle favorite");
      isPending.value = true;
      await store.dispatch(
        `favorites/${
          isFavorite.value ? "removeFromFavorites" : "addToFavorite"
        }`,
        props.productId
      );
      isPending.value = false;
    };

    return {
      toggleFavorite,
      isFavorite,
      isPending,
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
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .add-to-favorite {
    &__favorite-btn-container {
      width: 36px;
      height: 36px;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .add-to-favorite {
    &__favorite-btn-container {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

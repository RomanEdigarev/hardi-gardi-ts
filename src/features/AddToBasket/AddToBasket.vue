<template>
  <div class="add-to-basket__shop-btn-container" @click="addToBasket">
    <ShopButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ShopButton } from "@/shared/ui/buttons";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "AddToBasket",
  components: {
    ShopButton,
  },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const addToBasket = () => {
      store.dispatch("basket/addToBasket", { id: props.productId });
    };
    return {
      addToBasket,
    };
  },
});
</script>

<style lang="scss" scoped>
.add-to-basket {
  &__shop-btn-container {
    width: 60px;
    height: 60px;
  }
}
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .add-to-basket {
    &__shop-btn-container {
      width: 52px;
      height: 52px;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .add-to-basket {
    &__shop-btn-container {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

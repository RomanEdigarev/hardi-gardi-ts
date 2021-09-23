<template>
  <div class="add-to-basket__shop-btn-container" @click="addToBasket">
    <ShopButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ShopButton } from "@/shared/ui/buttons";

export default defineComponent({
  name: "AddToBasket",
  components: {
    ShopButton,
  },
  setup() {
    const addToBasket = () => console.log("add to basket");
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
@media screen and (max-width: 376px) {
  .add-to-basket {
    &__shop-btn-container {
      width: 40px;
      height: 40px;
    }
  }
}
</style>

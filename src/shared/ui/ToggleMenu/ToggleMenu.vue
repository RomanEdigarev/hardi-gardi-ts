<template>
  <div class="toggle-menu">
    <div ref="bg" class="toggle-menu__bg"></div>
    <div
      class="toggle-menu__item"
      v-for="(item, index) in items"
      @click="setCurrentItemIndex(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import anime from "animejs";

export default defineComponent({
  name: "ToggleMenu",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    // const items = ["Самовывоз", "Курьер", "Почта России"];
    const currentItemIndex = ref(0);
    const bg = ref<HTMLElement>(null);
    const animation = () => {
      anime({
        targets: bg.value,
        translateX: `${currentItemIndex.value * 100}%`,
        easing: "spring(1, 60, 11, 0)",
      });
    };
    const setCurrentItemIndex = (index) => {
      currentItemIndex.value = index;
      animation();
    };
    return {
      currentItemIndex,
      setCurrentItemIndex,
      bg,
    };
  },
});
</script>

<style lang="scss" scoped>
.toggle-menu {
  display: flex;
  background: $clr-kappa;
  border-radius: 16px;
  position: relative;
  margin-bottom: 23px;
  color: $clr-phi;
  &__item {
    position: relative;
    z-index: 10;
    width: 262px;
    padding: 22px 0;
    font-weight: $semi-bold;
    font-size: 16px;
    line-height: 1.75;
    text-align: center;
    cursor: pointer;
  }
  &__bg {
    position: absolute;
    width: 262px;
    height: 72px;
    background: #ffffff;
    border: 3px solid $clr-zeta;
    box-sizing: border-box;
    border-radius: 16px;
    top: 0;
    left: 0;
    transform: translateX(0%);
  }
}
</style>

<template>
  <button ref="button" v-scroll-page="'up'" class="scroll-page-btn">
    <ScrollUp />
  </button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ScrollUp } from "@/shared/ui/icons";
import { animationToggleVisible } from "./lib/animation";

export default defineComponent({
  name: "ScrollUpPage",
  components: {
    ScrollUp,
  },
  setup() {
    const button = ref<HTMLElement>(null);
    let isShow = false;

    onMounted(() => {
      button.value.style.opacity = "0";
      window.addEventListener("scroll", () => {
        const halfScreenHeight = Math.ceil(
          document.documentElement.clientHeight / 2
        );
        if (window.scrollY > halfScreenHeight && !isShow) {
          isShow = true;
          animationToggleVisible(button.value, isShow);
        } else if (window.scrollY < halfScreenHeight && isShow) {
          isShow = false;
          animationToggleVisible(button.value, isShow);
        }
      });
    });

    return {
      button,
    };
  },
});
</script>

<style lang="scss" scoped>
.scroll-page-btn {
  width: 62px;
  height: 62px;
}
@media screen and (min-width: 320px) and (max-width: 736px) {
  .scroll-page-btn {
    width: 42px;
    height: 42px;
  }

}
</style>

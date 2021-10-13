<template>
  <div
    ref="container"
    class="icon-container"
    @mouseenter.stop="toggleAnimation"
  >
    <svg ref="svg" viewBox="0 0 225 238" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref="ring" d="M147.396 45.8C143.694 36.4 138.39 28.2 131.586 21.3C124.782 14.5 116.576 9.2 107.07 5.5C97.7639 1.9 87.4572 0 76.45 0C65.4428 0 55.136 1.8 45.7299 5.4C36.1236 9.1 27.8182 14.5 21.1138 21.3C14.4094 28.1 9.20602 36.3 5.5036 45.7C1.90124 55 0 65.2 0 76.3C0 87.4 1.80118 97.6 5.5036 106.9C9.20602 116.2 14.4094 124.5 21.0137 131.4C27.8182 138.4 36.1236 143.9 45.7299 147.6C55.036 151.2 65.4428 153 76.45 153C87.4572 153 97.7639 151.2 107.07 147.5C116.576 143.8 124.782 138.4 131.686 131.4C138.491 124.5 143.794 116.2 147.496 106.9C151.099 97.6 153 87.3 153 76.3C152.9 65.3 150.999 55.1 147.396 45.8ZM103.768 76.4C103.768 84.5 101.666 90.7 97.4637 95.4C93.6612 99.6 86.5566 101.8 76.45 101.8C68.3447 101.8 62.5409 99.7 58.0379 95C53.535 90.3 51.3335 84.2 51.3335 76.3C51.3335 68.4 53.535 62.4 58.0379 57.9C62.4408 53.4 68.5448 51.2 76.55 51.2C86.1563 51.2 93.1609 53.4 97.3636 57.7C101.666 62.2 103.768 68.3 103.768 76.4Z" fill="#E6EFFF"/>
      <path ref="circle" style="transform-origin: bottom right" d="M166.5 238C198.809 238 225 211.809 225 179.5C225 147.191 198.809 121 166.5 121C134.191 121 108 147.191 108 179.5C108 211.809 134.191 238 166.5 238Z" fill="#FADDEA"/>
    </svg>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import anime from "animejs";

export default defineComponent({
  name: "SectionId_72",
  setup() {
    const ring = ref<HTMLElement>(null);
    const circle = ref<HTMLElement>(null)
    const container = ref<HTMLElement>(null);
    const animation = computed(() => {
        return anime.timeline().add({
          targets: [ring.value,circle.value],
          keyframes: [
            {scale: '0.5', easing: 'spring(10, 70, 8, 0)'},
            {scale: '1',  easing: 'spring(0.1, 70, 3, 4)'},
          ],
        })
    });

    const toggleAnimation = () => {
      animation.value.play();
    };

    return {
      ring,
      toggleAnimation,
      container,
      circle
    };
  },
});
</script>

<style lang="scss" scoped>
.icon-container {
  width: 100%;
  height: 100%;
}
</style>

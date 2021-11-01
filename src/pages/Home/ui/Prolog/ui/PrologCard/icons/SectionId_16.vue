<template>
  <div
    ref="container"
    class="icon-container"
  >
    <svg viewBox="0 0 190 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M95.0701 22.5007C112.275 5.44779 139.481 -7.45139 176.12 5.17823C186.52 8.77823 192.02 20.0782 188.52 30.4782C184.92 40.8782 173.62 46.3782 163.22 42.8782C148.02 37.6782 136.02 39.5782 125.42 48.8782C117.22 56.0782 113.02 65.0782 113.02 65.1782C109.82 72.6782 102.42 77.1782 94.72 77.1782C92.12 77.1782 89.52 76.6782 86.92 75.5782C80.9226 73.0249 76.8292 67.8622 75.3936 61.9748C73.355 58.4726 69.5058 52.8062 63.8198 48.0785C53.4198 39.3785 41.6198 37.6785 26.8198 42.7785C16.4198 46.3785 5.11977 40.7785 1.51977 30.3785C-2.08023 19.9785 3.51977 8.67847 13.9198 5.07847C50.6797 -7.50421 77.8918 5.43173 95.0701 22.5007Z" fill="#D23C50"/>
    </svg>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import anime from "animejs";

export default defineComponent({
  name: "SectionId_16",
  setup() {
    const svg = ref<HTMLElement>(null);
    const container = ref<HTMLElement>(null);
    // const animation = computed(() => {
    //   return anime
    //     .timeline({})
    //     .add({
    //       targets: svg.value,
    //       rotate: "-45deg",
    //       duration: 300,
    //       easing: "linear",
    //     })
    //     .add({
    //       targets: container.value,
    //       keyframes: [
    //         {translateX: '-110%',},
    //         {translateX: '110%', duration: 0},
    //         {translateX: '0', duration: 300}
    //       ],
    //       easing: "linear",
    //     })
    //       .add({
    //         targets: svg.value,
    //         rotate: "0deg",
    //         duration: 300,
    //         easing: "linear",
    //       });
    // });
    //
    // const toggleAnimation = () => {
    //   animation.value.play();
    // };

    return {
      svg,
      // toggleAnimation,
      container,
    };
  },
});
</script>

<style lang="scss" scoped>
.icon-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

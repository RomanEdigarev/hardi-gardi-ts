<template>
  <div
    ref="container"
    class="icon-container"
    @mouseenter.stop="toggleAnimation"
  >
    <svg ref="svg" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M62.074 134.711L3.32584 75.9629C-0.503794 72.1333 -0.503794 65.9407 3.32584 62.1111L62.074 3.36294C65.9036 -0.466685 72.0962 -0.466685 75.9258 3.36294L134.674 62.1111C138.504 65.9407 138.504 72.1333 134.674 75.9629L75.9258 134.711C72.0962 138.541 65.9036 138.541 62.074 134.711Z" fill="#FADDEA"/>
    </svg>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import anime from "animejs";

export default defineComponent({
  name: "SectionId_46",
  setup() {
    const svg = ref<HTMLElement>(null);
    const container = ref<HTMLElement>(null);
    const animation = computed(() => {
      return anime
        .timeline({})
        .add({
          targets: svg.value,
          rotate: {
            value: '+=0.5turn', // 0 + 2 = '2turn'
            duration: 600,
            easing: 'easeInOutSine'
          },
          duration: 300,
          easing: "linear",
        })
          .add({
            targets: svg.value,
            rotate: "0deg",
            duration: 300,
            easing: "linear",
          });
    });

    const toggleAnimation = () => {
      animation.value.play();
    };

    return {
      svg,
      toggleAnimation,
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
  svg  {
    max-width: 137px;
  }
}
</style>

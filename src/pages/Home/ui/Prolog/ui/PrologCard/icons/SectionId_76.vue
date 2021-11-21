<template>
  <div
    ref="container"
    class="icon-container"
    @mouseenter.stop="toggleAnimation"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.96 95.03">
      <g id="Слой_2" data-name="Слой 2">
        <g id="Layer_4" data-name="Layer 4">
          <path
            ref="firstCircle"
            class="cls-1"
            d="M37.59,11.68A17.74,17.74,0,0,0,27.3,1.4,21.23,21.23,0,0,0,19.49,0a21.7,21.7,0,0,0-7.83,1.39A17.67,17.67,0,0,0,5.38,5.46a18.23,18.23,0,0,0-4,6.22A21.27,21.27,0,0,0,0,19.49,21.19,21.19,0,0,0,1.4,27.3a18.65,18.65,0,0,0,4,6.24,17.29,17.29,0,0,0,6.31,4.14,21.66,21.66,0,0,0,7.83,1.39,21.23,21.23,0,0,0,7.81-1.4,17.69,17.69,0,0,0,6.27-4.1,18.58,18.58,0,0,0,4-6.27A21.23,21.23,0,0,0,39,19.49,21.31,21.31,0,0,0,37.59,11.68ZM26.47,19.49a7,7,0,0,1-1.6,4.86c-1,1.09-2.78,1.64-5.38,1.64a6.09,6.09,0,0,1-4.69-1.73,6.48,6.48,0,0,1-1.72-4.77,6.37,6.37,0,0,1,1.7-4.7,6.25,6.25,0,0,1,4.71-1.71c2.44,0,4.23.56,5.32,1.66A6.43,6.43,0,0,1,26.47,19.49Z"
          />
          <circle  ref="secondCircle" class="cls-2" cx="70.58" cy="77.65" r="17.38" />
          <path

            class="cls-3"
            d="M80.06,27.94l-.73.77c-4.51,4.2-9.43,8.95-14.63,14.11-9.94,9.85-19.63,20.36-27.79,30.12h0C33,77.6,29.59,81.84,26.73,85.52l-.32.38A13.07,13.07,0,0,1,19,90.12,10.91,10.91,0,0,1,9.35,87a12.58,12.58,0,0,1-3.8-6.84,11.36,11.36,0,0,1,2.28-9.3l.09-.13c3.85-4.91,7.82-9.79,11.81-14.5S28,46.75,32.28,42.06C41.54,32,51.86,21.64,63,11.29a11,11,0,0,1,9.41-3.36,12.34,12.34,0,0,1,7.34,3.7,12.62,12.62,0,0,1,3.38,7.19A11,11,0,0,1,80.06,27.94Z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from "vue";
import anime from "animejs";

export default defineComponent({
  name: "SectionId_76",
  setup() {
    const svg = ref<HTMLElement>(null);
    const container = ref<HTMLElement>(null);
    const firstCircle = ref<HTMLElement>(null);
    const secondCircle = ref<HTMLElement>(null);

    const animation = computed(() => {
      return anime.timeline({ direction: 'alternate',}).add({
        targets: firstCircle.value,
        translateX: -15,
        translateY: -15,
        duration: 300,
        easing: 'easeInOutSine'
      }).add({
        targets: secondCircle.value,
        translateX: 15,
        translateY: 15,
        duration: 300,
        easing: 'easeInOutSine'
      }, 0);
    })

    onMounted(() => {
    })

    const toggleAnimation = () => {
      console.log('test')
      animation.value.play()
    }

    return {
      svg,
      container,
      firstCircle,
      secondCircle,
      toggleAnimation
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
  svg {
    overflow: visible;
    width: 70%;
    height: 70%;
  }
}
.cls-1 {
  fill: #5f73aa;
}
.cls-2 {
  fill: #f27f94;
}
.cls-3 {
  fill: #fd9;
}
</style>

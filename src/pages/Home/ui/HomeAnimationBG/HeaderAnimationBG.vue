<template>
  <div ref="layer" class="home-animation-bg">
    <svg
      id="shape-1"
      viewBox="0 0 819 449"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M204.456 436.628C370.956 439.418 433.536 445.177 600.036 447.967C881.976 452.688 895.736 16.1375 614.236 11.4075C447.726 8.62752 385.156 2.86752 218.656 0.0375184C-63.2844 -4.65248 -77.0744 431.918 204.456 436.628Z"
        fill="#FADDEA"
      />
    </svg>
    <svg
      id="shape-2"
      viewBox="0 0 888 474"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M240.565 473.037C421.045 462.207 489.286 463.037 669.766 452.157C975.355 433.797 952.516 -17.1525 647.355 1.14748C466.895 11.9775 398.655 11.1975 218.175 22.0375C-87.4345 40.3675 -64.6445 491.337 240.565 473.037Z"
        fill="#FCEEF4"
      />
    </svg>
    <svg
      id="shape-3"
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.1156 65.8975C28.6529 65.9389 24.2213 65.1523 20.0456 63.5775C16.0791 62.0799 12.4909 59.7275 9.53556 56.6875C6.66857 53.6883 4.42525 50.1499 2.93556 46.2775C-0.167648 37.8714 -0.167648 28.6336 2.93556 20.2275C4.4234 16.3537 6.68237 12.8223 9.57556 9.84748C12.5371 6.85332 16.1078 4.53085 20.0456 3.03748C24.2216 1.46359 28.653 0.676974 33.1156 0.717475C37.5563 0.676265 41.9655 1.46655 46.1156 3.04749C50.025 4.53455 53.5753 6.83248 56.533 9.79011C59.4906 12.7477 61.7885 16.298 63.2756 20.2075C66.3788 28.6136 66.3788 37.8514 63.2756 46.2575C61.7686 50.1588 59.4859 53.7138 56.5656 56.7075C53.6043 59.707 50.0387 62.042 46.1056 63.5575C41.9595 65.1411 37.5536 65.9347 33.1156 65.8975ZM33.1156 22.5575C29.7156 22.5575 27.1156 23.4875 25.2556 25.3975C24.2778 26.4467 23.5228 27.6834 23.0364 29.0326C22.55 30.3818 22.3422 31.8157 22.4256 33.2475C22.3452 34.6966 22.557 36.1472 23.0483 37.5129C23.5396 38.8786 24.3005 40.1316 25.2856 41.1975C27.1956 43.1975 29.6856 44.0775 33.1156 44.0775C37.4356 44.0775 40.4556 43.1575 42.1156 41.3575C43.9156 39.3575 44.7956 36.6975 44.7956 33.2475C44.7956 29.7975 43.8856 27.2475 42.0256 25.3275C40.1656 23.4075 37.1856 22.5575 33.1156 22.5575Z"
        fill="#FFC124"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "HomeAnimationBG",
  setup() {
    const layer = ref<HTMLElement>(null);
    onMounted(() => {
      window.addEventListener("mousemove", (e) => {
        const x = e.x - document.documentElement.offsetWidth / 2;
        const y = e.y - layer.value.offsetHeight / 2;
        layer.value.style.transform = `rotateY(${x * 0.01}deg) rotateX(${
          y * -0.01
        }deg)`;
      });
    });
    return {
      layer,
    };
  },
});
</script>

<style lang="scss" scoped>
.home-animation-bg {
  position: relative;
  transform-style: preserve-3d;
  perspective: 5000px;
  perspective-origin: center center;
  width: 100%;
  top: -27%;
  height: 500px;
  svg {
    width: 100%;
  }
  #shape-1 {
    display: block;
    width: 100%;

    position: absolute;
    left: 4%;
    right: 28%;
    transform: translateZ(-250px);
  }
  #shape-2 {
    display: block;
    width: 100%;
    position: absolute;
    left: -3%;
    top: 100px;
    transform: translateZ(-500px);
  }
  #shape-3 {
    display: block;
    position: absolute;
    top: 146%;
    left: 25%;
    width: 140px;
    height: 140px;
    transform: translateZ(-100px);
  }
}
</style>

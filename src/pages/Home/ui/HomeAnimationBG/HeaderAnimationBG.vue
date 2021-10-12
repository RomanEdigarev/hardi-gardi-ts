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
    <!--    <svg-->
    <!--      id="shape-3"-->
    <!--      viewBox="0 0 66 66"-->
    <!--      fill="none"-->
    <!--      xmlns="http://www.w3.org/2000/svg"-->
    <!--    >-->
    <!--      <path-->
    <!--        d="M33.1156 65.8975C28.6529 65.9389 24.2213 65.1523 20.0456 63.5775C16.0791 62.0799 12.4909 59.7275 9.53556 56.6875C6.66857 53.6883 4.42525 50.1499 2.93556 46.2775C-0.167648 37.8714 -0.167648 28.6336 2.93556 20.2275C4.4234 16.3537 6.68237 12.8223 9.57556 9.84748C12.5371 6.85332 16.1078 4.53085 20.0456 3.03748C24.2216 1.46359 28.653 0.676974 33.1156 0.717475C37.5563 0.676265 41.9655 1.46655 46.1156 3.04749C50.025 4.53455 53.5753 6.83248 56.533 9.79011C59.4906 12.7477 61.7885 16.298 63.2756 20.2075C66.3788 28.6136 66.3788 37.8514 63.2756 46.2575C61.7686 50.1588 59.4859 53.7138 56.5656 56.7075C53.6043 59.707 50.0387 62.042 46.1056 63.5575C41.9595 65.1411 37.5536 65.9347 33.1156 65.8975ZM33.1156 22.5575C29.7156 22.5575 27.1156 23.4875 25.2556 25.3975C24.2778 26.4467 23.5228 27.6834 23.0364 29.0326C22.55 30.3818 22.3422 31.8157 22.4256 33.2475C22.3452 34.6966 22.557 36.1472 23.0483 37.5129C23.5396 38.8786 24.3005 40.1316 25.2856 41.1975C27.1956 43.1975 29.6856 44.0775 33.1156 44.0775C37.4356 44.0775 40.4556 43.1575 42.1156 41.3575C43.9156 39.3575 44.7956 36.6975 44.7956 33.2475C44.7956 29.7975 43.8856 27.2475 42.0256 25.3275C40.1656 23.4075 37.1856 22.5575 33.1156 22.5575Z"-->
    <!--        fill="#FFC124"-->
    <!--      />-->
    <!--    </svg>-->
    <!--    <div-->
    <!--      ref="shapeForth"-->
    <!--      id="shape-4"-->
    <!--      :style="{-->
    <!--        maskImage: `url(${require('./assets/masks/a-mask.svg')})`,-->
    <!--      }"-->
    <!--      @click="toggleVideo"-->
    <!--    >-->
    <!--      <div ref="videoContainerShapeForth" class="video-container">-->
    <!--        <video-->
    <!--          :style="{-->
    <!--            maskImage: `url(${require('./assets/masks/main-mask.svg')})`,-->
    <!--          }"-->
    <!--          ref="videoShapeForth"-->
    <!--          src="./assets/video_1.mp4"-->
    <!--          autoplay-->
    <!--          muted-->
    <!--          loop-->
    <!--        ></video>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <svg-->
    <!--      id="shape-5"-->
    <!--      viewBox="0 0 75 81"-->
    <!--      fill="none"-->
    <!--      xmlns="http://www.w3.org/2000/svg"-->
    <!--    >-->
    <!--      <path-->
    <!--        d="M37.7454 80.2175C35.5311 80.2345 33.3632 79.5827 31.5254 78.3475C29.3015 76.7965 27.7697 74.4397 27.2554 71.7775V71.7175C26.5054 68.3575 25.8454 64.3875 25.2554 59.9275C24.9054 57.1575 24.6354 54.2875 24.4254 51.3675H11.8254C10.249 51.4279 8.67938 51.1299 7.23479 50.496C5.79019 49.862 4.50823 48.9086 3.4854 47.7075C1.74689 45.6911 0.785818 43.1199 0.775391 40.4575C0.784014 37.8512 1.68779 35.327 3.33539 33.3075C4.33835 32.074 5.61554 31.0917 7.0652 30.4389C8.51486 29.7861 10.0969 29.4809 11.6854 29.5475H24.0854C24.1854 26.6775 24.3654 23.8675 24.6154 21.1575C24.971 17.0565 25.6193 12.9861 26.5554 8.97755C27.0745 6.32797 28.6017 3.98331 30.8154 2.43755C32.6574 1.20327 34.8281 0.551699 37.0454 0.567543C40.0037 0.584726 42.8425 1.73742 44.9754 3.78754C46.3139 5.05352 47.2861 6.65718 47.7894 8.42946C48.2928 10.2017 48.3087 12.077 47.8354 13.8575V14.0275C47.1206 17.0614 46.6524 20.1482 46.4354 23.2575C46.2754 25.2575 46.1354 27.3875 46.0354 29.5475H63.1154C64.6893 29.4882 66.2562 29.7857 67.6987 30.4178C69.1413 31.0499 70.4222 32.0002 71.4454 33.1975C73.1846 35.2175 74.1456 37.792 74.1554 40.4575C74.1496 43.0626 73.2494 45.5867 71.6054 47.6076C70.6014 48.8425 69.3226 49.8256 67.8711 50.4785C66.4196 51.1313 64.8355 51.4358 63.2454 51.3675H46.3054C46.4654 53.4475 46.6554 55.4575 46.8754 57.3675C47.2161 60.5188 47.7572 63.6451 48.4954 66.7275V66.8975C48.9882 68.6846 48.9861 70.572 48.4894 72.358C47.9927 74.144 47.0201 75.7615 45.6754 77.0375C43.5363 79.0731 40.6982 80.2111 37.7454 80.2175Z"-->
    <!--        fill="#FFC124"-->
    <!--      />-->
    <!--    </svg>-->
    <!--    <svg-->
    <!--      id="shape-6"-->
    <!--      viewBox="0 0 95 110"-->
    <!--      fill="none"-->
    <!--      xmlns="http://www.w3.org/2000/svg"-->
    <!--    >-->
    <!--      <path-->
    <!--        d="M83.3554 109.608C80.7095 109.591 78.1512 108.658 76.1154 106.968C74.8753 105.957 73.8867 104.672 73.2273 103.215C72.5679 101.757 72.2558 100.166 72.3153 98.5675V53.2475H58.0254V98.6975C58.092 100.286 57.7868 101.868 57.134 103.318C56.4812 104.767 55.4989 106.045 54.2654 107.048C52.2481 108.698 49.7219 109.6 47.1153 109.6C44.5088 109.6 41.9826 108.698 39.9654 107.048C38.7312 106.045 37.7485 104.768 37.0956 103.318C36.4428 101.868 36.1379 100.286 36.2054 98.6975V53.2475H23.8054V56.2475C23.8054 57.7275 23.8054 59.3275 23.8754 60.9975C23.8754 62.8575 23.9454 65.0675 23.9454 67.5775C23.9454 69.7675 23.9454 72.1875 24.0754 74.7675L24.3454 82.8875C24.4354 85.5375 24.5654 88.0975 24.7354 90.5175C24.9054 92.9375 25.0453 95.2575 25.1453 97.2375C25.3053 98.7694 25.1511 100.318 24.692 101.788C24.2329 103.258 23.4786 104.619 22.4753 105.788C21.4985 106.905 20.3101 107.817 18.9788 108.472C17.6475 109.128 16.1996 109.513 14.7187 109.606C13.2377 109.699 11.753 109.498 10.3502 109.014C8.94737 108.53 7.65423 107.774 6.54536 106.788C5.50418 105.834 4.66167 104.684 4.06618 103.404C3.4707 102.123 3.13397 100.738 3.07535 99.3275V99.2375C2.98535 97.1476 2.85536 94.7876 2.68536 92.2375C2.51536 89.6875 2.36535 86.7275 2.27535 83.8475L2.00535 75.4675C1.91535 72.6675 1.86535 70.0375 1.86535 67.6475V61.0075C1.86535 58.2675 1.86536 55.6175 1.93536 53.1275C2.00536 50.6375 2.00535 48.2975 2.00535 46.3175V42.3175C1.95585 39.874 2.65362 37.4737 4.00535 35.4375C5.22535 33.6575 7.68536 31.5375 12.5454 31.5375H84.8753C87.0514 31.4564 89.1832 32.167 90.8753 33.5375C91.8283 34.3114 92.6432 35.2412 93.2853 36.2875L93.4854 36.6075L93.6354 36.9576C94.2101 38.3281 94.4994 39.8014 94.4854 41.2875V98.7175C94.5447 100.291 94.2472 101.858 93.6151 103.301C92.983 104.743 92.0327 106.024 90.8354 107.048C88.7285 108.768 86.0746 109.676 83.3554 109.608ZM13.1054 42.5575V43.9675L13.1854 42.5575H13.1054ZM83.7853 23.7475H82.7853C77.1653 23.3075 70.9254 22.9275 64.2354 22.6175C51.4654 22.0275 38.3954 21.9975 26.7754 22.5475C21.2254 22.8075 16.2654 23.1175 12.0154 23.4775H11.5554C8.87241 23.5298 6.24937 22.6813 4.10535 21.0675C2.83777 20.0843 1.82533 18.8106 1.15351 17.3538C0.481691 15.897 0.170209 14.3 0.245353 12.6975C0.250988 10.252 1.03948 7.8725 2.49535 5.90753C3.3907 4.68938 4.54064 3.68085 5.8652 2.95209C7.18975 2.22332 8.65715 1.7918 10.1654 1.68753H10.3554C16.0354 1.23753 21.7754 0.89753 27.4154 0.687531C33.0554 0.477531 38.9154 0.347534 44.7454 0.347534C57.2454 0.347534 70.5954 0.897529 84.4254 1.96753C86.0128 1.98371 87.5736 2.3776 88.9787 3.11664C90.3837 3.85567 91.5926 4.91861 92.5053 6.21753C93.9766 8.32536 94.6823 10.8731 94.5053 13.4375C94.3342 15.9177 93.3701 18.2772 91.7553 20.1675C90.7763 21.3234 89.5475 22.2418 88.1616 22.8533C86.7758 23.4648 85.2691 23.7535 83.7553 23.6975L83.7853 23.7475Z"-->
    <!--        fill="#5F73AA"-->
    <!--      />-->
    <!--    </svg>-->
    <!--    <svg-->
    <!--      id="shape-7"-->
    <!--      viewBox="0 0 34 46"-->
    <!--      fill="none"-->
    <!--      xmlns="http://www.w3.org/2000/svg"-->
    <!--    >-->
    <!--      <path-->
    <!--        d="M18.5198 23.1413L3.63848 35.3552C2.51536 36.2912 1.81341 37.3675 1.53263 38.5842C1.34544 39.7073 1.43904 40.7837 1.81341 41.8132C2.28138 42.8427 2.98333 43.7319 3.91926 44.4806C4.94879 45.1358 6.02511 45.4633 7.14823 45.4633C8.45854 45.4633 9.62845 44.9954 10.658 44.0594L31.1549 27.353C32.746 26.0427 33.4948 24.5452 33.4012 22.8605C33.4012 21.1759 32.6056 19.7252 31.0145 18.5084L9.39447 2.08282C8.27135 1.24048 7.14823 0.819307 6.02511 0.819307C4.90199 0.819307 3.82567 1.19368 2.79614 1.94243C1.86021 2.59758 1.15826 3.48672 0.690289 4.60984C0.315916 5.63936 0.222322 6.76248 0.409509 7.9792C0.690289 9.10232 1.43904 10.1318 2.65575 11.0678L18.5198 23.1413Z"-->
    <!--        fill="#FFC124"-->
    <!--      />-->
    <!--    </svg>-->

    <div
      ref="starShape"
      class="star-container"
      :style="{ maskImage: `url(${require('/public/images/masks/star.svg')})` }"
      @click="playStarAnimation"
    >
      {{ animationStatus }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import anime, { timeline } from "animejs";
import { useShapeAnimation } from "./animations";

export default defineComponent({
  name: "HomeAnimationBG",
  setup() {
    const layer = ref<HTMLElement>(null);
    const shapeForth = ref<HTMLElement>(null);
    const videoShapeForth = ref<HTMLElement>(null);
    const videoContainerShapeForth = ref<HTMLElement>(null);
    const starShape = ref<HTMLElement>(null);
    let shapeAnimation = null;
    let animation = computed(() => {
      return anime({
        autoplay: false,
        targets: starShape.value,
        width: {
          value: "*=2",
          duration: 300,
        },
        height: {
          value: "*=2",
          duration: 300,
        },
        easing: "linear",
      });
    });

    const animationStatus = computed(() => {
      debugger;
      return animation.value.progress;
    });

    onMounted(() => {
      window.addEventListener("mousemove", (e) => {
        const x = e.x - document.documentElement.offsetWidth / 2;
        const y = e.y - layer.value.offsetHeight / 2;
        layer.value.style.transform = `translateX(-50%) rotateY(${
          x * 0.01
        }deg) rotateX(${y * -0.01}deg)`;
      });

      shapeAnimation = useShapeAnimation(shapeForth.value);
      // shapeAnimation.play();
    });

    animation.value.reverse();
    const playStarAnimation = () => {
      animation.value.play();
      console.log(animationStatus.value);
    };

    return {
      layer,
      shapeForth,
      shapeAnimation,
      videoShapeForth,
      videoContainerShapeForth,
      starShape,
      playStarAnimation,
      animation,
      animationStatus,
    };
  },
});
</script>

<style lang="scss" scoped>
.star-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background-color: rebeccapurple;
  transform: translate(-50%, -50%);
  mask-size: 100%;
  mask-repeat: no-repeat;
  mask-position: center;
}

.home-animation-bg {
  position: relative;
  transform-style: preserve-3d;
  perspective: 3000px;
  perspective-origin: center center;
  width: 100%;
  min-width: 1600px;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: center center;
  height: 500px;
  mask-size: 100%;
  mask-repeat: no-repeat;
  mask-position: center;

  svg {
    width: 100%;
    display: block;
    position: absolute;
  }

  &__video-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 600px;
    background-color: red;
    mask-size: 150%;
    mask-repeat: no-repeat;
    mask-position: center;
    video {
      opacity: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    &:hover video {
      opacity: 1;
    }
  }
  #shape-1 {
    left: 4%;
    top: -38%;
    transform: translateZ(-250px);
  }
  #shape-2 {
    left: -6%;
    top: -38%;
    transform: translateZ(-500px);
    width: 116%;
  }
  #shape-3 {
    top: 118%;
    left: 25%;
    width: 10%;
    height: 140px;
    transform: translateZ(-100px);
  }
  #shape-4 {
    position: absolute;
    background-color: #5f73aa;
    width: 498px;
    height: 498px;
    top: -4%;
    left: 10%;
    transform: translateZ(100px);
    mask-size: 88%;
    mask-repeat: no-repeat;
    mask-position: center;
    transform-origin: bottom right;
    transition: mask-image 0.3s ease-in-out;
    .video-container {
      width: 100%;
      height: 100%;
      background-color: transparent;
    }
    video {
      position: relative;
      opacity: 0;
      width: 100%;
      height: 100%;
      transform: scale(3);
      object-fit: cover;
      transition: opacity 0.3s ease-in-out;
      mask-size: 78%;
      mask-repeat: no-repeat;
      mask-position: center;
    }
    &:hover video {
      opacity: 1;
    }
  }

  #shape-5 {
    width: 122px;
    height: auto;
    top: 18%;
    left: 45%;
    transform: translateZ(50px);
  }

  #shape-6 {
    width: 174px;
    height: auto;
    top: 90%;
    left: 69%;
    transform: translateZ(58px);
  }

  #shape-7 {
    width: 68px;
    height: auto;
    top: 90%;
    left: 56%;
    transform: translateZ(30px);
  }
}
</style>

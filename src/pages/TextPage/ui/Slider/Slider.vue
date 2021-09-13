<template>
  <div class="slider">
    <div class="slider__body">
      <Splide ref="slider" :options="options">
        <SplideSlide>
          <img class="slider__body__img" src="../../assets/01.jpg" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img class="slider__body__img" src="../../assets/02.jpg" alt="" />
        </SplideSlide>
      </Splide>
    </div>
    <div class="slider__footer">
      <SliderPanel
        :count="sliderLength"
        @next-slide="goToNextSlide"
        @prev-slide="goToPrevSlide"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { SliderPanel } from "@/features";

export default defineComponent({
  name: "Slider",
  components: {
    Splide,
    SplideSlide,
    SliderPanel,
  },
  setup() {
    const options = {
      type: "loop",
      perPage: 1,
      perMove: 1,
      arrows: false,
      gap: "1rem",
      pagination: false,
      height: "460px",
    };

    const slider = ref(null);
    let sliderLength = ref(2);

    const goToNextSlide = () => {
      slider.value.splide.go("+");
    };
    const goToPrevSlide = () => {
      slider.value.splide.go("-");
    };

    onMounted(() => {
      sliderLength.value = slider.value.length;
    });
    return {
      options,
      slider,
      sliderLength,
      goToNextSlide,
      goToPrevSlide,
    };
  },
});
</script>

<style lang="scss" scoped>
.slider {
  // *** Body *** //
  &__body {
    margin-bottom: 20px;
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 25px;
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    width: 267px;
    margin: 0 auto;
  }
  // *** Footer END *** //
}
</style>

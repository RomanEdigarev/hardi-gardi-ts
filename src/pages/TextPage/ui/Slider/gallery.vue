<template>
  <div class="text-page__body__slider">
    <div class="slider">
      <div class="slider__body">
        <Splide ref="slider" :options="options">
          <SplideSlide v-for="image in images">
            <img class="slider__body__img" :src="image.file['ORIGIN_SRC']" alt="" />
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
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { SliderPanel } from "@/features";

export default defineComponent({
  name: "gallery",
  components: {
    Splide,
    SplideSlide,
    SliderPanel,
  },
  props: {
    images: {
      type: Array
    }
  },
  setup() {
    const options = {
      type: "loop",
      perPage: 1,
      perMove: 1,
      arrows: false,
      gap: "1rem",
      pagination: false,
      height: "auto",
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

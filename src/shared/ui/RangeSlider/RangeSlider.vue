<template>
  <div class="range-slider">
    <input
      class="range-slider__input"
      v-model="arr[0]"
      type="text"
      placeholder="от"
    />
    <div class="range-slider__line"></div>
    <input
      class="range-slider__input"
      v-model="arr[1]"
      type="text"
      placeholder="до"
    />
    <div class="range-slider__slider-container">
      <vue-slider
        v-model="arr"
        :min="0"
        :max="1000"
        :tooltip="'none'"
        :process-style="{ backgroundColor: '#D23C50' }"
        :tooltip-style="{ backgroundColor: 'pink', borderColor: 'pink' }"
      >
        <template v-slot:dot="{ value, focus }">
          <div :class="['custom-dot', { focus }]"></div>
        </template>
      </vue-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default defineComponent({
  name: "RangeSlider",
  components: {
    VueSlider,
  },
  setup() {
    const arr = ref([10, 500]);
    return {
      arr,
    };
  },
});
</script>

<style lang="scss" scoped>
.range-slider {
  width: 236px;
  height: 50px;
  border: 1px solid #d9dce2;
  border-radius: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .vue-slider {
    box-sizing: initial;
  }

  .custom-dot {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: $clr-zeta;
    transition: all 0.3s;
    cursor: pointer;
  }

  &__slider-container {
    width: 80%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
  }

  &__input {
    width: 100%;
    height: 100%;
    padding: 20px;
    outline: none;
    border: none;
    background: transparent;
    font-weight: $bold;
    font-size: 13px;
    line-height: 16px;
    color: $clr-alpha-lambda;
  }

  &__line {
    width: 1px;
    height: 21px;
    background-color: $clr-alpha-beta;
  }
}
@media screen and (max-width: 768px) {
  .range-slider {
    width: 100%;
    max-width: 351px;
  }
}
</style>

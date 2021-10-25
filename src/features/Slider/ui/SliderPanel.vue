<template>
  <div class="panel">
    <div class="left">
      <BetaButton
        styling="beta-zeta-btn"
        @click="goToPrevSlide"
        :is-disabled="currentSlide === 0"
      >
        <SlideArrowIcon />
      </BetaButton>
    </div>
    <div class="dots">
      <button
        v-for="(item, index) in count"
        class="dot"
        :class="{ current: index === currentSlide }"
        @click="newCurrentSlide(index)"
      />
    </div>
    <div class="right">
      <BetaButton
        styling="beta-zeta-btn"
        @click="goToNextSlide"
        :is-disabled="currentSlide === count - 1"
      >
        <SlideArrowIcon />
      </BetaButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSlidePanel } from "../lib";
import { BetaButton } from "@/shared/ui/buttons";
import { SlideArrowIcon } from "@/shared/ui/icons";

export default defineComponent({
  name: "SliderPanel",
  components: {
    BetaButton,
    SlideArrowIcon,
  },
  emits: ["prev-slide", "next-slide", "set-current-slide"],
  props: {
    count: {
      type: Number,
      required: true,
      default: 4,
    },
  },
  setup(props) {
    const {
      currentSlide,
      setCurrentSlide,
      nextSlide,
      prevSlide,
    } = useSlidePanel(props.count);

    return {
      currentSlide,
      setCurrentSlide,
      nextSlide,
      prevSlide,
    };
  },
  methods: {
    goToNextSlide() {
      this.nextSlide();
      this.currentSlide++;

      this.$emit("next-slide", this.currentSlide);
    },
    goToPrevSlide() {
      this.prevSlide();
      this.$emit("prev-slide", this.currentSlide);
    },
    newCurrentSlide(index) {
      this.setCurrentSlide(index);
      this.$emit("set-current-slide", this.currentSlide);
    },
  },
});
</script>

<style scoped lang="scss">
.panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left,
.right {
  width: 52px;
  height: 52px;
}
.right {
  text-align: right;
  transform: scale(-1, 1);
}
.dots {
  display: flex;
  justify-content: space-between;
  flex: 0.5;
  align-items: center;
  text-align: center;
}

.dot {
  width: 12px;
  height: 12px;
  padding: 0;
  border-radius: 50%;
  border: 3px solid $clr-zeta;
  transition: background-color 0.3s ease-in-out;
}

.dot.current {
  background-color: $clr-zeta;
}
</style>

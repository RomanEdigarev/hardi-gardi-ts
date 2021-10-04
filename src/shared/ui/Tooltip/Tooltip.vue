<template>
  <div class="tooltip">
    <div class="tooltip__reference" @click="open">
      <slot name="reference"></slot>
    </div>

    <transition @enter="enterElement" @leave="leaveElement">
      <div v-if="isOpen" class="tooltip__container">
        <div class="tooltip__content" :style="translateX">
          <slot name="content" />
        </div>

        <div class="tooltip__arrow">
          <div class="triangle" />
          <div class="inner-triangle" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import anime from "animejs";

export default defineComponent({
  name: "Tooltip",
  props: {
    offset: {
      type: Number,
      default: () => 0,
    },
  },
  setup(props) {
    const isOpen = ref(false);
    const translateX = computed(() => {
      if (props.offset) {
        return `transform: translateY(100%) translateX(-${
          50 - +props.offset
        }%)`;
      } else {
        return `transform: translateY(100%) translateX(-50%)`;
      }
    });

    const open = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      open,
      translateX,
    };
  },
  methods: {
    enterElement(el, done) {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 200,
        easing: "linear",
        complete: done,
      });
    },
    leaveElement(el, done) {
      anime({
        targets: el,
        opacity: [1, 0],
        easing: "linear",
        duration: 200,
        complete: done,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  width: max-content;

  &__reference {
    cursor: pointer;
  }

  &__container {
  }

  &__content {
    padding: 24px;
    position: absolute;
    bottom: -10px;
    left: 50%;
    background-color: white;
    border: 1px solid #e3e4e9;
    border-radius: 16px;
    box-shadow: 0 12px 25px rgba(10, 26, 49, 0.12);
    transform: translateY(100%);
    z-index: 10;
  }

  &__arrow {
    position: absolute;
    left: 50%;
    bottom: -3px;
    transform: translateX(-8px);
    z-index: 11;
    width: 0;
    height: 0;
  }

  .triangle {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #e3e4e9;
  }

  .inner-triangle {
    position: absolute;
    top: 1px;
    left: 1px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid white;
  }
}
</style>

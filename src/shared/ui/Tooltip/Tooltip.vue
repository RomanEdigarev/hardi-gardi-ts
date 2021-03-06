<template>
  <div class="tooltip">
    <div class="tooltip__reference" v-on="events">
      <slot name="reference"></slot>
    </div>

    <transition @enter="enterElement" @leave="leaveElement">
      <div ref="tooltipContent" v-show="isOpen" class="tooltip__container">
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
import { ref, computed, defineComponent, onUpdated, watch } from "vue";
import anime from "animejs";

export default defineComponent({
  name: "Tooltip",
  props: {
    offset: {
      type: Number,
      default: () => 0,
    },
    trigger: {
      type: String || Array,
      default: "click",
    },
  },
  setup(props) {
    const isOpen = ref(false);
    const tooltipContent = ref<HTMLElement>(null);
    const events = computed(() => {
      let obj = {};
      if (typeof props.trigger === "string") {
        obj[props.trigger] = open;
      } else {
        (props.trigger as string[]).forEach((eventName) => {
          obj[eventName] = open;
        });
      }
      return obj;
    });
    const translateX = computed(() => {
      if (props.offset) {
        return `transform: translateY(100%) translateX(-${
          50 - +props.offset
        }%)`;
      } else {
        return `transform: translateY(100%) translateX(-50%)`;
      }
    });

    const documentListener = (e: Event) => {
      if (!(e.target as HTMLElement).closest(".tooltip")) {
        isOpen.value = !isOpen.value;
        document.removeEventListener("click", documentListener, false);
      }
    };
    watch(isOpen, () => {
      console.log("change open");
      if (isOpen.value) {
        tooltipContent.value.addEventListener("mouseleave", open);
      } else {
        tooltipContent.value.removeEventListener("mouseleave", open, false);
        document.removeEventListener("click", documentListener, false);
      }
    });

    const open = () => {
      isOpen.value = !isOpen.value;
      document.addEventListener("click", documentListener);
    };

    return {
      isOpen,
      open,
      translateX,
      tooltipContent,
      events,
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

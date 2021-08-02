<template>
  <button
    class="svg-btn"
    :style="`padding: ${size}%;`"
    :class="[styling, classObject]"
    :disabled="isPending || isDisabled"
  >
    <span v-if="isPending" class="spinner" />
    <span
      v-else
      class="svg-container"
      :style="`top: ${topOffset}px; left: ${leftOffset}px;`"
    >
      <ConfirmIcon v-if="isConfirm" />
      <slot v-else />
    </span>
  </button>
</template>

<script lang="ts">
import { ConfirmIcon } from "../../icons/index";
import {defineComponent} from "vue";

export default defineComponent({
  name: "BetaButton",
  components: { ConfirmIcon },
  data() {
    return {
      classObject: {
        active: this.isActive || this.isConfirm,
        confirm: this.isConfirm,
      },
    };
  },
  props: {
    styling: {
      type: String,
      required: true,
    },
    topOffset: {
      type: String,
      default: "0",
    },
    leftOffset: {
      type: String,
      default: "0",
    },
    size: {
      type: String,
    },
    isPending: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isConfirm: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped lang="scss">
// Main svg container
.svg-btn {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  transition: opacity, border, background-color 0.3s ease-in-out;

  &:disabled {
    opacity: 50%;
    cursor: default;
  }
}

.beta-alfa-btn,
.beta-beta-btn,
.beta-delta-btn {
  &:focus {
    box-shadow: 0 0 0 5px $clr-alpha-delta;
  }
}

.beta-alfa-btn,
.beta-delta-btn {
  .spinner:after {
    border-top-color: $clr-alpha-delta;
  }
}

.beta-beta-btn,
.beta-delta-btn {
  border-radius: 50%;
}

// This rectangle with arrow
.beta-alfa-btn {
  .svg-container {
    padding: 0;
    :deep svg {
      position: static;
      width: auto;
    }
  }

  border-radius: 16px;
  background-color: $clr-zeta;

  &:hover {
    background-color: $clr-chi;
  }
}

// This circle with plus
.beta-beta-btn {
  padding: 15%;
  border: 3px solid $clr-zeta;

  &:hover {
    border: 3px solid $clr-chi;
    :deep path {
      stroke: $clr-chi;
    }
  }

  .spinner:after {
    border-top-color: $clr-zeta;
  }
}

// This small actions
.beta-gamma-btn {
  opacity: 50%;

  &:hover,
  &:active {
    opacity: 100%;
  }

  &:focus {
    opacity: 50%;
  }
}

// This circle with actions
.beta-delta-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $clr-tau;

  &:hover {
    background-color: $clr-zeta;
    :deep path {
      stroke: $clr-tau;
    }
  }

  &:disabled {
    &:hover {
      background-color: $clr-tau;
    }
  }
}

// This slider button with background
.beta-epsilon-btn,
.beta-zeta-btn {
  background-color: $clr-alpha-delta;
  border-radius: 17px;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;

  :deep .svg-container {
    & > svg {
      left: -5%;
    }
  }

  &:hover {
    background-color: $clr-psi;
  }

  &:focus {
    box-shadow: 0 0 0 3px $clr-zeta;
  }

  &:disabled {
    opacity: 50%;
    &:hover {
      background-color: $clr-alpha-delta;
    }
  }
}

// This slider button transparent
.beta-zeta-btn {
  background-color: transparent;
  padding: 6px;

  &:hover {
    background-color: transparent;
    :deep path {
      stroke: $clr-chi;
    }
  }
}

// This style when button active
.active,
.active:active {
  background-color: $clr-zeta;
  :deep path {
    stroke: $clr-tau;
  }

  &:hover {
    background-color: $clr-tau;
    :deep path {
      stroke: $clr-zeta;
    }
  }
}

// This style for confirm status button
.confirm {
  .svg-container {
    padding-bottom: 0;

    & > svg {
      position: static;
      width: auto;
      height: auto;
    }
  }
  &:hover {
    background-color: $clr-chi;
    :deep path {
      stroke: $clr-tau;
    }
  }
}
</style>

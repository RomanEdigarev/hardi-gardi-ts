<template>
  <button class="btn" :class="[styling]" :disabled="isPending">
    <span v-if="isPending" class="spinner" />
    <span v-else-if="text">{{ text }}</span>
    <slot v-else />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AlfaButton",
  props: {
    styling: {
      type: String,
      default: () => "primary",
    },
    isPending: {
      type: Boolean,
      default: () => false,
    },
    text: {
      type: String,
      default: () => "",
    },
  },
});
</script>

<style scoped lang="scss">
.btn {
  width: 100%;
  padding: 20px 0;
  position: relative;
  border-radius: 16px;
  transition: background-color 0.3s ease-in-out;
  span {
    display: inline-block;
    font-family: Montserrat;
    font-weight: $medium;
    font-size: 12px;
  }

  &:focus {
    outline: none;
  }
}

.primary {
  color: $clr-tau;
  background-color: $clr-zeta;
  border: 3px solid $clr-zeta;

  &:hover,
  &:active {
    background-color: $clr-chi;
  }

  &:focus {
    box-shadow: 0 0 0 5px $clr-alpha-delta;
  }

  &:active {
    color: $clr-psi;
  }

  &:disabled {
    cursor: default;
    opacity: 50%;
    &:hover {
      background-color: $clr-zeta;
    }
  }

  .spinner:after {
    border-top-color: $clr-alpha-delta;
  }
}

.secondary {
  color: $clr-zeta;
  background-color: $clr-tau;
  border: 3px solid $clr-psi;

  &:hover {
    background-color: $clr-alpha-delta;
  }

  &:focus {
    box-shadow: 0 0 0 5px $clr-alpha-delta;
  }

  &:active {
    background-color: $clr-psi;
  }

  &:disabled {
    cursor: default;
    opacity: 50%;
    &:hover {
      background-color: $clr-tau;
    }
  }

  .spinner:after {
    border-top-color: $clr-zeta;
  }
}

.onlyText {
  font-weight: $light;
  color: $clr-zeta;
  width: 111px;
  height: 62px;
  background-color: transparent;

  &:hover,
  &:focus {
    color: $clr-chi;
  }

  &:focus {
    background-color: $clr-alpha-delta;
  }

  &:disabled {
    opacity: 50%;
    cursor: default;
    &:hover {
      color: $clr-zeta;
    }
  }

  .spinner:after {
    border-top-color: $clr-zeta;
  }
}
@media screen and (max-width: 768px) {
  .btn {
    padding: 13px 0;
    font-size: 15px;
  }
}
</style>

<template>
  <BetaButton
    class="counter-btn"
    :class="{ isPlus }"
    v-bind="$props"
    styling="beta-delta-btn"
    size="28"
    :top-offset="!isPlus && '7'"
  >
    <!--    <PlusIcon  />-->
    <svg
      v-if="isPlus"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8C16 8.35372 15.8644 8.69565 15.6108 8.94326C15.3631 9.19676 15.021 9.33825 14.6672 9.33825H9.33579V14.6677C9.33579 15.0214 9.19425 15.3633 8.94066 15.6109C8.69296 15.8585 8.3568 16 8.00295 16C7.6491 16 7.30704 15.8585 7.05934 15.6109C6.80575 15.3633 6.66421 15.0214 6.66421 14.6677V9.33825H1.33284C0.97899 9.33825 0.636933 9.19676 0.389237 8.94326C0.141541 8.69565 0 8.35372 0 8C0 7.64628 0.141541 7.31024 0.389237 7.05674C0.636933 6.80914 0.97899 6.66765 1.33284 6.66765H6.66421V1.33825C6.66421 0.984525 6.80575 0.642594 7.05934 0.394989C7.30704 0.141489 7.6491 0 8.00295 0C8.3568 0 8.69296 0.141489 8.94066 0.394989C9.19425 0.642594 9.33579 0.984525 9.33579 1.33825V6.66765H14.6672C15.021 6.66765 15.3631 6.80914 15.6108 7.05674C15.8644 7.31024 16 7.64628 16 8Z"
        fill="#606060"
      />
    </svg>
    <svg
      v-else
      width="16"
      height="4"
      viewBox="0 0 16 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.999 1.91673C15.999 2.27045 15.8634 2.61238 15.6098 2.85999C15.3621 3.11349 15.02 3.25497 14.6662 3.25497H9.33481H6.66323H1.33187C0.978013 3.25497 0.635957 3.11349 0.38826 2.85999C0.140564 2.61238 -0.000976562 2.27045 -0.000976562 1.91673C-0.000976562 1.56301 0.140564 1.22697 0.38826 0.973471C0.635957 0.725866 0.978013 0.584377 1.33187 0.584377H6.66323H9.33481H14.6662C15.02 0.584377 15.3621 0.725866 15.6098 0.973471C15.8634 1.22697 15.999 1.56301 15.999 1.91673Z"
        fill="#606060"
      />
    </svg>

    <!--    <MinusIcon v-else />-->
  </BetaButton>
</template>

<script lang="ts">
import BetaButton from "../BetaButton.vue";
import { PlusIcon, MinusIcon } from "../../../icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CounterButton",
  components: {
    BetaButton,
    PlusIcon,
    MinusIcon,
  },
  props: {
    isPlus: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.counter-btn {
  background-color: white;
  border-radius: 17px;
  border: 1px solid $clr-alpha-iota;

  :deep svg {
    height: auto;
  }

  &:hover {
    background-color: $clr-kappa;
    :deep path {
      stroke: none;
    }
  }
}

.isPlus {
  :deep path {
    stroke: $clr-phi;
  }
  &:hover {
    background-color: $clr-kappa;
    :deep path {
      stroke: $clr-phi;
    }
  }
}
</style>

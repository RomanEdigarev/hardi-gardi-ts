<template>
  <BetaButton
    class="counter-btn"
    :class="{ isPlus }"
    v-bind="$props"
    styling="beta-delta-btn"
    size="28"
    :top-offset="!isPlus && '7'"
  >
    <PlusIcon v-if="isPlus" />
    <MinusIcon v-else />
  </BetaButton>
</template>

<script lang="ts">
import BetaButton from "../BetaButton";
import { PlusIcon, MinusIcon } from "../../../icons";
import {defineComponent} from "vue";

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

<template>
  <BetaButton
    v-bind="$props"
    styling="beta-delta-btn"
    :size="isConfirm ? '15' : '20'"
    :top-offset="!isConfirm && '-1'"
    :left-offset="!isConfirm && '3'"
  >
    <ShopIcon />
  </BetaButton>
</template>

<script lang="ts">
import { ShopIcon } from "../../../icons";
import BetaButton from "../BetaButton.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "ShopButton",
  components: {
    BetaButton,
    ShopIcon,
  },
  props: {
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

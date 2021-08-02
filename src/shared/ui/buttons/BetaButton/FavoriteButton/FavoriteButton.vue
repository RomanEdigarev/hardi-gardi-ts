<template>
  <BetaButton v-bind="$props" styling="beta-delta-btn" size="20" top-offset="3">
    <FavoriteIcon />
  </BetaButton>
</template>

<script lang="ts">
import { FavoriteIcon } from "../../../icons";
import BetaButton from "../BetaButton.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "FavoriteButton",
  components: {
    BetaButton,
    FavoriteIcon,
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
    isActive: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

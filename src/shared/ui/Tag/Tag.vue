<template>
  <div class="tag" :class="{ active: active }">
    <span class="tag__text">
      {{ text }}
    </span>
    <div class="tag__delete-btn">
      <BetaButton @click.stop="$emit('delete-tag')" styling="beta-gamma-btn">
        <CloseIcon />
      </BetaButton>
    </div>
  </div>
</template>

<script lang="ts">
import { CloseIcon } from "../icons";
import { defineComponent } from "vue";
import { BetaButton } from "@/shared/ui/buttons";

export default defineComponent({
  name: "Tag",
  emits: ["delete-tag"],
  components: {
    BetaButton,
    CloseIcon,
  },
  props: {
    text: {
      type: String,
      required: true,
      default: "tag-text",
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped lang="scss">
.tag {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 100%;
  padding: 10px 16px;
  text-align: center;
  background-color: transparent;
  transition: background-color, color 0.3s ease-in-out;
  color: $clr-phi;
  border: 1px solid $clr-upsilon;
  border-radius: 15px;
  cursor: pointer;

  &__text {
    display: block;
    white-space: nowrap;
    width: 100%;
    margin-right: 15px;
    font-size: 13px;
  }

  &__delete-btn {
    position: absolute;
    right: 6px;
    width: 100%;
    height: 100%;
    max-width: 18px;
    max-height: 18px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    color: $clr-tau;
    border-color: $clr-zeta;
    background-color: $clr-zeta;

    .tag__delete-btn {
      opacity: 1;
    }
  }
}
.tag.active {
  color: $clr-tau;
  border-color: $clr-zeta;
  background-color: $clr-zeta;
  .tag__delete-btn {
    opacity: 1;
  }
}
</style>

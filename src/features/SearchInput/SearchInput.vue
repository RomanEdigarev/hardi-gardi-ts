<template>
  <div class="search-input">
    <VInput placeholder="Поиск по товарам..." name="search"/>
    <div class="search-input__btn-container">
      <BetaButton styling="beta-alfa-btn" :is-pending="isLoading" @click="$emit('search')">
        <ArrowIcon />
      </BetaButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BetaButton } from "@/shared/ui/buttons";
import { ArrowIcon } from "@/shared/ui/icons";
import { VInput } from "@/shared/ui/inputs";

export default defineComponent({
  name: "SearchInput",
  components: {
    VInput,
    BetaButton,
    ArrowIcon,
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.search-input {
  position: relative;
  height: 60px;
  .input {
    padding: 16px 30px;
  }

  &__btn-container {
    width: 64px;
    height: 48px;
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
  }

     :deep .close-btn {
      width: 30px;
      right: 86px
    }

}
</style>

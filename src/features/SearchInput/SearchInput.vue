<template>
  <div class="search-input">
    <VInput placeholder="Поиск" />
    <div class="search-input__btn-container">
      <BetaButton styling="beta-alfa-btn" :is-pending="false">
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
});
</script>

<style lang="scss">
.search-input {
  position: relative;
  .input {
    padding: 16px 30px;
  }

  &__btn-container {
    width: 64px;
    height: 48px;
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
  }
}
</style>

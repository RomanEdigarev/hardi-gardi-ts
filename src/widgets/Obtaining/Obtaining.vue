<template>
  <div class="obtaining">
    <div class="obtaining__header">
      <div class="obtaining__header__search-icon">
        <SearchIcon />
      </div>
      <input
        class="obtaining__header__input"
        type="text"
        placeholder="Санкт-Петербург"
      />
      <div class="obtaining__header__clear-btn">
        <CloseIcon />
      </div>
    </div>
    <div class="obtaining__body">
      <div class="obtaining__body__toggle">
        <ToggleMenu :items="items" />
      </div>
      <div class="obtaining__body__content">
        <div class="obtaining__body__content__item">
          <Self />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SearchIcon, CloseIcon } from "@/shared/ui/icons";
import { Self } from "./ui";
import { ToggleMenu } from "@/shared/ui";

export default defineComponent({
  name: "Obtaining",
  components: { SearchIcon, CloseIcon, Self, ToggleMenu },
  setup() {
    const items = ["Самовывоз", "Курьер", "Почта России"];

    return {
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
.obtaining {
  color: $clr-phi;
  // *** Header *** //
  &__header {
    margin-bottom: 42px;
    position: relative;
    &__input {
      width: 100%;
      outline: none;
      border: 1px solid $clr-upsilon;
      box-sizing: border-box;
      border-radius: 16px;
      padding: 22px 64px;
      color: $clr-phi;
      font-size: 16px;
      line-height: 1.75;
      &::placeholder {
        color: $clr-phi;
        opacity: 0.4;
      }
    }
    &__search-icon {
      width: 21px;
      height: 21px;
      position: absolute;
      top: 50%;
      left: 26px;
      transform: translateY(-50%);
    }
    &__input:focus ~ &__clear-btn {
      opacity: 1;
    }
    &__clear-btn {
      width: 24px;
      height: 24px;
      position: absolute;
      right: 26px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    &__content {
    }
  }
  // *** Body END *** //
}
</style>

<style lang="scss">
.obtaining {
  &__header__search-icon {
    svg > g > path {
      stroke: $clr-eta;
    }
  }
}
</style>

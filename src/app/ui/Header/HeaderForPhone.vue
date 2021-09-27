<template>
  <div class="header-for-phone">
    <div class="header-for-phone__header">
      <div class="header-for-phone__header__left">
        <Location city="Санкт-Петербург" />
      </div>
      <div class="header-for-phone__header__right">
        <CabinetTitle />
      </div>
    </div>
    <div class="header-for-phone__body">
      <div class="header-for-phone__body__logo">
        <Logo />
      </div>
      <div class="header-for-phone__body__ui">
        <CabinetLinks @openSearchModalPhone="$emit('openSearchModalPhone')" />
      </div>
      <button
        class="header-for-phone__body__burger-btn"
        @click="$emit('open-burger')"
      >
        <img src="./assets/burger.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Location } from "@/widgets";
import Logo from "@/app/ui/Header/assets/Logo.vue";
import { CabinetLinks, CabinetTitle } from "@/widgets/Cabinet/ui";

export default defineComponent({
  name: "HeaderForPhone",
  components: { Location, CabinetTitle, Logo, CabinetLinks },
});
</script>

<style lang="scss" scoped>
.header-for-phone {
  width: 100%;
  height: 107px;
  background-color: $clr-tau;

  // *** Header *** //
  &__header {
    padding: 13px 18px;
    display: flex;
    justify-content: space-between;
    background: #f5f6f8;
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    display: flex;
    justify-content: space-between;
    padding: 10px 18px;
    align-items: center;
    &__ui {
      margin-left: 38px;
    }
    &__logo {
      width: 70px;
    }
    &__burger-btn {
      width: 28px;
      img {
        width: 100%;
      }
    }
  }
  // *** Body END *** //
}
</style>

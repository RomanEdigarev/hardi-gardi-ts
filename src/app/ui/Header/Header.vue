<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__container">
        <div class="header__logo">
          <Logo />
        </div>
        <div class="header__navigation"><Navigation /></div>
        <div class="header__phone">+7 921 961 14 41</div>
        <div class="header__cabinet"><Cabinet /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Logo from "./assets/Logo.vue";
import {Cabinet} from "@/features";
import {Navigation} from "@/widgets"

export default defineComponent({
  name: "Header",
  components: {
    Logo,
    Navigation,
    Cabinet,
  },
});
</script>

<style lang="scss" scoped>

.header {
  &__wrapper {
    width: 100%;
    padding: 0 19vw;
    height: 100px;
    background-color: $clr-tau;
  }

  &__container {
    width: 100%;
    max-width: 1184px;
    height: 100%;
    padding: 21px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    max-width: 90px;
    :deep svg {
      width: 100%;
      height: 100%;
    }
  }

  &__navigation {
    flex: 0.7;
  }

  &__cabinet {
    height: 100%;
  }

  &__phone {
    font-size: 24px;
    font-weight: $semi-bold;
    color: $clr-zeta;
  }
}
</style>

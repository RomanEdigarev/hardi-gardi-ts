<template>
  <div class="sign-in">
    <div class="sign-in__header">
      <div class="sign-in__header__title">
        <PageTitle text="Вход" />
      </div>
    </div>
    <div class="sign-in__body">
      <Login />
    </div>
    <div class="sign-in__bg">
      <img src="./assets/bg.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Login } from "./ui";
import { PageTitle } from "@/shared/ui";

export default defineComponent({
  name: "SignIn",
  components: {
    Login,
    PageTitle,
  },
});
</script>

<style lang="scss" scoped>
.sign-in {
  margin-top: 176px;
  margin-left: 613px;

  // *** Header *** //
  &__header {
    margin-bottom: 48px;
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
  }
  // *** Body END *** //

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>

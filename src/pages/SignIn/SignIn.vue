<template>
  <div class="sign-in">
    <div class="sign-in__header">
      <div class="sign-in__header__title">
        <PageTitle text="Восстановление пароля" />
      </div>
    </div>
    <div class="sign-in__body">
      <!--      <Login />-->
      <!--      <Registration />-->
      <NewPassword />
    </div>
    <div class="sign-in__bg">
      <img src="./assets/bg.svg" alt="" />
    </div>
  </div>
  <div class="sign-in__modal-container">
    <RecoveryPassModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Login, NewPassword, RecoveryPassModal, Registration } from "./ui";
import { PageTitle } from "@/shared/ui";

export default defineComponent({
  name: "SignIn",
  components: {
    Login,
    PageTitle,
    Registration,
    NewPassword,
    RecoveryPassModal,
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
    z-index: -2;
  }

  &__modal-container {
    position: absolute;
    left: 0;
    opacity: 0;
    display: none;
  }
}

@media screen and (max-width: 1366px) {
  .sign-in {
    &__bg {
      left: -17%;
    }
  }
}
</style>

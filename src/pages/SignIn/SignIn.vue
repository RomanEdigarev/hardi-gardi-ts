<template>
  <div class="sign-in">
    <div class="sign-in__header">
      <div class="sign-in__header__title">
        <PageTitle :text="title" />
      </div>
    </div>
    <div class="sign-in__body">
      <span v-if="error">{{ error }}</span>
      <component :is="step"></component>
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
import { computed, defineComponent, onMounted, watch, watchEffect } from "vue";
import { Login, NewPassword, RecoveryPassModal, Registration } from "./ui";
import { PageTitle } from "@/shared/ui";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "SignIn",
  components: {
    Login,
    PageTitle,
    Registration,
    NewPassword,
    RecoveryPassModal,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const error = computed(() => store.getters["user/getUserError"]);
    const isAuth = computed(() => store.getters["user/getUserAuthInfo"]);
    watchEffect(() => {
      if (isAuth.value.isAuth === true) {
        router.push("/personal");
      }
    });
    const titles = {
      login: "Войти",
      registration: "Регистрация",
      "new-password": "Восстановление пароля",
    };
    const route = useRoute();
    const step = computed(() => route.params.step);
    const title = computed(() => {
      return titles[step.value as string];
    });

    return {
      step,
      title,
      error,
    };
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

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .sign-in {
    margin-top: 95px;
    margin-left: 399px;
    &__bg {
      left: -16%;
      top: 1%;
      width: 500px;
      img {
        width: 100%;
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .sign-in {
    margin: 0;
    margin-top: 110px;
    &__bg {
      left: 0%;
      top: -4%;
      width: 395px;
    }
  }
}
</style>

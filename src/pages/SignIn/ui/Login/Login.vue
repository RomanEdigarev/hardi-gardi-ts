<template>
  <div class="login">
    <div class="login__body">
      <div class="login__body__inputs">
        <div class="login__body__inputs__item">
          <VInput
            type="email"
            placeholder="Email"
            label-text="Email"
            name="email"
            :validation="isEmail"
          />
        </div>
        <div class="login__body__inputs__item">
          <VInput
            type="password"
            placeholder="Пароль"
            label-text="Пароль"
            name="password"
            :validation="isPassword"
          />
        </div>
      </div>

      <div class="login__body__status">
        <div class="login__body__status__checkbox">
          <Checkbox
            id="remember"
            label-text="Запомнить меня"
            v-model="isRemember"
          />
        </div>
        <div
          class="login__body__status__link alfa-link"
          @click="$router.push('/sign-in/new-password')"
        >
          Забыли пароль?
        </div>
      </div>

      <div class="login__body__btns">
        <div class="login__body__btns__item">
          <AlfaButton text="Войти" @click="onSubmit" />
        </div>
        <div class="login__body__btns__item">
          <AlfaButton
            text="Регистрация"
            styling="secondary"
            @click="$router.push('/sign-in/registration')"
          />
        </div>
      </div>
    </div>

    <div class="login__footer">
      <div class="login__footer__title">
        <div class="login__footer__title__line"></div>
        <div class="login__footer__title__text">или войти через</div>
        <div class="login__footer__title__line"></div>
      </div>
      <div class="login__footer__social">
        <div class="login__footer__social__item">
          <img src="./assets/google.svg" alt="" />
        </div>
        <div class="login__footer__social__item">
          <img src="./assets/vk.svg" alt="" />
        </div>
        <div class="login__footer__social__item">
          <img src="./assets/facebook.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Checkbox, VInput } from "@/shared/ui/Inputs";
import { AlfaButton } from "@/shared/ui/buttons";
import * as yup from "yup";
import { useForm } from "vee-validate";
import { useStore } from "@/services/vuex";
import { initShop } from "@/entities/Shop/lib";

export default defineComponent({
  name: "Login",
  components: { VInput, Checkbox, AlfaButton },
  setup() {
    const store = useStore();
    const isEmail = yup
      .string()
      .email("Неверный формат")
      .required("Обязательное поле");

    const isPassword = yup
      .string()
      .required("Обязательное поле")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Восемь символов, заглавная буква, строчная буква, цифра"
      );
    const isRemember = ref(false);

    const { handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (values) => {
      const userData = {
        email: values.email,
        password: values.password,
        remember: isRemember.value,
      };
      await store.dispatch("user/fetchLoginUser", userData);
      await initShop(store);
    });

    return {
      isEmail,
      isPassword,
      isRemember,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  max-width: 578px;
  color: $clr-phi;
  // *** Body *** //
  &__body {
    margin-bottom: 52px;
    &__inputs {
      margin-bottom: 24px;
      &__item {
        width: 100%;
        margin-bottom: 38px;
      }
    }
    &__status {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 34px;
    }
    &__btns {
      display: flex;
      justify-content: space-between;
      &__item {
        width: 282px;
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    &__title {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      &__line {
        width: 100%;
        height: 1px;
        background-color: $clr-upsilon;
      }
      &__text {
        flex-shrink: 0;
        font-size: 16px;
        line-height: 1.75;
        margin: 0 48px;
      }
    }
    &__social {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 222px;
      &__item {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid $clr-upsilon;
        img {
          object-fit: contain;
        }
      }
    }
  }
  // *** Footer END *** //
}

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .login {
    max-width: 345px;
    &__body {
      &__btns {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 18px;
        &__item {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .login {
    &__body {
      &__inputs {
        &__item {
          margin-bottom: 18px;
        }
      }
      &__btns {
        flex-direction: column;
        &__item {
          width: 100%;
        }
        div:first-child {
          margin-bottom: 18px;
        }
      }
    }
  }
}
</style>

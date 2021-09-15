<template>
  <div class="registration">
    <div class="registration__body">
      <div class="registration__body__inputs">
        <div class="registration__body__inputs__item">
          <VInput
            type="text"
            placeholder="Имя"
            label-text="Имя"
            name="first-name"
            :validation="isFirstName"
          />
        </div>
        <div class="registration__body__inputs__item">
          <VInput
            type="email"
            placeholder="Email"
            label-text="Email"
            name="email"
            :validation="isEmail"
          />
        </div>
      </div>
      <div class="registration__body__inputs double">
        <div class="registration__body__inputs__item">
          <VInput
            type="password"
            placeholder="Пароль"
            label-text="Пароль"
            name="password"
            :validation="isPassword"
          />
        </div>
        <div class="registration__body__inputs__item">
          <VInput
            type="password"
            placeholder="Подтверждение пароля"
            label-text="Подтверждение пароля"
            name="confirm-password"
            :validation="isPassword"
          />
        </div>
      </div>

      <div class="registration__body__btns">
        <div class="registration__body__btns__item">
          <AlfaButton text="Зарегистрироваться" />
        </div>
        <div class="registration__body__btns__item">
          Есть аккаунт?
          <span class="alfa-link">Войти</span>
        </div>
      </div>
    </div>

    <div class="registration__footer">
      <div class="registration__footer__text">
        Кликнув на "Зарегистрироваться", Вы соглашаетесь с
        <span>политикой безопасности</span> и <span>конфиденциальности</span>.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Checkbox, VInput } from "@/shared/ui/inputs";
import { AlfaButton } from "@/shared/ui/buttons";
import * as yup from "yup";

export default defineComponent({
  name: "Registration",
  components: { VInput, Checkbox, AlfaButton },
  setup() {
    const isFirstName = yup.string().required("Обязательное поле");
    const isEmail = yup
      .string()
      .required("Обязательное поле")
      .email("Неверный формат");

    const isPassword = yup.string().required("Обязательное поле");

    return {
      isFirstName,
      isPassword,
      isEmail,
    };
  },
});
</script>

<style lang="scss" scoped>
.registration {
  width: 100%;
  max-width: 578px;
  color: $clr-phi;
  // *** Body *** //
  &__body {
    margin-bottom: 28px;
    &__inputs {
      margin-bottom: 24px;
      &__item {
        width: 100%;
        margin-bottom: 38px;
      }
    }
    &__btns {
      display: flex;
      justify-content: space-between;
      &__item {
        width: 282px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        span {
          display: inline-block;
          margin-left: 8px;
          line-height: 1.75;
        }
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    &__text {
      font-size: 13px;
      line-height: 1.38;
      span {
        font-weight: $semi-bold;
        cursor: pointer;
      }
    }
  }
  // *** Footer END *** //

  // *** Other *** //
  .double {
    display: flex;
    justify-content: space-between;
    gap: 18px;
  }
  // *** Other END *** //
}
</style>

<template>
  <div class="data">
    <div class="data__body">
      <div class="data__body__item">
        <VInput
          name="email"
          placeholder="Email"
          id="email"
          type="email"
          :validation="isEmail"
        />
      </div>
      <div class="grid">
        <div class="data__body__item">
          <VInput
            name="firstName"
            placeholder="Имя"
            id="firstName"
            type="text"
            :validation="isFirstName"
          />
        </div>
        <div class="data__body__item">
          <VInput
            name="lastName"
            placeholder="Фамилия"
            id="lastName"
            type="text"
            :validation="isFirstName"
          />
        </div>
        <div class="data__body__item">
          <VInput
            name="phone"
            placeholder="Телефон"
            id="phone"
            type="phone"
            :validation="isPhone"
          />
        </div>
        <div class="data__body__item">
          <VInput
            name="email"
            placeholder="Email"
            id="email"
            type="email"
            :validation="isEmail"
          />
        </div>
      </div>
      <div class="grid change-pass">
        <div class="data__body__item">
          <VInput
            name="newPassword"
            placeholder="Новый пароль"
            id="newPassword"
            type="password"
            :validation="isPassword"
          />
        </div>
        <div class="data__body__item">
          <VInput
            name="confirmPassword"
            placeholder="Подтверждение пароля"
            id="confirmPassword"
            type="password"
            :validation="isPassword"
          />
        </div>
        <div class="change-pass__btn"></div>
      </div>
    </div>
    <div class="data__footer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VInput } from "@/shared/ui/inputs";
import * as yup from "yup";

export default defineComponent({
  name: "data",
  components: { VInput },
  setup() {
    const isFirstName = yup.string().required("Обязательное поле");
    const isEmail = yup
      .string()
      .required("Обязательное поле")
      .email("Неверный формат");

    const isPassword = yup.string().required("Обязательное поле");

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const isPhone = yup
      .string()
      .required("Обязательное поле")
      .matches(phoneRegExp, "Неверный формат телефона");

    return {
      isEmail,
      isFirstName,
      isPassword,
      isPhone,
    };
  },
});
</script>

<style lang="scss" scoped>
.data {
  width: 100%;
  max-width: 726px;
  // *** Body *** //
  &__body {
    &__items {
    }
    &__item {
      margin-bottom: 28px;
    }
  }

  // *** Body END *** //

  // *** Footer *** //
  &__ {
  }
  // *** Footer END *** //

  // *** Other *** //
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  }
  // *** Other END *** //
}
</style>

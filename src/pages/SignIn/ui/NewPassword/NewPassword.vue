<template>
  <div class="new-password">
    <div class="new-password__body">
      <div class="new-password__body__inputs">
        <div class="new-password__body__inputs__item">
          <VInput
            type="password"
            placeholder="Новый пароль"
            label-text="Новый пароль"
            name="new-password"
            :validation="isPassword"
          />
        </div>
        <div class="new-password__body__inputs__item">
          <VInput
            type="password"
            placeholder="Подтверждение пароля"
            label-text="Подтверждение пароля"
            name="confirm-password"
            :validation="isPassword"
          />
        </div>
      </div>

      <div class="new-password__body__btns">
        <div
          class="new-password__body__btns__item"
          v-toggle-modal="{
            modal: 'recovery-pass',
            name: 'recoveryPass',
          }"
        >
          <AlfaButton text="Сохранить" />
        </div>
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
  name: "new-password",
  components: { VInput, Checkbox, AlfaButton },
  setup() {
    const isPassword = yup.string().required("Обязательное поле");

    return {
      isPassword,
    };
  },
});
</script>

<style lang="scss" scoped>
.new-password {
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
    &__btns {
      display: flex;
      justify-content: space-between;
      &__item {
        width: 282px;
      }
    }
  }
  // *** Body END *** //
}
@media screen and (min-width: 738px) and (max-width: 1364px), (-webkit-min-device-pixel-ratio: 3) {
  .new-password {
  }
}
</style>

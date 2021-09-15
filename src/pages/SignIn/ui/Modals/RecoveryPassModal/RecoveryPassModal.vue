<template>
  <div class="recovery-pass">
    <div class="recovery-pass__header">
      <div class="recovery-pass__header__title">Восстановление пароля</div>
    </div>
    <div class="recovery-pass__body">
      <div v-if="isSuccess" class="recovery-pass__body__text">
        На вашу почту <b>caketest@gmail.com</b> мы отправили специальную ссылку,
        перейдя по которой вы сможете задать новый пароль.
      </div>
      <div v-else class="recovery-pass__body__text">
        После заполнения формы мы отправим специальную ссылку на указанный
        электронный адрес, перейдя по которой вы сможете задать новый пароль.
      </div>
      <div v-if="!isSuccess" class="recovery-pass__body__input">
        <VInput
          name="recoveryPass"
          label-text="Email"
          type="email"
          placeholder="Email"
          id="recoveryPass"
          :validation="isEmail"
        ></VInput>
      </div>
    </div>
    <div class="recovery-pass__footer">
      <div class="recovery-pass__footer__btn">
        <AlfaButton v-if="isSuccess" text="На главную" />
        <AlfaButton v-else text="Отправить" />
      </div>
    </div>
    <div class="recovery-pass__close-btn" data-close-modal>
      <BetaButton styling="beta-gamma-btn">
        <CloseIcon />
      </BetaButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VInput } from "@/shared/ui/inputs";
import * as yup from "yup";
import { AlfaButton, BetaButton } from "@/shared/ui/buttons";
import { CloseIcon } from "@/shared/ui/icons";

export default defineComponent({
  name: "RecoveryPassModal",
  components: { VInput, AlfaButton, BetaButton, CloseIcon },
  props: {
    isSuccess: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const isEmail = yup
      .string()
      .required("Обязательное поле")
      .email("Неверный формат");

    return {
      isEmail,
    };
  },
});
</script>

<style lang="scss" scoped>
.recovery-pass {
  width: 100%;
  max-width: 582px;
  background-color: white;
  padding: 60px;
  border-radius: 16px;
  color: $clr-phi;
  position: relative;

  // *** Header *** //
  &__header {
    margin-bottom: 18px;
    &__title {
      font-weight: $semi-bold;
      font-size: 28px;
      line-height: 34px;
      text-align: center;
      color: $clr-nu;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    margin-bottom: 24px;
    &__text {
      line-height: 1.6;
      text-align: center;
      margin-bottom: 32px;
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    &__btn {
      margin: 0 auto;
      width: 282px;
    }
  }
  // *** Footer END *** //

  // *** Other *** //
  &__close-btn {
    width: 34px;
    height: 34px;
    position: absolute;
    top: 15px;
    right: 15px;
  }
  // *** Other END *** //
}
</style>

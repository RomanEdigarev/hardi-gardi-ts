<template>
  <div class="registration">
    <div class="registration__body">
      <div class="registration__body__inputs">
        <div class="registration__body__inputs__item">
          <VInput
            type="text"
            placeholder="Имя"
            label-text="Имя"
            name="firstName"
          />
        </div>
        <div class="registration__body__inputs__item">
          <VInput
            type="email"
            placeholder="Email"
            label-text="Email"
            name="email"
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
          />
        </div>
        <div class="registration__body__inputs__item">
          <VInput
            type="password"
            placeholder="Подтверждение пароля"
            label-text="Подтверждение пароля"
            name="confirmPassword"
          />
        </div>
      </div>

      <div class="registration__body__btns">
        <div class="registration__body__btns__item">
          <AlfaButton
            text="Зарегистрироваться"
            @click="onSubmit"
            :is-disabled="isLoading"
          />
        </div>
        <div v-if="isPhone" class="registration__footer">
          <div class="registration__footer__text">
            Кликнув на "Зарегистрироваться", Вы соглашаетесь с
            <span>политикой безопасности</span> и
            <span>конфиденциальности</span>.
          </div>
        </div>
        <div class="registration__body__btns__item">
          Есть аккаунт?
          <span class="alfa-link" @click="$router.push('/sign-in/login')">
            Войти
          </span>
        </div>
      </div>
    </div>

    <div v-if="!isPhone" class="registration__footer">
      <div class="registration__footer__text">
        Кликнув на "Зарегистрироваться", Вы соглашаетесь с
        <span>политикой безопасности</span> и <span>конфиденциальности</span>.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";
import { Checkbox, VInput } from "@/shared/ui/Inputs";
import { AlfaButton } from "@/shared/ui/buttons";
import * as yup from "yup";
import { useForm } from "vee-validate";
import { UserRegistrationData } from "@/entities/User/model";
import { useStore } from "@/services/vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Registration",
  components: { VInput, Checkbox, AlfaButton },
  setup() {
    const store = useStore();
    const router = useRouter();
    const isAuth = computed(() => store.getters["user/getUserAuthInfo"]);

    watch(isAuth, () => {
      if (isAuth.value.isAuth === true) {
        router.push("/personal");
      }
    });

    const schema = yup.object({
      firstName: yup.string().required("Обязательное поле"),
      email: yup
        .string()
        .required("Обязательное поле")
        .email("Неверный формат"),
      password: yup
        .string()
        .required("Обязательное поле")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          "Восемь символов, заглавная буква, строчная буква, цифра"
        ),
      confirmPassword: yup
        .string()
        .required("Обязательное поле")
        .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
    });

    const { handleSubmit, isSubmitting } = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit(async (values) => {
      const userData: UserRegistrationData = {
        name: values.firstName,
        email: values.email,
        password: values.password,
      };
      await store.dispatch("user/fetchRegistrationUser", userData);
    });

    return {
      schema,
      onSubmit,
      isSubmitting,
      isLoading: computed(() => store.getters["user/getUserIsLoading"]),
      isPhone: computed(() => store.getters["getIsPhone"]),
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
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .registration {
    max-width: 345px;
    &__body {
      &__inputs {
        margin-bottom: 0;
        &__item {
          margin-bottom: 16px;
        }
      }
      &__inputs.double {
        flex-direction: column;
        gap: 0;
      }
      &__btns {
        flex-direction: column;
        &__item {
          width: 100%;
        }
      }
    }
    &__footer {
      &__text {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px) {
  .registration {
    &__body {
      &__inputs {
        margin-bottom: 18px;
        &__item {
          margin-bottom: 18px;
        }
      }
      .double {
        flex-direction: column;
        gap: 0;
      }
      &__btns {
        flex-direction: column;
        &__item {
          width: 100%;
        }
      }
    }

    &__footer {
      margin-top: 16px;
      margin-bottom: 36px;
      &__text {
        font-size: 12px;
        line-height: 1.38;
        text-align: center;
        span {
          font-size: 12px;
          font-weight: $semi-bold;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

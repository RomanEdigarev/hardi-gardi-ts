<template>
  <div class="data">
    <div class="data__body">
      <div class="data__body__item">
        <VInput
          name="email"
          placeholder="Email"
          id="email"
          type="email"
          :value="user.email"
          :validation="schema.email"
        />
      </div>
      <div class="grid">
        <div class="data__body__item">
          <VInput
            name="firstName"
            placeholder="Имя"
            id="firstName"
            :value="user.name"
            type="text"
            :validation="schema.firstName"
          />
        </div>
        <div class="data__body__item">
          <VInput
            name="lastName"
            placeholder="Фамилия"
            id="lastName"
            :value="user.lastName"
            type="text"
            :validation="schema.lastName"
          />
        </div>
        <div class="data__body__item">
          <VInput
            name="phone"
            placeholder="Телефон"
            id="phone"
            :value="user.phone || null"
            type="phone"
            :validation="schema.phone"
          />
        </div>
        <div class="data__body__item">
          <DateInput name="userDate" :value="user.birth" />
        </div>
      </div>
      <div class="data__body__item">
        <ChangePass />
      </div>
      <div class="data__body__item">
        <ChangeChild
          :childs="childs"
          @set-childs="setChilds"
          @remove-child="removeChild"
        />
      </div>
    </div>
    <div class="data__footer">
      <div class="data__footer__btn">
        <AlfaButton text="Сохранить" @click="onSubmit" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive, ref } from "vue";
import { DateInput, VInput } from "@/shared/ui/inputs";
import * as yup from "yup";
import { ChangeChild, ChangePass } from "./ui";
import { User, UserProfileDataModel } from "@/entities/User/model";
import { AlfaButton } from "@/shared/ui/buttons";
import { useForm } from "vee-validate";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "data",
  components: { VInput, ChangePass, ChangeChild, DateInput, AlfaButton },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const childs = computed(() => store.getters["user/getUserChilds"]);
    const setChilds = (childs) => {
      store.commit("user/setUserChilds", childs);
    };
    const removeChild = (childId) => {
      store.dispatch("user/fetchRemoveUserChild", childId);
    };

    const phoneRegExp = /(.{16}$)|(^\s*$)/;
    const schema = yup.object({
      firstName: yup.string().required("Обязательное поле"),
      lastName: yup.string(),
      email: yup
        .string()
        .required("Обязательное поле")
        .email("Неверный формат"),
      phone: yup
        .string()
        .nullable()
        .matches(phoneRegExp, "Неверный формат телефона"),
      newPassword: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          "Восемь символов, заглавная буква, строчная буква, цифра"
        ),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("newPassword"), null], "Пароли не совпадают"),
      date: yup.string(),
    });

    const { handleSubmit } = useForm({
      validationSchema: schema,
    });
    const onSubmit = handleSubmit(async (values) => {
      let profile: UserProfileDataModel = {
        firstName: values.firstName,
        lastName: values.lastName,
        newPassword: values.newPassword || "",
        phone: values.phone,
      };
      values.date && (profile.birth = values.date);
      await store.dispatch("user/fetchSetProfileUser", profile);
    });

    return {
      onSubmit,
      schema,
      setChilds,
      removeChild,
      childs,
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
  &__footer {
    &__btn {
      width: 276px;
      height: 62px;
    }
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
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .data {
    max-width: 410px;
    .grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>

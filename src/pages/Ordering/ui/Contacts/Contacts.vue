<template>
  <div class="contacts">
    <div class="contacts__input">
      <VInput
        name="contactPersonName"
        id="first-name"
        :value="contactPerson.name"
        label-text="Имя"
        placeholder="Имя"
      />
    </div>
    <div class="contacts__input">
      <VInput
        name="contactPersonLastName"
        id="last-name"
        :value="contactPerson.lastName"
        label-text="Фамилия"
        placeholder="Фамилия"
      />
    </div>
    <div class="contacts__input">
      <VInput
        name="contactPersonLastPhone"
        id="phone"
        type="phone"
        :value="contactPerson.phone"
        label-text="Телефон"
        placeholder="Телефон"
      />
    </div>
    <div class="contacts__input">
      <VInput
        name="contactPersonLastEmail"
        id="email"
        :value="contactPerson.email"
        label-text="Email"
        placeholder="Email"
      />
    </div>
  </div>
</template>

<script lang="ts">
import * as yup from "yup";
import { defineComponent, PropType } from "vue";
import { VInput } from "@/shared/ui/inputs";
import { OrderContactPerson } from "@/entities/Order/model";
import { useForm } from "vee-validate";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "Contacts",
  components: {
    VInput,
  },
  props: {
    contactPerson: {
      type: Object as PropType<OrderContactPerson>,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const phoneRegExp = /(.{16}$)|(^\s*$)/;
    const schema = yup.object({
      contactPersonName: yup.string().required("Обязательное поле"),
      contactPersonLastName: yup.string(),
      contactPersonLastEmail: yup
        .string()
        .required("Обязательное поле")
        .email("Неверный формат"),
      contactPersonLastPhone: yup
        .string()
        .nullable()
        .matches(phoneRegExp, "Неверный формат телефона"),
    });
    const { handleSubmit } = useForm({
      validationSchema: schema,
    });
    const onSubmit = handleSubmit(async (values) => {
      console.log(values);
    });
  },
});
</script>

<style lang="scss" scoped>
.contacts {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 18px;
  row-gap: 42px;
  &__input {
    width: 100%;
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .contacts {
    grid-template-columns: 1fr;
    row-gap: 26px;
  }
}
</style>

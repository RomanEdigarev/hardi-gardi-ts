<template>
  <div class="contacts">
    <div class="contacts__input">
      <VInput id="first-name" label-text="Имя" placeholder="Имя" />
    </div>
    <div class="contacts__input">
      <VInput id="last-name" label-text="Фамилия" placeholder="Фамилия" />
    </div>
    <div class="contacts__input">
      <VInput id="phone" label-text="Телефон" placeholder="Телефон" />
    </div>
    <div class="contacts__input">
      <VInput id="email" label-text="Email" placeholder="Email" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VInput } from "@/shared/ui/inputs";

export default defineComponent({
  name: "Contacts",
  components: {
    VInput,
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
@media screen and (max-width: 376px){
  .contacts {
    grid-template-columns: 1fr;
    row-gap: 26px;
  }

}
</style>

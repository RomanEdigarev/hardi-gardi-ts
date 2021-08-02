<template>
  <div class="container">
    <form class="form" action="">
      <input class="input" type="email" placeholder="E-mail" />
      <button class="button">Отправить</button>
    </form>
    <span class="info"
      >Нажимая «Отправить» вы соглашаетесь на обработку персональных
      данных</span
    >
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Input",
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 16px;
}

.form {
  width: 100%;
  height: 100%;
}

.input {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  outline: none;
  border: none;
  padding: 18px 21px;
  color: $clr-eta;

  &::placeholder {
    color: $clr-eta;
  }
}

.button {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  color: $clr-nu;
  font-weight: $semi-bold;
  padding: 12px 17px;
  border-radius: 16px;
  background-color: $clr-alpha-zeta;
}

.info {
  position: absolute;
  font-size: 12px;
  color: $clr-eta;
  bottom: -16px;
  transform: translateY(100%);
}
</style>

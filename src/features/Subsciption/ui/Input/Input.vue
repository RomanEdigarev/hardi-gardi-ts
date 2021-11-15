<template>
  <div class="container">
    <form class="form" action="">
      <input class="input" type="email" placeholder="E-mail" />
      <button class="button" :class="{'phone': isPhone}">
<!--        <span>Отправить</span>-->
        <img src="./assets/icon.svg" alt="">
      </button>
    </form>
    <span class="info">
      Нажимая «Отправить» вы соглашаетесь на <span>обработку персональных данных</span>
    </span>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "@/services/vuex";

export default defineComponent({
  name: "Input",
  setup() {
    const store = useStore()
    const isPhone = computed(() => store.getters["getIsPhone"])
    return {
      isPhone
    }
  }
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
  max-height: 50px;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.button.phone {
  width: 50px;
  height: 100%;
  right: 0;
  border-radius: 18px;
}

.info {
  position: absolute;
  font-size: 12px;
  line-height: 15px;
  color: $clr-eta;
  bottom: -16px;
  transform: translateY(100%);
  span {
    cursor: pointer;
  }
}
</style>

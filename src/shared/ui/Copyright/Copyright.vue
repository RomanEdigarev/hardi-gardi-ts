<template>
  <div class="copyright">
    <div class="copyright__left">
      <span>
        © khardigardi.ru 2021
        <br />
        Развивающие игры для детей. Все права защищены
      </span>
    </div>
    <div class="copyright__right">
      <span>
        Дизайн сайта — Terminaldesign, CAKE.RU
        <br />
        Разработка сайта — <a href="https://cake.ru/">CAKE.RU</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Copyright",
});
</script>

<style lang="scss" scoped>
.copyright {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: $clr-tau;
  padding: 28px 0;
  border-top: 1px solid $clr-alpha-eta;
  span {
    font-size: 12px !important;
  }

  &__left {
    flex: 0.5;
    span {
      line-height: 1.67;
    }
  }

  &__right {
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    span {
      line-height: 1.67;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .copyright {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    * {
      text-align: center;
    }
    & > div:first-child {
      margin-bottom: 24px;
    }
    div {
      justify-content: center;
    }
  }
}
</style>

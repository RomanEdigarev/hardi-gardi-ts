<template>
  <div class="footer-card">
    <div class="footer-card__text">
      <slot name="text"></slot>
    </div>
    <div class="footer-card__bg">
      <img src="./assets/bg.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterCard",
});
</script>

<style lang="scss" scoped>
.footer-card {
  width: 100%;
  height: 621px;
  overflow: hidden;
  background: #fceef4;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &__text {
    font-weight: $bold;
    font-size: 24px;
    line-height: 1.46;
    text-align: center;
    color: $clr-nu;
    max-width: 582px;
  }
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

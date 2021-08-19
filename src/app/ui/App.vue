<template>
  <div class="app">
    <div class="app__header">
      <Header />
    </div>

    <div class="app__wrapper">
      <div class="app__container">
        <div class="app__body">
          <router-view />
        </div>
      </div>
    </div>

    <div class="app__footer">
      <Footer />
    </div>

    <img
      class="app__footer-bg"
      :src="require('/public/images/footer-bg.svg')"
      alt=""
    />
    <img
      class="app__header-bg"
      :src="require('/public/images/header-bg.svg')"
      alt=""
    />
    <img
      class="app__header-image"
      :src="require('/public/images/header-image.png')"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { Header, Footer } from "./ui";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Header, Footer },
});
</script>

<style lang="scss">
@import "~normalize.css";
@import "src/shared/style/style";
.app {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;

  &__wrapper {
    height: 100%;
    padding: 0 19vw;
    margin-bottom: 250px;
  }

  &__container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    min-height: 100vh;
    max-width: 1193px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__header {
    background: white;
  }

  &__body {
    height: 100%;
  }

  &__footer {
    bottom: 0;
    max-width: 100%;
  }

  &__header-bg,
  &__footer-bg {
    position: absolute;
    z-index: -2;
    object-fit: cover;
    width: 100%;
  }

  &__header-bg {
    top: 0;
    height: 821px;
  }

  &__footer-bg {
    height: 844px;
    bottom: 0;
  }

  &__header-image {
    z-index: -1;
    position: absolute;
    top: 22px;
    right: 23.8%;
  }
}
</style>

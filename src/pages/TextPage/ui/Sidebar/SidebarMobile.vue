<template>
  <div class="sidebar-mobile">
    <div class="sidebar-mobile__title">Помощь</div>
    <div class="sidebar-mobile__subtitle">О компании</div>
    <div class="sidebar-mobile__arrow" @click="toggleShow">
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.666 1L6.0239 5.64212L1.38179 1"
          stroke="#606060"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="sidebar-mobile__items" :class="{ 'is-show': isShow }">
      <div class="sidebar-mobile__items__item">Доставка и оплата</div>
      <div class="sidebar-mobile__items__item">Доставка и оплата</div>
      <div class="sidebar-mobile__items__item">Доставка и оплата</div>
      <div class="sidebar-mobile__items__item">Доставка и оплата</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SidebarMobile",
  setup() {
    const isShow = ref(false);
    const toggleShow = () => {
      isShow.value = !isShow.value;
    };
    return {
      isShow,
      toggleShow,
    };
  },
});
</script>

<style lang="scss" scoped>
.sidebar-mobile {
  width: 100%;
  max-width: 339px;
  height: 60px;
  padding-left: 24px;
  background-color: #fff;
  border: 1px solid #d9dce2;
  border-radius: 16px;
  position: absolute;
  cursor: pointer;
  &__title {
    padding-top: 4px;
    font-weight: $semi-bold;
    font-size: 12px;
    line-height: 1.67;
    color: #6e7191;
  }
  &__subtitle {
    font-size: 14px;
    line-height: 2;
    display: flex;
    align-items: center;
    color: $clr-phi;
  }
  &__arrow {
    position: absolute;
    top: 50%;
    right: 18px;
    transform: translate(-50%, -50%);
  }
  &__items {
    display: none;
    width: 100%;
    background-color: #fff;
    border: 1px solid #d9dce2;
    border-radius: 16px;
    position: absolute;
    left: 0;
    margin-top: 20px;
    &__item {
      font-size: 14px;
      padding: 24px;
      border-bottom: 1px solid #d9dce2;
    }
    &__item:last-child {
      border-bottom: none;
    }
  }
  &__items.is-show {
    display: block;
  }
}
</style>

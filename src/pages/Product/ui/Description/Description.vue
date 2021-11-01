<template>
  <div class="product-description" ref="main">
    <div class="product-description__toggle-btn">
      <input
        type="checkbox"
        :id="`toggle-${id}`"
        @click="toggle"
        :checked="isOpen"
      />
      <label :for="`toggle-${id}`"></label>
    </div>
    <div class="product-description__title" ref="titleContainer">
      {{ title }}
    </div>

    <div class="product-description__content" ref="content">
      <slot name="content"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUpdated, ref } from "vue";
import { useDescription } from "./lib";
import anime from "animejs";

export default defineComponent({
  name: "Description",
  props: {
    title: {
      type: String,
      required: true,
      default: "Заголовок",
    },
    isClose: {
      type: Boolean,
      required: false,
      default: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup({ isClose }) {
    const data = useDescription(isClose);

    return {
      ...data,
    };
  },
});
</script>

<style lang="scss" scoped>
.product-description {
  width: 100%;
  padding: 42px;
  background: $clr-kappa;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  position: relative;
  color: $clr-phi;
  &__toggle-btn {
    position: absolute;
    top: 42px;
    right: 42px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    input {
      opacity: 0;
      display: none;
      &:checked ~ label {
        background-color: $clr-tau;
      }
      &:checked ~ label:before {
        opacity: 1;
      }
    }
    label {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      background-color: $clr-zeta;
      &:before {
        content: url("./assets/minus.svg");
        left: 50%;
        opacity: 0;
        position: absolute;
        z-index: 2;
        top: -1px;
        transform: translateX(-50%);
        transition: opacity 0.3s ease-in-out;
      }
      &:after {
        content: url("./assets/plus.svg");
        left: 50%;
        opacity: 1;
        z-index: 1;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease-in-out;
      }
    }
  }
  &__content {
    overflow: hidden;
  }
  &__title {
    font-weight: $semi-bold;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 25px;
  }
  &__text {
    font-weight: normal;
    font-size: 15px;
    line-height: 1.6;
    //margin-bottom: 26px;
  }
  &__list {
    li {
      font-size: 15px;
      line-height: 1.6;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .product-description {
    padding: 27px;
    &__toggle-btn {
      top: 26px;
      right: 27px;
    }
    &__title {
      font-size: 16px;
      line-height: 1.12;
    }
  }
}
</style>

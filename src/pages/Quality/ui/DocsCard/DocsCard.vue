<template>
  <div class="docs-card">
    <span>Сертификат ГОСТ 23565-85756</span>
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2988 5.87999C10.049 5.63165 9.71102 5.49227 9.35877 5.49227C9.00653 5.49227 8.66859 5.63165 8.41877 5.87999L6.67211 7.51999V1.33333C6.67211 0.979709 6.53163 0.640572 6.28159 0.390524C6.03154 0.140476 5.6924 0 5.33878 0C4.98516 0 4.64602 0.140476 4.39597 0.390524C4.14592 0.640572 4.00545 0.979709 4.00545 1.33333V7.45332L2.28545 5.71999C2.03438 5.46892 1.69385 5.32787 1.33879 5.32787C0.983718 5.32787 0.643193 5.46892 0.392122 5.71999C0.14105 5.97106 0 6.31159 0 6.66665C0 7.02172 0.14105 7.36225 0.392122 7.61332L4.39211 11.6133C4.5167 11.7369 4.66446 11.8347 4.8269 11.901C4.98935 11.9674 5.1633 12.001 5.33878 12C5.68207 11.9986 6.01161 11.8649 6.25878 11.6266L10.2588 7.75998C10.5125 7.51549 10.6591 7.18051 10.6666 6.82824C10.6741 6.47597 10.5419 6.13505 10.2988 5.87999Z"
        fill="#D23C50"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DocsCard",
});
</script>

<style lang="scss" scoped>
.docs-card {
  width: 276px;
  height: 78px;
  padding-left: 30px;
  padding-right: 54px;
  display: flex;
  align-items: center;
  border: 1px solid $clr-upsilon;
  border-radius: 16px;
  color: $clr-phi;
  position: relative;
  span {
    font-size: 15px;
    line-height: 1.6;
    transition: color 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: $clr-zeta;
    }
  }
  svg {
    position: absolute;
    bottom: 21px;
    right: 21px;
  }
}
</style>

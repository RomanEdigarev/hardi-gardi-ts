<template>
  <div class="sorting">
    <div class="sorting__title">Сортировать по:</div>
    <div class="sorting__item">популярности</div>
    <div class="sorting__item">новизне</div>
    <div class="sorting__item">
      <span>цене</span>
      <div class="sorting__item__lines ascending">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="sorting__item">скидке</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Sorting",
});
</script>

<style lang="scss" scoped>
.sorting {
  display: flex;
  font-weight: $regular;
  font-size: 14px;
  line-height: 17px;
  color: $clr-phi;
  height: 20px;
  align-items: center;
  &__title {
    margin-right: 16px;
  }

  // *** Item *** //
  &__item {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 19px;
    transition: text-shadow 0.3s ease-in-out;
    &:hover {
      text-shadow: 0 0 1px $clr-phi;
    }

    &__lines {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5px 0;
      margin-left: 5px;
      span {
        display: inline-block;
        border-radius: 50px;
        width: 16px;
        height: 2px;
        background-color: $clr-phi;
        transition: width 0.3s ease-in-out;
      }
    }

    &__lines.descending {
      & :nth-child(2) {
        width: 11px;
      }

      & :nth-child(3) {
        width: 6px;
      }
    }

    &__lines.ascending {
      & :nth-child(1) {
        width: 6px;
      }

      & :nth-child(2) {
        width: 11px;
      }

      & :nth-child(3) {
        width: 16px;
      }
    }
  }

  // *** Item END *** //
}
</style>

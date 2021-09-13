<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__header__title">Помощь</div>
    </div>

    <div class="sidebar__body">
      <div class="sidebar__body__item">Доставка и оплата</div>
      <div class="sidebar__body__item current-item">О компании</div>
      <div class="sidebar__body__item">Сертификат</div>
      <div class="sidebar__body__item">Договор оферты</div>
      <div class="sidebar__body__item">Сотрудничество</div>
      <div class="sidebar__body__item">Благотворительность</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
});
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  max-width: 276px;
  padding: 38px 41px;
  background-color: #ecf0f8;
  color: $clr-phi;
  border-radius: 25px;

  // *** Header *** //
  &__header {
    margin-bottom: 14px;
    &__title {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    &__item {
      cursor: pointer;
      line-height: 2.27;
      transition: text-shadow 0.3s ease-in-out;
      &:hover {
        text-shadow: 0 0 1px $clr-phi;
      }
    }
  }
  // *** Body END *** //

  // *** Other *** //
  .current-item {
    text-shadow: 0 0 1px $clr-phi;
  }
  // *** Other END *** //
}
</style>

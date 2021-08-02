<template>
  <div class="navigation">
    <div class="navigation__location"><Location city="Санкт-Петербург" /></div>

    <div class="navigation__container">
      <nav class="navigation__links">
        <a class="navigation__link" href="/">Каталог</a>
        <a class="navigation__link" href="/">Акции</a>
        <a class="navigation__link" href="/">Доставка и оплата</a>
        <a class="navigation__link" href="/">О компании</a>
      </nav>
      <div class="navigation__tooltip">
        <NavigationButton />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {NavigationButton} from "./ui";
import {Location} from "@/features/";
import {defineComponent} from "vue";

export default defineComponent({
  name: "Navigation",
  components: {
    NavigationButton,
    Location,
  },
});
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  height: 100%;
  color: $clr-phi;

  &__location {
    margin-bottom: 18px;
  }

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex: 0.8;
  }

  &__links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 21px;
  }

  &__link {
    transition: text-shadow 0.2s ease-in-out;
    white-space: nowrap;

    flex: 0.1;
    &:hover {
      text-shadow: 0 0 1px $clr-phi;
    }
  }

  &__tooltip {
    flex: 0.2;
  }
}
</style>

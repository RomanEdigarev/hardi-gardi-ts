<template>
  <div class="breadcrumbs">
    <router-link class="breadcrumbs__link" to="/">Главная</router-link>
    <router-link
      class="breadcrumbs__link"
      v-for="breadcrumb in breadcrumbs"
      :to="breadcrumb.link"
    >
      <svg
        width="5"
        height="8"
        viewBox="0 0 5 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.00391 1L4.00391 4L1.00391 7"
          stroke="#767676"
          stroke-width="1.6"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>
        {{ breadcrumb.name }}
      </span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "BreadCrumbs",
  setup() {
    const route = useRoute();
    let breadcrumbs = route.meta.breadcrumb;

    watch(route, (newRoute) => {
      breadcrumbs = newRoute.meta.breadcrumb;
    });

    return {
      breadcrumbs,
    };
  },
});
</script>

<style lang="scss" scoped>
.breadcrumbs {
  &__link {
    font-size: 13px;
    line-height: 24px;
    color: $clr-alpha-kappa;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: $clr-zeta;
    }
    span {
      font-size: 13px;
    }
    svg {
      margin: 0 10px;
    }
  }
}
</style>

<template>
  <div class="breadcrumbs">
    <router-link class="breadcrumbs__link" to="/">Главная</router-link>
    <span
      class="breadcrumbs__link"
      v-for="breadcrumb in resultBreadcrumbs"
      @click="$router.push(breadcrumb.link)"
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
    </span>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  onUpdated,
  PropType,
  ref,
  watch,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import {useStore} from "@/services/vuex";

export default defineComponent({
  name: "BreadCrumbs",
  props: {
    items: {
      type: Array,
    },
  },
  setup(props) {
    const store = useStore()
    const route = useRoute();
    let breadcrumbs = computed(() => {
      if (props.items) {
        return [...route.meta.breadcrumb, ...(props.items as [])];
      } else {
        return [...route.meta.breadcrumb];
      }
    });
    const resultBreadcrumbs = ref(null);
    const isCatalog = computed(() => route.path.split("/").includes("catalog"));
    const mapBreadcrumbs = computed(() => store.getters['shop/getBreadcrumbs'])

    watch(route, () => {
      const currentSection = route.params.section;
      if (isCatalog.value && currentSection) {
        resultBreadcrumbs.value.push(mapBreadcrumbs.value[currentSection as string]);
      } else {
        resultBreadcrumbs.value = [...breadcrumbs.value];
      }
    })

    onMounted(() => {
      resultBreadcrumbs.value = [...breadcrumbs.value];
    });

    return {
      breadcrumbs,
      resultBreadcrumbs,
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
@media screen and (min-width: 320px) and (max-width: 736px) {
  .breadcrumbs {
    white-space: nowrap;
    overflow-x: auto;
  }
}
</style>
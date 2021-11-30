<template>
  <div class="promotion">
    <main class="page-main">
      <div class="page-main__header">
        <BreadCrumbs />
        <PageTitle text="Акции" />
      </div>
      <div class="promotion__body">
        <PromotionSection v-if="actions.length > 0" :actions="actions"/>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs, PromotionSection } from "@/widgets";
import { useProduct } from "@/entities/Products/Product/lib";
import {useStore} from "@/services/vuex";

export default defineComponent({
  name: "Promotion",
  components: { PageTitle, BreadCrumbs, PromotionSection },
  setup() {
    const store = useStore()
    const { product } = useProduct();
    const actions = computed(() => store.getters['actions/getActions'])

    return {
      product,
      actions
    };
  },
});
</script>

<style lang="scss" scoped>
.promotion {
  // *** Body *** //
  &__body {
    &__item {
      margin-bottom: 104px;
    }
  }
  // *** Body END *** //
  :deep .panel, :deep .promotion-section__title-container{
    display: none;
  }

}
</style>
<style lang="scss">
.promotion {
  .page-main {
    &__header {
      margin-bottom: 40px;
    }
  }
}
</style>

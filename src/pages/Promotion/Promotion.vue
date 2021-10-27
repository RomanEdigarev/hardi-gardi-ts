<template>
  <div class="promotion">
    <main class="page-main">
      <div class="page-main__header">
        <BreadCrumbs />
        <PageTitle text="Акции" />
      </div>
      <div class="promotion__body">
        <div class="promotion__body__item">
          <PromotionSection :products="[product, product]" />
        </div>
        <div class="promotion__body__item">
          <PromotionSection :products="[product, product]" />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs, PromotionSection } from "@/widgets";
import { useStore } from "@/services/vuex";
import { useProduct } from "@/entities/Products/Product/lib";

export default defineComponent({
  name: "Promotion",
  components: { PageTitle, BreadCrumbs, PromotionSection },
  setup() {
    const { product } = useProduct();
    return {
      product,
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

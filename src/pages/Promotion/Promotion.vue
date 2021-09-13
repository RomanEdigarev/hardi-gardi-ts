<template>
  <div class="promotion">
    <main class="page-main">
      <div class="page-main__header">
        <BreadCrumbs />
        <PageTitle text="Акции" />
      </div>
      <div class="promotion__body">
        <div class="promotion__body__item"><PromotionSection is-simple /></div>
        <div class="promotion__body__item"><PromotionSection is-simple /></div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs, PromotionSection } from "@/widgets";

export default defineComponent({
  name: "Promotion",
  components: { PageTitle, BreadCrumbs, PromotionSection },
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

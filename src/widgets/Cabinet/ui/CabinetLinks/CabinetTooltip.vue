<template>
  <div class="cabinet-tooltip">
    <div class="cabinet-tooltip__header">
      <div>Итог</div>
      <div>{{ basket.sumTotal }} ₽</div>
    </div>
    <div class="cabinet-tooltip__body">
      <div
        class="cabinet-tooltip__body__item"
        v-for="product in basket.products"
      >
        <CabinetTooltipCard
          :product="product.product"
          :quantity="product.quantity"
          @delete="deleteFromBasket(product.positionID)"
        />
      </div>
    </div>
    <div class="cabinet-tooltip__footer">
      <AlfaButton
        styling="secondary"
        text="Перейти в корзину"
        @click="$router.push('/basket')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import CabinetTooltipCard from "@/widgets/Cabinet/ui/CabinetLinks/CabinetTooltipCard.vue";
import { useStore } from "@/services/vuex";
import { AlfaButton } from "@/shared/ui/buttons";

export default defineComponent({
  name: "CabinetTooltip",
  components: { CabinetTooltipCard, AlfaButton },
  setup() {
    const store = useStore();
    const data = reactive({
      basket: {
        products: computed(() => store.getters["basket/getProducts"]),
        sumTotal: computed(() => store.getters["basket/getBasketSum"]),
      },
    });
    const deleteFromBasket = async (id: string) => {
      // console.log("delete" + id);
      await store.dispatch("basket/changeQuantity", { id, quantity: 0 });
    };

    return {
      ...data,
      deleteFromBasket,
    };
  },
});
</script>

<style scoped lang="scss">
.cabinet-tooltip {
  width: 350px;
  &__header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    text-align: right;
    color: #606060;
    margin-bottom: 16px;
  }
  &__body {
    max-height: 412px;
    overflow-x: hidden;
    overflow-y: auto;
    margin-bottom: 16px;
    &__item {
      margin-bottom: 8px;
    }
  }
}
</style>

<template>
  <div class="sales-section">
    <div class="sales-section__content-container">
      <div class="sales-section__content">
        <div class="sales-section__title-container">
          <span class="sales-section__title title">
            Скидки на любимые игры
          </span>
          <div class="sales-section__title-container__bg-container">
            <svg
              viewBox="0 0 418 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.5998 117.9C178.2 123.1 260.8 118 392.5 74.5001C438.9 59.2001 414.8 -12.6999 368.3 2.70013C242.4 44.3001 167.1 47.3001 34.6998 42.3001C-14.1002 40.5001 -8.80024 116.1 39.5998 117.9Z"
                fill="#FCEEF4"
              />
            </svg>
          </div>
        </div>

        <div v-if="isPhone" class="sales-section__items-container">
          <div class="sales-section__item">
            <ProductCardHomePhone />
          </div>
          <div class="sales-section__item">
            <ProductCardHomePhone />
          </div>
        </div>

        <div v-else class="sales-section__items-container">
          <div class="sales-section__item">
            <ProductCardHome />
          </div>
          <div class="sales-section__item">
            <ProductCardHome />
          </div>
          <div class="sales-section__item">
            <ProductCardHome />
          </div>
          <div class="sales-section__item">
            <ProductCardHome />
          </div>
        </div>
      </div>
    </div>
    <div class="sales-section__plus-btn-container">
      <BetaButton styling="beta-beta-btn">
        <PlusIcon />
      </BetaButton>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { ProductCardHome, ProductCardHomePhone } from "@/widgets";
import { PlusIcon } from "@/shared/ui/icons";
import { BetaButton } from "@/shared/ui/buttons";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "SectionSales",
  components: {
    ProductCardHome,
    ProductCardHomePhone,
    BetaButton,
    PlusIcon,
  },
  setup() {
    const store = useStore();
    return {
      isPhone: computed(() => store.state.isPhone),
    };
  },
});
</script>

<style lang="scss" scoped>
.sales-section {
  width: 100%;
  max-width: 1195px;
  // *** Containers *** //

  &__content-container {
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
  }

  &__title-container {
    margin: 0 auto 50px auto;
    max-width: 465px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &__bg-container {
      position: absolute;
      top: -12px;
      left: 0;
      z-index: -1;
    }
  }

  &__items-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(560px, 1fr));
    column-gap: 30px;
    row-gap: 40px;
  }

  &__plus-btn-container {
    width: 68px;
    height: 68px;
    margin: 0 auto;
  }

  // *** Containers END *** //

  &__content {
    width: 100%;
    height: 100%;
  }

  &__title {
    display: inline-block;
    text-align: center;
    color: $clr-nu;
  }

  &__item {
  }
}

@media screen and (max-width: 376px) {
  .sales-section {
    &__title-container {
      &__bg-container {
        width: 276px;
        left: 10%;
      }
    }
  }
}
</style>

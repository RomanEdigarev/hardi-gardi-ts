<template>
  <div class="search-modal-phone">
    <div class="search-modal-phone__header">
      <div class="search-modal-phone__header__title">Поиск</div>
      <div
        class="search-modal-phone__header__close-btn"
        @click="$emit('close')"
      >
        <CloseIcon />
      </div>
      <div class="search-modal-phone__header__input">
        <SearchInput />
      </div>
    </div>
    <div class="search-modal-phone__body">
      <div class="search-modal-phone__body__no-results">
        <div class="search-modal-phone__body__no-results__title">
          По вашему запросу ничего не найдено
        </div>
        <div class="search-modal-phone__body__no-results__text">
          Попробуйте изменить формулировку или воспользуйтесь нашим
          <span @click="$router.push('catalog')">каталогом</span>
        </div>
      </div>
      <div class="search-modal-phone__body__item">
        <ProductCardCart />
      </div>
      <div class="search-modal-phone__body__item">
        <ProductCardCart />
      </div>
      <div class="search-modal-phone__body__item">
        <ProductCardCart />
      </div>
    </div>
    <div class="search-modal-phone__footer">
      <button class="search-modal-phone__footer__btn">
        <span>Все результаты</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 9H14.25"
            stroke="#D23C50"
            stroke-width="2.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 3.75L14.25 9L9 14.25"
            stroke="#D23C50"
            stroke-width="2.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SearchInput } from "@/features";
import { ProductCardCart } from "@/widgets";
import { CloseIcon } from "@/shared/ui/icons";

export default defineComponent({
  name: "SearchModalPhone",
  components: {
    SearchInput,
    ProductCardCart,
    CloseIcon,
  },
  emits: ["close"],
});
</script>

<style lang="scss" scoped>
.search-modal-phone {
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  padding: 24px 18px;
  color: $clr-phi;
  position: relative;
  // *** Header *** //
  &__header {
    margin-bottom: 30px;
    &__title {
      margin-bottom: 32px;
      font-weight: $bold;
      font-size: 20px;
      line-height: 1.2;
    }
    &__close-btn {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 12px;
      right: 12px;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    margin-bottom: 24px;
    &__item {
      margin-bottom: 18px;
    }
    &__no-results {
      text-align: center;
      &__title {
        font-weight: $semi-bold;
        font-size: 16px;
        line-height: 1.12;
        margin-bottom: 12px;
        white-space: nowrap;
      }
      &__text {
        font-size: 14px;
        line-height: 1.5;
        span {
          color: $clr-zeta;
          cursor: pointer;
        }
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    &__btn {
      display: flex;
      align-items: center;
      span {
        color: $clr-zeta;
        font-size: 15px;
        line-height: 18px;
        margin-right: 7px;
      }
    }
  }
  // *** Footer END *** //
  :deep .close-btn {
    width: 26px;
    right: 25%;
  }
  :deep .product-card {
    &__del-btn,
    &__fav-btn {
      display: none;
    }
    &__count {
      display: none;
    }
    &__price {
      flex-direction: row;
      justify-content: flex-start;
      margin-bottom: 0;
      &__prev {
        margin-right: 8px;
      }
      span {
        width: auto;
      }
    }
  }
}
</style>

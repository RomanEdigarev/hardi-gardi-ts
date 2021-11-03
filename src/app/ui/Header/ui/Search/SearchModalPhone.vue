<template>
  <div class="search-modal-phone">
    <div class="search-modal-phone__header">
      <div class="search-modal-phone__header__title">Поиск</div>
      <div class="search-modal-phone__header__close-btn" @click="close">
        <CloseIcon />
      </div>
      <div class="search-modal-phone__header__input">
        <SearchInput
          ref="searchInput"
          :is-loading="isLoading"
          @input="setSearchQuery"
          @search="searchProducts"
        />
      </div>
    </div>
    <div class="search-modal-phone__body">
      <div
        v-if="results.length === 0"
        class="search-modal-phone__body__no-results"
      >
        <div class="search-modal-phone__body__no-results__title">
          По вашему запросу ничего не найдено
        </div>
        <div class="search-modal-phone__body__no-results__text">
          Попробуйте изменить формулировку или воспользуйтесь нашим
          <span @click="$router.push('/catalog')">каталогом</span>
        </div>
      </div>
      <div class="search-modal-phone__body__results" v-else>
        <div v-for="product in results" class="search-modal-phone__body__item">
          <ProductCardCatalog is-search-result :product="product" />
        </div>
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
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { SearchInput } from "@/features";
import { ProductCardCart } from "@/widgets";
import { CloseIcon } from "@/shared/ui/icons";
import { useStore } from "@/services/vuex";
import { useRoute, useRouter } from "vue-router";
import ProductCardCatalog from "@/widgets/Cards/ProductCardCatalog/ProductCardCatalog.vue";

export default defineComponent({
  name: "SearchModalPhone",
  components: {
    SearchInput,
    ProductCardCatalog,
    CloseIcon,
  },
  emits: ["close"],
  setup(_, { emit }) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const searchQuery = ref("");
    const searchInput = ref(null);
    const isOpen = ref(false);
    const isLoading = computed(() => {
      return store.getters["search/getSearchingIsLoading"];
    });
    const results = computed(() => {
      if (store.getters["search/getSearchResults"]) {
        return store.getters["search/getSearchResults"];
      } else {
        return [];
      }
    });

    const setSearchQuery = (e) => {
      searchQuery.value = e.target.value;
      store.commit("search/setSearchQuery", e.target.value);
    };
    const searchProducts = async () => {
      await store.dispatch("search/fetchSearchProducts", searchQuery.value);
    };
    const goToCatalog = () => {
      router.push("/catalog");
    };
    const close = () => {
      emit("close");
      isOpen.value = false;
      searchQuery.value = "";
      store.commit("search/setSearchQuery", "");
      store.commit("search/setResults", []);
      searchInput.value.$el.querySelectorAll("[name=search]")[0].value = "";
    };

    watch(route, () => {
      document.documentElement.click();
      if (isOpen.value) {
        emit("close");
      }
      searchQuery.value = "";
      store.commit("search/setSearchQuery", "");
      store.commit("search/setResults", []);
      searchInput.value.$el.querySelectorAll("[name=search]")[0].value = "";
    });

    onMounted(() => {
      if (searchInput.value.$el) {
        searchInput.value.$el
          .querySelectorAll("[name=search]")[0]
          .setAttribute("autocomplete", "off");
      }
    });

    return {
      searchInput,
      searchQuery,
      isLoading,
      results,
      setSearchQuery,
      searchProducts,
      goToCatalog,
      close,
    };
  },
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
  display: none;
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
    &__results {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 131px;
    }
    &__item {
      padding: 8px 0px;
      border-bottom: 1px solid #ecedf0;
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
  :deep .catalog-product-card {
    background-color: transparent;
    &__shop-btn {
      display: none;
    }
  }
}
</style>

<template>
  <div class="search">
    <div class="search__input-container">
      <SearchInput ref="searchInput" :is-loading="isLoading" @input="setSearchQuery" @search="searchProducts"/>
    </div>
    <div class="search__results-container">
      <slot name="search-results">
        <template v-if="results.length > 0">
          <div v-for="product in results">
            <ProductCardCatalog is-search-result :product="product"/>
          </div>
        </template>
        <div v-else-if="isDirty" class="search__results-container__no-results">
          <div>
            По вашему запросу ничего не найдено
          </div>
          <div>
            Попробуйте изменить формулировку или воспользуйтесь нашим <span @click="$router.push('/catalog')">каталогом</span>
          </div>
        </div>

      </slot>

    </div>
    <button class="search__btn" v-if="results.length > 0" @click="goToCatalog" data-close-modal>
      <span>Все результаты</span>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.75 9H14.25" stroke="#D23C50" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 3.75L14.25 9L9 14.25" stroke="#D23C50" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, watch} from "vue";
import { SearchInput } from "@/features";
import {useStore} from "@/services/vuex";
import ProductCardCatalog from "@/widgets/Cards/ProductCardCatalog/ProductCardCatalog.vue";
import {onBeforeRouteUpdate, useRoute, useRouter} from "vue-router";
export default defineComponent({
  name: "Search",
  components: {
    SearchInput,
    ProductCardCatalog
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const searchQuery = ref('')
    const searchInput = ref(null)
    const isDirty = ref(false)
    const isLoading = computed(() => {
      return store.getters['search/getSearchingIsLoading']
    })
    const results = computed(() => {
      if (store.getters['search/getSearchResults']) {
        return store.getters['search/getSearchResults']
      } else {
        return []
      }
    })

    const setSearchQuery = (e) => {
      searchQuery.value = e.target.value
      store.commit('search/setSearchQuery', e.target.value)
    }
    const searchProducts = async () => {
      isDirty.value = true
      await store.dispatch('search/fetchSearchProducts', searchQuery.value)
    }
    const goToCatalog = () => {
      router.push('/catalog')
      isDirty.value = false
    }

    watch(route, () => {
      document.documentElement.click()
      isDirty.value = false
      searchQuery.value = ''
      store.commit('search/setSearchQuery', '')
      store.commit('search/setResults', [])
      searchInput.value.$el.querySelectorAll('[name=search]')[0].value = ''
    })

    onMounted(() => {
      if (searchInput.value.$el) {
        searchInput.value.$el.querySelectorAll('[name=search]')[0].setAttribute('autocomplete', 'off')
      }
    })

    return {
      isLoading,
      results,
      setSearchQuery,
      searchProducts,
      goToCatalog,
      searchInput,
      isDirty
    }

  }
});
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__input-container {
    width: 100%;
    max-width: 786px;
    margin: 48px 0;
  }

  &__results-container {
    margin-bottom: 20px;
    width: 80.2vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, 388px);
    justify-content: center;
    column-gap: 15px;
    row-gap: 16px;
    grid-auto-rows: 132px;
    &__no-results {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      div:first-child {
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #606060;
        margin-bottom: 12px;
      }
      div:nth-child(2) {
        font-size: 15px;
        line-height: 24px;
        span {
          font-size: 15px;
          cursor: pointer;
          color: #D23C50;
        }
      }
    }
  }
  &__btn {
    padding: 11px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
    span {
      margin-right: 7px;
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;

      color: #D23C50;
    }
  }
  :deep .add-to-basket__shop-btn-container {
    width: 44px;
    height: 44px;
  }
}
</style>

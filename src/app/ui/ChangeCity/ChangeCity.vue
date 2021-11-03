<template>
  <div ref="changeCity" class="change-city">
    <div class="change-city__container">
      <div class="change-city__header">
        <div class="change-city__header__title">Выберите ваш город</div>
        <div class="change-city__header__close-btn" @click="close">
          <CloseIcon />
        </div>
      </div>
      <div class="change-city__body">
        <div class="change-city__body__input">
          <input
            type="text"
            placeholder="Город, поселок , деревня..."
            v-model="searchStr"
            @update:modelValue="searchCity"
          />
          <template v-if="searchResults && Object.keys(searchResults).length > 0">
            <div class="change-city__body__input__search-results">
              <div
                v-for="resultItem in Object.entries(searchResults)"
                @click="setNewUserCity(resultItem[0], resultItem[1])"
              >
                {{ resultItem[1] }}
              </div>
            </div>
          </template>
        </div>
        <div class="change-city__body__items">
          <div
            v-for="(city, index) in cities"
            :key="`${city}_${index}`"
            class="change-city__body__items__item"
            :class="{ current: index === currentCityIndex }"
          >
            {{ city }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { CloseIcon } from "@/shared/ui/icons";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "ChangeCity",
  components: { CloseIcon },
  setup(_, { emit }) {
    const store = useStore();
    const searchStr = ref<string>("");

    const currentCityIndex = computed(
      () => store.getters["city/getCurrentCityId"]
    );
    const searchCity = async () => {
      await store.dispatch("city/searchByString", searchStr.value);
    };
    const setNewUserCity = async (index, name) => {
      searchStr.value = name;
      await store.dispatch("city/setNewUserCity", index);
    };
    const data = {
      cities: computed(() => store.getters["city/getAllCities"]),
      searchResults: computed(() => store.getters["city/getSearchResults"]),
    };
    const close = () => {
      store.commit("city/resetSearchItems");
      searchStr.value = "";
      emit("close");
    };

    return {
      ...data,
      currentCityIndex,
      searchCity,
      close,
      setNewUserCity,
      searchStr,
    };
  },
});
</script>

<style scoped lang="scss">
.change-city {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 100;
  &__container {
    width: 95%;
    max-width: 786px;
    margin: 78px auto 0 auto;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 42px;
    &__title {
      font-weight: $bold;
      font-size: 28px;
      line-height: 1.21;
      color: #606060;
    }
    &__close-btn {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
  &__body {
    &__input {
      width: 100%;
      margin-bottom: 42px;
      position: relative;
      input {
        width: 100%;
        height: 60px;
        border: 1px solid #d9dce2;
        border-radius: 16px;
        padding: 18px 24px;
        font-size: 14px;
        line-height: 24px;
        color: #a0a3bd;
        &::placeholder {
          font-size: 14px;
          line-height: 24px;
          color: #a0a3bd;
        }
      }
      &__search-results {
        position: absolute;
        margin-top: 10px;
        top: 100%;
        width: 100%;
        border: 1px solid #d9dce2;
        border-radius: 16px;
        padding: 18px 24px;
        background-color: #fff;
        color: #a0a3bd;
        transition: color 0.3s ease-in-out;
        div {
          margin-bottom: 8px;
          cursor: pointer;
          &:hover {
            color: #d23c50;
          }
        }
      }
    }
    &__items {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 24px;
      &__item {
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        color: #606060;
        cursor: pointer;
        transition: color 0.3s ease-in-out;
        &:hover {
          color: #d23c50;
        }
      }
      &__item.current {
        color: #d23c50;
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
(-webkit-min-device-pixel-ratio: 3) {
  .change-city {
    width: 100vw;
    &__container {
      margin: 28px auto 0 auto;
    }
    &__header {
      margin-bottom: 32px;
      align-items: center;
      &__title {
        font-size: 20px;
      }
      &__close-btn {
        right: 16px;
        top: 16px;
      }
    }
    &__body {
      &__items {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>

<template>
  <div class="catalog-filter">
    <div class="catalog-filter__content">
      <div
        class="catalog-filter__content__back"
        @click="$emit('hide-mobile-filter')"
      >
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.69995 14L1.49995 7.7L7.69995 1.5"
            stroke="#D23C50"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Назад в каталог</span>
      </div>
      <div class="catalog-filter__item active">
        <div
          class="catalog-filter__item__title-container"
          @click="setActiveClass"
        >
          <span class="catalog-filter__item__title">Категории</span>
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.46191 1.96146L5.46191 5.96146L1.46191 1.96146"
              stroke="#606060"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-filter__item__body">
          <div
            v-for="section in sections"
            class="catalog-filter__item__subtitle"
            :class="{
              current: currentFilters.section === section.id,
            }"
            @click="setSectionFilter(section.id)"
          >
            <span>{{ section.name }}</span>
          </div>
        </div>
      </div>
      <div
        v-for="filterItem in filters"
        class="catalog-filter__item active"
        :class="filterItem.code"
      >
        <div
          class="catalog-filter__item__title-container"
          @click="setActiveClass"
        >
          <span class="catalog-filter__item__title">{{ filterItem.name }}</span>
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.46191 1.96146L5.46191 5.96146L1.46191 1.96146"
              stroke="#606060"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          <template
            v-if="
              filterItem.code === 'section' || filterItem.code === 'MATERIAL'
            "
          >
            <div class="catalog-filter__item__body">
              <div
                class="catalog-filter__item__subtitle"
                :class="{
                  current: Object.keys(currentFilters).includes(value.name),
                }"
                v-for="value in filterItem.values"
                @click="$emit('set-filter', value.name)"
              >
                <span>{{ value.label }}</span>
              </div>
            </div>
          </template>
          <template v-else-if="filterItem.code === 'BASE'">
            <div class="catalog-filter__item__body range-slider-container">
              <RangeSlider
                @set-price="
                  setPrice($event, [
                    filterItem.values.min.name,
                    filterItem.values.max.name,
                  ])
                "
              />
            </div>
          </template>
          <template v-else>
            <div class="catalog-filter__item__body tags-container">
              <Tag
                v-for="value in filterItem.values"
                :text="value.label"
                :active="Object.keys(currentFilters).includes(value.name)"
                @delete-tag="$emit('remove-filter', value.name)"
                @click="$emit('set-filter', value.name)"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="catalog-filter__footer">
      <div class="catalog-filter__footer__btn-container">
        <AlfaButton text="Показать" @click="applyFilter" />
      </div>
      <div class="catalog-filter__footer__btn-container">
        <AlfaButton
          styling="secondary"
          text="Сбросить"
          @click="$emit('reset-filters')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { RangeSlider, Tag } from "@/shared/ui";
import { AlfaButton } from "@/shared/ui/buttons";
import { useStore } from "@/services/vuex";
import { Filters } from "@/entities/Products/Filter/model";
import { Section } from "@/entities/Shop/Catalog/model";
import {CurrentFilter} from "@/entities/Products/model";
export default defineComponent({
  name: "CatalogFilter",
  components: {
    Tag,
    RangeSlider,
    AlfaButton,
  },
  emits: ["hide-mobile-filter", "filter-section", "set-price", "apply-filter", "reset-filters"],
  setup(_, { emit }) {
    const store = useStore();
    const isPhone = computed(() => store.getters["getIsPhone"]);
    const isMobile = computed(() => store.getters["getIsMobile"]);
    const sections = computed<Section[]>(
      () => store.getters["products/getSections"]
    );
    const filters = computed<Filters>(
      () => store.getters["products/getFilters"]
    );
    const currentFilters = computed<CurrentFilter>(
      () => store.getters["products/getCurrentFilters"]
    );
    const setPrice = (arr, str) => {
      let price = [];
      price[0] = str[0] + "=" + arr[0];
      price[1] = str[1] + "=" + arr[1];
      store.commit("products/addCurrentFilter", {
        name: str[0],
        value: arr[0],
      });
      store.commit("products/addCurrentFilter", {
        name: str[1],
        value: arr[1],
      });
      emit('apply-filter')
    };

    const setSectionFilter = (value) => {
      if (currentFilters.value.section === value) {
        emit('reset-filters')
      } else {
        store.commit("products/addCurrentFilter", { name: "section", value });
        applyFilter()
      }
    };

    const setActiveClass = (e) => {
      const item: HTMLElement = e.currentTarget.closest(
        ".catalog-filter__item"
      );
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    };
    const applyFilter = () => {
      emit("apply-filter");
      if (isPhone.value || isMobile.value) {
        emit("hide-mobile-filter");
      }
    };

    return {
      setActiveClass,
      sections,
      filters,
      currentFilters,
      setPrice,
      setSectionFilter,
      applyFilter,
    };
  },
});
</script>

<style lang="scss" scoped>
.catalog-filter {
  &__content {
    width: 100%;
    height: 100%;
    &__back {
      display: none;
      padding: 25px 25px 18px 24px;
      align-items: center;
      border-bottom: 1px solid #eaeaea;
      margin-bottom: 20px;
      span {
        font-size: 14px;
        line-height: 21px;
        color: $clr-zeta;
      }
      svg {
        margin-right: 21px;
      }
    }
  }

  .categories {
    margin-bottom: 22px;
    transition: margin-bottom 0.3s ease-in-out;
  }

  .subject,
  .gender,
  .age,
  .price {
    margin-bottom: 22px;
  }

  // *** MainPagePromoItem *** ///

  &__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $clr-alpha-mu;
    overflow: hidden;
    transition: padding-bottom 0.5s ease-in-out;
    margin-bottom: 22px;

    &__title-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 33px;
      cursor: pointer;
      svg {
        transition: transform 0.3s ease-in-out;
        transform: rotate(180deg);
      }
    }

    &__body {
      max-height: 0px;
      transition: max-height 0.3s ease-in-out;
    }

    &__title,
    &__subtitle span {
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      &:hover {
        color: $clr-zeta;
      }
    }

    &__subtitle.current {
      span {
        color: $clr-zeta;
      }
    }

    &__title {
      font-weight: $bold;
      font-size: 14px;
      line-height: 17px;
      color: $clr-phi;
    }

    &__subtitle {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 22px;
      span {
        font-weight: $semi-bold;
        font-size: 14px;
        line-height: 17px;
        color: $clr-phi;
      }
    }

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      & > div {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    }
  }

  &__item.active {
    padding-bottom: 22px;
    .catalog-filter__item__body {
      max-height: 1000px;
    }
    .catalog-filter__item__title-container {
      svg {
        transform: rotate(0);
      }
    }
  }
  .categories.active {
    padding-bottom: 0px;
    margin-bottom: 154px;
  }

  // *** MainPagePromoItem END *** //

  // *** Footer *** //
  &__footer {
    &__btn-container {
      margin-bottom: 12px;
      :deep .btn {
        padding: 14px;
        span {
          font-size: 16px;
          font-weight: $bold;
        }
      }
    }
  }
  // *** Footer END *** //
}
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .catalog-filter {
    background-color: white;
    min-height: 100vh;
    padding: 0 24px;
    &__content {
      &__back {
        display: flex;
      }
    }
    &__footer {
      display: flex;
      justify-content: space-between;
      &__btn-container {
        flex: 0.48;
      }
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .catalog-filter {
    padding: 0 18px;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 100vh;
    .categories {
      margin-bottom: 30px;
    }
  }
}
</style>

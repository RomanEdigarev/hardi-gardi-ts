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
      <div class="catalog-filter__item active categories">
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
        <div class="catalog-filter__item__body subtitles-container">
          <div v-for="section in sections" class="catalog-filter__item__subtitle" @click="$emit('filter-section', section.id, section.name)">
            <span>{{section.name}}</span>
          </div>
        </div>
      </div>
      <div class="catalog-filter__item active subject">
        <div
          class="catalog-filter__item__title-container"
          @click="setActiveClass"
        >
          <span class="catalog-filter__item__title">Тематика</span>
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
        <div class="catalog-filter__item__body tags-container">
          <Tag text="Динозавры" @delete-tag="() => console.log('delete tag')" />
          <Tag
            text="Домашние животные"
            @delete-tag="() => console.log('delete tag')"
          />
        </div>
      </div>
      <div class="catalog-filter__item active gender">
        <div
          class="catalog-filter__item__title-container"
          @click="setActiveClass"
        >
          <span class="catalog-filter__item__title">Пол</span>
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
        <div class="catalog-filter__item__body tags-container">
          <Tag
            text="для деовчек"
            @delete-tag="() => console.log('delete tag')"
          />
          <Tag
            text="для мальчиков"
            @delete-tag="() => console.log('delete tag')"
          />
        </div>
      </div>
      <div class="catalog-filter__item active age">
        <div
          class="catalog-filter__item__title-container"
          @click="setActiveClass"
        >
          <span class="catalog-filter__item__title">Возраст</span>
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
        <div class="catalog-filter__item__body tags-container">
          <Tag text="1+ лет" @delete-tag="() => console.log('delete tag')" />
          <Tag text="3+ лет" @delete-tag="() => console.log('delete tag')" />
        </div>
      </div>
      <div class="catalog-filter__item active price">
        <div
          class="catalog-filter__item__title-container"
          @click="setActiveClass"
        >
          <span class="catalog-filter__item__title">Цена</span>
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
        <div class="catalog-filter__item__body range-slider-container">
          <RangeSlider />
        </div>
      </div>
    </div>
    <div class="catalog-filter__footer">
      <div class="catalog-filter__footer__btn-container">
        <AlfaButton text="Показать (29)" />
      </div>
      <div class="catalog-filter__footer__btn-container">
        <AlfaButton styling="secondary" text="Сбросить" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import { RangeSlider, Tag } from "@/shared/ui";
import { AlfaButton } from "@/shared/ui/buttons";
import {FilterSection} from "@/entities/Products/Filter/model";

export default defineComponent({
  name: "CatalogFilter",
  components: {
    Tag,
    RangeSlider,
    AlfaButton,
  },
  props: {
    sections: {
      type:  Object as PropType<FilterSection[]>,
      required: true
    }
  },
  emits: ["hide-mobile-filter", "filter-section"],
  setup() {
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

    return {
      setActiveClass,
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
    margin-bottom: 154px;
  }

  .subject,
  .gender,
  .age,
  .price {
    margin-bottom: 22px;
  }

  // *** Item *** ///

  &__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $clr-alpha-mu;
    overflow: hidden;
    transition: padding-bottom 0.5s ease-in-out;

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
      max-height: 200px;
    }
    .catalog-filter__item__title-container {
      svg {
        transform: rotate(0);
      }
    }
  }

  // *** Item END *** //

  // *** Footer *** //
  &__footer {
    &__btn-container {
      margin-bottom: 12px;
    }
  }
  // *** Footer END *** //
}
@media screen and (min-width: 738px) and (max-width: 1364px), (-webkit-min-device-pixel-ratio: 3) {
  .catalog-filter {
    background-color: white;
    min-height: 100vh;
    padding: 0 24px;
    &__content {
      &__back {
        display: flex;
      }
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 736px), (-webkit-min-device-pixel-ratio: 3) {
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

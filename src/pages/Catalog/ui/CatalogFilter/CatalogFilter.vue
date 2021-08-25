<template>
  <div class="catalog-filter">
    <div class="catalog-filter__content">
      <div class="catalog-filter__item categories">
        <div class="catalog-filter__item__title-container">
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
        <div class="catalog-filter__item__subtitles-container">
          <div class="catalog-filter__item__subtitle">
            <span>Все категории</span>
          </div>
          <div class="catalog-filter__item__subtitle">
            <span>Игровые домики</span>
          </div>
          <div class="catalog-filter__item__subtitle">
            <span>Магнитные игры</span>
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5.09998C10 5.32105 9.91522 5.53476 9.75673 5.68951C9.60192 5.84795 9.38813 5.93638 9.16698 5.93638H5.83487V9.26726C5.83487 9.48833 5.74641 9.70204 5.58791 9.85679C5.4331 10.0115 5.223 10.1 5.00184 10.1C4.78069 10.1 4.5669 10.0115 4.41209 9.85679C4.25359 9.70204 4.16513 9.48833 4.16513 9.26726V5.93638H0.833026C0.611869 5.93638 0.398083 5.84795 0.243273 5.68951C0.088463 5.53476 0 5.32105 0 5.09998C0 4.8789 0.088463 4.66888 0.243273 4.51044C0.398083 4.35569 0.611869 4.26726 0.833026 4.26726H4.16513V0.936379C4.16513 0.715304 4.25359 0.501597 4.41209 0.346844C4.5669 0.188406 4.78069 0.0999756 5.00184 0.0999756C5.223 0.0999756 5.4331 0.188406 5.58791 0.346844C5.74641 0.501597 5.83487 0.715304 5.83487 0.936379V4.26726H9.16698C9.38813 4.26726 9.60192 4.35569 9.75673 4.51044C9.91522 4.66888 10 4.8789 10 5.09998Z"
                fill="#606060"
              />
            </svg>
          </div>
          <div class="catalog-filter__item__subtitle">
            <span>Пазлы</span>
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5.09998C10 5.32105 9.91522 5.53476 9.75673 5.68951C9.60192 5.84795 9.38813 5.93638 9.16698 5.93638H5.83487V9.26726C5.83487 9.48833 5.74641 9.70204 5.58791 9.85679C5.4331 10.0115 5.223 10.1 5.00184 10.1C4.78069 10.1 4.5669 10.0115 4.41209 9.85679C4.25359 9.70204 4.16513 9.48833 4.16513 9.26726V5.93638H0.833026C0.611869 5.93638 0.398083 5.84795 0.243273 5.68951C0.088463 5.53476 0 5.32105 0 5.09998C0 4.8789 0.088463 4.66888 0.243273 4.51044C0.398083 4.35569 0.611869 4.26726 0.833026 4.26726H4.16513V0.936379C4.16513 0.715304 4.25359 0.501597 4.41209 0.346844C4.5669 0.188406 4.78069 0.0999756 5.00184 0.0999756C5.223 0.0999756 5.4331 0.188406 5.58791 0.346844C5.74641 0.501597 5.83487 0.715304 5.83487 0.936379V4.26726H9.16698C9.38813 4.26726 9.60192 4.35569 9.75673 4.51044C9.91522 4.66888 10 4.8789 10 5.09998Z"
                fill="#606060"
              />
            </svg>
          </div>
          <div class="catalog-filter__item__subtitle">
            <span>Игры с бумагой</span>
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5.09998C10 5.32105 9.91522 5.53476 9.75673 5.68951C9.60192 5.84795 9.38813 5.93638 9.16698 5.93638H5.83487V9.26726C5.83487 9.48833 5.74641 9.70204 5.58791 9.85679C5.4331 10.0115 5.223 10.1 5.00184 10.1C4.78069 10.1 4.5669 10.0115 4.41209 9.85679C4.25359 9.70204 4.16513 9.48833 4.16513 9.26726V5.93638H0.833026C0.611869 5.93638 0.398083 5.84795 0.243273 5.68951C0.088463 5.53476 0 5.32105 0 5.09998C0 4.8789 0.088463 4.66888 0.243273 4.51044C0.398083 4.35569 0.611869 4.26726 0.833026 4.26726H4.16513V0.936379C4.16513 0.715304 4.25359 0.501597 4.41209 0.346844C4.5669 0.188406 4.78069 0.0999756 5.00184 0.0999756C5.223 0.0999756 5.4331 0.188406 5.58791 0.346844C5.74641 0.501597 5.83487 0.715304 5.83487 0.936379V4.26726H9.16698C9.38813 4.26726 9.60192 4.35569 9.75673 4.51044C9.91522 4.66888 10 4.8789 10 5.09998Z"
                fill="#606060"
              />
            </svg>
          </div>
          <div class="catalog-filter__item__subtitle">
            <span>Рисуй-стирай</span>
          </div>
        </div>
      </div>
      <div class="catalog-filter__item subject">
        <div class="catalog-filter__item__title-container">
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
        <div class="catalog-filter__item__tags-container">
          <Tag text="Динозавры" @delete-tag="() => console.log('delete tag')" />
          <Tag
            text="Домашние животные"
            @delete-tag="() => console.log('delete tag')"
          />
        </div>
      </div>
      <div class="catalog-filter__item gender">
        <div class="catalog-filter__item__title-container">
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
      </div>
      <div class="catalog-filter__item age">
        <div class="catalog-filter__item__title-container">
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
      </div>
      <div class="catalog-filter__item price">
        <div class="catalog-filter__item__title-container">
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
      </div>
    </div>
    <div class="catalog-filter__footer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Tag } from "@/shared/ui";

export default defineComponent({
  name: "CatalogFilter",
  components: {
    Tag,
  },
});
</script>

<style lang="scss" scoped>
.catalog-filter {
  &__filter-content {
    width: 100%;
    height: 100%;
  }

  .categories {
    margin-bottom: 176px;
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

    &__title-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 33px;
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

    &__tags-container {
      display: flex;
      flex-wrap: wrap;
      & > div {
        margin-bottom: 12px;
      }
    }
  }

  // *** Item END *** ///
}
</style>

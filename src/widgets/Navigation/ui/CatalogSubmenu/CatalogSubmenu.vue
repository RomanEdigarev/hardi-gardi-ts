<template>
  <div class="catalog-submenu">
    <div class="catalog-submenu__content-container">
      <div class="catalog-submenu__content">
        <div class="catalog-submenu__link-container">
          <div class="catalog-submenu__link">
            <div class="catalog-submenu__link-icon-container">
              <img :src="require('/public/images/static-icons/1.svg')" alt="" />
            </div>
            <a href="#" class="catalog-submenu__link-text alfa-link">
              Весь каталог
            </a>
          </div>
        </div>
        <div v-for="column in result" class="catalog-submenu__content__column">
          <div v-for="linkItem in column" class="catalog-submenu__item">
            <div class="catalog-submenu__link-container">
              <div class="catalog-submenu__link">
                <div class="catalog-submenu__link-icon-container">
                  <img
                    :src="require('/public/images/static-icons/1.svg')"
                    alt=""
                  />
                </div>
                <a
                  :href="linkItem.link"
                  class="catalog-submenu__link-text alfa-link"
                >
                  {{ linkItem.name }}
                </a>
              </div>
              <div
                v-if="linkItem.items.length > 0"
                class="catalog-submenu__sublinks-container"
              >
                <a
                  v-for="sublinkItem in linkItem.items"
                  :href="sublinkItem.link"
                  class="catalog-submenu__sublink alfa-link"
                >
                  {{ sublinkItem.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuLink } from "@/entities/Menu/model";

export default defineComponent({
  name: "CatalogSubmenu",
  props: {
    items: {
      type: Object as PropType<MenuLink[]>,
      required: true,
    },
  },
  setup({ items }) {
    const copyItems = [...(items as MenuLink[])];
    let columns = {
      0: [],
      1: [],
      2: [],
    };
    let result = [];
    const tmp = [];
    while (copyItems.length > 0) {
      tmp.push(copyItems.splice(0, 3));
    }
    tmp.forEach((arr) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i] && columns[i].push(arr[i]);
      }
    });

    for (let key in columns) {
      result.push(columns[key]);
    }

    return {
      result,
    };
  },
});
</script>

<style lang="scss" scoped>
.catalog-submenu {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 49px 0;

  // *** Containers *** //

  &__content-container {
    height: 100%;
  }

  &__links-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 42px;
  }

  &__link-icon-container {
    width: 32px;
    height: 32px;
    margin-right: 14px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__sublinks-container {
    display: flex;
    flex-direction: column;
    padding-left: 46px;
    margin-top: 14px;
  }

  // *** Containers END *** //

  &__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &__column {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    & > div:first-child {
      width: 100%;
      align-items: flex-start;
    }
  }

  &__link {
    display: flex;
    align-items: center;
  }

  &__link-text {
    font-weight: $bold;
    font-size: 18px;
    line-height: 1.22;
  }

  &__sublink {
    margin-bottom: 16px;
  }
}
</style>

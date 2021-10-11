<template>
  <div class="catalog-submenu">
    <div class="catalog-submenu__content-container">
      <div class="catalog-submenu__content">
        <div class="catalog-submenu__link-container">
          <div class="catalog-submenu__link" @click="resetFilter">
            <div class="catalog-submenu__link-icon-container">
              <img :src="require('/public/images/static-icons/1.svg')" alt="" />
            </div>
            <router-link
              to="/catalog"
              class="catalog-submenu__link-text alfa-link"
              @click="$emit('close-burger-menu')"
            >
              Весь каталог
            </router-link>
          </div>
        </div>
        <div v-for="column in result" class="catalog-submenu__content__column">
          <div v-for="linkItem in column" class="catalog-submenu__item">
            <div class="catalog-submenu__link-container">
              <div
                class="catalog-submenu__link"
                @click="setFilter(linkItem.id)"
              >
                <div class="catalog-submenu__link-icon-container">
                  <img
                    :src="require('/public/images/static-icons/1.svg')"
                    alt=""
                  />
                </div>
                <router-link
                  :to="linkItem.link.toLowerCase()"
                  class="catalog-submenu__link-text alfa-link"
                  @click="$emit('close-burger-menu')"
                >
                  {{ linkItem.name }}
                </router-link>
              </div>
              <div
                v-if="linkItem.sections.length > 0"
                class="catalog-submenu__sublinks-container"
              >
                <router-link
                  v-for="sublinkItem in linkItem.sections"
                  :to="sublinkItem.link.toLowerCase()"
                  class="catalog-submenu__sublink alfa-link"
                  @click="$emit('close-burger-menu')"
                >
                  {{ sublinkItem.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCatalogSubmenu } from "./lib";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "CatalogSubmenu",
  emits: ["close-burger-menu"],
  setup() {
    const store = useStore();
    const { result } = useCatalogSubmenu();
    const resetFilter = async () => {
      store.commit("products/resetCurrentFilters");
      await store.dispatch("products/setProductsByPage", 1);
    };
    const setFilter = async (sectionId) => {
      store.commit("products/resetCurrentFilters");
      store.commit("products/addCurrentFilter", {
        name: "section",
        value: sectionId,
      });
      await store.dispatch("products/setProductsByPage", 1);
    };

    return {
      result,
      setFilter,
      resetFilter,
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
    //align-items: center;
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
    &__column:last-child {
      .catalog-submenu__item:last-child {
        .catalog-submenu__link-container:last-child {
          margin-bottom: 0;
        }
      }
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
    :deep .alfa-link {
      font-size: 18px;
    }
  }
}
</style>

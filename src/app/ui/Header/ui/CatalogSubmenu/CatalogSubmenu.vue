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
                <div
                  v-if="isPhone && linkItem.sections.length > 0"
                  class="catalog-submenu__link-text alfa-link"
                  @click.stop="openDropdown(linkItem.id)"
                >
                  {{ linkItem.name }}
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.20652 2L5.63044 5.36956L9 2"
                      stroke="#D23C50"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <router-link
                  v-else
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
                :class="{ 'is-open': currentOpenDropdownId === linkItem.id }"
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
import { computed, defineComponent, ref } from "vue";
import { useCatalogSubmenu } from "./lib";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "CatalogSubmenu",
  emits: ["close-burger-menu"],
  setup() {
    const store = useStore();
    const { result } = useCatalogSubmenu();
    const currentOpenDropdownId = ref("");
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

    const openDropdown = (e) => {
      console.log(e);
      if (currentOpenDropdownId.value === e) {
        currentOpenDropdownId.value = "";
      } else {
        currentOpenDropdownId.value = e;
      }
    };

    return {
      result,
      setFilter,
      resetFilter,
      isPhone: computed(() => store.getters["getIsPhone"]),
      openDropdown,
      currentOpenDropdownId,
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
    padding-bottom: 60px;
  }

  &__links-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__link-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 42px;
  }
  &__link-drop {
    input {
      display: none;
    }
    input:checked ~ .catalog-submenu__sublinks-container {
      max-height: 1000px;
    }
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
    max-height: 0;
    overflow: hidden;
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
    height: 20px;
  }

  &__link-text {
    font-weight: $bold;
    font-size: 18px;
    line-height: 1.22;
    display: flex;
    align-items: center;
    svg {
      margin-left: 6px;
    }
  }

  &__sublink {
    margin-bottom: 16px;
    :deep .alfa-link {
      font-size: 18px;
    }
  }
}
.is-open {
  max-height: 1000px;
}
</style>

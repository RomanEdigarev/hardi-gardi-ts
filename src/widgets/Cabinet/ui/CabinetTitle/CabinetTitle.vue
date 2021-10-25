<template>
  <div
    class="cabinet-title__title"
    :class="{ isLogin: isAuth }"
    @click="$router.push(`${isAuth ? '/personal' : '/sign-in/login'}`)"
  >
    <Tooltip v-if="isAuth">
      <template v-slot:reference>
        <span class="cabinet-title__icon"><ProfileIcon /></span>
      </template>
      <template v-slot:content>
        <div class="tooltip-content">
          <span class="tooltip-content__name">{{ name }}</span>
          <a class="tooltip-content__link" href="">История заказов</a>
          <a class="tooltip-content__link" href="">Персональные данные</a>
          <a class="tooltip-content__link" href="">Уведомления</a>
          <span class="tooltip-content__link-out" @click="logout">Выйти</span>
        </div>
      </template>
    </Tooltip>
    <span v-else class="cabinet-title__icon"><ProfileIcon /></span>
    <span>{{ text }}</span>
  </div>
</template>

<script>
import { ProfileIcon } from "../../../../shared/ui/icons";
import Tooltip from "../../../../shared/ui/Tooltip/Tooltip";
import { computed, getCurrentInstance } from "vue";
import { useStore } from "@/services/vuex";
import { initShop } from "@/entities/Shop/lib";

export default {
  name: "CabinetTitle",
  components: {
    ProfileIcon,
    Tooltip,
  },
  props: {
    isAuth: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
  },
  setup(props, context) {
    const store = useStore();
    const text = computed(() => {
      return props.isAuth ? props.name : "Личный кабинет";
    });

    const logout = async () => {
      await store.dispatch("user/fetchLogoutUser");
      localStorage.removeItem("token");
      await initShop(store);
    };

    return {
      text,
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
.cabinet-title {
  &__title {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: $clr-phi;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    :deep path {
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      color: $clr-zeta;

      :deep path {
        opacity: 1;
        fill: $clr-zeta;
      }
    }
  }

  &__icon {
    display: inline-block;
    width: 14px;
    margin-right: 8px;
    cursor: pointer;
  }

  .isLogin {
    color: $clr-zeta;

    :deep path {
      opacity: 1;
      fill: $clr-zeta;
    }
  }

  .tooltip-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    color: $clr-phi;
    line-height: 1.75;

    &__name {
      font-weight: $semi-bold;
      padding: 6px 0;
    }

    &__link {
      padding: 6px 0;
      transition: color 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: $clr-alpha-epsilon;
      }
    }

    &__link-out {
      padding: 6px 0;
      color: $clr-zeta;

      &:hover {
        text-shadow: 0 0 1px $clr-zeta;
      }
    }
  }
}
</style>

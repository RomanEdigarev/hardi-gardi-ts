<template>
  <div class="cabinet">
    <div class="cabinet__title" :class="{ isLogin: isLogin }">
      <Tooltip v-if="isLogin">
        <template v-slot:reference>
          <span class="cabinet__icon"><ProfileIcon /></span>
        </template>
        <template v-slot:content>
          <div class="tooltip-content">
            <span class="tooltip-content__name">{{ name }}</span>
            <a class="tooltip-content__link" href="">История заказов</a>
            <a class="tooltip-content__link" href="">Персональные данные</a>
            <a class="tooltip-content__link" href="">Уведомления</a>
            <a class="tooltip-content__link-out" href="">Выйти</a>
          </div>
        </template>
      </Tooltip>
      <span v-else class="cabinet__icon"><ProfileIcon /></span>
      <span>{{ text }}</span>
    </div>
    <div class="cabinet__links">
      <span
        v-toggle-modal="{ modal: 'header-modal', name: 'search' }"
        class="cabinet__link"
        @click="$emit('show-modal', 'search')"
        ><SearchIcon
      /></span>
      <a class="cabinet__link" href="/">
        <IconWithCount>
          <template v-slot:svg-icon>
            <FavoriteIcon />
          </template>
        </IconWithCount>
      </a>
      <a class="cabinet__link" id="shop" href="/">
        <IconWithCount>
          <template v-slot:svg-icon>
            <ShopIcon />
          </template>
        </IconWithCount>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import {
  ProfileIcon,
  SearchIcon,
  FavoriteIcon,
  ShopIcon,
} from "../../shared/ui/icons";
import IconWithCount from "../../app/ui/Header/ui/IconWithCount/IconWithCount.vue";
import Tooltip from "../../shared/ui/Tooltip/Tooltip.vue";

export default defineComponent({
  name: "Cabinet",
  components: {
    ProfileIcon,
    SearchIcon,
    IconWithCount,
    FavoriteIcon,
    ShopIcon,
    Tooltip,
  },
  props: {
    isLogin: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
  },
  setup(props) {
    const text = computed(() => {
      return props.isLogin ? props.name : "Личный кабинет";
    });

    return {
      text,
    };
  },
});
</script>

<style lang="scss" scoped>
.cabinet {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

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
  }

  &__links {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__link {
    display: inline-block;
    width: 27px;
    height: 27px;
    cursor: pointer;
  }

  &__link[id="shop"] {
    transform: translateX(6px);
  }
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
</style>

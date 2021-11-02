<template>
  <div ref="toggleMenu" class="toggle-menu">
    <div ref="bg" class="toggle-menu__bg"></div>
    <div
      class="toggle-menu__item"
      :class="{ current: currentItemIndex === index }"
      v-for="(item, index) in items"
      @click="setCurrentItemIndex(item.key)"
    >
      {{ item.value }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUpdated,
  PropType,
  ref,
  watch, watchEffect,
} from "vue";
import anime from "animejs";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "ToggleMenu",
  props: {
    items: {
      type: Array as PropType<{ key: string; value: string }[]>,
      required: true,
    },
    currentItemKey: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    // const items = ["Самовывоз", "Курьер", "Почта России"];
    const store = useStore();
    const currentItemIndex = computed(() => {
      return props.currentItemKey;
    });
    const bg = ref<HTMLElement>(null);
    const toggleMenu = ref<HTMLElement>(null);
    const isPhone = computed(() => store.getters["getIsPhone"]);

    let bgWidth =ref('100%')
    let bgHeight = null;
    onMounted(() => {
      bgHeight =
        toggleMenu.value.offsetHeight / (props.items as []).length + "px";

    });


    const animation = computed(() => {
      const index = (props.items as { key: string; value: string }[]).findIndex(
        (item) => {
          const result = item.key === props.currentItemKey;
          return result;
        }
      );
      return anime({
        targets: bg.value,
        [isPhone.value ? "translateY" : "translateX"]: `${index * 100}%`,
        easing: "spring(1, 60, 11, 0)",
      });
    });
    watch(props, () => {
      animation.value.play();
    });
    watchEffect(() => {
      console.log('watch')
      if (toggleMenu.value && !isPhone.value) {
        bgWidth.value = toggleMenu.value.offsetWidth / (props.items as []).length + "px"
        bg.value.style.width = bgWidth.value;
      } else if (toggleMenu.value) {
        bgWidth.value = '100%'
        bg.value.style.width = bgWidth.value;
      }
    })
    const setCurrentItemIndex = (itemKey) => {
      emit("set-current-item", itemKey);
    };
    return {
      currentItemIndex,
      setCurrentItemIndex,
      bg,
      toggleMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
.toggle-menu {
  width: 100%;
  display: flex;
  background: $clr-kappa;
  border-radius: 16px;
  position: relative;
  margin-bottom: 23px;
  color: $clr-phi;
  &__item {
    position: relative;
    z-index: 10;
    min-width: 262px;
    width: 100%;
    padding: 22px 0;
    font-weight: $semi-bold;
    font-size: 16px;
    line-height: 1.75;
    text-align: center;
    cursor: pointer;
  }
  &__bg {
    position: absolute;
    min-width: 262px;
    width: 100%;
    height: 72px;
    background: #ffffff;
    border: 3px solid $clr-zeta;
    box-sizing: border-box;
    border-radius: 16px;
    top: 0;
    left: 0;
    transform: translateX(0%);
  }
}
.current {
  color: $clr-zeta;
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .toggle-menu {
    flex-direction: column;
    &__item {
      width: 100%;
      padding: 16px 0px;
    }
    &__bg {
      width: 100%;
      height: 60px;
    }
  }
}
</style>
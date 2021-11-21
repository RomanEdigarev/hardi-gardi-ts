<template>
  <div class="sorting">
    <div class="sorting__title">Сортировать по:</div>
    <div class="sorting__item current" @click="dropdownIsOpen = !dropdownIsOpen">
      {{map[currentSortingType]}}
      <svg
        width="11"
        height="6"
        viewBox="0 0 11 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.07715 1.07666L5.52159 4.63222L1.96604 1.07666"
          stroke="#606060"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="sorting__item">новизне</div>
    <div class="sorting__item">
      <span>цене</span>
      <div class="sorting__item__lines ascending">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="sorting__item">скидке</div>
    <transition appear @enter="enterElement" @leave="leaveElement">
      <div v-if="isPhone" v-show="dropdownIsOpen" class="sorting__dropdown">
        <div
          v-for="sortingItem in Object.entries(map)"
          :class="{ current: sortingItem[0] === currentSortingType }"
          @click="setNewSortingType(sortingItem[0])"
        >
          {{ sortingItem[1] }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "@/services/vuex";
import anime from "animejs";
export default defineComponent({
  name: "Sorting",
  setup() {
    const store = useStore();
    const currentSortingType = ref("polarity");
    const dropdownIsOpen = ref(false);
    const map = {
      polarity: "популярности",
      newness: "новизне",
      ascendingPrice: "цена по возрастанию",
      descendingPrice: "цена по убыванию",
      sales: "скидке",
    };

    const enterElement = (el, done) => {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 300,
        easing: "linear",
        complete: done,
      });
    };
    const leaveElement = (el, done) => {
      anime({
        targets: el,
        opacity: [1, 0],
        easing: "linear",
        duration: 300,
        complete: done,
      });
    };

    const setNewSortingType = (type) => {
      dropdownIsOpen.value = !dropdownIsOpen.value
      currentSortingType.value = type;
    };

    return {
      isPhone: computed(() => store.getters["getIsPhone"]),
      currentSortingType,
      map,
      setNewSortingType,
      enterElement,
      leaveElement,
      dropdownIsOpen
    };
  },
});
</script>

<style lang="scss" scoped>
.sorting {
  display: flex;
  font-weight: $regular;
  line-height: 17px;
  color: $clr-phi;
  height: 20px;
  align-items: center;
  * {
    font-size: 14px;
  }
  &__title {
    margin-right: 16px;
  }

  // *** MainPagePromoItem *** //
  &__item {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 19px;
    transition: text-shadow 0.3s ease-in-out;
    svg {
      display: none;
    }
    &:hover {
      text-shadow: 0 0 1px $clr-phi;
    }

    &__lines {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5px 0;
      margin-left: 5px;
      span {
        display: inline-block;
        border-radius: 50px;
        width: 16px;
        height: 2px;
        background-color: $clr-phi;
        transition: width 0.3s ease-in-out;
      }
    }

    &__lines.descending {
      & :nth-child(2) {
        width: 11px;
      }

      & :nth-child(3) {
        width: 6px;
      }
    }

    &__lines.ascending {
      & :nth-child(1) {
        width: 6px;
      }

      & :nth-child(2) {
        width: 11px;
      }

      & :nth-child(3) {
        width: 16px;
      }
    }
  }
  &__item.current {
    text-shadow: 0 0 1px $clr-phi;
  }
  .current {
    text-shadow: 0 0 1px $clr-phi;
  }

  // *** MainPagePromoItem END *** //
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .sorting {
    position: relative;
    &__title {
      margin-right: 6px;
    }
    &__item ~ &__item {
      display: none;
    }
    &__item:nth-child(2) {
      display: flex;
      align-items: center;
      font-weight: $semi-bold;
      svg {
        padding-top: 2px;
        margin-left: 5px;
        display: block;
      }
    }
    &__dropdown {
      top: 100%;
      left: 82px;
      z-index: 100;
      margin-top: 6px;
      position: absolute;
      height: 185px;
      width: 194px;
      background: #ffffff;
      box-shadow: 0px 12px 25px rgba(10, 26, 49, 0.12);
      border-radius: 15px;
      padding: 20px 18px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        font-size: 14px;
        line-height: 17px;
        color: #606060;
        cursor: pointer;
      }
    }
  }
}
</style>

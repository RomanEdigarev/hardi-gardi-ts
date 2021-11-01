<template>
  <div class="package" :class="{ 'is-open': isOpen }">
    <div class="package__header" @click="toggleBody">
      <div class="package__header__title">Доступна подарочная упаковка</div>
      <div class="package__header__icon">
        <svg
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 9.00146L9 2.00147L16 9.00147"
            stroke="#D23C50"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div ref="packageBody" class="package__body">
      <div class="package__body__item">
        <PackingCard
          :is-selected="true"
          packing-name="Транспортная упаковка"
          price="0"
        />
      </div>
      <div class="package__body__item">
        <PackingCard
          :is-selected="false"
          packing-name="Подарочная упаковка"
          price="250"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { PackingCard } from "@/widgets";
import anime from "animejs";

export default defineComponent({
  name: "Package",
  components: {
    PackingCard,
  },
  setup() {
    const packageBody = ref<HTMLElement>(null);
    let isOpen = ref(false);
    const closeBody = () => {
      anime({
        targets: packageBody.value,
        maxHeight: ["1000px", "0px"],
        duration: 300,
        easing: "linear",
        complete: () => {
          isOpen.value = !isOpen.value;
        },
      });
    };
    const openBody = () => {
      anime({
        targets: packageBody.value,
        maxHeight: ["0px", "1000px"],
        duration: 300,
        easing: "linear",
        complete: () => {
          isOpen.value = !isOpen.value;
        },
      });
    };
    const toggleBody = () => {
      if (isOpen.value) {
        closeBody();
      } else {
        openBody();
      }
    };

    return {
      packageBody,
      toggleBody,
      isOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
.package {
  width: 100%;
  max-width: 786px;

  // *** Header *** //
  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background-color: $clr-kappa;
    padding: 32px 44px;
    margin-bottom: 12px;
    &__title {
      font-weight: $bold;
      font-size: 15px;
      line-height: 1.6;
      color: $clr-phi;
      cursor: pointer;
    }
    &__title:hover ~ &__icon {
      transform: rotate(-180deg);
    }
    &__icon {
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: rotate(-180deg);
      }
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    display: flex;
    max-height: 0;
    overflow: hidden;
    &__item {
      margin-right: 30px;
    }
  }
  // *** Body END *** //
}
.is-open {
  .package__header__icon {
    transform: rotate(-180deg);
  }
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .package {
    &__body {
      justify-content: space-between;
      &__item {
        margin-right: 0;
      }
    }
  }
}
</style>

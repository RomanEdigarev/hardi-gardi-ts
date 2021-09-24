<template>
  <div class="personal">
    <main class="page-main">
      <div class="page-main__header">
        <PageTitle text="Здравствуйте, Ангелина!" />
      </div>
      <div class="personal__footer">
        <Details />
      </div>
      <div class="personal__header">
        <div
          v-for="(item, index) in items"
          class="personal__header__item"
          :class="{ 'current-item': index === currentItemNumber }"
          @click="currentItemNumber = index"
        >
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="personal__body">
        <component :is="items[currentItemNumber].name"></component>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { PageTitle } from "@/shared/ui";
import { History, Details, Data, Notifications } from "./ui";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "Personal",
  components: { PageTitle, History, Details, Data, Notifications },
  setup() {
    const store = useStore();
    const isMobile = computed(() => store.state.isMobile);
    const items = [
      {
        title: "История заказов",
        name: "history",
      },
      {
        title: "Персональные данные",
        name: "data",
      },
      {
        title: "Уведомления",
        name: "notifications",
      },
    ];
    const currentItemNumber = ref(0);

    return {
      currentItemNumber,
      items,
      isMobile,
    };
  },
});
</script>

<style lang="scss" scoped>
.personal {
  // *** Header *** //
  &__header {
    display: flex;
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      //width: 188px;
      padding: 20px 30px;
      height: 80px;
      background: white;
      border-radius: 25px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }
    &__item:first-child {
      border-bottom-left-radius: 0;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    width: 100%;
    padding: 30px;
    margin-top: -18px;
    max-width: 786px;
    background: $clr-tau;
    border: 6px solid $clr-kappa;
    border-radius: 25px;
    position: relative;
    z-index: 1;
  }
  // *** Body END *** //

  // *** Footer  *** //
  &__footer {
    position: sticky;
    top: 20px;
    float: right;
  }
  // *** Footer END *** //

  .current-item {
    background: #ecf0f8;
  }
}
@media screen and (max-width: 768px) {
  .personal {
    // *** Header *** //
    &__header {
      max-width: 470px;
      &__item {
        text-align: center;
      }
      &__item:last-child {
        border-bottom-right-radius: 0;
      }
    }
    // *** Header END *** //

    // *** Body *** //
    &__body {
      padding: 20px;
      max-width: 472px;
    }
    // *** Body END *** //
  }
}

@media screen and (max-width: 375px) {
  .personal {
    &__header {
      justify-content: space-between;
      &__item {
        height: 70px;
        flex-shrink: 1.5;
        padding: 0;
        font-size: 11px;
        line-height: 1.45;
        font-weight: $bold;
        color: #606060;
        justify-content: center;
        span {
          padding: 6px;
          display: inline-block;
          max-width: 95%;
        }
      }
    }
    &__footer {
      display: none;
    }
  }
}
</style>

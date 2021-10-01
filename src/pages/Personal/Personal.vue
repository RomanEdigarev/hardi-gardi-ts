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
        <div v-if="isPhone" class="personal__log-out">
          <span>Выйти</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.20003 1.06689C2.91713 1.06689 2.64582 1.17928 2.44578 1.37931C2.24574 1.57935 2.13336 1.85066 2.13336 2.13356V13.8669C2.13336 14.1498 2.24574 14.4211 2.44578 14.6211C2.64582 14.8212 2.91713 14.9336 3.20003 14.9336H11.2C11.3415 14.9336 11.4771 14.8774 11.5772 14.7774C11.6772 14.6773 11.7334 14.5417 11.7334 14.4002C11.7334 14.2588 11.6772 14.1231 11.5772 14.0231C11.4771 13.9231 11.3415 13.8669 11.2 13.8669H3.20003V2.13356H11.2C11.3415 2.13356 11.4771 2.07737 11.5772 1.97735C11.6772 1.87733 11.7334 1.74168 11.7334 1.60023C11.7334 1.45878 11.6772 1.32312 11.5772 1.2231C11.4771 1.12308 11.3415 1.06689 11.2 1.06689H3.20003ZM13.4443 5.22263C13.3442 5.12248 13.2083 5.06622 13.0667 5.06622C12.9251 5.06622 12.7892 5.12248 12.6891 5.22263C12.589 5.32277 12.5327 5.4586 12.5327 5.60023C12.5327 5.74186 12.589 5.87768 12.6891 5.97783L14.1792 7.4669H6.93336C6.79191 7.4669 6.65626 7.52309 6.55624 7.6231C6.45622 7.72312 6.40003 7.85878 6.40003 8.00023C6.40003 8.14168 6.45622 8.27733 6.55624 8.37735C6.65626 8.47737 6.79191 8.53356 6.93336 8.53356H14.1792L12.6891 10.0226C12.589 10.1228 12.5327 10.2586 12.5327 10.4002C12.5327 10.5419 12.589 10.6777 12.6891 10.7778C12.7892 10.878 12.9251 10.9342 13.0667 10.9342C13.2083 10.9342 13.3442 10.878 13.4443 10.7778L15.8443 8.37783C15.894 8.32829 15.9334 8.26943 15.9603 8.20464C15.9871 8.13984 16.001 8.07038 16.001 8.00023C16.001 7.93008 15.9871 7.86061 15.9603 7.79582C15.9334 7.73102 15.894 7.67217 15.8443 7.62263L13.4443 5.22263Z" fill="#D23C50"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
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
      isPhone: computed(() => store.getters['getIsPhone'])
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

  &__log-out {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    cursor: pointer;
    span {
      font-size: 14px;
      line-height: 21px;
      color: $clr-zeta;
      margin-right: 8px;
    }
  }

  .current-item {
    background: #ecf0f8;
  }
}

@media screen and (min-width: 769px) and (max-width: 1365px){
  .personal {
    &__header {
      max-width: 54vw;
    }
    &__body {
      max-width: 54vw;
    }
  }
}
@media screen and (min-width: 738px) and (max-width: 1364px), (-webkit-min-device-pixel-ratio: 3) {
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
        color: $clr-phi;
        justify-content: center;
        span {
          padding: 6px;
          display: inline-block;
          max-width: 95%;
        }
      }
    }
    &__body {
      padding: 9px;
    }
    &__footer {
      display: none;
    }
  }
}
</style>

<template>
  <div class="ordering">
    <div class="ordering__header">
      <router-link to="/basket" class="ordering__header__breadcrumbs">
        Вернуться к корзине
      </router-link>
      <div class="ordering__header__title">
        <PageTitle text="Оформление заказа" />
      </div>
    </div>
    <div class="ordering__body">
      <div class="ordering__body__left">
        <!-- Contacts -->
        <template v-if="!order.isLoading">
          <div class="ordering__body__left__item">
            <div class="ordering__body__left__item__title">
              1. Контактные данные
            </div>
            <div class="ordering__body__left__item__body">
              <Contacts
                v-if="order.contactPerson"
                :contact-person="order.contactPerson"
              />
            </div>
          </div>
          <!-- Contacts END -->
          <!-- Receiving -->
          <div class="ordering__body__left__item receiving">
            <div class="ordering__body__left__item__title">
              2. Способ получения
            </div>
            <div>
              <Obtaining />
            </div>
          </div>
          <!-- Receiving END -->
          <!-- Payment -->
          <div class="ordering__body__left__item payment">
            <div class="ordering__body__left__item__title">
              2. Способ оплаты
            </div>
            <div class="payment__toggle-menu">
              <ToggleMenu
                :items="paymentItems"
                :current-item-key="currentPaymentType"
                @set-current-item="setNewPayment"
              />
            </div>
          </div>
          <!-- Payment END -->
          <!-- Comments -->
          <div class="ordering__body__left__item comments">
            <div class="ordering__body__left__item__title">
              4. Комментарий к заказу
            </div>
            <textarea
              class="ordering__body__left__item__textarea"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Комментарий"
            ></textarea>
          </div>
          <!-- Comments END -->
        </template>
        <template v-else>
          <div class="loader"></div>
        </template>

        <!-- Checkbox -->
        <div class="ordering__body__checkbox" v-if="!order.isLoading">
          <Checkbox
            id="subscription"
            label-text="Я хочу получать информацию о скидках и новости"
          />
        </div>
        <!-- Checkbox END -->
      </div>
      <div class="ordering__body__right" v-if="!order.isLoading">
        <Checkout is-ordering @checkout="createOrder" :disabled="!isValid" />
      </div>
    </div>
    <div class="ordering__modal-container">
      <Goods :products="basket.products" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { PageTitle, ToggleMenu } from "@/shared/ui";
import { Checkout, Obtaining } from "@/widgets";
import { Contacts, Goods } from "./ui";
import { Checkbox } from "@/shared/ui/Inputs";
import { Basket } from "@/entities/Basket/model";
import { useStore } from "@/services/vuex";
import { Order } from "@/entities/Order/model";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Ordering",
  components: {
    PageTitle,
    Checkout,
    Contacts,
    Obtaining,
    ToggleMenu,
    Checkbox,
    Goods,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    onMounted(async () => {
      await store.dispatch("order/fetchGetOrder");
    });

    const paymentItems = [
      {
        key: "onSite",
        value: "Картой на сайте",
      },
      {
        key: "onDeliver",
        value: "При получении",
      },
    ];
    const currentPaymentType = ref("onSite");
    const order = computed<Order>(() => store.getters["order/getOrder"]);
    const isValid = ref(false);

    watch(order.value, () => {
      const { contactPerson, location, delivery } = order.value;
      if (contactPerson) {
        isValid.value =
          !!contactPerson.name &&
          !!contactPerson.email &&
          !!contactPerson.phone &&
          (delivery.current === "3" || !!location.address);
      }
    });

    const setNewPayment = (key) => {
      currentPaymentType.value = key;
      store.commit("order/setPaymentType", key);
    };
    const createOrder = async (link) => {
      await store.dispatch("order/fetchCreateOrder");
      await store.dispatch("order/fetchHistoryOrders");
      router.push(link);
    };

    return {
      paymentItems,
      basket: computed<Basket>(() => store.getters["basket/getBasket"]),
      order,
      setNewPayment,
      currentPaymentType,
      createOrder,
      isValid,
    };
  },
});
</script>

<style lang="scss" scoped>
.ordering {
  margin-top: 10px;
  position: relative;
  color: $clr-phi;

  // *** Header *** //
  &__header {
    margin-bottom: 59px;
    &__breadcrumbs {
      font-size: 13px;
      line-height: 1.85;
      margin-bottom: 16px;
      color: $clr-alpha-kappa;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    width: 100%;
    display: flex;
    position: relative;
    &__left {
      width: 100%;
      max-width: 786px;
      margin-right: 29px;
      display: flex;
      flex-direction: column;
      &__item {
        padding-bottom: 60px;
        margin-bottom: 60px;
        border-bottom: 1px solid $clr-eta;
        &__title {
          font-weight: $bold;
          font-size: 24px;
          line-height: 1.25;
          margin-bottom: 49px;
        }
        &__textarea {
          border: 1px solid #d9dce2;
          padding: 22px;
          border-radius: 16px;
          width: 100%;
          max-width: 100%;
          height: 183px;
          max-height: 183px;
          box-sizing: border-box;
          resize: none;
          &::placeholder {
            opacity: 0.5;
          }
          &:focus {
            outline: none;
          }
        }
      }
    }
    &__right {
      div {
        position: sticky;
        top: 20px;
      }
    }
  }
  // *** Body END *** //

  &__modal-container {
    position: absolute;
    left: 0;
    opacity: 0;
    display: none;
  }

  .contacts {
    &__inputs {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  .payment {
    &__toggle-menu {
      display: flex;
    }
  }

  .comments {
    border: none;
    padding: 0;
    margin-bottom: 31px;
  }

  :deep .checkout {
    &__body__subtitle {
      display: none;
    }
    #delivery {
      display: flex;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .ordering {
    &__header {
      margin-bottom: 36px;
    }
    &__body {
      flex-direction: column;
      &__left {
        margin-bottom: 30px;
        &__item {
          padding-bottom: 36px;
        }
        &__item__title {
          margin-bottom: 26px;
        }
      }
    }
    .payment__toggle-menu {
      width: 100%;
      display: block;
    }
  }
}
</style>
<style scoped lang="scss">
.loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: $clr-zeta;
  background: -moz-linear-gradient(
    left,
    $clr-zeta 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    $clr-zeta 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    $clr-zeta 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    $clr-zeta 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    $clr-zeta 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: $clr-zeta;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}
.loader:after {
  background: white;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

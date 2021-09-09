<template>
  <div class="ordering">
    <div class="ordering__header">
      <div class="ordering__header__breadcrumbs">Вернуиться к корзине</div>
      <div class="ordering__header__title">
        <PageTitle text="Оформление заказа" />
      </div>
    </div>
    <div class="ordering__body">
      <div class="ordering__body__left">
        <!-- Contacts -->
        <div class="ordering__body__left__item">
          <div class="ordering__body__left__item__title">
            1. Контактные данные
          </div>
          <div class="ordering__body__left__item__body">
            <Contacts />
          </div>
        </div>
        <!-- Contacts END -->
        <!-- Receiving -->
        <div class="ordering__body__left__item receiving">
          <div class="ordering__body__left__item__title">
            2. Сопсоб получения
          </div>
          <div>
            <Obtaining />
          </div>
        </div>
        <!-- Receiving END -->
        <!-- Payment -->
        <div class="ordering__body__left__item payment">
          <div class="ordering__body__left__item__title">2. Способ оплаты</div>
          <div class="payment__toggle-menu">
            <ToggleMenu :items="paymentItems" />
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
        <!-- Checkbox -->
        <div class="ordering__body__checkbox">
          <Checkbox
            id="subscription"
            label-text="Я хочу получать информацию о скидках и новости"
          />
        </div>
        <!-- Checkbox END -->
      </div>
      <div class="ordering__body__right">
        <Checkout is-ordering />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageTitle, ToggleMenu } from "@/shared/ui";
import { Checkout, Obtaining } from "@/widgets";
import { Contacts } from "./ui";
import { Checkbox } from "@/shared/ui/inputs";

export default defineComponent({
  name: "Ordering",
  components: {
    PageTitle,
    Checkout,
    Contacts,
    Obtaining,
    ToggleMenu,
    Checkbox,
  },
  setup() {
    const paymentItems = ["Картой на сайте", "При получении"];
    return {
      paymentItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.ordering {
  margin-top: 10px;
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
}
</style>

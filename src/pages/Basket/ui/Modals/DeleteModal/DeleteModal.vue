<template>
  <div class="delete-modal">
    <div class="delete-modal__header">
      <div class="delete-modal__header__title">Удаление товара</div>
    </div>
    <div class="delete-modal__body">
      <div class="delete-modal__body__text">
        Вы точно хотите удалить товар из корзины? Отменить действие будет
        невозможно
      </div>
    </div>
    <div class="delete-modal__footer">
      <div class="delete-modal__footer__btn" data-close-modal>
        <AlfaButton text="Удалить" @click="deleteProduct" />
      </div>
    </div>
    <div class="delete-modal__close-btn" data-close-modal>
      <BetaButton styling="beta-gamma-btn">
        <CloseIcon />
      </BetaButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AlfaButton, BetaButton } from "@/shared/ui/buttons";
import { CloseIcon } from "@/shared/ui/icons";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "DeleteModal",
  components: {
    AlfaButton,
    BetaButton,
    CloseIcon,
  },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const deleteProduct = async () => {
      await store.dispatch("basket/changeQuantity", {
        id: props.productId as string,
        quantity: 0,
      });
    };
    return {
      deleteProduct,
    };
  },
});
</script>

<style lang="scss" scoped>
.delete-modal {
  width: 100%;
  height: 100%;
  padding: 60px;
  background-color: $clr-tau;
  border-radius: 25px;
  position: relative;

  // *** Header *** //
  &__header {
    margin-bottom: 18px;
    &__title {
      font-weight: $bold;
      font-size: 28px;
      line-height: 1.21;
      text-align: center;
      color: $clr-nu;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    margin-bottom: 32px;
    &__text {
      font-size: 15px;
      line-height: 1.6;
      text-align: center;
      color: $clr-phi;
    }
  }

  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    text-align: center;
    &__btn {
      margin: 0 auto;
      width: 282px;
    }
  }
  // *** Footer END *** //

  &__close-btn {
    width: 36px;
    height: 36px;
    position: absolute;
    top: 14px;
    right: 14px;
  }
}
@include phone {
  .delete-modal {
    padding: 40px 26px 26px 26px;
    &__header {
      &__title {
        font-size: 22px;
      }
    }
    &__body {
      margin-bottom: 26px;
      &__text {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
}
</style>

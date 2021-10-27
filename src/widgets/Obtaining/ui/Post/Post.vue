<template>
  <transition appear @enter="enterElement" @leave="leaveElement">
    <div class="post">
      <div class="post__item" v-for="item in postItems">
        <ObtainingItem :title="item.name" :name="item.type" :id="item.id">
          <template v-slot:content>
            <div class="post__body">
              <div class="post__body__text" v-html="item.comment"></div>
              <ObtainingInfo title="Стоимость" :value="item.price" />
              <div class="post__body__subtext">
                <!--            При заказе от 2000 руб. доставка будет бесплатной-->
              </div>
              <ObtainingInfo title="Срок доставки" :value="item.time" />
            </div>
            <div class="post__footer">
              <div class="post__footer__input">
                <VInput
                  :id="`delivery_${item.id}_index`"
                  placeholder="Индекс"
                  name="deliveryIndex"
                  :mask="/^[1-6]\d{0,5}$/"
                  type="text"
                />
              </div>
              <div class="post__footer__input">
                <VInput
                  :id="`delivery_${item.id}_address`"
                  placeholder="Адрес доставки"
                  name="deliveryAddress"
                />
              </div>
            </div>
          </template>
        </ObtainingItem>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { ObtainingInfo, ObtainingItem } from "@/features/Obtaining/ui";
import { VInput } from "@/shared/ui/inputs";
import { useStore } from "@/services/vuex";
import { OrderDeliveryVariant } from "@/entities/Order/model";
import anime from "animejs";
import * as yup from "yup";
import { useForm } from "vee-validate";

export default defineComponent({
  name: "Post",
  components: {
    ObtainingItem,
    ObtainingInfo,
    VInput,
  },
  setup() {
    const store = useStore();
    const postItems = computed<OrderDeliveryVariant[]>(
      () => store.getters["order/getPostDeliveryItems"]
    );

    const schema = yup.object({
      deliveryAddress: yup.string().required("Обязательное поле"),
      deliveryIndex: yup.string().required("Обязательное поле").matches(/^[1-6]\d{0,5}$/,'Неверный формат'),
    });
    const { setFieldTouched } = useForm({
      validationSchema: schema,
    });
    const enterElement = (el, done) => {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 600,
        easing: "linear",
        complete: done,
      });
    };
    const leaveElement = (el, done) => {
      anime({
        targets: el,
        opacity: [1, 0],
        easing: "linear",
        duration: 600,
        complete: done,
      });
    };
    return {
      postItems,
      enterElement,
      leaveElement,
    };
  },
});
</script>

<style lang="scss" scoped>
.post {
  background: $clr-tau;
  border: 1px solid $clr-upsilon;
  border-radius: 16px;
  padding: 32px;
  &__item {
    margin-bottom: 10px;
  }
  color: $clr-phi;

  // *** Body *** //
  &__body {
    position: relative;
    margin-bottom: 20px;
    &__text {
      margin-bottom: 20px;
      font-weight: normal;
      font-size: 15px;
      line-height: 22px;
    }
    &__subtext {
      font-size: 13px;
      line-height: 1.7;
      margin-bottom: 10px;
    }
    &__btn {
      width: 282px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    width: 98%;
    margin: 0 auto 28px auto;
    &__input {
      margin-bottom: 54px;
    }
  }
  // *** Footer END *** //
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .post {
    &__body {
      margin-top: 14px;
      &__btn {
        width: 100%;
        margin-top: 22px;
        position: static;
        :deep button > span {
          font-weight: 600;
          font-size: 15px;
          line-height: 28px;
        }
      }
    }
    &__footer {
      margin-bottom: 26px;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .post {
    padding: 14px;
    background: #ffffff;
    border: 1px solid #d9dce2;
    box-sizing: border-box;
    border-radius: 16px;
    div:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
<template>
  <transition appear @enter="enterElement" @leave="leaveElement">
    <div class="courier">
      <div class="courier__item" v-for="item in courierItems">
        <ObtainingItem :title="item.name" :name="item.type" :id="item.id">
          <template v-slot:content>
            <div class="courier__body">
              <div class="courier__body__text" v-html="item.comment">

              </div>
              <ObtainingInfo title="Стоимость" :value="item.price" />
              <div class="courier__body__subtext">
                <!--            При заказе от 2000 руб. доставка будет бесплатной-->
              </div>
              <ObtainingInfo title="Срок доставки" :value="item.time" />
            </div>
            <div class="courier__footer">
              <VInput :id="`delivery_${item.id}`" placeholder="Адрес доставки" name="deliveryAddress" @change="changeAddress"/>
            </div>
          </template>
        </ObtainingItem>
      </div>
    </div>
  </transition>

</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import {ObtainingInfo, ObtainingItem} from "@/features/Obtaining/ui";
import {VInput} from "@/shared/ui/inputs";
import {useStore} from "@/services/vuex";
import {OrderDeliveryVariant} from "@/entities/Order/model";
import anime from "animejs";
import * as yup from "yup";
import {useForm} from "vee-validate";

export default defineComponent({
  name: "Courier",
  components: {
    ObtainingItem,
    ObtainingInfo,
    VInput
  },
  setup() {
    const store = useStore()
    const courierItems = computed<OrderDeliveryVariant[]>(() => store.getters['order/getCourierDeliveryItems'])
    const changeAddress = (e) => {
      store.commit('order/setAddress', e.target.value)
    }
    const schema = yup.object({
      deliveryAddress: yup.string().required("Обязательное поле"),
    });
    const { submitForm } = useForm({
      validationSchema: schema,
    });
    submitForm()
    const enterElement = (el, done) => {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 600,
        easing: "linear",
        complete: done,
      });
    }
    const leaveElement = (el, done) => {
      anime({
        targets: el,
        opacity: [1, 0],
        easing: "linear",
        duration: 600,
        complete: done,
      });
    }
    return {
      courierItems,
      enterElement,
      leaveElement,
      changeAddress
    }
  }
})
</script>

<style lang="scss" scoped>
.courier {
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
  }
  // *** Footer END *** //
}
@media screen and (min-width: 320px) and (max-width: 736px),
(-webkit-min-device-pixel-ratio: 3) {
  .courier {
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
@media screen and (min-width: 320px) and (max-width: 736px), (-webkit-min-device-pixel-ratio: 3){
  .courier {
    padding: 14px;
    background: #FFFFFF;
    border: 1px solid #D9DCE2;
    box-sizing: border-box;
    border-radius: 16px;
    div:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
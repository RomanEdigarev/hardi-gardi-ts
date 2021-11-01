<template>
  <div class="self">
    <ObtainingItem :title="name" :name="type" :id="id">
      <template v-slot:content>
        <div class="self__body">
          <div class="self__body__text" v-html="comment">

          </div>
          <ObtainingInfo title="Стоимость" :value="price" />
          <div class="self__body__subtext">
<!--            При заказе от 2000 руб. доставка будет бесплатной-->
          </div>
          <ObtainingInfo title="Срок доставки" :value="time" />
          <div class="self__body__btn">
            <AlfaButton text="Выбрать пункт выдачи" />
          </div>
        </div>
        <div class="self__footer">
          <div class="self__footer__select">
            <div class="self__footer__select__icon">
              <svg
                width="20"
                height="26"
                viewBox="0 0 20 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4117 10.4336C19.4129 8.31312 18.7141 6.25154 17.4237 4.5689C16.1333 2.88625 14.3234 1.67668 12.2752 1.12795C10.2269 0.579226 8.05483 0.722038 6.09605 1.53422C4.13736 2.34636 2.50156 3.78239 1.44256 5.61938C1.37271 5.74 1.3274 5.87324 1.30924 6.01143C1.29107 6.14968 1.30044 6.29015 1.33679 6.42476C1.37315 6.55937 1.43577 6.68545 1.52106 6.79576C1.60635 6.90606 1.71262 6.9984 1.83375 7.06746L1.83406 7.06764C2.07679 7.20545 2.36417 7.24167 2.6335 7.1684C2.90283 7.09513 3.13225 6.9183 3.2717 6.67651L3.27178 6.67637C4.09666 5.24338 5.37117 4.12249 6.89779 3.48743C8.4244 2.85236 10.1179 2.73858 11.7157 3.16372C13.3136 3.58886 14.7266 4.52919 15.7357 5.83895C16.7448 7.1486 17.2937 8.75449 17.2975 10.4078C17.2975 13.0412 15.858 15.7423 14.1651 18.0038C12.5538 20.1563 10.7344 21.8824 9.78219 22.7323C9.02417 22.0698 7.71832 20.8447 6.40434 19.2868C5.00911 17.6326 3.61365 15.6135 2.84939 13.5023L2.84915 13.5017C2.75366 13.2407 2.55925 13.0279 2.308 12.9092C2.05676 12.7905 1.76887 12.7755 1.50665 12.8674L1.5065 12.8675C1.3751 12.9137 1.25412 12.9854 1.15053 13.0785L1.28364 13.2266L1.15052 13.0785C1.04692 13.1716 0.962744 13.2842 0.902822 13.41C0.842901 13.5357 0.808419 13.6721 0.801359 13.8112C0.794299 13.9503 0.814799 14.0894 0.861681 14.2206L0.861889 14.2211C1.90343 17.1071 3.90989 19.7462 5.67845 21.6826C7.4438 23.6155 8.98549 24.8625 9.12951 24.9732C9.31593 25.1201 9.54636 25.2 9.78372 25.2C10.0216 25.2 10.2525 25.1198 10.4391 24.9723L10.4392 24.9723C10.6296 24.8217 12.8658 23.0117 15.0564 20.3352C17.2414 17.6655 19.4116 14.0969 19.4117 10.4336ZM19.4117 10.4336L19.2117 10.4335H19.4117C19.4117 10.4335 19.4117 10.4336 19.4117 10.4336ZM7.29175 14.163C8.02937 14.6558 8.89658 14.9189 9.78372 14.9189C10.9733 14.9189 12.1142 14.4463 12.9554 13.6052C13.7966 12.764 14.2691 11.6231 14.2691 10.4335C14.2691 9.54635 14.0061 8.67913 13.5132 7.94151C13.0204 7.20388 12.3198 6.62897 11.5002 6.28948C10.6806 5.94999 9.77874 5.86117 8.90865 6.03424C8.03857 6.20731 7.23934 6.6345 6.61204 7.2618C5.98474 7.8891 5.55755 8.68833 5.38447 9.55842C5.2114 10.4285 5.30023 11.3304 5.63972 12.15C5.97921 12.9696 6.55412 13.6701 7.29175 14.163ZM11.1011 12.4051C10.7112 12.6657 10.2527 12.8047 9.78372 12.8047C9.15482 12.8047 8.55168 12.5549 8.10699 12.1102C7.66229 11.6655 7.41246 11.0624 7.41246 10.4335C7.41246 9.96449 7.55153 9.50603 7.81209 9.11608C8.07265 8.72613 8.44299 8.4222 8.87628 8.24272C9.30957 8.06325 9.78635 8.01629 10.2463 8.10779C10.7063 8.19928 11.1288 8.42512 11.4605 8.75675C11.7921 9.08837 12.0179 9.51089 12.1094 9.97087C12.2009 10.4309 12.154 10.9076 11.9745 11.3409C11.795 11.7742 11.4911 12.1446 11.1011 12.4051Z"
                  fill="#D9DCE2"
                  stroke="#D9DCE2"
                  stroke-width="0.4"
                />
              </svg>
            </div>
            <span>{{cityName}}</span>
          </div>
        </div>
      </template>
    </ObtainingItem>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import { ObtainingInfo, ObtainingItem } from "../ui";
import { AlfaButton } from "@/shared/ui/buttons";
import {OrderDeliveryVariant} from "@/entities/Order/model";
import {useStore} from "@/services/vuex";

export default defineComponent({
  name: "SelfObtainingItem",
  components: {
    ObtainingItem,
    ObtainingInfo,
    AlfaButton,
  },
  props: {
    item: {
      type: Object as PropType<OrderDeliveryVariant>
    },
  },
  setup(props) {
    const store = useStore()
    const cityName = computed(() => store.getters['city/getCurrentCityName'])
    return {
      ...(props.item as OrderDeliveryVariant),
      cityName
    }
  }
});
</script>

<style lang="scss" scoped>
.self {
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
    &__select {
      position: relative;
      width: 100%;
      border: 1px solid #d9dce2;
      box-sizing: border-box;
      border-radius: 16px;
      padding: 16px 60px;
      &__icon {
        position: absolute;
        left: 26px;
        top: 50%;
        transform: translateY(-50%);
      }
      span {
        cursor: pointer;
        font-size: 15px;
        line-height: 24px;
      }
    }
  }
  // *** Footer END *** //
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .self {
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
</style>

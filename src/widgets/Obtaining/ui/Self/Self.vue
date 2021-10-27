<template>
  <transition appear @enter="enterElement" @leave="leaveElement">
  <div class="obtaining-self">
    <div v-for="item in selfItems" class="obtaining-self__item">
      <SelfObtainingItem
        name="self"
       :item="item"
      />
    </div>
  </div>
  </transition>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import { SelfObtainingItem } from "@/features/Obtaining";
import {useStore} from "@/services/vuex";
import {OrderDeliveryVariant} from "@/entities/Order/model";
import anime from "animejs";

export default defineComponent({
  name: "Self",
  components: { SelfObtainingItem },
  setup() {
    const store = useStore()
    const selfItems = computed<OrderDeliveryVariant[]>(() => store.getters['order/getSelfDeliveryItems'])

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
      selfItems,
      enterElement,
      leaveElement
    }
  }
});
</script>

<style lang="scss" scoped>
.obtaining-self {
  background: $clr-tau;
  border: 1px solid $clr-upsilon;
  border-radius: 16px;
  padding: 32px;
  &__item {
    margin-bottom: 10px;
  }
}
@media screen and (min-width: 320px) and (max-width: 736px), (-webkit-min-device-pixel-ratio: 3){
  .obtaining-self {
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

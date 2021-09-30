<template>
  <div class="obtaining-self">
    <div class="obtaining-self__item">
      <SelfObtainingItem
        name="self"
        title="Самовывоз из пункта выдачи ХардиГарди"
        id="hardi"
      />
    </div>
    <div class="obtaining-self__item">
      <SelfObtainingItem name="self" title="Пункт выдачи СДЭК" id="sdek" />
    </div>
    <div class="obtaining-self__item">
      <SelfObtainingItem
        name="self"
        title="Пункт выдачи Boxberry (пример доп. пункта доставки)"
        id="boxberry"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SelfObtainingItem } from "@/features/Obtaining";

export default defineComponent({
  name: "Self",
  components: { SelfObtainingItem },
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
@media screen and (max-width: 376px){
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

<template>
  <div class="child__body">
    <div class="child__body__inputs">
      <div class="child__body__item">
        <VInput
          :name="`childs[${idx}].name`"
          id="childName"
          placeholder="Имя"
          label-text="Имя"
        />
      </div>
      <div class="child__body__item">
        <DateInput :name="`childs[${idx}].birth`" :value="child.birth" />
      </div>
    </div>
    <div class="child__body__checkbox">
      <RadioInput
        :name="`childs[${idx}].gender`"
        value="male"
        :id="`childMale_childs[${idx}]`"
        text="Мальчик"
        :checked="child.gender === 'male'"
      />

      <RadioInput
        :name="`childs[${idx}].gender`"
        value="female"
        :id="`childFemale_childs[${idx}]`"
        text="Девочка"
        :checked="child.gender === 'female'"
      />
      <button class="child__body__checkbox__delete-btn">
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.4463 8.83887L8.83969 19.4455"
            stroke="#D23C50"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.83887 8.83887L19.4455 19.4455"
            stroke="#D23C50"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span @click="$emit('remove-child', idx, child.id)">Удалить</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { DateInput, RadioInput, VInput } from "@/shared/ui/inputs";
import { UserChild } from "@/entities/User/model";

export default defineComponent({
  name: "Child",
  components: { VInput, DateInput, RadioInput },
  props: {
    child: {
      type: Object as PropType<UserChild>,
    },
    idx: {
      type: Number,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.child {
  &__body {
    width: 100%;
    &__inputs {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      column-gap: 16px;
      margin-bottom: 28px;
    }
    &__checkbox {
      display: flex;
      gap: 56px;
      position: relative;
      margin-bottom: 42px;
      &__delete-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        span {
          font-size: 15px;
          line-height: 1.87;
          color: $clr-zeta;
        }
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .child {
    &__body {
      &__item {
        margin-bottom: 26px;
      }
      &__item:last-child {
        margin-bottom: 12px;
      }
      &__inputs {
        margin-bottom: 0;
      }
      &__checkbox {
        flex-direction: column;
        gap: 0;
        margin-bottom: 26px;
        div {
          margin-left: -18px;
        }
      }
    }
  }
}
</style>

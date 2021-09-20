<template>
  <div class="change-child">
    <div class="change-child__header">
      <div class="change-child__header__title">Мои дети</div>
    </div>
    <div class="change-child__body">
      <div class="change-child__body__inputs">
        <div class="change-child__body__item">
          <VInput
            name="childName"
            id="childName"
            placeholder="Имя"
            label-text="Имя"
            :validation="isFirstName"
          />
        </div>
        <div class="change-child__body__item">
          <DateInput name="userChildDate" />
        </div>
      </div>
      <div class="change-child__body__checkbox">
        <RadioInput
          name="childSex"
          value="male"
          id="childMale"
          text="Мальчик"
        />

        <RadioInput
          name="childSex"
          value="female"
          id="childFemale"
          text="Девочка"
        />
        <button class="change-child__body__checkbox__delete-btn">
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
          <span>Удалить</span>
        </button>
      </div>
    </div>
    <div class="change-child__footer">
      <button class="change-child__footer__btn">Добавить ребенка</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Checkbox, DateInput, RadioInput, VInput } from "@/shared/ui/inputs";
import * as yup from "yup";
import { useForm } from "vee-validate";

export default defineComponent({
  name: "ChangeChild",
  components: { VInput, DateInput, Checkbox, RadioInput },
  setup() {
    const { values, setFieldValue } = useForm();
    setFieldValue("childSex", "");
    setFieldValue("date", "");
    const isFirstName = yup.string().required("Обязательное поле");
    return {
      isFirstName,
      values,
    };
  },
});
</script>

<style lang="scss" scoped>
.change-child {
  width: 100%;
  max-width: 726px;
  color: $clr-phi;
  // *** Header *** //
  &__header {
    margin-bottom: 22px;
    &__title {
      font-weight: $bold;
      font-size: 16px;
      line-height: 1.5;
    }
  }
  // *** Header END *** //

  // *** Body *** //
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
          color: $brickRed;
        }
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    width: 100%;
    &__btn {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 14.4px 0;
      border: 3px dashed $cherub;
      box-sizing: border-box;
      border-radius: 16px;
      font-weight: $semi-bold;
      font-size: 16px;
      line-height: 1.75;
      color: $brickRed;
    }
  }
  // *** Footer END *** //
}
</style>

<template>
  <div class="date-input">
    <div class="date-input__label">Дата рождения</div>
    <datepicker
      ref="date"
      v-model="picked"
      :locale="ru"
      inputFormat="dd.MM.yyyy"
    />
    <img class="date-input__icon" src="./assets/icon.svg" alt="calendar" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Datepicker from "vue3-datepicker";
import { ref, watch } from "vue";
import { ru } from "date-fns/locale";
import format from "date-fns/format";
import { useField } from "vee-validate";

export default defineComponent({
  name: "DateInput",
  components: { Datepicker },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const picked = ref<Date>(new Date());
    const date = ref(null);
    const { handleChange } = useField("date");
    onMounted(() => {
      (date.value.inputRef as HTMLInputElement).setAttribute(
        props.name as string,
        "date"
      );
    });

    watch(picked, () => {
      handleChange(format(picked.value as Date, "dd.MM.yyyy"));
    });

    return {
      picked,
      ru,
      handleChange,
      date,
    };
  },
});
</script>

<style lang="scss">
.date-input {
  width: 100%;
  height: 72px;
  position: relative;
  color: $clr-phi;

  &__label {
    position: absolute;
    top: 11px;
    left: 24px;
    z-index: 1;
    font-weight: $semi-bold;
    font-size: 14px;
    line-height: 1.57;
    display: flex;
    align-items: center;
    color: #6e7191;
  }

  &__icon {
    position: absolute;
    top: 24px;
    right: 24px;
  }

  .v3dp {
    &__datepicker {
      width: 100%;
      height: 100%;
      --vdp-heading-size: auto;
      --vdp-selected-bg-color: #d23c50;
      --vdp-hover-bg-color: #d23c50;
    }

    &__input_wrapper {
      width: 100%;
      height: 100%;
      input {
        cursor: pointer;
        color: inherit;
        width: 100%;
        height: 100%;
        border: 2px solid #d9dce2;
        border-radius: 16px;
        padding-top: 33px;
        padding-left: 24px;
        padding-bottom: 11px;
        font-size: 16px;
        line-height: 1.75;
      }
    }

    &__popout {
      color: inherit;
      display: block;
      padding: 0;
      width: 100%;
      margin-top: 16px;
      border: 1px solid #d9dce2;
      box-sizing: border-box;
      border-radius: 16px;
    }

    &__heading {
      padding: 19px 27px;
      border-bottom: 1px solid #d9dce2;
      margin-bottom: 31px;
      &__center {
        text-transform: capitalize;
        font-weight: $regular;
        font-size: 14px;
        line-height: 1.57;
        /* identical to box height, or 157% */
      }
    }

    &__body {
      padding: 0 12.5px 27px 12.5px;
    }
    &__subheading {
      font-weight: 300;
      font-size: 10px;
      line-height: 1.8;
      text-transform: uppercase;
      color: #828282;
      opacity: 0.5;
    }

    &__divider {
      display: none;
    }

    &__elements {
      grid-auto-rows: 40px;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      color: #00194c;
      button {
        padding: 0;
        span {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
        }
      }
    }
  }
}
</style>

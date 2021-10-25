<template>
  <div class="change-child">
    <div class="change-child__header">
      <div class="change-child__header__title">Мои дети</div>
    </div>
    <Child
      v-for="(field, idx) in fields"
      :key="field.key"
      :child="fields[idx].value"
      :idx="idx"
      @remove-child="removeChild"
    />
    <div class="change-child__footer">
      <button
        class="change-child__footer__btn"
        @click="push({ name: '', birth: new Date(), gender: 'male' })"
      >
        Добавить ребенка
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";
import Child from "./Child.vue";
import { useForm, useFieldArray } from "vee-validate";
import * as yup from "yup";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "ChangeChild",
  components: { Child },
  props: {
    childs: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    const arrayChilds = computed(() => {
      return [...(props.childs as any[])];
    });
    const removeChild = (idx, childId) => {
      remove(idx);
      emit("remove-child", childId);
    };

    const schema = yup.object().shape({
      childs: yup.array().of(
        yup.object().shape({
          name: yup.string().required("Обязательное поле"),
          birth: yup.string().required("Обязательное поле"),
          gender: yup.string().required("Обязательное поле"),
        })
      ),
    });

    const { handleSubmit, values } = useForm({
      validationSchema: schema,
      initialValues: {
        childs: arrayChilds.value,
      },
    });
    const { remove, push, fields } = useFieldArray("childs");

    const onSubmit = handleSubmit((values) => {
      emit("set-childs", values.childs);
    });
    watch(values, () => {
      console.log(values);
      onSubmit();
    });
    return {
      fields,
      push,
      remove,
      onSubmit,
      removeChild,
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
          color: $clr-zeta;
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
      color: $clr-zeta;
    }
  }
  // *** Footer END *** //
}

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .change-child {
    max-width: 410px;
    &__body {
      &__inputs {
        grid-template-columns: 1fr;
        row-gap: 30px;
      }
      &__checkbox {
        gap: 30px;
        :deep label {
          padding: 16px 0 16px 56px;
        }
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .change-child {
    &__body__checkbox {
      flex-direction: column;
      gap: 0px;
    }
  }
}
</style>

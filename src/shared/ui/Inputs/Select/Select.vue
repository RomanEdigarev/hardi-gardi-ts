<template>
  <div
    class="multiselect__container"
    :class="{ dirty: !!value, disabled: isDisabled }"
  >
    <Multiselect
      tabindex="0"
      v-model="modelValue"
      :options="options"
      placeholder="Placeholder"
      :disabled="isDisabled"
      @change="changeValue"
    >
      <!-- Custom Caret -->
      <template v-slot:caret>
        <div class="caret">
          <CheckboxCaret />
        </div>
      </template>
    </Multiselect>
    <span class="multiselect__label">{{ labelText }}</span>
  </div>
</template>

<script lang="ts">
import Multiselect from "@vueform/multiselect";
import { CheckboxCaret } from "../../icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "select",
  components: {
    Multiselect,
    CheckboxCaret,
  },
  props: {
    labelText: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const changeValue = (value) => {
      emit("update:modelValue", value);
    };

    return {
      changeValue,
    };
  },
});
</script>

<style
  src="../../../../../node_modules/@vueform/multiselect/themes/default.css"
></style>
<style lang="scss">
.multiselect__container {
  position: relative;
  width: 100%;
  height: 100%;

  // Caret style
  .caret {
    position: absolute;
    height: 16px;
    top: 50%;
    right: 8%;
    transform: translateY(-50%);
    transform-origin: 50% 25% 0;
    transition: transform 0.3s ease-in-out;
  }

  // Custom multiselect style
  .multiselect {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 16px;

    &:focus {
      box-shadow: 0 0 0 5px rgba(95, 115, 170, 0.2);
    }

    &-input {
      width: 100%;
      height: 100%;
      padding: 22px 24px;
      font-size: 16px;
      font-weight: 400;
      color: $clr-phi;
      border: 2px solid $clr-upsilon;
      border-radius: 16px;
      transition: border 0.3s ease-in-out;
      outline: none;
      background-color: $clr-tau;

      &:hover {
        border: 2px solid $clr-nu;
        border-radius: 16px;
      }
    }

    &-single-label {
      transition: padding-top 0.3s ease-in-out;
    }

    &-placeholder,
    &-single-label {
      padding-left: 24px;
    }

    &-options {
      border-radius: 16px;
      margin-top: 16px;
      padding: 8px 0;
    }

    &-option {
      padding: 6px 24px;
      color: $clr-phi;
      line-height: 1.75;
    }

    &-option.is-selected {
      background-color: $clr-kappa;
    }

    &-option.is-pointed {
      background-color: $clr-kappa;
    }
  }

  .is-open {
    .multiselect-input {
      border-radius: 16px;
    }

    .caret {
      transform: rotateZ(180deg);
    }
  }

  .multiselect__label {
    color: $clr-alpha-alpha;
    font-weight: $semi-bold;
    position: absolute;
    left: 26px;
    top: 15%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
}

.multiselect__container.dirty {
  .multiselect-single-label {
    padding-top: 33px;
    padding-bottom: 11px;
  }

  .multiselect__label {
    left: 26px;
    top: 15%;
    opacity: 1;
  }
}

.disabled {
  opacity: 0.5;
  .multiselect-input {
    cursor: default;
    &:hover {
      border: 2px solid $clr-upsilon;
    }
  }
}
</style>

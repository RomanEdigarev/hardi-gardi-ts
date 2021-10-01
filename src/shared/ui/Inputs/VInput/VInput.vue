<template>
  <div
    class="container"
    :class="{
      focused: isFocused,
      dirty: meta.dirty || errors.length > 0,
      success: isSuccess,
      error: errors.length > 0,
      disabled: isDisabled,
    }"
  >
    <input
      ref="input"
      class="input"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :value="value"
      @input="handleChange"
      @change="handleChange"
      @blur="handleChange"
      :disabled="isDisabled"
    />
    <label class="label" :for="id">{{ labelText || placeholder }}</label>
    <span class="close-btn">
      <BetaButton @click="clearInput" styling="beta-gamma-btn">
        <CloseIcon />
      </BetaButton>
    </span>
    <span class="message">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useField } from "vee-validate";
import { BetaButton } from "@/shared/ui/buttons";
import { CloseIcon } from "@/shared/ui/icons";

export default defineComponent({
  name: "VInput",
  components: {
    BetaButton,
    CloseIcon,
  },
  props: {
    id: String,
    labelText: String,
    isSuccess: Boolean,
    value: { type: String, default: "" },
    isError: Boolean,
    isDisabled: Boolean,
    placeholder: String,
    type: String,
    name: { type: String, required: true },
    validation: {
      type: Object,
      default: {},
    },
  },
  setup(props, { emit }) {
    const input = ref(null);
    const isFocused = ref(false);
    const isDirty = ref(false);

    const clearInput = () => {
      input.value.focus();
      emit("clear-input");
    };

    const onBlur = () => {
      isFocused.value = false;
      if (input.value.value) {
        isDirty.value = true;
      } else {
        isDirty.value = false;
      }
    };

    const {
      value,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
      errors,
    } = useField(props.name as string, props.validation, {
      initialValue: props.value,
      validateOnValueUpdate: false,
    });

    return {
      clearInput,
      onBlur,
      input,
      isFocused,
      isDirty,
      handleChange,
      handleBlur,
      errorMessage,
      value,
      meta,
      errors,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}

.label {
  opacity: 0;
  position: absolute;
  top: 15%;
  font-weight: $semi-bold;
  left: 26px;
  z-index: 1;
  color: #6e7191;
  transition: opacity 0.3s ease-in-out;
}

.message {
  position: absolute;
  left: 0;
  bottom: -8px;
  font-weight: 600;
  transform: translateY(100%);
  opacity: 0;
  transition: color, opacity 0.3s ease-in-out;
}

.input {
  width: 100%;
  height: 100%;
  padding: 22px 24px;
  font-size: 16px;
  font-weight: 400;
  color: $clr-phi;
  border: 2px solid #d9dce2;
  border-radius: 16px;
  transition: border, padding 0.3s ease-in-out;

  &::placeholder {
    color: #a0a3bd;
  }

  &:hover {
    border: 2px solid #5f73aa;
    border-radius: 16px;
  }

  &:focus {
    outline: none;
    border: 2px solid #5f73aa;
    box-shadow: 0 0 0 5px rgba(95, 115, 170, 0.2);
    padding-top: 33px;
    padding-bottom: 11px;

    &::placeholder {
      color: $clr-phi;
    }
  }
}

.input:focus ~ .close-btn,
.input:focus ~ .label {
  opacity: 100%;
}

.close-btn {
  opacity: 0;
  width: 15px;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  transition: opacity 0.3s ease-in-out;

  :deep button {
    opacity: 100%;
  }

  :deep path {
    stroke: $clr-phi;
  }
}

.focused,
.dirty {
  .label {
    opacity: 100%;
  }
  .input {
    padding-top: 33px;
    padding-bottom: 11px;
  }
}

.dirty.success {
  .input {
    border: 2px solid #00ba88;
    background: #f2fffb;
  }

  .label,
  .message {
    opacity: 1;
    color: #00966d;
  }

  .close-btn {
    :deep path {
      stroke: #00ba88;
    }
  }
}

.dirty.error {
  .input {
    border: 2px solid #e1176d;
    background: #fff5f9;
  }

  .label,
  .message {
    opacity: 1;
    color: #e1176d;
  }

  .close-btn {
    :deep path {
      stroke: #e1176d;
    }
  }
}

.container.disabled {
  opacity: 50%;
  .input {
    border: none;
  }
}
</style>

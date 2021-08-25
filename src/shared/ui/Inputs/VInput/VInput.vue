<template>
  <div
    class="container"
    :class="{
      focused: isFocused,
      dirty: isDirty,
      success: isSuccess,
      error: isError,
      disabled: isDisabled,
    }"
  >
    <label class="label" :for="id">{{ labelText }}</label>
    <input
      ref="input"
      class="input"
      type="text"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @change="$emit('update:modelValue', $event.target.value)"
      @focus="isFocused = true"
      @blur="onBlur"
      :disabled="isDisabled"
    />
    <span class="close-btn">
      <BetaButton @click="clearInput" styling="beta-gamma-btn">
        <CloseIcon />
      </BetaButton>
    </span>
    <span class="message">Message</span>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import BetaButton from "../../buttons/BetaButton/BetaButton.vue";
import { CloseIcon } from "../../icons";

export default defineComponent({
  name: "VInput",
  components: {
    BetaButton,
    CloseIcon,
  },
  props: {
    id: String,
    labelText: String,
    modelValue: String,
    isSuccess: Boolean,
    isError: Boolean,
    isDisabled: Boolean,
    placeholder: String
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

    return {
      clearInput,
      onBlur,
      input,
      isFocused,
      isDirty,
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
  color: #606060;
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
      color: #606060;
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
    stroke: #606060;
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

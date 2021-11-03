<template>
  <div class="container">
    <label :for="id" class="label">{{ labelText }}</label>
    <input
      class="input"
      ref="input"
      :id="id"
      type="checkbox"
      :checked="isChecked"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :disabled="isDisabled"
      @click="check"
    />
    <div
      class="checkbox"
      :class="{ focused: isFocused, checked: isChecked, unchecked: !isChecked }"
      @click="check"
    >
      {{ value }}
      <CheckboxIcon v-if="isChecked" class="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";
import { CheckboxIcon } from "@/shared/ui/icons";

export default defineComponent({
  name: "Checkbox",
  components: {
    CheckboxIcon,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const isFocused = ref(false);
    const isChecked = ref(false);
    const input = ref(null);

    const check = () => {
      if (!props.isDisabled) {
        isChecked.value = !isChecked.value;
        emit("update:modelValue", isChecked.value);
      }
    };

    onMounted(() => {
      isChecked.value = props.modelValue;
    });

    return {
      isFocused,
      input,
      isChecked,
      check,
    };
  },
  methods: {
    test() {
      console.log(this.isChecked);
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.label {
  cursor: pointer;
}

.input {
  width: 0px;
  display: none;
}

.checkbox {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  margin-right: 10px;
}

.checked {
  background-color: $clr-zeta;
  &:hover {
    background-color: $clr-chi;
  }
}

.unchecked {
  background-color: $clr-omega;
  &:hover {
    background-color: $clr-eta;
  }
}

.icon {
  width: 10px;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.input:disabled ~ .checkbox {
  opacity: 0.5;
  cursor: default;

  &:hover {
    .checked {
      background-color: $clr-zeta;
    }
    .unchecked {
      background-color: $clr-omega;
    }
  }
}

.focused.checked {
  box-shadow: 0 0 0 5px $clr-psi;
}
.focused.unchecked {
  box-shadow: 0 0 0 5px $clr-theta;
}
</style>

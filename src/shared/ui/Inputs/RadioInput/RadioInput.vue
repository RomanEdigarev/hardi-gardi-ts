<template>
  <div class="radio-input">
    <input
      ref="input"
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="checked"
      @change="toggle"
    />
    <label :for="id">{{ text }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useField } from "vee-validate";

export default defineComponent({
  name: "RadioInput",
  emits: ["toggle"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
    },
    value: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { handleChange } = useField(props.name as string, undefined, {
      type: "radio",
    });

    const toggle = (e) => {
      emit("toggle", props.id);
      handleChange(e);
    };

    return {
      toggle,
    };
  },
});
</script>

<style lang="scss" scoped>
.radio-input {
  color: $clr-phi;
  label {
    position: relative;
    border-radius: 16px;
    display: flex;
    align-items: center;
    padding: 18px 0 18px 69px;
    cursor: pointer;
    font-size: 16px;
    //margin-bottom: 10px;
    &:after {
      content: "";
      width: 32px;
      height: 32px;
      background-color: $clr-omega;
      position: absolute;
      top: 50%;
      left: 19px;
      transform: translateY(-50%);
      border: 8px solid $clr-omega;
      border-radius: 50%;
      box-sizing: border-box;
    }
    span {
      display: inline-block;
    }
  }
  input {
    display: none;
  }
  input:checked + label:after {
    background-color: transparent;
    border-color: $clr-zeta;
  }
}
</style>

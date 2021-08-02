import Checkbox from "./Checkbox.vue";
import { ref } from "vue";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
export default {
  title: "ui/Inputs/Checkbox",
  component: {
    Checkbox,
  },
  argTypes: {},
  decorators: [withKnobs],
};

export const CheckboxTemplate = (args) => ({
  components: {
    Checkbox,
  },
  props: {
    id: {
      default: text("id", "123"),
    },
    labelText: {
      default: text("labelText", "label"),
    },
    isDisabled: {
      default: boolean("isDisabled", false),
    },
  },
  setup() {
    const modelValue = ref(false);
    const changeValue = () => {
      console.log(modelValue.value);
    };
    return {
      modelValue,
      changeValue,
    };
  },
  template: `
        <div>
          <Checkbox v-bind="$props" v-model="modelValue" @update:model-value="changeValue"/>
        </div> 
    `,
});

import VInput from "./VInput.vue";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { ref } from "vue";

export default {
  title: "ui/inputs/VInput",
  component: {
    VInput,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const InputTemplate = (args) => ({
  components: {
    VInput,
  },
  props: {
    labelText: {
      default: text("labelText", "label"),
    },
    isSuccess: {
      default: boolean("isSuccess", false),
    },
    isError: {
      default: boolean("isError", false),
    },
    isDisabled: {
      default: boolean("isDisabled", false),
    },
  },
  setup() {
    const modelValue = ref("");
    const clearInput = () => {
      modelValue.value = "";
    };
    return { modelValue, clearInput };
  },
  template: `
        <div style="width: 384px; height: 72px">
          <VInput v-bind="$props" @clear-input="clearInput" v-model="modelValue" @update:model-value="changeValue"/>
        </div> 
    `,
  methods: {
    changeValue: action("change-value"),
  },
});

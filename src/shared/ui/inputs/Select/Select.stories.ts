import Select from "./Select.vue";
import { array, boolean, text, withKnobs } from "@storybook/addon-knobs";
import { ref } from "vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "ui/inputs/Select",
  component: {
    Select,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const SelectTemplate = () => ({
  components: {
    Select,
  },
  props: {
    labelText: {
      default: text("labelText", "label"),
    },
    options: {
      default: array("options", ["Russia", "USA", "Germany"]),
    },
    isDisabled: {
      default: boolean("isDisabled", false),
    },
  },
  setup() {
    const modelValue = ref(null);

    return {
      modelValue,
    };
  },
  template: `
      <div style="width: 384px; height: 72px">
        <Select :label-text="$props.labelText" v-model="modelValue" 
                :options="options" 
                :is-disabled="isDisabled"
                @update:model-value="changeValue"/>
      </div>
    `,
  methods: {
    changeValue: action("change-value"),
  },
});

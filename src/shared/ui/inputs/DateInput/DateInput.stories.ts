import DateInput from "./DateInput.vue";
import { withKnobs } from "@storybook/addon-knobs";
export default {
  title: "ui/inputs/DateInput",
  component: {
    DateInput,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const dateInput = (args) => ({
  components: {
    DateInput,
  },
  template: `
    <div style="width: 384px; height: 72px; background-color: white">
          <DateInput v-bind="$props" v-model="modelValue" @update:model-value="changeValue"/>
        </div> 
    `,
});

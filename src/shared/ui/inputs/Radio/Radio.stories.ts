import Radio from "./Radio.vue";
import { withKnobs } from "@storybook/addon-knobs";
export default {
  title: "ui/inputs/Radio",
  component: {
    Radio,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const radio = (args) => ({
  components: {
    Radio,
  },
  template: `
    <div style="width: 384px; height: 72px; background-color: white">
          <Radio v-bind="$props" v-model="modelValue" @update:model-value="changeValue"/>
        </div> 
    `,
});

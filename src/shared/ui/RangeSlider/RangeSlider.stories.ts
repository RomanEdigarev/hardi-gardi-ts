import RangeSlider from "./RangeSlider.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "ui/RangeSlider",
  component: {
    RangeSlider,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const rangeSlider = () => ({
  components: {
    RangeSlider,
  },
  template: `
        <div style="width: 274px; height: 93px;">
          <RangeSlider />
        </div> 
    `,
});

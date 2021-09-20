import RadioInput from "./RadioInput.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "ui/inputs/RadioInput",
  component: {
    RadioInput,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const radioInput = () => ({
  components: {
    RadioInput,
  },
  template: `
      <div style="width:721px; height: auto; background-color: white;">
        <RadioInput text="title" name="name" id="id" value="test"/>
      </div>
    `,
});

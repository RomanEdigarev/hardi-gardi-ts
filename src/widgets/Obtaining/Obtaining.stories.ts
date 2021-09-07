import Obtaining from "./Obtaining.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "widgets/Obtaining",
  component: {
    Obtaining,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const obtaining = () => ({
  components: {
    Obtaining,
  },
  template: `
      <div style="width:786px; height: auto; background-color: white;">
        <Obtaining />
      </div>
    `,
});

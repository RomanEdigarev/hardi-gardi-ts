import Self from "./Self.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "widgets/Obtaining/ui/Self",
  component: {
    Self,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const self = () => ({
  components: {
    Self,
  },
  template: `
      <div style="width:786px; height: auto; background-color: white;">
        <Self />
      </div>
    `,
});

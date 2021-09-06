import Package from "./Package.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "pages/Basket/ui/Package",
  component: {
    Package,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const pack = () => ({
  components: {
    Package,
  },
  template: `
      <div style="width:786px; height: auto; background-color: white;">
        <Package />
      </div>
    `,
});

import Goods from "./Goods.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "pages/Ordering/ui/modals/Goods",
  component: {
    Goods,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const goods = () => ({
  components: {
    Goods,
  },
  setup() {},
  template: `
      <div style="width:582px; height: auto;">
        <Goods />
      </div>
    `,
});

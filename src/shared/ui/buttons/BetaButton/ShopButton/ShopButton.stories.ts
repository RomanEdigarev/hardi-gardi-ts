import ShopButton from "./ShopButton.vue";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "ui/buttons/BetaButton/Shop",
  component: {
    ShopButton,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Shop = () => ({
  components: {
    ShopButton,
  },
  props: {
    isPending: {
      default: boolean("isPending", false),
    },
    isDisabled: {
      default: boolean("isDisabled", false),
    },
    isConfirm: {
      default: boolean("isConfirm", false),
    },
    isActive: {
      default: boolean("isActive", false),
    },
  },
  template: `
    <div style="width: 60px; height: 60px;">
     <ShopButton v-bind="$props"/>
    </div>
  `,
});

import FavoriteButton from "./FavoriteButton.vue";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "ui/buttons/BetaButton/Favorite",
  component: {
    FavoriteButton,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Favorite = () => ({
  components: {
    FavoriteButton,
  },
  props: {
    isPending: {
      default: boolean("isPending", false),
    },
    isDisabled: {
      default: boolean("isDisabled", false),
    },
    isActive: {
      default: boolean("isActive", false),
    },
  },
  template: `
    <div style="width: 60px; height: 60px;">
     <FavoriteButton v-bind="$props"/>
    </div>
  `,
});

import Social from "./Social.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "ui/Social",
  component: {
    Social,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const SocialTemplate = () => ({
  components: {
    Social,
  },
  template: `
        <div style="width: 274px; height: 93px;">
          <Social />
        </div> 
    `,
});

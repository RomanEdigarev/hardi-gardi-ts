import Home from "./Home.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "pages/Home",
  component: {
    Home,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const home = () => ({
  components: {
    Home,
  },
  template: `
    <div style="width:100%; max-width: 1195px; height: 816px; background-color: transparent;">
      <Home />
    </div>
    `,
});

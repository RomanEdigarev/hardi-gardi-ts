import Prolog from "./Prolog.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Body/Prolog",
  component: {
    Prolog,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const prolog = () => ({
  components: {
    Prolog,
  },
  template: `
    <div style="width:100%; max-width: 1195px; height: 816px; background-color: transparent;">
      <Prolog />
    </div>
    `,
});

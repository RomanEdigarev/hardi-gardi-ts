import Card from "./Card.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "widgets/Cards/Card",
  component: {
    Card,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const CardTemplate = () => ({
  components: {
    Card,
  },
  template: `
    <div style="width: 276px; height: 454px;">
      <Card />
    </div>
    `,
});

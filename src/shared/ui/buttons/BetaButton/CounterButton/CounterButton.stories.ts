import CounterButton from "./CounterButton.vue";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "ui/buttons/BetaButton/Counter",
  component: {
    CounterButton,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Counter = () => ({
  components: {
    CounterButton,
  },
  props: {
    isPlus: {
      default: boolean("isPlus", true),
    },
  },
  template: `
    <div style="width: 44px; height: 44px;">
     <CounterButton v-bind="$props"/>
    </div>
  `,
});

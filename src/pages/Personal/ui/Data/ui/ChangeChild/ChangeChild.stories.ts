import ChangeChild from "./ChangeChild.vue";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "pages/Personal/ui/Data/ui/ChangeChild",
  component: ChangeChild,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const changeChild = (args) => ({
  components: {
    ChangeChild,
  },
  props: {
    isPayment: {
      default: boolean("isPayment", false),
    },
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white;">
     <ChangeChild v-bind="$props"/>
    </div>
  `,
  methods: {},
});

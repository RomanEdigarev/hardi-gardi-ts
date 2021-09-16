import Details from "./Details.vue";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "pages/Personal/ui/Details",
  component: Details,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const details = (args) => ({
  components: {
    Details,
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
     <Details v-bind="$props"/>
    </div>
  `,
  methods: {},
});

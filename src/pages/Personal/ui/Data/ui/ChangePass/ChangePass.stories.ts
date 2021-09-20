import ChangePass from "./ChangePass.vue";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "pages/Personal/ui/Data/ui/ChangePass",
  component: ChangePass,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const changePass = (args) => ({
  components: {
    ChangePass,
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
     <ChangePass v-bind="$props"/>
    </div>
  `,
  methods: {},
});

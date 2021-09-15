import RecoveryPassModal from "./RecoveryPassModal.vue";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "pages/Sign In/ui/RecoveryPassModal",
  component: RecoveryPassModal,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const recoveryPassModal = (args) => ({
  components: {
    RecoveryPassModal,
  },
  props: {
    isSuccess: {
      default: boolean("isSuccess", false),
    },
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: transparent;">
     <RecoveryPassModal v-bind="$props"/>
    </div>
  `,
  methods: {},
});

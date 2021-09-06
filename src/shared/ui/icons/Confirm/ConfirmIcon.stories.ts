import ConfirmIcon from "./ConfirmIcon.vue";

export default {
  title: "ui/icons/Confirm",
  component: ConfirmIcon,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => ({
  components: {
    ConfirmIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <ConfirmIcon v-bind="args"/>  
  `,
});

export const Icon = Template.bind({});

import ArrowIcon from "./ArrowIcon.vue";

export default {
  title: "ui/icons/Arrow",
  component: ArrowIcon,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => ({
  components: {
    ArrowIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <ArrowIcon v-bind="args"/>  
  `,
});

export const Icon = Template.bind({});

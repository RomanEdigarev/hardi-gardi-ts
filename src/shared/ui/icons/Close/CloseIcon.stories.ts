import CloseIcon from "./CloseIcon.vue";

export default {
  title: "src/ui/icons/Close",
  component: CloseIcon,
};

const Template = (args) => ({
  components: {
    CloseIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <CloseIcon v-bind="args"/>  
  `,
});

export const Icon = Template.bind({});

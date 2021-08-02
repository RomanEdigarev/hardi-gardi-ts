import SlideArrowIcon from "./SlideArrowIcon.vue";

export default {
  title: "src/ui/icons/SlideArrowIcon",
  component: SlideArrowIcon,
};

const Template = (args) => ({
  components: {
    SlideArrowIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <SlideArrowIcon v-bind="args"/>  
  `,
});

export const Icon = Template.bind({});

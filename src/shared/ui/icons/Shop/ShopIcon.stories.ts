import ShopIcon from "./ShopIcon.vue";

export default {
  title: "src/ui/icons/Shop",
  component: ShopIcon,
};

const Template = (args) => ({
  components: {
    ShopIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <ShopIcon v-bind="args"/>  
  `,
});

export const Icon = Template.bind({});

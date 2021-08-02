import FavoriteIcon from "./FavoriteIcon.vue";

export default {
  title: "src/ui/icons/Favorite",
  component: FavoriteIcon,
};

const Template = (args) => ({
  components: {
    FavoriteIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <FavoriteIcon v-bind="args"/>  
  `,
});

export const Icon = Template.bind({});

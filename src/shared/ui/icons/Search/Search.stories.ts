import SearchIcon from "./SearchIcon.vue";

export default {
  title: "src/ui/icons/Search",
  component: SearchIcon,
};

export const Icon = (args) => ({
  components: {
    SearchIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <SearchIcon v-bind="args"/>  
  `,
});

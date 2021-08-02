import PlusIcon from "./PlusIcon.vue";

export default {
  title: "src/ui/icons/Plus",
  component: PlusIcon,
};

export const Icon = (args) => ({
  components: {
    PlusIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <PlusIcon />  
  `,
});

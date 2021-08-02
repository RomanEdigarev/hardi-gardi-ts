import DeleteIcon from "./DeleteIcon.vue";

export default {
  title: "src/ui/icons/Delete",
  component: DeleteIcon,
};

const Template = (args) => ({
  components: {
    DeleteIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <DeleteIcon v-bind="args"/>  
  `,
});

export const Icon = Template.bind({});

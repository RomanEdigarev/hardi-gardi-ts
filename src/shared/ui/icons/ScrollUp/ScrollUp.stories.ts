import ScrollUp from "./ScrollUp.vue";

export default {
  title: "ui/icons/ScrollUp",
  component: ScrollUp,
};

export const scrollUp = (args) => ({
  components: {
    ScrollUp,
  },
  setup() {
    return { args };
  },
  template: `
    <ScrollUp v-bind="args"/>
  `,
});

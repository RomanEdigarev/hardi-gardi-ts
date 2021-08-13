import Header from "./Header.vue";

export default {
  title: "app/Header",
  component: Header,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const header = (args) => ({
  components: {
    Header,
  },
  setup() {
    return { args };
  },
  template: `
     <Header />
  `,
  methods: {},
});

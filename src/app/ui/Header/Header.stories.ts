import Header from "./Header.vue";

export default {
  title: "Header",
  component: Header,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Template = (args) => ({
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

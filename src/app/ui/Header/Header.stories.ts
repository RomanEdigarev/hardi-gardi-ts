import Header from "./Header.vue";
import HeaderForPhone from "./HeaderForPhone.vue";

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

export const headerForPhone = (args) => ({
  components: {
    HeaderForPhone,
  },
  setup() {
    return { args };
  },
  template: `
     <HeaderForPhone />
  `,
});

import Navigation from "./Navigation.vue";

export default {
  title: "features/Navigation",
  component: Navigation,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const navigation = (args) => ({
  components: {
    Navigation,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 542px; height: 100px; background-color: white; padding: 24px 0 ">
     <Navigation />
    </div>
  `,
  methods: {},
});

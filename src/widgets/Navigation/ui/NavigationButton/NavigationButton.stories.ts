import NavigationButton from "./NavigationButton.vue";

export default {
  title: "features/Navigation/ui/NavigationButton",
  component: NavigationButton,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Template = (args) => ({
  components: {
    NavigationButton,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="padding-left: 25%">
      <NavigationButton />
    </div>
  `,
  methods: {},
});

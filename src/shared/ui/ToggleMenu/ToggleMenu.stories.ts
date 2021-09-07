import ToggleMenu from "./ToggleMenu.vue";
import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "ui/ToggleMenu",
  component: {
    ToggleMenu,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const toggleMenu = (args: { items: [] }) => ({
  components: {
    ToggleMenu,
  },
  props: {
    text: {
      default: text("text", "для девочек"),
    },
  },
  setup() {
    return { args };
  },
  template: `
        <div style="display: inline-block">
          <ToggleMenu v-bind="args" />
        </div> 
    `,
  methods: {
    deleteToggleMenu: action("delete-ToggleMenu"),
  },
});

toggleMenu.args = {
  items: ["Самовывоз", "Курьер", "Почта России"],
};

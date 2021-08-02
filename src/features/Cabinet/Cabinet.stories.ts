import Cabinet from "./Cabinet.vue";
import { boolean, text } from "@storybook/addon-knobs";

export default {
  title: "features/Cabinet",
  component: Cabinet,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const cabinet = (args) => ({
  components: {
    Cabinet,
  },
  props: {
    isLogin: {
      default: boolean("isLogin", false),
    },
    name: {
      default: text("name", "Ангелина"),
    },
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 150px; height: 100px; background-color: white; padding: 24px 0; margin-left: 30%">
     <Cabinet v-bind="$props"/>
    </div>
  `,
  methods: {},
});

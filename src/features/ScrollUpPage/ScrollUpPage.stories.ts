import ScrollUpPage from "./ScrollUpPage.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "features/ScrollUpPage",
  component: ScrollUpPage,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const scrollUpPage = (args) => ({
  components: {
    ScrollUpPage,
  },
  template: `
    <div style="width: 542px; height: 100px; background-color: white; padding: 24px 0 ">
     <ScrollUpPage/>
    </div>
  `,
  methods: {},
});

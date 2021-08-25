import PageTitle from "./PageTitle.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "ui/PageTitle",
  component: {
    PageTitle,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const pageTitle = () => ({
  components: {
    PageTitle,
  },
  props: {
    text: {
      default: text("text", "Заголовок страницы"),
    },
  },
  template: `
          <PageTitle :text="$props.text"/>
    `,
});

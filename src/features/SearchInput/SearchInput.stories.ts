import SearchInput from "./SearchInput.vue";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { ref } from "vue";

export default {
  title: "features/SearchInput",
  component: {
    SearchInput,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const searchInput = (args) => ({
  components: {
    SearchInput,
  },
  props: {},
  setup() {},
  template: `
        <div style="width: 786px; height: 60px">
          <SearchInput/>
        </div> 
    `,
});

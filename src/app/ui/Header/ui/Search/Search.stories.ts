import Search from "./Search.vue";
import SearchModalPhone from "./SearchModalPhone.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "app/Header/ui/Search",
  component: {
    Search,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const search = (args) => ({
  components: {
    Search,
  },
  props: {},
  setup() {},
  template: `
        <div style="width: 786px; height: 60px">
          <Search/>
        </div> 
    `,
});

export const searchModalPhone = (args) => ({
  components: {
    SearchModalPhone,
  },
  props: {},
  setup() {},
  template: `
        <div style="width: 100%; height: 60px">
          <SearchModalPhone/>
        </div> 
    `,
});

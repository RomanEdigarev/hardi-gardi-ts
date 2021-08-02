import Tag from "./Tag.vue";
import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "ui/Tag",
  component: {
    Tag,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const TagTemplate = (args) => ({
  components: {
    Tag,
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
          <Tag v-bind="$props" :text="$props.text" @delete-tag="deleteTag"/>
        </div> 
    `,
  methods: {
    deleteTag: action("delete-tag"),
  },
});

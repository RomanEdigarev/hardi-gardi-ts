import PromotionSection from "./PromotionSection.vue";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "widgets/sections/PromotionSection",
  component: PromotionSection,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const promotionSectionStories = (args) => ({
  components: {
    PromotionSection,
  },
  props: {
    isSimple: {
      default: boolean("isSimple", false),
    },
  },
  setup() {
    return { args };
  },
  template: `
    <div>
      <PromotionSection v-bind="$props"/>
    </div>
  `,
  methods: {},
});

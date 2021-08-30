import PromotionSection from "./PromotionSection.vue";

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
  setup() {
    return { args };
  },
  template: `
    <div>
      <PromotionSection />
    </div>
  `,
  methods: {},
});

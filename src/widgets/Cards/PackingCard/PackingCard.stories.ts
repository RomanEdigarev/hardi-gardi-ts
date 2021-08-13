import PackingCard from "./PackingCard.vue";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "widgets/Cards/PackingCard",
  component: {
    PackingCard,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const packingCard = () => ({
  components: {
    PackingCard,
  },
  props: {
    packingName: {
      default: text("packingName", "Транспортная упаковка"),
    },
    price: {
      default: number("price", 250),
    },
    isSelected: {
      default: boolean("isSelected", false),
    },
  } ,
  template: `
    <div style="width: 276px; height: 454px;">
      <PackingCard v-bind="$props"  />
    </div>
    `,
});

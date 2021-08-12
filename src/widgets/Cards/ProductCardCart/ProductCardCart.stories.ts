import ProductCardCart from "./ProductCardCart.vue";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "widgets/Cards/ProductCards/Cart",
  component: {
    ProductCardCart,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const Card = () => ({
  components: {
    ProductCardCart,
  },
  props: {
    isSearchResult: {
      default: boolean("isSearchResult", false),
    },
  },
  template: `
    <div style="width: 276px; height: 472px; background: transparent">
      <ProductCardCart v-bind="$props"/>
    </div>
    `,
});

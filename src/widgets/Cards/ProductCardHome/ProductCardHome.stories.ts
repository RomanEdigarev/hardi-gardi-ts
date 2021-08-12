import ProductCardHome from "./ProductCardHome.vue";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "widgets/Cards/ProductCards/Home",
  component: {
    ProductCardHome,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const Home = () => ({
  components: {
    ProductCardHome,
  },
  props: {
    isReverse: {
      default: boolean("isReverse", false),
    },
  },
  template: `
    <div style="width: 582px; height: 390px; background: transparent">
      <ProductCardHome :is-reverse="isReverse"/>
    </div>
    `,
});

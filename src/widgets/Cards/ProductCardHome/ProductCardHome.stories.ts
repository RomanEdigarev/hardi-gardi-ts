import ProductCardHome from "./ProductCardHome.vue";
import ProductCardHomePhone from "./ProductCardHomePhone.vue";
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

export const homeProductCard = () => ({
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

export const homeProductCardPhone = () => ({
  components: {
    ProductCardHomePhone,
  },
  props: {
    isReverse: {
      default: boolean("isReverse", false),
    },
  },
  template: `
    <div style="width: 582px; height: 390px; background: transparent">
      <ProductCardHomePhone :is-reverse="isReverse"/>
    </div>
    `,
});

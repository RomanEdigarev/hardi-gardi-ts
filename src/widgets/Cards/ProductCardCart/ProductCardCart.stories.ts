import ProductCard from "./ProductCardCart.vue";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "widgets/Cards/ProductCards/Basket",
  component: {
    ProductCard,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const productCard = () => ({
  components: {
    ProductCard,
  },
  props: {
    toModal: { default: boolean("toModal", false) },
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:786px; height: auto; background-color: white;">
        <ProductCard v-bind="$props"/>
      </div>
    `,
});

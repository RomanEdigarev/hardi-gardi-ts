import ProductCard from "./ProductCard.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Product/lib";

export default {
  title: "pages/Basket/ui/ProductCard",
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
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:786px; height: auto; background-color: white;">
        <ProductCard />
      </div>
    `,
});

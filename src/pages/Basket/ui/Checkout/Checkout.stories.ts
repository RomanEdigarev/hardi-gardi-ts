import Checkout from "./Checkout.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Product/lib";

export default {
  title: "pages/Basket/ui/Checkout",
  component: {
    Checkout,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const checkout = () => ({
  components: {
    Checkout,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:378px; height: auto; background-color: white;">
        <Checkout />
      </div>
    `,
});

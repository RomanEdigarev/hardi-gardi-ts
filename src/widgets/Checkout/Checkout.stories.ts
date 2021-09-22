import Checkout from "./Checkout.vue";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "widgets/Checkout",
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
  props: {
    isOrdering: {
      default: boolean("isOrdering", false),
    },
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:378px; height: auto; background-color: white;">
        <Checkout v-bind="$props"/>
      </div>
    `,
});

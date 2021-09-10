import OrderInfo from "./OrderInfo.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Product/lib";

export default {
  title: "pages/Payment/ui/OrderInfo",
  component: {
    OrderInfo,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const orderInfo = () => ({
  components: {
    OrderInfo,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:auto; height: auto; background-color: white;">
        <OrderInfo/>
      </div>
    `,
});

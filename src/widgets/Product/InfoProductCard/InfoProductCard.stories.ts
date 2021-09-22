import InfoProductCard from "./InfoProductCard.vue";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "widgets/Product/ui/InfoProductCard",
  component: { InfoProductCard },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const infoProductCard = () => ({
  components: {
    InfoProductCard,
  },
  setup() {
    const { product } = useProduct();
    const isSimple = boolean("isSimple", false);
    return {
      isSimple,
      product,
    };
  },
  template: `
      <div style="width: 582px; height: 390px; background: transparent">
        <InfoProductCard v-bind="product" bg-color="#FFEDC6" :is-simple="isSimple"/>
      </div>
    `,
});

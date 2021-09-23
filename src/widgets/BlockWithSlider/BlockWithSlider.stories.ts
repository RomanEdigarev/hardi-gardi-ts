import BlockWithSlider from "./BlockWithSlider.vue";
import BlockWithSliderPhone from "./BlockWithSliderPhone.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "widgets/BlockWithSlider",
  component: {
    BlockWithSlider,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const blockWithSlider = () => ({
  components: {
    BlockWithSlider,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
    <div style="background: transparent">
      <BlockWithSlider :products="[product, product]" title="Наши Бестселлеры"/>
    </div>
    `,
});

export const blockWithSliderPhone = () => ({
  components: {
    BlockWithSliderPhone,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
    <div style="background: transparent">
      <BlockWithSliderPhone :products="[product, product]" title="Наши Бестселлеры"/>
    </div>
    `,
});

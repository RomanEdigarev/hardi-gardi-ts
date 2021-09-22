import Slider from "./Slider.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "pages/Text Page/ui/Slider",
  component: {
    Slider,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const slider = () => ({
  components: {
    Slider,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:786px; height: auto; background-color: white;">
        <Slider/>
      </div>
    `,
});

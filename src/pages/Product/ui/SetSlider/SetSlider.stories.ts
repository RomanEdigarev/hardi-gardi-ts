import SetSlider from "./SetSlider.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Product/lib";

export default {
  title: "pages/Product/ui/SetSlider",
  component: {
    SetSlider,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const setSlider = () => ({
  components: {
    SetSlider,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:auto; height: auto; background-color: white;">
        <SetSlider title="Заголовок"/>
      </div>
    `,
});

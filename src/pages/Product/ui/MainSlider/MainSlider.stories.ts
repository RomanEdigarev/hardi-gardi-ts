import MainSlider from "./MainSlider.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Product/lib";

export default {
  title: "pages/Product/ui/MainSlider",
  component: {
    MainSlider,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const mainSlider = () => ({
  components: {
    MainSlider,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:582px; height: auto; background-color: white;">
        <MainSlider title="Заголовок" :with-home-cards="true"/>
      </div>
    `,
});

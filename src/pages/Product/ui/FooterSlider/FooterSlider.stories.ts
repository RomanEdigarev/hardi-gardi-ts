import FooterSlider from "./FooterSlider.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "pages/Product/ui/FooterSlider",
  component: {
    FooterSlider,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const footerSlider = () => ({
  components: {
    FooterSlider,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:582px; height: auto; background-color: white;">
        <FooterSlider title="Заголовок" :with-home-cards="true"/>
      </div>
    `,
});

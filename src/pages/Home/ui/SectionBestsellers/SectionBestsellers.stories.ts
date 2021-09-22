import SectionBestsellers from "./SectionBestsellers.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "pages/Home/ui/SectionBestsellers",
  component: {
    SectionBestsellers,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const sectionBestSellers = () => ({
  components: {
    SectionBestsellers,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:100%; max-width: 1195px; height: 600px; background-color: transparent;">
        <SectionBestsellers :product="product"/>
      </div>
    `,
});

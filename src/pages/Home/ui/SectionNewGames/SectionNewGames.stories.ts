import SectionNewGames from "./SectionNewGames.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "pages/Home/ui/SectionNewGames",
  component: {
    SectionNewGames,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const sectionNewGames = () => ({
  components: {
    SectionNewGames,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:100%; max-width: 1195px; height: auto; background-color: transparent;">
        <SectionNewGames />
      </div>
    `,
});

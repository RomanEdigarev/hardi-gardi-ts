import About from "./About.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Product/lib";

export default {
  title: "pages/Product/ui/About",
  component: {
    About,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const about = () => ({
  components: {
    About,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:381px; height: auto; background-color: white;">
        <About/>
      </div>
    `,
});

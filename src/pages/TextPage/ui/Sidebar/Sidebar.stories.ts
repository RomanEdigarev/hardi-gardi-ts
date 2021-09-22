import Sidebar from "./Sidebar.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "pages/Text Page/ui/Sidebar",
  component: {
    Sidebar,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const sidebar = () => ({
  components: {
    Sidebar,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:276px; height: auto; background-color: white;">
        <Sidebar/>
      </div>
    `,
});

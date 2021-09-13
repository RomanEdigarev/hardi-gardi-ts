import Info from "./Info.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Product/lib";

export default {
  title: "pages/Contacts/ui/Info",
  component: {
    Info,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const info = () => ({
  components: {
    Info,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:438px; height: auto; background-color: white;">
        <Info/>
      </div>
    `,
});

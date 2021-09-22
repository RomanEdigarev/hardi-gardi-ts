import ImageProductCard from "./ImageProductCard.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "widgets/Product/ui/ImageProductCard",
  component: {
    ImageProductCard,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const prolog = () => ({
  components: {
    ImageProductCard,
  },
  setup() {
    const { product } = useProduct();
    return {
      ...product,
    };
  },
  template: `,
    <div style="width:100%; max-width: 1195px; height: 816px; background-color: transparent;">
      <ImageProductCard :img-path="img" :title="title"/>
    </div>
    `,
});

import CategoryCard from "./CategoryCard.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "pages/Home/ui/CategoryCard",
  component: {
    CategoryCard,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const categoryCard = () => ({
  components: {
    CategoryCard,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:378px; max-width: 1195px; height: 284px; background-color: transparent;">
        <CategoryCard title="Наша история" bg-color="#FADDEA" title-color="#F27F94">
          <template v-slot:svg-container>
            <svg width="206" height="108" viewBox="0 0 206 108" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M145.529 16.8342C125.175 55.8337 78.0813 52.7258 57.4279 16.4332C37.0738 -19.2578 -15.707 16.1324 4.54725 51.7232C49.6455 130.925 160.894 124.409 202.101 45.5073C221.258 9.11453 164.586 -19.5586 145.529 16.8342Z" fill="#F27F94"/>
            </svg>
          </template>
        </CategoryCard>
      </div>
    `,
});

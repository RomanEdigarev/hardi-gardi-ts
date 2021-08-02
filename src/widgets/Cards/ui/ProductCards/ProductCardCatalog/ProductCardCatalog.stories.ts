import ProductCardCatalog from "./ProductCardCatalog.vue";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "widgets/Cards/ProductCards/Catalog",
  component: {
    ProductCardCatalog,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const Catalog = () => ({
  components: {
    ProductCardCatalog,
  },
  props: {
    isSearchResult: {
      default: boolean("isSearchResult", false),
    },
  },
  template: `
    <div style="width: 276px; height: 472px; background: transparent">
      <ProductCardCatalog v-bind="$props"/>
    </div>
    `,
});

export const SearchResult = () => ({
  components: {
    ProductCardCatalog,
  },
  props: {
    isSearchResult: {
      default: boolean("isSearchResult", true),
    },
  },
  template: `
    <div style="width: 388px; height: 132px; background: transparent">
      <ProductCardCatalog v-bind="$props"/>
    </div>
    `,
});

export const Cart = () => ({
  components: {
    ProductCardCatalog,
  },
  props: {
    isSearchResult: {
      default: boolean("isSearchResult", true),
    },
    isCart: {
      default: boolean("isCart", true),
    },
  },
  template: `
    <div style="width: 786px; height: 197px; background: transparent">
      <ProductCardCatalog v-bind="$props"/>
    </div>
    `,
});

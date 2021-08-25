import CatalogFilter from "./CatalogFilter.vue";

export default {
  title: "pages/catalog/ui/CatalogFilter",
  component: CatalogFilter,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const catalogFilter = (args) => ({
  components: {
    CatalogFilter,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 236px; height: 1133px; background-color: white;">
     <CatalogFilter />
    </div>
  `,
  methods: {},
});

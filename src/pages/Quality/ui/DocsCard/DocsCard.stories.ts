import DocsCard from "./DocsCard.vue";

export default {
  title: "pages/Quality/ui/DocsCard",
  component: DocsCard,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const docsCard = (args) => ({
  components: {
    DocsCard,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white;">
     <DocsCard/>
    </div>
  `,
  methods: {},
});

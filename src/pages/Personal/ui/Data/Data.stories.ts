import Data from "./Data.vue";

export default {
  title: "pages/Personal/ui/Data",
  component: Data,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const data = (args) => ({
  components: {
    Data,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white;">
     <Data/>
    </div>
  `,
  methods: {},
});

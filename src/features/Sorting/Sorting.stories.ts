import Sorting from "./Sorting.vue";

export default {
  title: "features/Sorting",
  component: Sorting,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const sorting = (args) => ({
  components: {
    Sorting,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white;">
     <Sorting />
    </div>
  `,
  methods: {},
});

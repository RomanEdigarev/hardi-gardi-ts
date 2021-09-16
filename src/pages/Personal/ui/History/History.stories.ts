import History from "./History.vue";

export default {
  title: "pages/Personal/ui/History",
  component: History,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const history = (args) => ({
  components: {
    History,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white;">
     <History/>
    </div>
  `,
  methods: {},
});

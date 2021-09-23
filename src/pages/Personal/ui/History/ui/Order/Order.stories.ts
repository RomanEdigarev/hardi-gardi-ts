import Order from "./Order.vue";

export default {
  title: "pages/Personal/ui/History/Order",
  component: Order,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const order = (args) => ({
  components: {
    Order,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white;">
     <Order/>
    </div>
  `,
  methods: {},
});

export const orderMobile = (args) => ({
  components: {
    Order,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white;">
     <Order/>
    </div>
  `,
  methods: {},
});

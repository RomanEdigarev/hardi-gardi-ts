import Subscription from "./Subscription.vue";

export default {
  title: "Footer/Subscription",
  component: Subscription,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const subscription = (args) => ({
  components: {
    Subscription,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="margin: 0 auto; width: 1193px; background-color:transparent;">
     <Subscription />
    </div>
  `,
});

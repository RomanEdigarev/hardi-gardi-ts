import Subscription from "./Subscription.vue";
import { Social } from "@/entities/Shop/Social/model";

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
    const social: Social = [
      {
        name: "VK",
        url: "https://vk.com/",
      },
      {
        name: "FB",
        url: "https://facebook.com",
      },
    ];
    return { args, social };
  },
  template: `
    <div style="margin: 0 auto; width:100%; background-color:transparent;">
     <Subscription :social="social"/>
    </div>
  `,
});

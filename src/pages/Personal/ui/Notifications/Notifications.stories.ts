import Notifications from "./Notifications.vue";

export default {
  title: "pages/Personal/ui/Notifications",
  component: Notifications,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const notifications = (args) => ({
  components: {
    Notifications,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white;">
     <Notifications/>
    </div>
  `,
  methods: {},
});

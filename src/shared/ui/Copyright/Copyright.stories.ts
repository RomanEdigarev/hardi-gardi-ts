import Copyright from "./Copyright.vue";

export default {
  title: "Footer/Copyright",
  component: Copyright,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const copyright = () => ({
  components: {
    Copyright,
  },
  template: `
    <div style="margin: 0 auto; width: 100%; max-width: 1193px; background-color:gray;">
     <Copyright />
    </div>
  `,
});

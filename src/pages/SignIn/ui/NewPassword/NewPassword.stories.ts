import NewPassword from "./NewPassword.vue";

export default {
  title: "pages/Sign In/ui/NewPassword",
  component: NewPassword,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const newPassword = (args) => ({
  components: {
    NewPassword,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white; width: 578px">
     <NewPassword/>
    </div>
  `,
  methods: {},
});

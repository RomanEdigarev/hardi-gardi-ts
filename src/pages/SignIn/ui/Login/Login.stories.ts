import Login from "./Login.vue";

export default {
  title: "pages/Sign In/ui/Login",
  component: Login,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const login = (args) => ({
  components: {
    Login,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white; width: 578px">
     <Login/>
    </div>
  `,
  methods: {},
});

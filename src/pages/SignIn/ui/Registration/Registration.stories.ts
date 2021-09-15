import Registration from "./Registration.vue";

export default {
  title: "pages/Sign In/ui/Registration",
  component: Registration,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const registration = (args) => ({
  components: {
    Registration,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white; width: 578px">
     <Registration/>
    </div>
  `,
  methods: {},
});

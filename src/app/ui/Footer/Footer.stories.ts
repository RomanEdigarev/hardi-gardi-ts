import Footer from "./Footer.vue";

export default {
  title: "Footer",
  component: Footer,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Template = (args) => ({
  components: {
    Footer,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="margin: 0 auto; width: 100%; max-width: 1193px">
     <Footer />
    </div>
  `,
});

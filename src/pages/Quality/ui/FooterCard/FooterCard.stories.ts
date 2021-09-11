import FooterCard from "./FooterCard.vue";

export default {
  title: "pages/Quality/ui/FooterCard",
  component: FooterCard,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const footerCard = (args) => ({
  components: {
    FooterCard,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white; width: 1194px">
     <FooterCard/>
    </div>
  `,
  methods: {},
});
